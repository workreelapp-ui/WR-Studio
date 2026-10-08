"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/modules/landing/components/Hero";
import Marquee from "@/modules/landing/components/Marquee";
import Statement from "@/modules/landing/components/Statement";
import Projects from "@/modules/landing/components/Projects";

import Reviews from "@/modules/landing/components/Reviews";
import Values from "@/modules/landing/components/Values";
import WhyStudio from "@/modules/landing/components/WhyStudio";
import Contact from "@/modules/landing/components/Contact";
import Pricing from "@/modules/landing/components/Pricing";
import Preloader from "@/components/layout/Preloader";
import ProjectsHorizontalSlider from "@/modules/landing/components/ProjectsHorizontalSlider";

export default function Home() {
  return (
    // Removed h-screen and overflow-y-scroll so the window scrolls naturally
    <main className="bg-bg-dark text-white min-h-screen flex flex-col relative">
      <Preloader />

      {/* GLOBAL STRAP OVERLAY */}
      <div className="fixed inset-0 flex z-60 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="flex-1 h-full bg-bg-dark origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{
              delay: 0.9 + i * 0.06,
              duration: 0.9,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
        ))}
      </div>

      {/* NAVBAR - Your custom code will work perfectly now! */}
      <Navbar />

      {/* Applied the snap-section class to each wrapper */}
      <div className="snap-section">
        <Hero />
      </div>
      <div className="snap-section">
        <Marquee />
      </div>
      <div className="snap-section">
        <Statement />
      </div>
      <div id="pricing" className="snap-section">
        <Pricing />
      </div>
      <div id="projects" className="snap-section">
        <Projects />
      </div>
      <div className="snap-section">
        <ProjectsHorizontalSlider />
      </div>
      <div id="reviews" className="snap-section">
        <Reviews />
      </div>
      <div id="process" className="snap-section">
        <Values />
      </div>
      <div className="snap-section">
        <WhyStudio />
      </div>
      <div id="contact" className="snap-section">
        <Contact />
      </div>
      <div className="snap-section">
        <Footer />
      </div>
    </main>
  );
}
