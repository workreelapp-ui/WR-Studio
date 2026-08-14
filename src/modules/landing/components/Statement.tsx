"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function Statement() {
  return (
    <section
      className="bg-white text-[#0B0D12] flex items-center justify-center border-b border-[#0B0D1229]"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-8 w-full">
        {/* Top Header (00 / WR ... About) */}
        <div
          className="flex justify-between items-center pb-4 border-b border-[#0B0D1216] mb-16"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          <span className="text-[12px] tracking-wider text-[#0B0D12]/50">
            ABOUT
          </span>
          <span className="text-[12px] tracking-wider text-[#0B0D12]/50">
            00 / WR
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className=" tracking-[-4px] leading-[100%] text-4xl md:text-6xl lg:text-[90px] max-w-5xl"
        >
          We turn ideas into digital experiences -{" "}
          <span
            style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            designing, building, automating
          </span>
          , and growing what comes next.
        </motion.h2>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mt-24">
          {/* Left Text */}
          <p
            className="text-[12px] max-w-xs leading-relaxed text-[#5F6671]"
            style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
          >
            Small senior team. <br /> Direct collaboration. <br /> No assembly
            line.
          </p>

          {/* Right Button with Arrow */}
          <motion.button
            whileHover={{ y: -2 }}
            className="flex items-center gap-4 md:gap-6 lg:gap-8 xl:gap-10 pb-2 border-b-2 border-[#0B0D12]/50 relative group"
          >
            <span
              className="text-[12px] tracking-wider uppercase"
              style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
            >
              See what we do
            </span>
            <FiArrowDownRight className="text-[16px]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
