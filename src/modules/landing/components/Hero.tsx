"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const headings = [
  "Product Thinkers",
  "Experience Makers",
  "Technology Builders",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  /*
   * =====================================================
   * TYPEWRITER
   * =====================================================
   */

  useEffect(() => {
    const currentWord = headings[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (text.length < currentWord.length) {
            setText(currentWord.substring(0, text.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (text.length > 0) {
            setText(currentWord.substring(0, text.length - 1));
          } else {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % headings.length);
          }
        }
      },
      isDeleting ? 50 : text === currentWord ? 1500 : 100,
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  /*
   * =====================================================
   * PING-PONG VIDEO
   *
   * Forward:
   * 0 → END
   *
   * Reverse:
   * END → 0
   *
   * Then repeat.
   * =====================================================
   */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    let direction = 1;
    let animationFrame: number;
    let lastTime = 0;

    const speed = 1;

    const animate = (timestamp: number) => {
      if (!video.duration || !isFinite(video.duration)) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      /*
       * Limit the reverse/forward movement to roughly
       * normal video speed.
       */
      if (!lastTime) {
        lastTime = timestamp;
      }

      const delta = (timestamp - lastTime) / 1000;
      lastTime = timestamp;

      /*
       * FORWARD
       */
      if (direction === 1) {
        video.currentTime += delta * speed;

        if (video.currentTime >= video.duration - 0.02) {
          video.currentTime = video.duration - 0.02;
          direction = -1;
        }
      } else {
        /*
         * REVERSE
         */
        video.currentTime -= delta * speed;

        if (video.currentTime <= 0.02) {
          video.currentTime = 0.02;
          direction = 1;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    const start = () => {
      video.pause();
      video.currentTime = 0;
      lastTime = 0;
      animationFrame = requestAnimationFrame(animate);
    };

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
      video.removeEventListener("loadedmetadata", start);
    };
  }, []);

  return (
    <section className="relative w-full h-[90svh] flex flex-col items-center justify-center text-center overflow-hidden pt-85 pb-62.5 bg-bg-dark">
      {/* =====================================================
          HERO VIDEO BACKGROUND
          ===================================================== */}

      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/WR_Studio_Hero_Optimized.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.2,
            duration: 1.0,
          }}
          className="flex items-start justify-center min-h-27.5 md:min-h-37.5"
        >
          <h1 className="font-bold text-brand-light text-left flex items-center text-4xl md:text-7xl lg:text-[110px] leading-15 md:leading-22.5 lg:leading-27.5 tracking-tight lg:tracking-[-4px]">
            <span>{text}</span>

            <motion.span
              className="inline-block w-1 md:w-2 lg:w-3 bg-brand-lime ml-2 md:ml-4 self-stretch"
              animate={{
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.6,
            duration: 1.0,
          }}
          className="mt-10 max-w-xl text-text-gray-light font-light text-[17px] leading-[1.4] tracking-wide"
        >
          One studio for the full digital journey - from the first idea to
          product, technology and growth.
        </motion.p>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 3.0,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-xs uppercase tracking-widest text-brand-light/70">
          Scroll
        </span>

        <div className="relative w-px h-12 bg-brand-light/20 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full bg-brand-light"
            initial={{ height: "0%" }}
            animate={{
              height: ["0%", "100%", "0%"],
            }}
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
