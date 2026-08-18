"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/modules/landing/components/Hero";
import Marquee from "@/modules/landing/components/Marquee";
import Statement from "@/modules/landing/components/Statement";
import Projects from "@/modules/landing/components/Projects";

import ApproachDetails from "@/modules/landing/components/ApproachDetails";
import Values from "@/modules/landing/components/Values";
import WhyStudio from "@/modules/landing/components/WhyStudio";
import Approach from "@/modules/landing/components/Approach";
import Contact from "@/modules/landing/components/Contact";
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
              delay: 1.8 + i * 0.15,
              duration: 1.2,
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
      <div id="projects" className="snap-section">
        <Projects />
      </div>
      <div className="snap-section">
        <ProjectsHorizontalSlider />
      </div>
      <div id="approach" className="snap-section">
        <Approach />
      </div>
      <div id="services" className="snap-section">
        <ApproachDetails />
      </div>
      <div className="snap-section">
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
