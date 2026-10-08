import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/svgs";
import { COMPANY_NAME, SITE_EMAIL, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy" },
};

const UPDATED = "8 October 2026";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Who we are",
    body: (
      <p>
        {SITE_NAME} is a trading name of {COMPANY_NAME} (&ldquo;we&rdquo;,
        &ldquo;us&rdquo;), which designs and builds apps, brands and videos.
        We are responsible for the personal information described here and
        handle it in line with the Australian Privacy Principles in the
        Privacy Act 1988 (Cth), and, for visitors in the UK or EU, the UK and
        EU GDPR. You can contact us about privacy at{" "}
        <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a>.
      </p>
    ),
  },
  {
    title: "What we collect",
    body: (
      <>
        <p>
          <strong>When you send an enquiry:</strong> your name, email address,
          company or website (if given), the package, tier and timeline you
          choose, and the requirements you write.
        </p>
        <p>
          <strong>When you browse the site:</strong> our hosting provider,
          Cloudflare, processes technical data such as your IP address and
          browser details to deliver the site and protect it from abuse. We
          also use your IP address briefly to limit repeated form
          submissions; it isn&apos;t stored with your enquiry.
        </p>
        <p>
          <strong>If you accept analytics cookies:</strong> Google Analytics
          collects information about how you use the site, such as pages
          viewed, time on the site, your device and approximate location. We
          don&apos;t use advertising cookies.
        </p>
      </>
    ),
  },
  {
    title: "How we use it",
    body: (
      <ul>
        <li>To reply to your enquiry and discuss, quote for and deliver your project.</li>
        <li>To understand how the site is used, so we can improve it (only with your consent).</li>
        <li>To keep the site secure and prevent spam.</li>
      </ul>
    ),
  },
  {
    title: "Our legal basis",
    body: (
      <p>
        We handle enquiries because you asked us to (steps before entering a
        contract) and because we have a legitimate interest in responding to
        potential clients. We use analytics cookies only with your consent,
        which you can withdraw at any time.
      </p>
    ),
  },
  {
    title: "Cookies",
    body: (
      <>
        <p>
          The site works without cookies. If you click Accept on the cookie
          banner, Google Analytics sets cookies whose names start with{" "}
          <code>_ga</code>, which last up to two years. If you click Reject,
          or later change your mind, they aren&apos;t set (or are removed).
        </p>
        <p>
          We remember your choice in your browser&apos;s local storage. You
          can change it at any time with the &ldquo;Cookie settings&rdquo;
          link in the footer of the home page.
        </p>
      </>
    ),
  },
  {
    title: "Who we share it with",
    body: (
      <>
        <p>We don&apos;t sell your information. We use these providers to run the site:</p>
        <ul>
          <li><strong>Google</strong>: email (enquiries are delivered to our Gmail inbox) and, with consent, Google Analytics.</li>
          <li><strong>Cloudflare</strong>: website hosting and security.</li>
          <li><strong>Calendly</strong>: if you book a call, Calendly handles the booking under its own privacy policy.</li>
        </ul>
        <p>
          These providers may store or process your information outside
          Australia, including in the United States, the UK, the European
          Union and other countries where they operate. We take reasonable
          steps to make sure they protect it, and for UK and EU visitors we
          rely on safeguards such as standard contractual clauses.
        </p>
      </>
    ),
  },
  {
    title: "How long we keep it",
    body: (
      <p>
        We keep enquiries for up to two years after our last contact, unless
        you become a client, in which case we keep project records for as
        long as needed for the work and our legal and accounting obligations.
        Google Analytics data is kept for up to 14 months.
      </p>
    ),
  },
  {
    title: "Your rights",
    body: (
      <>
        <p>
          You can ask to see, correct or delete your information, object to
          or restrict how we use it, or ask for a copy to take elsewhere.
          Email <a href={`mailto:${SITE_EMAIL}`}>{SITE_EMAIL}</a> and
          we&apos;ll respond within 30 days.
        </p>
        <p>
          If you&apos;re unhappy with how we&apos;ve handled your information,
          please tell us first so we can try to fix it. You can also complain
          to the Office of the Australian Information Commissioner at{" "}
          <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a>.
          If you&apos;re in the UK, you can contact the Information
          Commissioner&apos;s Office at{" "}
          <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>; in the
          EU, your local data protection authority.
        </p>
      </>
    ),
  },
  {
    title: "Changes",
    body: (
      <p>
        We may update this policy. The date at the top shows when it last
        changed.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-brand-light font-dm-sans">
      <header className="max-w-3xl mx-auto px-6 pt-10 flex items-center justify-between">
        <Link href="/" aria-label={`${SITE_NAME} home`}>
          <Logo />
        </Link>
        <Link href="/" className="text-sm text-text-gray-light hover:text-brand-lime transition-colors duration-200">
          ← Back to site
        </Link>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-20">
        <p className="type-eyebrow text-brand-lime font-ibm-plex-mono">Last updated {UPDATED}</p>
        <h1 className="mt-6 font-bold type-h2">Privacy policy</h1>
        <p className="mt-6 text-[17px] leading-[1.6] text-text-gray-light">
          This explains what information we collect when you use this site or
          contact us, why, and what you can do about it.
        </p>

        <div className="mt-14 space-y-12">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="font-bold type-h3">{s.title}</h2>
              <div className="mt-4 space-y-4 text-[16px] leading-[1.65] text-text-gray-light [&_a]:text-brand-light [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-brand-lime [&_strong]:text-brand-light [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_code]:font-ibm-plex-mono [&_code]:text-[14px]">
                {s.body}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
