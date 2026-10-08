// Cookie consent, stored per browser. Analytics only loads once the visitor
// has chosen "granted". Components listen for CONSENT_EVENT to react to a
// change, and OPEN_SETTINGS_EVENT reopens the banner (footer link).

export type Consent = "granted" | "denied";

const KEY = "wr-cookie-consent";
export const CONSENT_EVENT = "wr:consent";
export const OPEN_SETTINGS_EVENT = "wr:cookie-settings";

export function getConsent(): Consent | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent) {
  try {
    localStorage.setItem(KEY, value);
  } catch {
    // Storage blocked: the choice still applies for this visit.
  }
  window.dispatchEvent(new CustomEvent<Consent>(CONSENT_EVENT, { detail: value }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
