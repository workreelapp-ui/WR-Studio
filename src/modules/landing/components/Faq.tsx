"use client";

import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { faqs } from "@/lib/faq";

// Native <details> so every answer is in the HTML for search engines and AI
// crawlers, while visitors still get a compact accordion.
export default function Faq() {
  return (
    <section className="bg-white text-brand-dark py-24 md:py-32 border-t border-gray-200">
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="type-eyebrow text-gray-500 block mb-12 font-ibm-plex-mono">FAQ</span>
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.3 }}
            className="font-bold font-dm-sans type-h2"
          >
            Questions,{" "}
            <span className="font-georgia italic font-normal">answered.</span>
          </motion.h2>
        </div>

        <div className="border-t border-gray-200">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-gray-200">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-bold font-dm-sans type-h3">{f.q}</h3>
                <FiPlus className="mt-1 shrink-0 text-xl transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pb-6 pr-10 text-[17px] leading-[1.6] text-brand-gray font-dm-sans">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
