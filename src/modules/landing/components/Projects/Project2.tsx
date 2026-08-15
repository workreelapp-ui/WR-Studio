"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project2() {
  return (
    <section className="bg-white ">
      <div className="max-w-375 mx-auto px-6 lg:px-8">
        {/* Main Rounded Container */}
        <div className="bg-[#0D0D0D] rounded-4xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Top metadata */}
          <div
            className="flex items-center gap-10 md:gap-16 mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            <span className="text-[9px] tracking-[0.15em] text-gray-500 uppercase">
              Video hiring platform
            </span>
            <span className="text-[9px] tracking-[0.15em] text-gray-500 uppercase">
              2024–25
            </span>
          </div>

          {/* Title + description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-10 md:mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-white font-bold tracking-[-0.04em] text-5xl md:text-7xl lg:text-[115px] shrink-0"
              style={{
                fontFamily: "var(--font-dm-sans)",
                lineHeight: "0.9",
              }}
            >
              WorkReel
            </motion.h2>

            <p
              className="text-gray-400 text-base md:text-lg max-w-100 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              A mobile hiring experience that helps service businesses discover
              people through short-form video, matching and direct conversation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative w-full aspect-1200/650 rounded-2xl md:rounded-3xl  overflow-hidden mb-10 md:mb-14"
          >
            <Image
              src="/workreel.webp"
              alt="WorkReel — People over paper mobile hiring platform"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1400px"
              className="object-contain object-center p-1 rounded-3xl"
            />
          </motion.div>

          {/* Tags + CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="flex flex-wrap gap-3">
              {[
                "Product design",
                "Mobile UX",
                "Brand application",
                "Prototype",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-5 py-2.5 border border-white/80 rounded-full text-[12px] tracking-wide text-white hover:bg-white hover:text-[#0D0D0D] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                >
                  {tag}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              className="flex items-center justify-between text-white border-t border-white/70 pb-2 group w-full md:w-auto md:min-w-[280px]"
            >
              <span
                className="text-sm font-medium pt-3 transition-colors duration-300"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Discuss a mobile product
              </span>
              <FiArrowUpRight className="text-lg mt-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
