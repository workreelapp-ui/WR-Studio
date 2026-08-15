import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/modules/landing/components/Hero";
import Marquee from "@/modules/landing/components/Marquee";
import Statement from "@/modules/landing/components/Statement";
import Projects from "@/modules/landing/components/Projects";
import Project1 from "@/modules/landing/components/Projects/Project1";
import Project2 from "@/modules/landing/components/Projects/Project2";
import Project3 from "@/modules/landing/components/Projects/Project3";
import Approach from "@/modules/landing/components/Projects/Approach";
import ApproachDetails from "@/modules/landing/components/ApproachDetails";
import Values from "@/modules/landing/components/Values";
import WhyStudio from "@/modules/landing/components/WhyStudio";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Marquee />
      <Statement />
      <Projects />
      <Project1 />
      <Project2 />
      <Project3 />
      <Approach />
      <ApproachDetails />
      <Values />
      <WhyStudio />
      <Footer />
    </main>
  );
}
