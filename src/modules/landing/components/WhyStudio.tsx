"use client";

import { motion } from "framer-motion";

const principles = [
  {
    num: "01",
    title: "Prices you can plan around",
    desc: "The price on the package is the price you pay. If you want extra work, we quote it before we start.",
  },
  {
    num: "02",
    title: "Real delivery dates",
    desc: "Every package comes with a delivery time, so you can plan your launch, campaign or posting schedule.",
  },
  {
    num: "03",
    title: "Everything from one team",
    desc: "Your app, brand and videos come from the same studio, so they look like they belong together.",
  },
  {
    num: "04",
    title: "Talk to the maker",
    desc: "You deal directly with the designers, developers and editors doing your work, not an account manager.",
  },
];

export default function WhyStudio() {
  return (
    <section className="bg-white text-brand-dark py-24 md:py-32">
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
        {/* Left Side: Sticky Headings */}
        <div className="md:sticky md:top-32 md:self-start">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            // Removed once: true
            viewport={{ amount: 0.3 }}
            className="type-eyebrow text-gray-500 block mb-12 font-ibm-plex-mono"
          >
            Why WR Studio
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.3 }}
            className="font-bold max-w-129 font-dm-sans type-h2"
          >
            Studio quality.{" "}
            <span className="block font-georgia italic font-normal">
              Fair prices.
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
              viewport={{ amount: 0.3 }}
              className="border border-gray-100 p-8 md:p-10 group hover:bg-[#F7F7F7] transition-colors duration-300"
            >
              <span className="text-[9px] tracking-wider text-brand-accent block mb-8 font-ibm-plex-mono">
                {item.num}
              </span>
              <h3 className="font-bold text-brand-dark mb-4 font-dm-sans type-h3">
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
