"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { OPEN_SETTINGS_EVENT, getConsent, setConsent, type Consent } from "@/lib/consent";

// Asks before any analytics cookies are set. Accept and Reject are equally
// prominent, and the footer's "Cookie settings" link reopens it.
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Wait for the intro animation so the banner doesn't cover it.
    const t = setTimeout(() => setOpen(getConsent() === null), 2200);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => {
      clearTimeout(t);
      window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
    };
  }, []);

  const choose = (value: Consent) => {
    setConsent(value);
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6 z-90 sm:max-w-sm rounded-2xl border border-white/10 bg-brand-dark/95 p-6 text-brand-light shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md font-dm-sans"
        >
          <p className="text-[15px] font-medium">Cookies</p>
          <p className="mt-2 text-[14px] leading-[1.5] text-text-gray-light">
            We&apos;d like to use Google Analytics cookies to see how people
            use this site, so we can improve it. They&apos;re only set if you
            accept. You can change this any time under Cookie settings.{" "}
            <Link href="/privacy" className="text-brand-light underline underline-offset-2 hover:text-brand-lime">
              Privacy policy
            </Link>
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-full border border-brand-light bg-brand-light px-4 py-2.5 text-sm font-medium text-black transition-colors duration-300 hover:bg-white"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-full border border-brand-lime bg-brand-lime px-4 py-2.5 text-sm font-medium text-black transition-shadow duration-300 hover:shadow-[0_0_25px_rgba(214,255,67,0.35)]"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
