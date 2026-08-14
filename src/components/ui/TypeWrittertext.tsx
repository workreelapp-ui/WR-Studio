"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const headings = [
  "We turn ideas into digital experiences.",
  "One partner from first thought to launch.",
  "Not a vendor at the edge. A product partner inside.",
];

export default function RotatingText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 4000); // Change text every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-30 md:h-40 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h1
          key={index}
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl font-bold text-center text-white max-w-4xl px-4"
        >
          {headings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
