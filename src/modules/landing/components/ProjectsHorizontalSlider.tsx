"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Project1 from "./Projects/Project1";
import Project2 from "./Projects/Project2";
import Project3 from "./Projects/Project3";

const projects = [Project1, Project2, Project3];

export default function ProjectsHorizontalSlider() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const n = projects.length;

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((n - 1) / n) * 100}%`],
  );

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${n * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <motion.div
          className="flex h-full"
          style={{
            x,
            width: `${n * 100}vw`,
          }}
        >
          {projects.map((ProjectPanel, i) => (
            <div
              key={i}
              className="
              height-3/4
                w-screen
                lg:h-screen
                shrink-0
                flex
                items-center
                justify-center
                px-4
                py-6
                sm:px-6
                sm:py-8
                md:px-8
                md:py-10
                lg:px-8
                lg:py-12
                xl:py-16
              "
            >
              <ProjectPanel />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
