/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { FiArrowDownRight } from "react-icons/fi";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    url: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!formData.fullName) {
      toast.warning("Full name must not be empty.", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.email) {
      toast.warning("Email must not be empty.", {
        position: "top-center",
      });
      return false;
    }
    if (!formData.message) {
      toast.warning("Message must not be empty.", {
        position: "top-center",
      });
      return false;
    }
    setLoading(true);
    const csrf = () => axios.get("/sanctum/csrf-cookie");
    if (await csrf()) {
      try {
        const response = await axios.post(
          "/api/workreel-services/contact-us",
          formData,
        );
        toast.success(response.data, {
          position: "top-center",
        });
        setFormData({
          fullName: "",
          email: "",
          message: "",
          url: "",
        });
        setLoading(false);
      } catch (error: any) {
        toast.error(error?.response?.data?.errors?.email[0], {
          position: "top-center",
        });
        setLoading(false);
      }
    }
  };

  return (
    <section className="bg-brand-dark py-24 md:py-32">
      <ToastContainer />
      <div className="max-w-375 mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left Side: Heading */}
        <div>
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
            <span className="font-georgia italic font-normal text-brand-lime">
              ambitious
            </span>{" "}
            <br />
            in mind?
          </motion.h2>
        </div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.3 }}
          className="w-full"
        >
          <form className="flex flex-col" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Your name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Name or company"
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.2] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 placeholder:text-brand-gray"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mt-8">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Email address
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.2] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 placeholder:text-brand-gray"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Project description */}
            <div className="flex flex-col mt-8">
              <label
                className="mb-2 text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                What are you building?
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="A short overview of the product or challenge"
                rows={2}
                className="w-full bg-transparent border-0 border-b border-[#373C45] text-brand-light text-[20px] leading-[1.35] pb-5 focus:outline-none focus:ring-0 focus:border-brand-lime transition-colors duration-300 resize-none placeholder:text-brand-gray "
                style={{ fontFamily: "var(--font-dm-sans)" }}
              />
            </div>

            {/* Bottom row */}
            <div className="flex items-center justify-between mt-6">
              <p
                className="text-[9px] tracking-[0.08em] text-text-gray-light"
                style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
              >
                Typical response within 1-2 working days.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="px-2 md:px-5 py-3 border border-white/10 hover:border-brand-lime/30 hover:bg-white/5 hover:text-white text-sm font-medium rounded-full bg-brand-lime text-black shadow-[0_0_15px_rgba(214,255,67,0.05)] hover:shadow-[0_0_25px_rgba(214,255,67,0.35)] transition-all duration-500 flex items-center gap-2 md:gap-3 disabled:opacity-50"
              >
                <span className="text-sm whitespace-nowrap">
                  {loading ? "Sending..." : "Send enquiry"}
                </span>

                <FiArrowDownRight />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
