"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { Logo } from "../svgs";
import { cn } from "../../lib/utild";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    // Hide header when scrolling down past 150px, but show when scrolling up
    if (previous && latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    // Set isScrolled when scroll position is greater than 30px
    setIsScrolled(latest > 30);
  });

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const showFloating = isScrolled && !isOpen;

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-120%" }, // Slide up a bit more to clear any shadows or top spacing
      }}
      animate={hidden && !isOpen ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed left-0 right-0 mx-auto z-50 transition-all duration-500 ease-in-out ",
        showFloating
          ? "top-4 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-375 rounded-full border border-white/10 bg-bg-deep-black/60 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-4 md:px-6"
          : "top-0 w-full max-w-full rounded-none border-b border-white/5 bg-bg-deep-black/80 backdrop-blur-md px-0",
      )}
    >
      <div
        className={cn(
          "w-full max-w-375 mx-auto px-6 lg:px-8 flex items-center justify-between transition-all duration-500",
          showFloating ? "h-16" : "h-26",
        )}
      >
        {/* Logo (Left) */}
        <div className="shrink-0 flex items-center transition-transform duration-300 hover:scale-105">
          <Logo />
        </div>

        {/* Desktop Nav (Center) */}
        <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href.replace("#", "")}
              smooth={true}
              duration={500}
              spy={true}
              className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/5 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 rounded-full bg-brand-lime group-hover:w-1/2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
            </Link>
          ))}
        </nav>

        {/* Right Side Status & CTA (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 text-xs text-gray-300">
            <span className="relative h-2.5 w-2.5 flex items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lime opacity-85"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-lime"></span>
            </span>
            Available for selected work
          </div>
          <button className="px-5 py-2 border border-white/10 hover:border-brand-lime/30 bg-white/5 text-white text-sm font-medium rounded-full hover:bg-brand-lime hover:text-black shadow-[0_0_15px_rgba(214,255,67,0.05)] hover:shadow-[0_0_25px_rgba(214,255,67,0.35)] transition-all duration-500">
            Start a project
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl z-50 p-2 hover:bg-white/5 rounded-full transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute top-0 left-0 w-full bg-bg-deep-black flex flex-col items-center justify-center gap-8 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                <Link
                  to={link.href.replace("#", "")}
                  smooth={true}
                  duration={500}
                  spy={true}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-8 py-3 border border-white/20 hover:border-brand-lime bg-white/5 text-white hover:bg-brand-lime hover:text-black text-base font-medium rounded-full transition-all duration-300"
            >
              Start a project
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
