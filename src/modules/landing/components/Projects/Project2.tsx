"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { choosePackage } from "@/lib/choosePackage";

export default function Project2() {
  return (
    <section className="w-full bg-white flex items-center justify-center">
      <div className="max-w-375 mx-auto px-0 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          viewport={{ amount: 0.2 }}
          className="
            w-full
            bg-bg-deep-black
            rounded-3xl
            sm:rounded-4xl
            p-5
            sm:p-7
            md:p-8
            lg:p-12
            xl:p-14
            overflow-hidden
            isolate
            transform-gpu
            will-change-transform
            lg:min-h-162.5
            xl:min-h-175
            2xl:min-h-200
          "
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          <div className="w-full">
            {/* TOP CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 md:gap-10 lg:gap-16">
              {/* LEFT */}
              <div className="lg:col-span-7 min-w-0">
                {/* Metadata */}
                <div className="flex justify-between lg:justify-start items-center gap-20 mb-6 sm:mb-8 lg:mb-14 font-ibm-plex-mono">
                  <span className="text-[8px] sm:text-[9px] tracking-[0.15em] text-gray-500 uppercase">
                    Video hiring platform
                  </span>

                  <span className="text-[8px] sm:text-[9px] tracking-[0.15em] text-gray-500 uppercase">
                    2024–25
                  </span>
                </div>

                {/* Title */}
                <motion.h2
                  initial={{
                    opacity: 0,
                    y: 30,
                    filter: "blur(8px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                  }}
                  viewport={{ amount: 0.3 }}
                  className="text-white font-bold font-dm-sans type-h2"
                >
                  WorkReel
                </motion.h2>
              </div>

              {/* RIGHT DESCRIPTION */}
              <div className="lg:col-span-5 flex items-end">
                <p className="text-gray-400 max-w-xl lg:max-w-[90%] leading-relaxed font-dm-sans text-sm sm:text-base">
                  A mobile hiring experience that helps service businesses
                  discover people through short-form video, matching and direct
                  conversation.
                </p>
              </div>
            </div>

            {/* FULL-WIDTH IMAGE */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              viewport={{ amount: 0.3 }}
              className="
  relative
  w-full
  aspect-[2.4/2]
  md:aspect-[2.6/1]
  lg:aspect-[2.7/1]
  xl:aspect-[2.8/1]
  mt-8
  sm:mt-10
  lg:mt-12
  rounded-2xl
  sm:rounded-3xl
  overflow-hidden
  transform-gpu
"
              style={{
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
            >
              <Image
                src="/workreel.png"
                alt="WorkReel — People over paper mobile hiring platform"
                fill
                priority
                sizes="100vw"
                className="object-contain object-center"
              />
            </motion.div>

            {/* BOTTOM CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9 md:gap-10 lg:gap-16 mt-6 sm:mt-8 lg:mt-8">
              {/* Tags */}
              <div className="lg:col-span-7 flex flex-wrap gap-2 sm:gap-3 items-start">
                {[
                  "Product design",
                  "Mobile UX",
                  "Brand application",
                  "Prototype",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-4 sm:px-5 py-2 sm:py-2.5 border border-white/80 rounded-full text-[11px] sm:text-[12px] tracking-wide text-white hover:bg-white hover:text-bg-deep-black transition-colors duration-300 font-ibm-plex-mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="lg:col-span-5">
                <motion.button
                  type="button"
                  onClick={() => choosePackage("Mobile App (iOS + Android)")}
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between text-white border-t border-white/70 pb-2 group w-full"
                >
                  <span className="text-sm font-medium pt-2 font-dm-sans">
                    Get a mobile app like this
                  </span>

                  <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
