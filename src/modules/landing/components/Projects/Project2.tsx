"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project2() {
  return (
    <section className="w-full h-full bg-white flex items-center justify-center">
      <div className="max-w-375 mx-auto px-6 lg:px-8 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          viewport={{ amount: 0.2 }}
          className="bg-bg-deep-black rounded-4xl p-8 lg:p-12 overflow-hidden w-full h-auto isolate transform-gpu will-change-transform"
          style={{
            WebkitMaskImage: "-webkit-radial-gradient(white, black)",
          }}
        >
          {/* Top metadata */}
          <div className="flex items-center gap-10 md:gap-16 mb-6 font-ibm-plex-mono">
            <span className="text-[9px] tracking-[0.15em] text-gray-500 uppercase">
              Video hiring platform
            </span>

            <span className="text-[9px] tracking-[0.15em] text-gray-500 uppercase">
              2024–25
            </span>
          </div>

          {/* Title + description */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-10 w-full min-w-0">
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
              className="text-white font-bold tracking-[-0.04em] text-5xl md:text-7xl lg:text-[115px] shrink-0 font-dm-sans leading-[0.9]"
            >
              WorkReel
            </motion.h2>

            <p className="text-gray-400 text-base md:text-lg max-w-100 leading-relaxed font-dm-sans min-w-0">
              A mobile hiring experience that helps service businesses discover
              people through short-form video, matching and direct conversation.
            </p>
          </div>

          {/* Project image */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.98,
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
            className="relative w-full aspect-1200/650 md:aspect-1200/300 xl:aspect-1200/500  rounded-2xl md:rounded-3xl overflow-hidden mb-10 md:mb-14 transform-gpu"
            style={{
              WebkitMaskImage: "-webkit-radial-gradient(white, black)",
            }}
          >
            <Image
              src="/workreel.png"
              alt="WorkReel — People over paper mobile hiring platform"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1400px"
              className="object-contain object-center"
            />
          </motion.div>

          {/* Tags + CTA */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 w-full min-w-0">
            <div className="flex flex-wrap gap-3">
              {[
                "Product design",
                "Mobile UX",
                "Brand application",
                "Prototype",
              ].map((tag) => (
                <button
                  key={tag}
                  className="px-5 py-2.5 border border-white/80 rounded-full text-[12px] tracking-wide text-white hover:bg-white hover:text-bg-deep-black transition-colors duration-300 font-ibm-plex-mono"
                >
                  {tag}
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              className="flex items-center justify-between text-white border-t border-white/70 pb-2 group w-full md:w-auto md:min-w-70"
            >
              <span className="text-sm font-medium pt-3 font-dm-sans">
                Discuss a mobile product
              </span>

              <FiArrowUpRight className="text-lg mt-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
