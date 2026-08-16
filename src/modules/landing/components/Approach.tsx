"use client";

import { motion } from "framer-motion";

export default function Approach() {
  return (
    <section className="bg-white text-brand-dark ">
      <div className="max-w-375 mx-auto px-6 lg:px-8 w-full border-b border-gray-300 py-20">
        {/* Top Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-300 mb-16 font-ibm-plex-mono">
          <span className="text-[10px] tracking-wider uppercase text-gray-500">
            Our Approach
          </span>
          <span className="text-[10px] tracking-wider text-gray-500">
            02 / 03
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
          One partner from first thought to{" "}
          <span className="font-georgia italic font-normal">launch.</span>
        </motion.h2>
      </div>
    </section>
  );
}
