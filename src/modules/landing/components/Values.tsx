"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand the opportunity, audience, constraints and existing product context.",
  },
  {
    num: "02",
    title: "Define",
    desc: "Structure the problem and align on a clear, measurable product direction.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Craft the interfaces, flows, and visual systems that bring the product to life.",
  },
  {
    num: "04",
    title: "Build",
    desc: "Engineer robust, scalable code that turns designs into functional reality.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploy, monitor, and iterate to ensure a successful market entry and growth.",
  },
];

export default function Values() {
  return (
    <section className="bg-brand-dark py-24 md:py-32">
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side: Sticky Main Heading */}
        <div className="md:sticky md:top-32 md:self-start">
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            // Removed once: true
            viewport={{ amount: 0.3 }}
            className="font-bold text-4xl md:text-6xl lg:text-[90px] max-w-123.75 lg:tracking-[-4px] leading-20 text-brand-light font-dm-sans"
          >
            Fast enough to move. Careful enough to{" "}
            <span className="font-georgia italic font-normal text-brand-lime">
              matter.
            </span>
          </motion.h2>

          <p className="mt-8 text-[17px] font-normal text-text-gray-light max-w-sm font-dm-sans">
            A clear process with visible decisions, frequent reviews and no
            mystery between design and development.
          </p>
        </div>

        {/* Right Side: Simple List with Hidden Scrollbar */}
        {/* Added data-lenis-prevent to fix the scroll inside this box */}
        <div
          data-lenis-prevent
          className="h-135 overflow-y-auto hidden-scrollbar border-t border-white/10"
        >
          {steps.map((item, index) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Removed once: true
              viewport={{ amount: 0.3 }}
              className="grid grid-cols-[32px_1fr_24px] gap-6 py-8 border-b border-white/10"
            >
              {/* Number */}
              <span className="text-[12px] tracking-wider text-brand-lime pt-1 font-ibm-plex-mono">
                {item.num}
              </span>

              {/* Content */}
              <div>
                <h3 className="text-[31px] leading-[100%] text-brand-light font-dm-sans">
                  {item.title}
                </h3>

                <p className="mt-3 text-[17px] leading-[1.45] font-normal text-text-gray-light max-w-md font-dm-sans">
                  {item.desc}
                </p>
              </div>

              {/* Arrow */}
              <FiArrowDownRight className="mt-1 text-brand-lime" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
