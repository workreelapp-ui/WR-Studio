"use client";

import { motion, Variants } from "framer-motion";

// Parent container controls the stagger timing
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

// Child animation: slides up from further down with a blur
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 80, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Approach() {
  return (
    <section className="bg-white text-brand-dark">
      <motion.div
        className="max-w-375 mx-auto px-6 lg:px-8 w-full pt-20 pb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // amount: 0.4 ensures it waits until the previous section is mostly gone
        viewport={{ amount: 0.4 }}
      >
        {/* Top Header */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pb-4 border-b border-gray-300 mb-16 font-ibm-plex-mono"
        >
          <span className="text-[10px] tracking-wider uppercase text-gray-500">
            Our Approach
          </span>
          <span className="text-[10px] tracking-wider text-gray-500">
            02 / 03
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-bold  lg:tracking-[-4px] leading-10 md:leading-18 lg:leading-30 text-4xl md:text-6xl lg:text-[118px] max-w-5xl font-dm-sans"
        >
          One partner from first thought to{" "}
          <span className="font-georgia italic font-normal ">launch</span>
        </motion.h2>
      </motion.div>
    </section>
  );
}
