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
    // Added "as const" here to fix the TypeScript error
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};
export default function Projects() {
  return (
    <section className="bg-white text-brand-dark py-20">
      <motion.div
        className="max-w-375 mx-auto px-6 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // Removed "once: true" here so the animation replays on scroll up/down
        viewport={{ amount: 0.4 }}
      >
        {/* Top Header (SELECTED PROJECTS / 01/03) */}
        <motion.div
          variants={itemVariants}
          className="flex justify-between items-center pb-4 border-b border-border-light mb-16 font-ibm-plex-mono"
        >
          <span className="text-[12px] text-gray-500 tracking-wider uppercase">
            Selected Projects
          </span>
          <span className="text-[12px] tracking-wider text-gray-500">
            01 / 03
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
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
            variants={itemVariants}
            className="mt-12 max-w-md text-brand-gray text-[17px] font-normal font-dm-sans"
          >
            Each product is presented through a distinct art direction rather
            than being forced into one repeating agency template.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
