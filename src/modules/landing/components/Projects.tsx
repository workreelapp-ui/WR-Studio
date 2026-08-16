"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="bg-white text-brand-dark border-b border-border-dark py-20">
      <div className="max-w-375 mx-auto px-6 lg:px-8 w-full">
        {/* Top Header (SELECTED PROJECTS / 01/03) */}
        <div className="flex justify-between items-center pb-4 border-b border-border-light mb-16 font-ibm-plex-mono">
          <span className="text-[12px] text-gray-500 tracking-wider uppercase">
            Selected Projects
          </span>
          <span className="text-[12px] tracking-wider text-gray-500">
            01 / 03
          </span>
        </div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-bold lg:tracking-[-4px] leading-10 md:leading-18 lg:leading-30 text-4xl md:text-6xl lg:text-[118px] max-w-5xl font-dm-sans"
        >
          Work with its own <br />
          <span className="font-georgia italic font-normal">
            visual behaviour.
          </span>
        </motion.h2>

        {/* Bottom Paragraph */}
        <div className="w-full flex justify-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 max-w-md text-brand-gray text-[17px] font-normal font-dm-sans"
          >
            Each product is presented through a distinct art direction rather
            than being forced into one repeating agency template.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
