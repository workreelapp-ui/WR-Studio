"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Logo } from "../svgs";
import Link from "next/link";

export function Footer() {
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.2 });

  return (
    <motion.footer
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-brand-dark text-white border-t border-white/5 z-10 relative"
    >
      <div className="max-w-375 mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left: Brand */}
          <div className="shrink-0 flex items-center transition-transform duration-300 hover:scale-105">
            <Logo />
          </div>

          {/* Center: Navigation Links */}
          <nav className="grid grid-cols-2 gap-x-10 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-lime group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right: Contact Info */}
          <div className="md:text-right">
            <a
              href="mailto:hello@workreel.studio"
              className="text-base text-white hover:text-yellow-400 transition-colors duration-200 font-medium block"
            >
              hello@workreel.studio
            </a>
            <p className="text-sm text-gray-500 mt-1 max-w-xs md:ml-auto">
              Available for selected freelance work and collaborations.
            </p>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600 tracking-wider">
            © 2026 WR Studio. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 tracking-widest uppercase">
            Design · Build · Automate
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
