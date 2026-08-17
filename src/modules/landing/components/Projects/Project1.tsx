"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

export default function Project1() {
  return (
    <section className="w-full h-full bg-white flex items-center justify-center">
      <div className="max-w-375 mx-auto px-6 lg:px-8 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
          viewport={{ amount: 0.2 }}
          className="bg-bg-light-green rounded-4xl p-8 lg:p-12 overflow-hidden w-full h-auto  isolate transform-gpu will-change-transform"
          style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <div>
              <div className="flex justify-between items-center pb-4 mb-12 md:mb-16 font-ibm-plex-mono">
                <span className="text-[12px] tracking-wider text-gray-500 uppercase">
                  2.25-26 &nbsp;&nbsp; Hospitality AI
                </span>
                <span className="text-[12px] tracking-wider text-gray-500">
                  HostyAI
                </span>
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                viewport={{ amount: 0.3 }}
                className="text-brand-dark font-bold tracking-[-4px] text-5xl md:text-7xl lg:text-[115px] font-dm-sans leading-[94.3px]"
              >
                HostyAI
              </motion.h2>

              <p className="text-text-gray pt-5 lg:max-w-3/4">
                An AI operating system for modern hospitality-centralising
                conversations, automating guest communication and helping
                property teams act faster.
              </p>

              <div className="flex flex-wrap gap-3 lg:max-w-[80%] mt-8 md:mt-12">
                {[
                  "Product Strategy",
                  "SaaS UX/UI",
                  "AI workflows",
                  "Design system",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="px-5 py-2.5 border border-brand-dark rounded-full text-[12px] tracking-wide text-brand-dark hover:bg-brand-dark hover:text-bg-light-green transition-colors duration-300 font-ibm-plex-mono"
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-12 md:mt-16">
                <motion.button
                  whileHover={{ y: -2 }}
                  className="flex items-center justify-between text-brand-dark border-t w-full border-brand-dark/70 pb-2 group"
                >
                  <span className="text-sm font-medium pt-2 group-hover:text-brand-dark transition-colors duration-300 font-dm-sans">
                    Discuss a SaaS product
                  </span>
                  <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
              viewport={{ amount: 0.3 }}
              className="relative w-full h-80 sm:h-96 md:h-125 lg:h-150 rounded-3xl overflow-hidden transform-gpu"
              style={{
                WebkitMaskImage: "-webkit-radial-gradient(white, black)",
              }}
            >
              <Image
                src="/hostyai.png"
                alt="HostyAI Project Screenshot"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
