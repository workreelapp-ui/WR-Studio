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
    <section className="bg-white text-brand-dark pt-20">
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
          <span className="type-eyebrow text-gray-500">
            Recent work
          </span>
          <span className="type-eyebrow text-gray-500">
            03 projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          variants={itemVariants}
          className="font-bold max-w-5xl font-dm-sans type-h2"
        >
          Real products, <br />
          <span className="font-georgia italic font-normal">
            designed and built by us.
          </span>
        </motion.h2>

        {/* Bottom Paragraph */}
        <div className="w-full flex justify-end">
          <motion.p
            variants={itemVariants}
            className="mt-12 max-w-md text-brand-gray text-[17px] font-normal font-dm-sans"
          >
            A few of the apps we&apos;ve taken from idea to working product.
            Have something similar in mind? Each project links straight to the
            matching package.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
