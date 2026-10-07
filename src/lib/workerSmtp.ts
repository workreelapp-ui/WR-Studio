// Minimal SMTP client for Cloudflare Workers (TCP sockets), used by sendMail.ts.
// Supports implicit TLS (port 465) or STARTTLS (587), AUTH PLAIN/LOGIN, and one
// multipart/alternative (text + HTML) message per connection.

type Socket = {
  readable: ReadableStream<Uint8Array>;
  writable: WritableStream<Uint8Array>;
  opened: Promise<unknown>;
  startTls(): Socket;
  close(): Promise<void>;
};
type Connect = (
  address: { hostname: string; port: number },
  options?: { secureTransport?: "off" | "on" | "starttls" },
) => Socket;

async function loadConnect(): Promise<Connect> {
  // Left unbundled on purpose: only the Workers runtime provides this module.
  // The try/catch lets the build tools leave the import for Wrangler to resolve.
  try {
    const mod = await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ "cloudflare:sockets" as string);
    return mod.connect as Connect;
  } catch (e) {
    throw new Error(`cloudflare:sockets is unavailable: ${(e as Error).message}`);
  }
}

export type SmtpMessage = {
  host: string;
  port: number;
  user: string;
  pass: string;
  from: { name: string; email: string };
  to: string;
  replyTo: { name: string; email: string };
  subject: string;
  text: string;
  html: string;
};

const enc = new TextEncoder();
const b64 = (s: string) => {
  const bytes = enc.encode(s);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
};
// RFC 2047 encoded-word for any header text that isn't plain ASCII
const word = (s: string) => (/^[\x20-\x7e]*$/.test(s) ? s : `=?UTF-8?B?${b64(s)}?=`);
const addr = (name: string, email: string) => `"${word(name.replace(/["\\\r\n]/g, ""))}" <${email}>`;
const wrap76 = (s: string) => s.replace(/.{76}/g, "$&\r\n");
const clean = (s: string) => s.replace(/[\r\n]+/g, " ");

function buildMessage(m: SmtpMessage) {
  const boundary = `wr_${crypto.randomUUID().replace(/-/g, "")}`;
  const domain = m.from.email.split("@")[1] || "localhost";
  const headers = [
    `From: ${addr(m.from.name, m.from.email)}`,
    `To: <${m.to}>`,
    `Reply-To: ${addr(m.replyTo.name, m.replyTo.email)}`,
    `Subject: ${word(clean(m.subject))}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@${domain}>`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
  ];
  const part = (type: string, body: string) =>
    [`--${boundary}`, `Content-Type: ${type}; charset=UTF-8`, "Content-Transfer-Encoding: base64", "", wrap76(b64(body))].join("\r\n");
  // base64 bodies never contain a line starting with ".", so no dot-stuffing is needed
  return [...headers, "", part("text/plain", m.text), part("text/html", m.html), `--${boundary}--`, ""].join("\r\n");
}

class Conn {
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private writer: WritableStreamDefaultWriter<Uint8Array>;
  private buf = "";
  private dec = new TextDecoder();
  constructor(public socket: Socket) {
    this.reader = socket.readable.getReader();
    this.writer = socket.writable.getWriter();
  }
  release() {
    this.reader.releaseLock();
    this.writer.releaseLock();
  }
  // Reads one (possibly multi-line) reply and checks its status code.
  async expect(code: number, what: string): Promise<string> {
    const deadline = Date.now() + 30_000;
    while (true) {
      const lines = this.buf.split("\r\n");
      const last = lines.findIndex((l) => /^\d{3} /.test(l));
      if (last >= 0) {
        const reply = lines.slice(0, last + 1).join("\n");
        this.buf = lines.slice(last + 1).join("\r\n");
        if (!reply.startsWith(String(code))) throw new Error(`SMTP ${what} failed: ${reply.slice(0, 200)}`);
        return reply;
      }
      if (Date.now() > deadline) throw new Error(`SMTP ${what} timed out`);
      const { value, done } = await this.reader.read();
      if (done) throw new Error(`SMTP connection closed during ${what}`);
      this.buf += this.dec.decode(value, { stream: true });
    }
  }
  async send(line: string) {
    await this.writer.write(enc.encode(line + "\r\n"));
  }
  async cmd(line: string, code: number, what: string) {
    await this.send(line);
    return this.expect(code, what);
  }
}

export async function sendViaWorkerSockets(m: SmtpMessage) {
  const connect = await loadConnect();
  const implicitTls = m.port === 465;
  let socket = connect({ hostname: m.host, port: m.port }, { secureTransport: implicitTls ? "on" : "starttls" });
  let c = new Conn(socket);
  let step = "connect";
  try {
    await socket.opened;
    step = "greeting";
    await c.expect(220, "greeting");
    step = "EHLO";
    let ehlo = await c.cmd("EHLO wr-studio", 250, "EHLO");
    if (!implicitTls) {
      if (!/STARTTLS/i.test(ehlo)) throw new Error("Server does not offer STARTTLS");
      step = "STARTTLS";
      await c.cmd("STARTTLS", 220, "STARTTLS");
      c.release();
      socket = socket.startTls();
      c = new Conn(socket);
      ehlo = await c.cmd("EHLO wr-studio", 250, "EHLO");
    }
    step = "login";
    if (/AUTH[ =][^\n]*PLAIN/i.test(ehlo)) {
      await c.cmd(`AUTH PLAIN ${b64(`\0${m.user}\0${m.pass}`)}`, 235, "login");
    } else {
      await c.cmd("AUTH LOGIN", 334, "login");
      await c.cmd(b64(m.user), 334, "login");
      await c.cmd(b64(m.pass), 235, "login");
    }
    step = "envelope";
    await c.cmd(`MAIL FROM:<${m.from.email}>`, 250, "MAIL FROM");
    await c.cmd(`RCPT TO:<${m.to}>`, 250, "RCPT TO");
    step = "message";
    await c.cmd("DATA", 354, "DATA");
    await c.send(buildMessage(m) + "\r\n.");
    await c.expect(250, "message delivery");
    await c.send("QUIT").catch(() => {});
  } catch (e) {
    throw new Error(`SMTP failed at ${step}: ${(e as Error).message}`);
  } finally {
    await socket.close().catch(() => {});
  }
}
