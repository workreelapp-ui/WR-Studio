"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { scrollToSection } from "@/lib/choosePackage";
import { CALENDLY_URL } from "@/lib/packages";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <section className="relative w-full h-[90svh] flex flex-col items-center justify-center text-center overflow-hidden pt-28 pb-24 bg-bg-dark">
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

        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* =====================================================
          HERO CONTENT
          ===================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.9 }}
          className="font-bold text-brand-light max-w-6xl type-display"
        >
          Apps, brands &amp; video.{" "}
          <span className="block font-georgia italic font-normal text-brand-lime">
            Fixed prices.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-8 max-w-xl text-text-gray-light font-light text-[17px] md:text-[19px] leading-[1.45] tracking-wide"
        >
          Packages for small businesses, from a $149 landing page to a full
          iOS + Android app. You see what&apos;s included, the price and the
          delivery date before we start.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            type="button"
            onClick={() => scrollToSection("pricing")}
            className="flex items-center gap-2 rounded-full bg-brand-lime px-7 py-3.5 text-[15px] font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(214,255,67,0.4)]"
          >
            See packages &amp; prices
            <FiArrowDownRight />
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-7 py-3.5 text-[15px] font-medium text-brand-light backdrop-blur-sm transition-colors duration-300 hover:border-brand-lime hover:text-brand-lime"
          >
            Book a free call
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.8,
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
