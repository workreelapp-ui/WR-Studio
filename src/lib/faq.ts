import { findPackage, usd } from "@/lib/packages";

// Questions people (and AI assistants) ask before hiring a studio. Shown in
// the FAQ section and as FAQPage structured data. Prices come from
// packages.ts so they can't drift.

const from = (name: string) => usd(Math.min(...(findPackage(name)?.prices ?? [0])));

export const faqs: { q: string; a: string }[] = [
  {
    q: "What does WR Studio do?",
    a: "WR Studio designs and builds web apps, mobile apps for iOS and Android, and landing pages. We also design logos, brand kits and social media creatives, and edit videos for Reels, TikTok, YouTube Shorts and YouTube. Everything is sold as fixed-price packages.",
  },
  {
    q: "How much does it cost to build an app or website?",
    a: `A landing page starts at ${from("Landing Page")}, an MVP web app at ${from("MVP Web App")} and a mobile app for iOS and Android at ${from("Mobile App (iOS + Android)")}. Each package has Basic, Standard and Premium tiers, and the price is fixed once we've confirmed the scope with you. All prices are in US dollars.`,
  },
  {
    q: "How much do logo design and video editing cost?",
    a: `A logo and brand kit starts at ${from("Logo + Brand Kit")}, social media creatives at ${from("Social Media Creatives")}, short-form videos (Reels, TikToks, Shorts) at ${from("Reels / TikToks / Shorts")} and a YouTube edit at ${from("YouTube Edit")}.`,
  },
  {
    q: "How long does a project take?",
    a: "Every package has a delivery time. Video edits take 2 to 5 days, logos and social creatives 2 to 7 days, landing pages 3 to 7 days, web apps 10 days to 5 weeks and mobile apps 3 to 8 weeks, depending on the tier.",
  },
  {
    q: "How many revisions do I get?",
    a: "Basic packages include 1 revision, Standard packages include 3 and Premium packages include unlimited revisions.",
  },
  {
    q: "What if I need something that isn't in a package?",
    a: "Send us your requirements through the form or book a free call. We'll reply with a scope, a fixed price and a delivery date before any work starts.",
  },
  {
    q: "How do I get started?",
    a: "Pick a package, or tell us what you need. We reply within 1 to 2 working days to confirm the scope, price and delivery date in writing. Then we design, build or edit, share progress, make your revisions and deliver the finished work.",
  },
  {
    q: "Who is behind WR Studio?",
    a: "WR Studio is a trading name of WorkReel Australia Pty Ltd. We work remotely with clients, and past projects include HostyAI, WorkReel, Snareobics, Siguto, Brandscript and Dr Trilby's Escape Rooms.",
  },
];
