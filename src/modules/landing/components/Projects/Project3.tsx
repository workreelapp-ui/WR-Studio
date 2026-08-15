"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project3() {
  return (
    <section className="bg-white pt-16 md:pt-24">
      <div className="max-w-375 mx-auto px-6 lg:px-8">
        {/* Main Rounded Container */}
        <div className="bg-[#E3EEFF] rounded-4xl p-8 md:p-12 lg:p-16 overflow-hidden">
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text & Buttons */}
            <div>
              {/* Top Labels */}
              <div
                className="flex justify-between items-center pb-4 mb-12 md:mb-16"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                <span className="text-[12px] tracking-wider text-gray-500 uppercase">
                  Music education
                </span>
                <span className="text-[12px] tracking-wider text-gray-500 uppercase">
                  2024
                </span>
              </div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="text-[#0B0D12] font-bold tracking-[-4px] text-5xl md:text-7xl lg:text-[115px]"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  lineHeight: "94.3px",
                }}
              >
                Snareobics
              </motion.h2>

              <p className="text-[#4F5660] pt-5 lg:max-w-3/4">
                A focused practice system for drummers – combining structured
                exercises, tempo control, workout history and progress tracking.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 max-w-[80%] mt-8 md:mt-12">
                {[
                  "UX architecture",
                  "Mobile UI",
                  "Practice flows",
                  "Product system",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-5 py-2.5 border border-[#0B0D12] rounded-full text-[12px] tracking-wide text-[#0B0D12] hover:bg-[#0B0D12] hover:text-[#E3EEFF] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Bottom CTA */}
              <div className="mt-12 md:mt-16">
                <motion.button
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between text-[#0B0D12] border-t w-full border-[#0B0D12]/70 pb-2 group"
                >
                  <span
                    className="text-sm font-medium pt-2 group-hover:text-[#0B0D12] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Discuss an app idea
                  </span>
                  <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </div>
            </div>

            {/* Right Column: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="relative w-full h-80 sm:h-96 md:h-125 lg:h-150 rounded-3xl overflow-hidden"
            >
              <Image
                src="/snareobic.png"
                alt="Snareobics Project Screenshot"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
