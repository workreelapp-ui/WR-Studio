"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

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
            flex
            items-center
          "
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-9 md:gap-10 lg:gap-16 items-center w-full">
            {/* LEFT CONTENT */}
            <div className="min-w-0">
              {/* Metadata */}
              <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-14 font-ibm-plex-mono">
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
                className="
                  text-white
                  font-bold
                  tracking-[-0.055em]
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-[100px]
                  xl:text-[110px]
                  font-dm-sans
                  leading-[0.9]
                "
              >
                WorkReel
              </motion.h2>

              {/* Description */}
              <p className="text-gray-400 pt-4 sm:pt-5 max-w-xl lg:max-w-[90%] leading-relaxed font-dm-sans text-sm sm:text-base">
                A mobile hiring experience that helps service businesses
                discover people through short-form video, matching and direct
                conversation.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8 lg:mt-12">
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
              <div className="mt-7 sm:mt-9 lg:mt-14">
                <motion.button
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between text-white border-t border-white/70 pb-2 group w-full"
                >
                  <span className="text-sm font-medium pt-2 font-dm-sans">
                    Discuss a mobile product
                  </span>

                  <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
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
                aspect-[1.55/1]
                sm:aspect-[1.6/1]
                md:aspect-[1.65/1]
                lg:aspect-[1.08/1]
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
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
