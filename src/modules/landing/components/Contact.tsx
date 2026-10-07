"use client";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utild";
import {
  CALENDLY_URL,
  OTHER_SERVICE,
  SELECT_PACKAGE_EVENT,
  TIERS,
  TIMELINES,
  categories,
  priceFor,
  usd,
  type SelectPackageDetail,
} from "@/lib/packages";

const EMPTY = { name: "", email: "", company: "", service: "", tier: "", timeline: "", details: "", website: "" };
type Form = typeof EMPTY;

const labelClass = "mb-2 text-[9px] tracking-[0.08em] text-text-gray-light uppercase font-ibm-plex-mono";
const inputClass =
  "w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.2] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 placeholder:text-brand-gray font-dm-sans";

function Pill({ active, onClick, children }: { active: boolean; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "px-4 py-2 rounded-full border text-[13px] font-dm-sans transition-all duration-300",
        active
          ? "bg-brand-lime text-black border-brand-lime shadow-[0_0_20px_rgba(214,255,67,0.2)]"
          : "border-white/15 text-gray-300 hover:text-white hover:border-brand-lime/40",
      )}
    >
      {children}
    </button>
  );
}

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Form>(EMPTY);
  const set = (k: keyof Form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  // "Choose" in the Pricing section pre-selects the package and tier here
  useEffect(() => {
    const onSelect = (e: Event) => {
      const { service, tier } = (e as CustomEvent<SelectPackageDetail>).detail;
      setForm((f) => ({ ...f, service, tier }));
    };
    window.addEventListener(SELECT_PACKAGE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_PACKAGE_EVENT, onSelect);
  }, []);

  const onField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => set(e.target.name as keyof Form, e.target.value);
  const isPackage = !!form.service && form.service !== OTHER_SERVICE;
  const price = isPackage && form.tier ? priceFor(form.service, form.tier) : null;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name.trim()) return toast.warning("Please add your name.", { position: "top-center" });
    if (!form.email.trim()) return toast.warning("Please add your email address.", { position: "top-center" });
    if (form.details.trim().length < 10)
      return toast.warning("Please tell us a little more about the project.", { position: "top-center" });

    setLoading(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      toast.success("Thanks! We've got your requirements and will reply within 1–2 working days.", {
        position: "top-center",
      });
      setForm(EMPTY);
    } catch (err) {
      toast.error((err as Error).message, { position: "top-center" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-brand-dark py-24 md:py-32">
      <ToastContainer theme="dark" />
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
        {/* Left Side: Heading */}
        <div className="lg:sticky lg:top-32">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ amount: 0.3 }}
            className="text-[10px] tracking-widest uppercase text-brand-lime block mb-12 font-ibm-plex-mono"
          >
            START A PROJECT
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ amount: 0.3 }}
            className="lg:tracking-[-4px] leading-[100%] text-4xl md:text-6xl lg:text-[90px] text-text-brand-light font-dm-sans max-w-124 font-bold"
          >
            Have something{" "}
            <span className="font-georgia italic font-normal text-brand-lime">ambitious</span> <br />
            in mind?
          </motion.h2>

          <p className="mt-8 text-[17px] text-text-gray-light max-w-sm font-dm-sans">
            Tell us what you need and we&apos;ll come back with next steps. Prefer to talk it through?{" "}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light underline decoration-brand-lime/60 underline-offset-4 hover:text-brand-lime transition-colors duration-300"
            >
              Book a call
            </a>
          </p>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.1 }}
          className="w-full"
        >
          <form className="flex flex-col" onSubmit={handleSubmit} noValidate>
            {/* Honeypot: hidden from people, filled in by bots */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={onField}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <label className="flex flex-col">
                <span className={labelClass}>Your name *</span>
                <input name="name" value={form.name} onChange={onField} placeholder="Full name" autoComplete="name" className={inputClass} />
              </label>
              <label className="flex flex-col">
                <span className={labelClass}>Email address *</span>
                <input type="email" name="email" value={form.email} onChange={onField} placeholder="you@company.com" autoComplete="email" className={inputClass} />
              </label>
            </div>

            <label className="flex flex-col mt-8">
              <span className={labelClass}>Company or website</span>
              <input name="company" value={form.company} onChange={onField} placeholder="Optional" autoComplete="organization" className={inputClass} />
            </label>

            {/* Service */}
            <fieldset className="mt-10">
              <legend className={labelClass}>What do you need?</legend>
              <div className="mt-2 space-y-4">
                {categories.map((c) => (
                  <div key={c.title}>
                    <p className="mb-2 text-[11px] text-brand-gray font-ibm-plex-mono">{c.title}</p>
                    <div className="flex flex-wrap gap-2">
                      {c.packages.map((p) => (
                        <Pill
                          key={p.name}
                          active={form.service === p.name}
                          onClick={() => setForm((f) => ({ ...f, service: f.service === p.name ? "" : p.name }))}
                        >
                          {p.name}
                        </Pill>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2">
                  <Pill
                    active={form.service === OTHER_SERVICE}
                    onClick={() => setForm((f) => ({ ...f, service: f.service === OTHER_SERVICE ? "" : OTHER_SERVICE, tier: "" }))}
                  >
                    {OTHER_SERVICE}
                  </Pill>
                </div>
              </div>
            </fieldset>

            {/* Tier: only for a listed package */}
            <AnimatePresence initial={false}>
              {isPackage && (
                <motion.fieldset
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <legend className={cn(labelClass, "pt-8")}>Tier</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {TIERS.map((t) => (
                      <Pill key={t} active={form.tier === t} onClick={() => set("tier", form.tier === t ? "" : t)}>
                        {t} · {usd(priceFor(form.service, t) ?? 0)}
                      </Pill>
                    ))}
                    <Pill active={!form.tier} onClick={() => set("tier", "")}>
                      Not sure yet
                    </Pill>
                  </div>
                </motion.fieldset>
              )}
            </AnimatePresence>

            {/* Timeline */}
            <fieldset className="mt-8">
              <legend className={labelClass}>Timeline</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {TIMELINES.map((t) => (
                  <Pill key={t} active={form.timeline === t} onClick={() => set("timeline", form.timeline === t ? "" : t)}>
                    {t}
                  </Pill>
                ))}
              </div>
            </fieldset>

            {/* Requirements */}
            <label className="flex flex-col mt-10">
              <span className={labelClass}>Your requirements *</span>
              <textarea
                name="details"
                value={form.details}
                onChange={onField}
                placeholder="What are you building, who is it for, and what must it do? Add links to anything you like."
                rows={4}
                className={cn(inputClass, "leading-[1.35] resize-none")}
              />
            </label>

            {/* Bottom row */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-4 mt-6">
              <p className="text-[9px] tracking-[0.08em] text-text-gray-light font-ibm-plex-mono">
                {price ? `${form.service}, ${form.tier}: ${usd(price)}. ` : ""}Typical response within 1–2 working days.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="self-start sm:self-auto px-5 py-3 border border-white/10 hover:border-brand-lime/30 hover:bg-white/5 hover:text-white text-sm font-medium rounded-full bg-brand-lime text-black shadow-[0_0_15px_rgba(214,255,67,0.05)] hover:shadow-[0_0_25px_rgba(214,255,67,0.35)] transition-all duration-500 flex items-center gap-3 disabled:opacity-50"
              >
                <span className="text-sm whitespace-nowrap">{loading ? "Sending..." : "Send requirements"}</span>
                <FiArrowDownRight />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
