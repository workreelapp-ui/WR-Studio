"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const details = [
  {
    num: "01",
    title: "Design",
    tags: [
      "Product design",
      "UX/UI design",
      "Brand identity",
      "Design systems",
      "Graphic design",
    ],
    rightTitle: "Make the product clear, useful and unmistakably yours.",
    rightDesc:
      "We connect user needs, business goals and visual direction before committing to screens. The result is a system – not a collection of decorative pages.",
  },
  {
    num: "02",
    title: "Build",
    tags: [
      "Web development",
      "Mobile applications",
      "SaaS platforms",
      "Custom software",
      "E-commerce",
    ],
    rightTitle: "Turn approved ideas into responsive, reliable software.",
    rightDesc:
      "Design and development stay connected throughout the project, which protects the original direction and keeps decisions practical.",
  },
  {
    num: "03",
    title: "Automate",
    tags: [
      "AI products",
      "AI agents",
      "Workflow automation",
      "System integrations",
      "Intelligent operations",
    ],
    rightTitle: "Use AI where it removes friction and creates genuine value.",
    rightDesc:
      "We design the complete experience around automation from triggers and human approvals to edge cases, dashboards and measurable outcomes.",
  },
  {
    num: "04",
    title: "Grow",
    tags: [
      "Digital strategy",
      "Performance marketing",
      "SEO",
      "Social & content",
      "Campaign creative",
    ],
    rightTitle:
      "Turn strong digital foundations into attention, reach and measurable growth.",
    rightDesc:
      "We design the complete experience around automation from triggers and human approvals to edge cases, dashboards and measurable outcomes.",
  },
];

export default function ApproachDetails() {
  // First accordion is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white text-brand-dark pb-10 md:pb-20 xl:pb-32">
      <div className="max-w-375 mx-auto px-6 lg:px-8 w-full">
        {details.map((item, index) => {
          const isOpen = openIndex === index;

          return (
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 border-b border-gray-400 items-start"
            >
              {/* Left Side */}
              <div className="flex flex-col">
                <div className="flex items-start gap-6">
                  <span className="text-[12px] tracking-wider text-gray-500 mt-3 font-ibm-plex-mono">
                    {item.num}
                  </span>

                  <h3 className="font-bold text-brand-dark text-4xl md:text-5xl lg:text-[64px] font-dm-sans leading-[100%] tracking-[-2.88px]">
                    {item.title}
                  </h3>
                </div>

                {/* Accordion content on the left:
                    Buttons only appear when this item is open */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 24,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-wrap max-w-106.75 gap-3 lg:pl-10">
                        {item.tags.map((tag) => (
                          <button
                            key={tag}
                            type="button"
                            className="px-4 py-2 border border-gray-400 rounded-full text-[12px] tracking-wide text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-300 font-ibm-plex-mono"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right Side: Accordion */}
              <div className="md:pt-3">
                {/* Accordion trigger */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left cursor-pointer group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p
                      className={`text-[17px] font-normal transition-colors duration-300 font-dm-sans ${
                        isOpen
                          ? "text-brand-dark"
                          : "text-brand-gray group-hover:text-brand-dark"
                      }`}
                    >
                      {item.rightTitle}
                    </p>

                    <div className="text-xl text-brand-dark mt-1 shrink-0">
                      {isOpen ? <FiMinus /> : <FiPlus />}
                    </div>
                  </div>
                </button>

                {/* Accordion answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        marginTop: 24,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        marginTop: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 rounded-lg max-w-md">
                        <p className="font-light text-brand-gray font-dm-sans">
                          {item.rightDesc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
