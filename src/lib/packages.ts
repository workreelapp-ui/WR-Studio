// Packages and enquiry options shared by the Pricing section, the Contact form
// and the /api/enquiry route, so prices and choices live in one place.

export const CALENDLY_URL = "https://calendly.com/bis-shinwari";

// Pricing dispatches this; Contact listens and pre-selects the package.
export const SELECT_PACKAGE_EVENT = "wr:select-package";
export type SelectPackageDetail = { service: string; tier?: TierName };

export type TierName = "Basic" | "Standard" | "Premium";
export const TIERS: TierName[] = ["Basic", "Standard", "Premium"];

// `includes` lists what each tier delivers (Basic, Standard, Premium), so the
// Pricing section can show buyers exactly what they get for each price.
export const categories = [
  {
    num: "01",
    title: "App Development",
    packages: [
      {
        name: "MVP Web App",
        prices: [499, 1199, 2499],
        includes: [
          ["Up to 3 screens", "Email sign-in", "Hosting set up", "1 revision", "10-day delivery"],
          ["Up to 8 screens", "User accounts + database", "Simple admin panel", "3 revisions", "3-week delivery"],
          ["Up to 15 screens", "Online payments", "Admin panel + analytics", "Unlimited revisions", "30 days of support", "5-week delivery"],
        ],
      },
      {
        name: "Mobile App (iOS + Android)",
        prices: [799, 1799, 3499],
        includes: [
          ["Up to 5 screens", "One app for iOS + Android", "Sign-in", "1 revision", "3-week delivery"],
          ["Up to 10 screens", "Backend + push notifications", "App Store + Google Play submission", "3 revisions", "5-week delivery"],
          ["Up to 20 screens", "Payments / in-app purchases", "Admin panel", "Unlimited revisions", "30 days of support", "8-week delivery"],
        ],
      },
      {
        name: "Landing Page",
        prices: [149, 299, 549],
        includes: [
          ["1-page design + build", "Mobile friendly", "Contact form", "1 revision", "3-day delivery"],
          ["Up to 3 pages", "SEO basics + analytics", "Contact form", "3 revisions", "5-day delivery"],
          ["Up to 6 pages", "Copywriting included", "SEO basics + analytics", "Unlimited revisions", "7-day delivery"],
        ],
      },
    ],
  },
  {
    num: "02",
    title: "Graphic Design",
    packages: [
      {
        name: "Logo + Brand Kit",
        prices: [49, 129, 249],
        includes: [
          ["2 logo concepts", "PNG + SVG files", "1 revision", "3-day delivery"],
          ["4 logo concepts", "Colours + fonts", "Social profile kit", "3 revisions", "5-day delivery"],
          ["6 logo concepts", "Brand guide", "Business card + letterhead", "Unlimited revisions", "7-day delivery"],
        ],
      },
      {
        name: "Social Media Creatives",
        prices: [29, 79, 149],
        includes: [
          ["3 post designs", "1 platform size", "1 revision", "2-day delivery"],
          ["10 post designs", "Post + story sizes", "3 revisions", "4-day delivery"],
          ["20 post designs", "All sizes + editable files", "Unlimited revisions", "6-day delivery"],
        ],
      },
    ],
  },
  {
    num: "03",
    title: "Video Editing",
    packages: [
      {
        name: "Reels / TikToks / Shorts",
        prices: [19, 59, 129],
        includes: [
          ["1 video, up to 30s", "Captions + music", "1 revision", "2-day delivery"],
          ["4 videos, up to 60s", "Captions, music + transitions", "3 revisions", "3-day delivery"],
          ["10 videos, up to 60s", "Motion graphics + hooks", "Unlimited revisions", "5-day delivery"],
        ],
      },
      {
        name: "YouTube Edit",
        prices: [39, 89, 179],
        includes: [
          ["Up to 10 min", "Cuts, music + captions", "1 revision", "3-day delivery"],
          ["Up to 20 min", "B-roll + graphics", "Thumbnail", "3 revisions", "4-day delivery"],
          ["Up to 40 min", "Motion graphics + colour grade", "Thumbnail + a Short cut-down", "Unlimited revisions", "5-day delivery"],
        ],
      },
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
