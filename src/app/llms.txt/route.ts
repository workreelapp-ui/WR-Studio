import { faqs } from "@/lib/faq";
import { CALENDLY_URL, TIERS, categories, usd } from "@/lib/packages";
import { reviews } from "@/lib/reviews";
import { COMPANY_NAME, SITE_DESCRIPTION, SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

// llms.txt: a plain Markdown summary of the studio for AI assistants and
// search engines (https://llmstxt.org). Built from the same data as the page.
export const dynamic = "force-static";

export function GET() {
  const packages = categories
    .map(
      (c) =>
        `### ${c.title}\n\n` +
        c.packages
          .map(
            (p) =>
              `- **${p.name}**\n` +
              TIERS.map((t, i) => `  - ${t} ${usd(p.prices[i])}: ${p.includes[i].join(", ")}`).join("\n"),
          )
          .join("\n"),
    )
    .join("\n\n");

  const work = reviews
    .filter((r) => r.quote && r.project)
    .map((r) => `- ${r.project}: ${r.service}`)
    .join("\n");

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${SITE_NAME} is a trading name of ${COMPANY_NAME}. All prices are fixed once the scope is confirmed, and are in US dollars.

- Website: ${SITE_URL}
- Email: ${SITE_EMAIL}
- Book a free call: ${CALENDLY_URL}
- Start a project: ${SITE_URL}/#contact

## Packages

${packages}

## Selected clients and projects

${work}

## FAQ

${faqs.map((f) => `### ${f.q}\n\n${f.a}`).join("\n\n")}

## Pages

- [Home](${SITE_URL}/): services, packages, work, process and enquiry form
- [Privacy policy](${SITE_URL}/privacy)
`;

  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
