"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { scroller } from "react-scroll";
import { FiArrowDownRight, FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utild";
import {
  CALENDLY_URL,
  SELECT_PACKAGE_EVENT,
  TIERS,
  categories,
  usd,
  type SelectPackageDetail,
  type TierName,
} from "@/lib/packages";

const tierFeatures = (tier: TierName, more: string) =>
  ({
    Basic: ["Core deliverable", "1 revision"],
    Standard: [more, "3 revisions", "Faster delivery"],
    Premium: ["Full scope", "Unlimited revisions", "Priority delivery"],
  })[tier];

function choose(service: string, tier: TierName) {
  window.dispatchEvent(
    new CustomEvent<SelectPackageDetail>(SELECT_PACKAGE_EVENT, { detail: { service, tier } }),
  );
  scroller.scrollTo("contact", { smooth: true, duration: 500 });
}

export default function Pricing() {
  const [active, setActive] = useState(0);
  const cat = categories[active];

  return (
    <section className="bg-brand-dark py-24 md:py-32 border-b border-white/10">
      <div className="max-w-375 mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ amount: 0.3 }}
              className="text-[10px] tracking-widest uppercase text-brand-lime block mb-12 font-ibm-plex-mono"
            >
              PACKAGES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.3 }}
              className="font-bold text-4xl md:text-6xl lg:text-[90px] lg:tracking-[-4px] leading-[100%] text-brand-light font-dm-sans max-w-160"
            >
              Clear scope.{" "}
              <span className="font-georgia italic font-normal text-brand-lime">
                Fixed
              </span>{" "}
              prices.
            </motion.h2>
          </div>
          <p className="text-[17px] font-normal text-text-gray-light max-w-md font-dm-sans lg:justify-self-end">
            Pick a package and a tier, and we&apos;ll confirm the details with
            you before any work starts. Need something bigger or custom? Tell
            us below.
          </p>
        </div>

        {/* Category tabs */}
        <div className="mt-16 flex flex-wrap gap-3" role="tablist" aria-label="Service categories">
          {categories.map((c, i) => (
            <button
              key={c.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-2.5 rounded-full border text-sm font-medium font-dm-sans transition-all duration-300 flex items-center gap-3",
                active === i
                  ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_25px_rgba(214,255,67,0.25)]"
                  : "border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-brand-lime/30",
              )}
            >
              <span
                className={cn(
                  "text-[11px] font-ibm-plex-mono",
                  active === i ? "text-black/60" : "text-brand-lime",
                )}
              >
                {c.num}
              </span>
              {c.title}
            </button>
          ))}
        </div>

        {/* Tier header: what each tier includes (desktop) */}
        <div className="hidden md:grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 mt-14 pb-6 border-b border-white/10">
          <span className="text-[10px] tracking-widest uppercase text-text-gray-light font-ibm-plex-mono self-end">
            Package
          </span>
          {TIERS.map((tier) => (
            <div key={tier}>
              <p className="text-[22px] text-brand-light font-dm-sans">{tier}</p>
              <ul className="mt-3 space-y-1.5">
                {tierFeatures(tier, cat.more).map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-[13px] text-text-gray-light font-dm-sans"
                  >
                    <FiCheck className="text-brand-lime shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Package rows */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 md:mt-0"
          >
            {cat.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-4 md:gap-6 py-8 border-b border-white/10 md:items-center"
              >
                <h3 className="text-[26px] md:text-[31px] leading-[110%] text-brand-light font-dm-sans">
                  {pkg.name}
                </h3>

                {TIERS.map((tier, t) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => choose(pkg.name, tier)}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left transition-all duration-300 hover:border-brand-lime/40 hover:bg-white/5 hover:shadow-[0_0_25px_rgba(214,255,67,0.15)]"
                    aria-label={`Choose ${pkg.name}, ${tier}, ${usd(pkg.prices[t])}`}
                  >
                    <span>
                      <span className="block text-[10px] tracking-widest uppercase text-text-gray-light font-ibm-plex-mono md:hidden">
                        {tier}
                      </span>
                      <span className="block text-[28px] font-bold tracking-[-1px] text-brand-light font-dm-sans">
                        {usd(pkg.prices[t])}
                      </span>
                    </span>
                    <span className="flex items-center gap-2 text-xs font-medium text-text-gray-light group-hover:text-brand-lime transition-colors duration-300">
                      Choose
                      <FiArrowDownRight />
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tier details for small screens */}
        <div className="md:hidden mt-10 grid grid-cols-1 gap-6">
          {TIERS.map((tier) => (
            <div key={tier}>
              <p className="text-[18px] text-brand-light font-dm-sans">{tier}</p>
              <p className="mt-1 text-[13px] text-text-gray-light font-dm-sans">
                {tierFeatures(tier, cat.more).join(" · ")}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[10px] tracking-[0.08em] text-text-gray-light font-ibm-plex-mono">
            All prices in USD.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-brand-light hover:text-brand-lime transition-colors duration-300 font-dm-sans"
          >
            Not sure which fits? Book a free call
            <FiArrowDownRight className="-rotate-90 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
