"use client";

import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {
  Send,
  Layers,
  Zap,
  ShieldCheck,
  ArrowRight,
  Building2,
  Rocket,
  Crown,
  Linkedin,
  Instagram,
  Github,
  Twitter,
  X,
  Facebook,
} from "lucide-react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Link from "next/link";

// ─── DATA: VALUE TIERS (PRICING TEASE) ──────────────────────────────────────

// ─── COMPONENT: VALUE CARD ──────────────────────────────────────────────────

// ─── MAIN SECTION ───────────────────────────────────────────────────────────

export default function EngagementSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <section className="relative py-32 lg:py-48 bg-white overflow-hidden">
        <Navbar />
        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-slate-100 rounded-full blur-[100px] opacity-60" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-24 items-start">
            {/* LEFT: VALUE & TIERS (PRICING TEASE) */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{opacity: 0, x: -30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="mb-20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-[0.5em] uppercase font-bold text-slate-400">
                    Partnership Tiers
                  </span>
                </div>
                <h2 className="text-5xl lg:text-5xl font-medium tracking-tighter  text-slate-900 mb-8">
                  We are ready to help you &<br /> answer all your{" "}
                  <span className="text-blue-600 italic font-light font-serif">
                    Questions
                  </span>
                </h2>
                <p className="max-w-xl text-xl text-slate-500 leading-relaxed font-normal">
                  We provide selective engineering expertise for teams that
                  value technical integrity over generic solutions.
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-x-12 gap-y-10">
                {/* Call Center */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="font-mono tracking-[0.4em] uppercase text-slate-500 text-sm">
                      Call Center
                    </span>
                  </div>
                  <p className="text-slate-600 text-medium font-mono">
                    +234 802 823 2297
                  </p>
                  <p className="text-slate-600 text-medium font-mono">
                    +234 816 805 9138
                  </p>
                </div>

                {/* Our Location */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="font-mono tracking-[0.4em] uppercase text-slate-500 text-sm">
                      Our Location
                    </span>
                  </div>
                  <p className="text-slate-600 text-medium font-mono">
                    Lagos, Nigeria
                  </p>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className="font-mono tracking-[0.4em] uppercase text-slate-500 text-sm">
                      Email
                    </span>
                  </div>
                  <a href="">
                    <p className="text-slate-600 hover:text-blue-600 text-medium font-mono">
                      contact@deusxlab.com
                    </p>
                  </a>
                </div>

                {/* Social Network */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span className=" font-mono tracking-[0.4em] uppercase text-slate-500 text-sm">
                      Social Network
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-1">
                    
                    {/* Facebook */}
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    {/* X / Twitter */}
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/deusx.lab?igsh=MXRuamhmenN1ejkwOQ%3D%3D&utm_source=qr"
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-600 transition-colors duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: CONTACT FORM (GLASSMORPHISM) */}
            <div className="lg:col-span-5 lg:sticky lg:top-12">
              <motion.div
                initial={{opacity: 0, x: 30}}
                whileInView={{opacity: 1, x: 0}}
                viewport={{once: true}}
                className="relative p-8 lg:p-12 border border-slate-100 bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50"
              >
                <div className="mb-10">
                  <h3 className="text-3xl font-medium tracking-tight mb-4">
                    Start the Protocol
                  </h3>
                  <p className="text-slate-500 text-sm font-mono uppercase tracking-widest">
                    Initial Response Time: &lt; 24 Hours
                  </p>
                </div>

                <form className="space-y-8">
                  {[
                    {
                      label: "Full Name",
                      type: "text",
                      placeholder: "Daro Titilola",
                    },
                    {
                      label: "Email Address",
                      type: "email",
                      placeholder: "daro@company.ai",
                    },
                    {
                      label: "Company / Organization",
                      type: "text",
                      placeholder: "Aghcloud.ai",
                    },
                  ].map((field, i) => (
                    <motion.div
                      key={i}
                      initial={{opacity: 0, y: 10}}
                      whileInView={{opacity: 1, y: 0}}
                      transition={{delay: 0.1 * i}}
                      className="relative group"
                    >
                      <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border-b border-slate-200 py-3 text-lg outline-none focus:border-blue-600 transition-all placeholder:text-slate-200"
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{opacity: 0, y: 10}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.4}}
                    className="relative group"
                  >
                    <label className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold mb-2 block transition-colors group-focus-within:text-blue-600">
                      Project Architecture / Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the system you're scaling..."
                      className="w-full bg-transparent border-b border-slate-200 py-3 text-lg outline-none focus:border-blue-600 transition-all placeholder:text-slate-200 resize-none"
                    />
                  </motion.div>

                  <motion.button
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
                    }}
                    whileTap={{scale: 0.98}}
                    className="w-full bg-slate-900 text-white py-6 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.3em] group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 h-full bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10">Start Consultation</span>
                    <Send className="relative z-10 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.button>
                </form>

                {/* Status Indicator */}
                <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-blue-600" />
                    <span className="text-[10px] font-mono text-slate-400">
                      Secure Channel Encrypted
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
