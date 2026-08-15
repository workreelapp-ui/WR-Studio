"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Senior attention",
    desc: "Work directly with senior experts who are embedded in your project, not handed off to junior teams.",
  },
  {
    num: "02",
    title: "One connected team",
    desc: "Seamless collaboration between design, development, and strategy under one unified roof.",
  },
  {
    num: "03",
    title: "Systems over trends",
    desc: "We build scalable, sustainable design systems and architectures, not just fleeting visual trends.",
  },
  {
    num: "04",
    title: "Built for change",
    desc: "Flexible and agile processes designed to adapt as your product, market, and user base evolves.",
  },
];

export default function WhyStudio() {
  return (
    <section className="bg-white text-brand-dark py-24 md:py-32">
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side: Sticky Headings */}
        <div className="md:sticky md:top-32 md:self-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-wider uppercase text-gray-500 block mb-12 font-ibm-plex-mono"
          >
            Why WR Studio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-bold text-4xl md:text-6xl lg:text-[90px] lg:tracking-[-4px] max-w-129 leading-[82.8px] font-dm-sans"
          >
            Not a vendor at the edge.{" "}
            <span className="block font-georgia italic font-normal">
              A product partner inside.
            </span>
          </motion.h2>
        </div>

        {/* Right Side: Principle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {principles.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="border border-gray-100 p-8 md:p-10 group hover:bg-[#F7F7F7] transition-colors duration-300"
            >
              <span className="text-[9px] tracking-wider text-brand-accent block mb-8 font-ibm-plex-mono">
                {item.num}
              </span>
              <h3 className="font-bold text-brand-dark text-2xl md:text-[28px] mb-4 font-dm-sans leading-none">
                {item.title}
              </h3>
              <p className="text-[17px] font-normal text-brand-gray max-w-sm font-dm-sans">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
