"use client";

import { Logo } from "../svgs";

export function Footer() {
  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 z-10 relative">
      <div className="max-w-375 mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left: Brand */}
          <div className="shrink-0">
            {/* Replace with your actual logo later */}
            <Logo />
          </div>

          {/* Center: Navigation Links */}
          <nav className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base text-gray-300 hover:text-white transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </a>
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
    </footer>
  );
}
