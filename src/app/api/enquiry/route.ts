import { sendMail } from "@/lib/sendMail";
import {
  OTHER_SERVICE,
  TIERS,
  TIMELINES,
  findPackage,
  priceFor,
  usd,
} from "@/lib/packages";

// Project enquiries from the Contact form, emailed to the studio inbox.
// Configure in .env.local (and in the host's environment settings):
//   SMTP_USER   the Gmail address that sends, e.g. workreelapp@gmail.com
//   SMTP_PASS   a Google "app password" for that account (not the normal password)
//   ENQUIRY_TO  optional; where enquiries go (defaults to SMTP_USER)
//   SMTP_HOST / SMTP_PORT  optional; default to Gmail (smtp.gmail.com:465)

const MAX = { name: 120, email: 200, company: 300, details: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort flood protection per server instance: 5 enquiries per IP per 10 minutes.
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < 10 * 60_000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

type Enquiry = {
  name: string; email: string; company: string; service: string; tier: string;
  timeline: string; details: string; price: number | null; category: string | null;
};

function renderEmail(e: Enquiry) {
  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#5f6671;font-size:13px;width:140px;vertical-align:top">${label}</td>
         <td style="padding:10px 0;border-bottom:1px solid #e5e7eb;color:#0b0d12;font-size:15px;vertical-align:top">${value}</td></tr>`
      : "";
  const link = (href: string, text: string) => `<a href="${esc(href)}" style="color:#3155ff;text-decoration:none">${esc(text)}</a>`;
  const companyHtml = /^https?:\/\//i.test(e.company) ? link(e.company, e.company) : esc(e.company);
  const pkg = e.service === OTHER_SERVICE ? "Something else (see details)" : e.service;

  const html = `<!doctype html><html><body style="margin:0;background:#f4f1ea;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;padding:32px 12px"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden">
  <tr><td style="background:#0b0d12;padding:28px 32px">
    <div style="font-family:Menlo,Consolas,monospace;font-size:11px;letter-spacing:2px;color:#d6ff43">NEW PROJECT ENQUIRY</div>
    <div style="margin-top:10px;font-size:26px;font-weight:700;color:#f4f1ea;line-height:1.2">${esc(e.name)}</div>
    <div style="margin-top:6px;font-size:15px;color:#9fa5af">${esc(pkg || "No package chosen")}${e.tier ? ` &middot; ${esc(e.tier)}` : ""}${e.price ? ` &middot; ${usd(e.price)}` : ""}</div>
  </td></tr>
  <tr><td style="padding:24px 32px 8px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${row("Name", esc(e.name))}
      ${row("Email", link(`mailto:${e.email}`, e.email))}
      ${row("Company / site", companyHtml)}
      ${row("Service", esc(pkg))}
      ${row("Category", esc(e.category || ""))}
      ${row("Tier", esc(e.tier))}
      ${row("Listed price", e.price ? usd(e.price) : "")}
      ${row("Timeline", esc(e.timeline))}
    </table>
  </td></tr>
  <tr><td style="padding:16px 32px 8px">
    <div style="font-family:Menlo,Consolas,monospace;font-size:11px;letter-spacing:2px;color:#5f6671">REQUIREMENTS</div>
    <div style="margin-top:10px;padding:16px 18px;background:#f4f1ea;border-radius:12px;color:#0b0d12;font-size:15px;line-height:1.6;white-space:pre-wrap">${esc(e.details)}</div>
  </td></tr>
  <tr><td style="padding:20px 32px 28px">
    <a href="mailto:${esc(e.email)}?subject=${encodeURIComponent(`Re: your ${pkg || "project"} enquiry`)}" style="display:inline-block;background:#d6ff43;color:#0b0d12;font-weight:600;font-size:14px;padding:12px 22px;border-radius:999px;text-decoration:none">Reply to ${esc(e.name.split(" ")[0])}</a>
    <div style="margin-top:14px;font-size:12px;color:#9fa5af">Sent from the WR Studio website. Replying to this email goes straight to ${esc(e.email)}.</div>
  </td></tr>
</table></td></tr></table></body></html>`;

  const fields: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Company / site", e.company],
    ["Service", pkg || "Not chosen"],
    ["Category", e.category || ""],
    ["Tier", e.tier],
    ["Listed price", e.price ? usd(e.price) : ""],
    ["Timeline", e.timeline],
  ];
  const text = [
    `New project enquiry from ${e.name}`,
    "",
    ...fields.filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`),
    "",
    "Requirements:",
    e.details,
  ].join("\n");

  return { html, text };
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill every field; people never see this one.
  if (clean(body.website, 200)) return Response.json({ ok: true });

  const service = clean(body.service, 100);
  const pkg = findPackage(service);
  const enquiry: Enquiry = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    company: clean(body.company, MAX.company),
    service: pkg || service === OTHER_SERVICE ? service : "",
    tier: TIERS.includes(clean(body.tier, 20) as (typeof TIERS)[number]) && pkg ? clean(body.tier, 20) : "",
    timeline: TIMELINES.includes(clean(body.timeline, 40)) ? clean(body.timeline, 40) : "",
    details: clean(body.details, MAX.details),
    price: null,
    category: pkg?.category ?? null,
  };
  enquiry.price = enquiry.tier ? priceFor(enquiry.service, enquiry.tier) : null;

  if (!enquiry.name) return Response.json({ error: "Please add your name." }, { status: 400 });
  if (!EMAIL_RE.test(enquiry.email)) return Response.json({ error: "Please add a valid email address." }, { status: 400 });
  if (enquiry.details.length < 10) return Response.json({ error: "Please tell us a little more about the project." }, { status: 400 });

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (tooMany(ip)) return Response.json({ error: "Too many enquiries. Please try again in a few minutes." }, { status: 429 });

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error("Enquiry email not configured: set SMTP_USER and SMTP_PASS");
    return Response.json({ error: "Enquiries are temporarily unavailable. Please email us directly." }, { status: 500 });
  }

  const { html, text } = renderEmail(enquiry);
  const label = enquiry.service && enquiry.service !== OTHER_SERVICE
    ? `${enquiry.service}${enquiry.tier ? ` (${enquiry.tier})` : ""}`
    : "Project enquiry";
  try {
    await sendMail({
      fromName: "WR Studio website",
      to: process.env.ENQUIRY_TO || process.env.SMTP_USER,
      replyTo: { name: enquiry.name, address: enquiry.email },
      subject: `New enquiry: ${label} from ${enquiry.name}`,
      text,
      html,
    });
  } catch (err) {
    console.error("Enquiry email failed:", err);
    return Response.json({ error: "We couldn't send your enquiry. Please try again or email us directly." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
