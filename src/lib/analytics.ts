export const GA_ID = "G-L05VPC98B2";

type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

// Sends a GA event if gtag has loaded; a no-op in dev or when blocked.
export function trackEvent(name: string, params?: Record<string, unknown>) {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("event", name, params);
}
