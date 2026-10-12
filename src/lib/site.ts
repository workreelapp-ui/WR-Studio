// Public site details used by metadata, the sitemap and structured data.
// NEXT_PUBLIC_SITE_URL can override the domain (no trailing slash).
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://studio.workreel.com";
export const SITE_NAME = "WR Studio";
export const COMPANY_NAME = "WorkReel Australia Pty Ltd";
export const SITE_EMAIL = "hello@workreel.com";
// Uses the terms people search for ("app development", "website", "logo
// design", "video editing"), all of which match packages on the page.
export const SITE_TITLE = "WR Studio | Fixed-price app & website development, design, video";
export const SITE_DESCRIPTION =
  "Fixed-price web and mobile app development, landing pages, logo and brand design, social creatives and video editing for small businesses. See the scope, price and delivery date up front.";

// Shared Open Graph fields. Next replaces, rather than merges, a parent's
// openGraph object, so each page spreads this and adds its own url and title.
export const OPEN_GRAPH = {
  type: "website",
  siteName: SITE_NAME,
  locale: "en_AU",
} as const;
