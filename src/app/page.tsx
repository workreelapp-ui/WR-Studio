import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Hero from "@/modules/landing/components/Hero";
import Marquee from "@/modules/landing/components/Marquee";
import Statement from "@/modules/landing/components/Statement";
import Projects from "@/modules/landing/components/Projects";
import Project1 from "@/modules/landing/components/Projects/Project1";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Marquee />
      <Statement />
      <Projects />
      <Project1 />
      <Footer />
    </main>
  );
}
