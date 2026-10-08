"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDownRight, FiCheck } from "react-icons/fi";
import { cn } from "@/lib/utild";
import { choosePackage } from "@/lib/choosePackage";
import { CALENDLY_URL, TIERS, categories, usd } from "@/lib/packages";

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
              className="type-eyebrow text-brand-lime block mb-12 font-ibm-plex-mono"
            >
              PACKAGES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ amount: 0.3 }}
              className="font-bold text-brand-light font-dm-sans max-w-160 type-h2"
            >
              Clear scope.{" "}
              <span className="font-georgia italic font-normal text-brand-lime">
                Fixed
              </span>{" "}
              prices.
            </motion.h2>
          </div>
          <p className="text-[17px] font-normal text-text-gray-light max-w-md font-dm-sans lg:justify-self-end">
            Every package lists exactly what you get and when you get it. Pick
            one, and we&apos;ll confirm the details in writing before any work
            starts. Need something custom? Tell us below.
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

        {/* Packages: one row per package, one card per tier */}
        <AnimatePresence mode="wait">
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            {cat.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-6 lg:gap-10 py-10 border-t border-white/10"
              >
                <h3 className="text-brand-light font-dm-sans type-h3">
                  {pkg.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {TIERS.map((tier, t) => {
                    const featured = tier === "Standard";
                    return (
                      <div
                        key={tier}
                        className={cn(
                          "flex flex-col rounded-2xl border p-6 transition-all duration-300",
                          featured
                            ? "border-brand-lime/40 bg-white/[0.05]"
                            : "border-white/10 bg-white/[0.03] hover:border-white/20",
                        )}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-[11px] tracking-widest uppercase text-text-gray-light font-ibm-plex-mono">
                            {tier}
                          </span>
                          {featured && (
                            <span className="text-[10px] tracking-widest uppercase text-brand-lime font-ibm-plex-mono">
                              Recommended
                            </span>
                          )}
                        </div>
                        <p className="mt-3 text-[36px] font-bold tracking-[-1px] text-brand-light font-dm-sans leading-none">
                          {usd(pkg.prices[t])}
                        </p>
                        <ul className="mt-6 space-y-2 flex-1">
                          {pkg.includes[t].map((f) => (
                            <li
                              key={f}
                              className="flex items-start gap-2 text-[14px] text-text-gray-light font-dm-sans"
                            >
                              <FiCheck className="text-brand-lime shrink-0 mt-1" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          onClick={() => choosePackage(pkg.name, tier)}
                          aria-label={`Choose ${pkg.name}, ${tier}, ${usd(pkg.prices[t])}`}
                          className={cn(
                            "mt-6 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium font-dm-sans transition-all duration-300",
                            featured
                              ? "bg-brand-lime text-black hover:shadow-[0_0_25px_rgba(214,255,67,0.35)]"
                              : "border border-white/15 text-brand-light hover:border-brand-lime hover:text-brand-lime",
                          )}
                        >
                          Choose {tier}
                          <FiArrowDownRight />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[12px] tracking-[0.04em] text-text-gray-light font-ibm-plex-mono">
            All prices in USD, fixed once scope is confirmed.
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
