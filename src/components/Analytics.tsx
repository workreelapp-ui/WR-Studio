"use client";

import { useEffect, useSyncExternalStore } from "react";
import Script from "next/script";
import { GA_ID } from "@/lib/analytics";
import { CONSENT_EVENT, getConsent, type Consent } from "@/lib/consent";

// Google Analytics (gtag.js) with Consent Mode v2. Nothing loads until the
// visitor accepts cookies, and it only runs in production so local visits
// don't show up in the stats.
export default function Analytics() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => null);

  useEffect(() => {
    const onChange = (e: Event) => updateConsent((e as CustomEvent<Consent>).detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  if (process.env.NODE_ENV !== "production" || consent !== "granted") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'granted'
});
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

type Gtag = (command: "consent", action: "update", params: Record<string, string>) => void;

// Tells an already-loaded gtag about a change, e.g. accepted then rejected.
function updateConsent(value: Consent) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("consent", "update", { analytics_storage: value });
  if (value === "denied") clearGaCookies();
}

function clearGaCookies() {
  const host = location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (!name.startsWith("_ga")) continue;
    for (const d of domains) {
      document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}
