"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";

export default function ProjectsSlider() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    // 300vh gives us the scroll distance needed
    <div ref={containerRef} className="relative h-[300vh] bg-white py-32">
      {/* Sticky "Window" - Strictly locked to screen height */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex h-screen">
          {/* Each slide is strictly locked to screen height and hides overflow */}
          <div className="w-screen h-screen max-h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            <Project1 />
          </div>
          <div className="w-screen h-screen max-h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            <Project2 />
          </div>
          <div className="w-screen h-screen max-h-screen flex-shrink-0 flex items-center justify-center overflow-hidden">
            <Project3 />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
