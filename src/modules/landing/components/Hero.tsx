"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import RotatingText from "@/components/ui/TypeWrittertext";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <SectionWrapper className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-sm uppercase tracking-widest text-blue-400 mb-8 z-10"
      >
        WR Studio
      </motion.span>

      <div className="z-10">
        <RotatingText />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-gray-400 mt-8 max-w-xl text-center z-10"
      >
        We design, build, automate, and grow digital products.
      </motion.p>
    </SectionWrapper>
  );
}
