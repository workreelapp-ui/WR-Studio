// Sends one email over SMTP from wherever the site is running.
// On Cloudflare Workers nodemailer can't open SMTP connections, so the deployed
// site uses the small socket-based client in workerSmtp.ts. Under `next dev` on
// Node that runtime module doesn't exist, so nodemailer is used instead.

export type Mail = {
  fromName: string;
  to: string;
  replyTo: { name: string; address: string };
  subject: string;
  text: string;
  html: string;
};

const onWorkers = () =>
  typeof navigator !== "undefined" && navigator.userAgent === "Cloudflare-Workers";

export async function sendMail(mail: Mail) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) throw new Error("SMTP_USER and SMTP_PASS are not set");
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT) || 465;

  if (onWorkers()) {
    const { sendViaWorkerSockets } = await import("./workerSmtp");
    await sendViaWorkerSockets({
      host,
      port,
      user,
      pass,
      from: { name: mail.fromName, email: user },
      to: mail.to,
      replyTo: { name: mail.replyTo.name, email: mail.replyTo.address },
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    return;
  }

  const nodemailer = (await import("nodemailer")).default;
  await nodemailer
    .createTransport({ host, port, secure: port === 465, auth: { user, pass } })
    .sendMail({
      from: { name: mail.fromName, address: user },
      to: mail.to,
      replyTo: mail.replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
}
