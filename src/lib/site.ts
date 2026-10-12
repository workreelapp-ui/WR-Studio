// Public site details used by metadata, the sitemap and structured data.
// NEXT_PUBLIC_SITE_URL can override the domain (no trailing slash).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio.workreel.com";
export const SITE_NAME = "WR Studio";
export const COMPANY_NAME = "WorkReel Australia Pty Ltd";
export const SITE_EMAIL = "hello@workreel.com";
export const SITE_TITLE = "WR Studio | Fixed-price apps, design and video editing";
export const SITE_DESCRIPTION =
  "Fixed-price packages for small businesses: web and mobile apps, landing pages, logos, social creatives and video edits. See what's included, the price and the delivery date up front.";

// Shared Open Graph fields. Next replaces, rather than merges, a parent's
// openGraph object, so each page spreads this and adds its own url and title.
export const OPEN_GRAPH = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_AU",
} as const;
