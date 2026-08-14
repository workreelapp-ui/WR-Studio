"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const headings = [
  "Product thinkers",
  "Experience makers",
  "Technology builders",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // True Typewriter Effect Logic
  useEffect(() => {
    const currentWord = headings[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing forward
          if (text.length < currentWord.length) {
            setText(currentWord.substring(0, text.length + 1));
          } else {
            // Pause at full word before deleting
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          // Deleting backward
          if (text.length > 0) {
            setText(currentWord.substring(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % headings.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    ); // Faster when deleting, slower when typing

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #1e250559, #3d4b0b31)",
        paddingTop: "300px",
        paddingBottom: "250px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center">
        {/* Typewriter Heading */}
        <div className="flex items-start justify-center min-h-27.5 md:min-h-37.5">
          <h1
            className="font-bold text-white text-left flex items-center
                       text-5xl md:text-7xl lg:text-[110px] 
                       leading-15 md:leading-22.5 lg:leading-27.5 
                       tracking-tight lg:tracking-[-4px]"
          >
            <span>{text}</span>
            {/* Blinking / Static Green Cursor Line */}
            <motion.span
              className="inline-block w-1 md:w-2 lg:w-3 bg-green-500 ml-2 md:ml-4 self-stretch"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 max-w-xl text-white/50 font-light text-[17px] leading-[1.4] tracking-wide"
        >
          One studio for the full digital journey - from the first idea to
          product, technology and growth.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs uppercase tracking-widest text-white/70">
          Scroll
        </span>
        {/* Vertical Line Container */}
        <div className="relative w-[1px] h-12 bg-white/20 overflow-hidden">
          {/* Animated filling line */}
          <motion.div
            className="absolute top-0 left-0 w-full bg-white"
            initial={{ height: "0%" }}
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.5, 1],
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
