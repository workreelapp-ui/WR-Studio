"use client";

import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";

export default function Contact() {
  return (
    <section className="bg-brand-dark py-24 md:py-32">
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Side: Heading */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-widest uppercase text-brand-lime block mb-12 font-ibm-plex-mono"
          >
            START A PROJECT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="lg:tracking-[-4px] leading-[100%] text-4xl md:text-6xl lg:text-[90px] text-text-brand-light font-dm-sans max-w-124 font-bold"
          >
            Have something{" "}
            <span className="font-georgia italic font-normal text-brand-lime">
              ambitious
            </span>{" "}
            <br />
            in mind?
          </motion.h2>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <form className="flex flex-col">
            {/* Name */}
            <div className="flex flex-col">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Your name
              </label>

              <input
                type="text"
                placeholder="Name or company"
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.2] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 placeholder:text-brand-gray"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mt-8">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Email address
              </label>

              <input
                type="email"
                placeholder="you@company.com"
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.2] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 placeholder:text-brand-gray"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Project description */}
            <div className="flex flex-col mt-8">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                What are you building?
              </label>

              <textarea
                placeholder="A short overview of the product or challenge"
                rows={2}
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.35] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 resize-none placeholder:text-brand-gray "
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-6">
              <p
                className="text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Typical response within 1-2 working days.
              </p>

              <button
                type="button"
                className="px-5 py-3 border border-white/10 hover:border-brand-lime/30 hover:bg-white/5 hover:text-white text-sm font-medium rounded-full bg-brand-lime text-black shadow-[0_0_15px_rgba(214,255,67,0.05)] hover:shadow-[0_0_25px_rgba(214,255,67,0.35)] transition-all duration-500 flex items-center gap-3"
              >
                <span>Send enquiry</span>

                <FiArrowDownRight />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
