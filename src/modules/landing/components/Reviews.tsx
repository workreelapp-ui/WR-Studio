"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/reviews";

// Placeholders for missing quotes are only shown in local dev.
const SHOW_PENDING = process.env.NODE_ENV !== "production";

export default function Reviews() {
  const visible = reviews.filter((r) => r.quote || SHOW_PENDING);
  if (visible.length === 0) return null;

  return (
    <section className="bg-white text-brand-dark py-24 md:py-32 border-t border-border-light">
      <div className="max-w-375 mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center pb-4 border-b border-border-light mb-16 font-ibm-plex-mono">
          <span className="type-eyebrow text-gray-500">
            Client reviews
          </span>
          <span className="type-eyebrow text-gray-500">
            {String(visible.length).padStart(2, "0")} clients
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.3 }}
          className="font-bold max-w-5xl font-dm-sans type-h2"
        >
          Don&apos;t take{" "}
          <span className="font-georgia italic font-normal">our word</span> for
          it.
        </motion.h2>

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3 gap-6">
          {visible.map((r, i) => (
            <motion.figure
              key={`${r.name}-${r.project}-${r.service}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.2 }}
              className="break-inside-avoid mb-6 rounded-2xl border border-gray-200 bg-[#F7F7F7] p-8"
            >
              <span className="block font-georgia text-[56px] leading-none text-brand-dark/20" aria-hidden>
                &ldquo;
              </span>
              <blockquote
                className={
                  r.quote
                    ? "mt-2 text-[17px] leading-[1.55] text-brand-dark font-dm-sans"
                    : "mt-2 text-[15px] italic text-red-500 font-dm-sans"
                }
              >
                {r.quote || "Quote pending (hidden on the live site until added)"}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-dark text-brand-lime text-sm font-bold font-dm-sans">
                  {r.name.charAt(0)}
                </span>
                <span className="leading-tight">
                  <span className="block text-[15px] font-bold font-dm-sans">{r.name}</span>
                  <span className="block text-[13px] text-brand-gray font-dm-sans">
                    {[r.project, r.service].filter(Boolean).join(" · ")}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
