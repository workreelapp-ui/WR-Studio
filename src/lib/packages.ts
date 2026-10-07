// Packages and enquiry options shared by the Pricing section, the Contact form
// and the /api/enquiry route, so prices and choices live in one place.

export const CALENDLY_URL = "https://calendly.com/bis-shinwari";

// Pricing dispatches this; Contact listens and pre-selects the package.
export const SELECT_PACKAGE_EVENT = "wr:select-package";
export type SelectPackageDetail = { service: string; tier: TierName };

export type TierName = "Basic" | "Standard" | "Premium";
export const TIERS: TierName[] = ["Basic", "Standard", "Premium"];

export const categories = [
  {
    num: "01",
    title: "App Development",
    more: "More pages and screens",
    packages: [
      { name: "MVP Web App", prices: [499, 1199, 2499] },
      { name: "Mobile App (iOS + Android)", prices: [799, 1799, 3499] },
      { name: "Landing Page", prices: [149, 299, 549] },
    ],
  },
  {
    num: "02",
    title: "Graphic Design",
    more: "More designs",
    packages: [
      { name: "Logo + Brand Kit", prices: [49, 129, 249] },
      { name: "Social Media Creatives", prices: [29, 79, 149] },
    ],
  },
  {
    num: "03",
    title: "Video Editing",
    more: "More videos",
    packages: [
      { name: "Reels / TikToks / Shorts", prices: [19, 59, 129] },
      { name: "YouTube Edit", prices: [39, 89, 179] },
    ],
  },
];

export const OTHER_SERVICE = "Something else";
export const TIMELINES = ["As soon as possible", "Within a month", "1–3 months", "Flexible"];

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export function findPackage(service: string) {
  for (const c of categories) {
    const p = c.packages.find((x) => x.name === service);
    if (p) return { category: c.title, ...p };
  }
  return null;
}

export function priceFor(service: string, tier: string): number | null {
  const p = findPackage(service);
  const i = TIERS.indexOf(tier as TierName);
  return p && i >= 0 ? p.prices[i] : null;
}
