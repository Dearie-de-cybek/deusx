"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowRightCircle,
  Play,
  Layers,
  Cpu,
  Smartphone,
  Cloud,
  Sparkles,
  ShieldCheck,
  Compass,
  Rocket,
  ChevronRight,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const services = [
  {
    title: "Web Development",
    stack: "Next.js · React · Node.js",
    description:
      "High-performance platforms built for absolute credibility and conversion.",
    Icon: Layers,
    accent: "#2563EB",
    num: "01",
  },
  {
    title: "SaaS Products",
    stack: "MVP · Scalable Systems",
    description:
      "From early validation to production-grade infrastructure—owned end to end.",
    Icon: Cpu,
    accent: "#4F46E5",
    num: "02",
  },
  {
    title: "Mobile Apps",
    stack: "React Native · Flutter",
    description:
      "Cross-platform apps built for retention, usability, and long-term growth.",
    Icon: Smartphone,
    accent: "#7C3AED",
    num: "03",
  },
  {
    title: "Cloud & DevOps",
    stack: "AWS · CI/CD · Kubernetes",
    description:
      "Deployment pipelines and cloud architecture that scale without friction.",
    Icon: Cloud,
    accent: "#0369A1",
    num: "04",
  },
  {
    title: "AI Solutions",
    stack: "Automation · Workflows",
    description:
      "Practical AI built to perform—not novelty, not hype.",
    Icon: Sparkles,
    accent: "#9333EA",
    num: "05",
  },
  {
    title: "Cyber Security",
    stack: "Audits · Web3 · Trust",
    description:
      "Resilient architectures. Secure by design. No compromises.",
    Icon: ShieldCheck,
    accent: "#0D9488",
    num: "06",
  },
];

const steps = [
  {
    num: "01",
    Icon: Compass,
    title: "Diagnose",
    description:
      "We study the business, users, and technical constraints before writing a single line of code.",
  },
  {
    num: "02",
    Icon: Layers,
    title: "Architect",
    description:
      "We define product structure, architecture, scope, and experience with precision.",
  },
  {
    num: "03",
    Icon: Rocket,
    title: "Ship",
    description:
      "We build with discipline, refine from feedback, and launch systems built to last.",
  },
];

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: d, ease: "easeOut" },
  }),
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main className="bg-white antialiased overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════════
          HERO
          Structure:
            - White bg
            - Text block: centered, top portion
            - Visual strip: full-viewport-width row
                left cube  |  centered phone (overflows below)  |  right cube
          The section itself does NOT clip overflow so phone bleeds into services.
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative w-full bg-white" style={{ overflow: "visible" }}>

        {/* ── Atmospheric glow — lives behind phone ── */}
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-0"
          style={{
            top: "320px",
            width: "min(800px, 90vw)",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(37,99,235,0.09) 0%, rgba(124,58,237,0.06) 45%, transparent 72%)",
            filter: "blur(50px)",
          }}
        />

        {/* ── Subtle top gradient ── */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64 z-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(219,234,254,0.15) 0%, transparent 100%)",
          }}
        />

        {/* ── Text block (centered) ── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-36">

          {/* Eyebrow */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-6 flex items-center gap-3"
          >
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
              DeusX Engineering
            </span>
            <div className="h-px w-8 bg-blue-600" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="mb-6 font-black leading-[0.93] tracking-[-0.04em] text-slate-900"
            style={{
              fontSize: "clamp(52px, 9vw, 116px)",
              fontFamily: "'DM Serif Display', 'Playfair Display', Georgia, serif",
            }}
          >
            Built for
            <br />
            <span
              style={{
                background: "linear-gradient(95deg, #2563EB 10%, #7C3AED 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              momentum.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.17}
            className="mb-10 max-w-[400px] text-[15px] font-normal leading-[1.75] text-slate-500"
          >
            Engineering teams who turn serious ideas into serious products.
            No templates. No noise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.26}
            className="flex flex-col sm:flex-row items-center gap-3"
          >
            <button
              className="group flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:shadow-blue-300 hover:shadow-xl active:scale-95 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
              }}
            >
              Book a Call
              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </button>
            <button className="group flex items-center gap-2.5 rounded-full px-5 py-3.5 text-[14px] font-semibold text-slate-600 transition hover:text-blue-600 cursor-pointer">
              How it works
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition group-hover:bg-blue-600 group-hover:text-white">
                <Play size={11} fill="currentColor" />
              </span>
            </button>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            VISUAL STRIP — full width, position:relative
            Left cube sits flush left edge (left:0)
            Right cube sits flush right edge (right:0)
            Phone sits dead-center, extends below section
        ══════════════════════════════════════════════════════════ */}
    {/* ── VISUAL STRIP REFINED ── */}
        <div
          className="relative w-full z-10"
          style={{
            marginTop: "40px",
            /* 1. Removed 'height' constraint. 
               2. Set to 'visible' so the phone can hang out of the bottom. 
            */
            height: "120px", 
            overflow: "visible", 
          }}
        >
          {/* LEFT CUBE */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="pointer-events-none absolute left-0 z-20"
            style={{ top: "0%", width: "clamp(100px, 12vw, 190px)" }}
          >
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/cubeleft.png" alt="" width={240} height={240} className="object-contain w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* RIGHT CUBE */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.44}
            className="pointer-events-none absolute right-0 z-20"
            style={{ top: "15%", width: "clamp(130px, 15vw, 240px)" }}
          >
            <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
              <Image src="/cuberight.png" alt="" width={320} height={320} className="object-contain w-full h-auto" />
            </motion.div>
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
            /* The 'top-0' ensures it starts at the top of the strip, 
               and because the parent has no height/overflow, 
               it will flow right into the next section.
            */
            className="absolute left-1/2 -translate-x-1/2 top-0 z-10"
            style={{ width: "clamp(280px, 32vw, 480px)" }}
          >
            <Image
              src="/device-mockup.png"
              alt="DeusX Platform"
              width={800}
              height={1600}
              priority
              className="object-contain w-full h-auto"
              style={{ filter: "drop-shadow(0 60px 100px rgba(0,0,0,0.12))" }}
            />
          </motion.div>
        </div>
      </section>
      {/* End hero — phone bleeds into section below */}

      


      {/* ══════════════════════════════════════════════════════════════════════
          SERVICES
          Top padding is large enough so the phone overflow clears content.
          Phone bleeds ~180–220px into this section on desktop.
          paddingTop uses clamp so it scales gracefully.
      ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative bg-[#F4F6FB] overflow-hidden"
        style={{
          paddingTop: "clamp(200px, 24vw, 360px)",
          paddingBottom: "clamp(72px, 10vw, 140px)",
        }}
      >
        {/* White-to-section-bg fade — masks phone bottom edge cleanly */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 z-10"
          style={{
            height: "clamp(160px, 20vw, 280px)",
            background:
              "linear-gradient(180deg, #ffffff 0%, #ffffff 35%, transparent 100%)",
          }}
        />

        <div className="container mx-auto max-w-[1180px] px-6 relative z-20">

          {/* Header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-4 flex items-center gap-3"
              >
                <div className="h-px w-6 bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
                  What we build
                </span>
              </motion.div>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.05}
                className="font-black leading-[0.93] tracking-[-0.04em] text-slate-900"
                style={{
                  fontSize: "clamp(32px, 4.5vw, 58px)",
                  fontFamily:
                    "'DM Serif Display', 'Playfair Display', Georgia, serif",
                }}
              >
                Every layer.
                <br />
                Every system.
              </motion.h2>
            </div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              className="max-w-xs text-[13px] leading-[1.8] text-slate-500"
            >
              From frontend to infrastructure—we own the stack and the outcome.
            </motion.p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, stack, description, Icon, accent, num }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-30px" }}
                custom={i * 0.07}
                className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] rounded-t-2xl scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: accent }}
                />
                {/* Hover bg tint */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${accent}08 0%, transparent 65%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: accent }}
                    >
                      <Icon size={16} strokeWidth={2} />
                    </div>
                    <span
                      className="text-[10px] font-bold tabular-nums"
                      style={{ color: `${accent}44` }}
                    >
                      {num}
                    </span>
                  </div>

                  <h3 className="mb-1 text-[17px] font-bold tracking-tight text-slate-900">
                    {title}
                  </h3>
                  <p
                    className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: accent }}
                  >
                    {stack}
                  </p>
                  <p className="text-[13px] leading-[1.75] text-slate-500 flex-1">
                    {description}
                  </p>

                  <div
                    className="mt-5 translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    style={{ color: accent }}
                  >
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12">
            <button className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 transition hover:text-slate-800 cursor-pointer">
              All services
              <ArrowRightCircle
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          QUOTE / DARK BAND
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#080F1E] py-36 md:py-52">
        {/* Left glow */}
        <div
          className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: 0.18,
          }}
        />

        {/* Floating cube right */}
        <motion.div
          animate={{ y: [0, -18, 0], rotate: [-2, 4, -2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -top-12 right-[4%] z-10"
          style={{ width: "clamp(140px, 16vw, 270px)", opacity: 0.3 }}
        >
          <Image
            src="/cuberight.png"
            alt=""
            width={400}
            height={400}
            className="object-contain w-full h-auto"
          />
        </motion.div>

        <div className="container relative z-10 mx-auto max-w-[1080px] px-6">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="h-px w-6 bg-blue-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-400">
              Our belief
            </span>
          </motion.div>

          <motion.blockquote
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="font-light leading-[1.3] tracking-[-0.02em] text-white"
            style={{
              fontSize: "clamp(26px, 4vw, 56px)",
              fontFamily:
                "'DM Serif Display', 'Playfair Display', Georgia, serif",
              maxWidth: "20ch",
            }}
          >
            "Serious products deserve{" "}
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(95deg, #60A5FA 0%, #A78BFA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              serious engineering.
            </em>
            <br />
            No shortcuts. No bloat."
          </motion.blockquote>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="mt-10 h-px w-24 origin-left"
            style={{
              background: "linear-gradient(90deg, #3B82F6 0%, transparent 100%)",
            }}
          />
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            className="mt-4 text-sm text-blue-500/50"
          >
            — The DeusX Team
          </motion.p>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-28 md:py-40">
        <div className="container mx-auto max-w-[1180px] px-6">

          <div className="mb-16">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-4 flex items-center gap-3"
            >
              <div className="h-px w-6 bg-blue-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
                The process
              </span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.05}
              className="font-black leading-[0.93] tracking-[-0.04em] text-slate-900"
              style={{
                fontSize: "clamp(32px, 4.5vw, 58px)",
                fontFamily:
                  "'DM Serif Display', 'Playfair Display', Georgia, serif",
              }}
            >
              No wasted motion.
            </motion.h2>
          </div>

          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Connector line */}
            <div
              className="pointer-events-none absolute left-[calc(16.66%+28px)] right-[calc(16.66%+28px)] top-[27px] hidden h-px md:block"
              style={{
                background:
                  "linear-gradient(90deg, rgba(37,99,235,0.3) 0%, rgba(124,58,237,0.3) 50%, rgba(37,99,235,0.1) 100%)",
              }}
            />

            {steps.map(({ num, Icon, title, description }, i) => (
              <React.Fragment key={title}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.14}
                  className="relative flex flex-col"
                >
                  <div
                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-full text-sm font-bold text-white relative z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                      boxShadow: "0 8px 24px rgba(37,99,235,0.26)",
                    }}
                  >
                    {num}
                  </div>

                  <Icon
                    size={20}
                    strokeWidth={1.5}
                    className="mb-4 text-slate-300"
                  />

                  <h3
                    className="mb-3 text-[22px] font-black tracking-[-0.03em] text-slate-900"
                    style={{
                      fontFamily:
                        "'DM Serif Display', 'Playfair Display', Georgia, serif",
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-[13px] leading-[1.8] text-slate-500">
                    {description}
                  </p>
                </motion.div>

                {i < steps.length - 1 && (
                  <div className="flex justify-center text-slate-200 md:hidden">
                    <ChevronRight
                      className="rotate-90"
                      size={26}
                      strokeWidth={1.5}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-14">
            <motion.button
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.5}
              className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400 transition hover:text-slate-800 cursor-pointer"
            >
              Learn more
              <ArrowRightCircle
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#F4F6FB] py-24 md:py-36">
        <div className="container mx-auto max-w-[1180px] px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative overflow-hidden rounded-3xl bg-white border border-slate-200/80 shadow-sm"
            style={{ padding: "clamp(48px, 7vw, 96px)" }}
          >
            {/* Inner glow */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-48"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.10) 0%, transparent 70%)",
              }}
            />

            {/* Cube deco */}
            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 4, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -bottom-10 -right-10 select-none opacity-50"
              style={{ width: "clamp(120px, 14vw, 200px)" }}
            >
              <Image
                src="/cuberight.png"
                alt=""
                width={300}
                height={300}
                className="object-contain w-full h-auto"
              />
            </motion.div>

            <div className="relative z-10 flex flex-col items-start max-w-2xl">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mb-5 flex items-center gap-3"
              >
                <div className="h-px w-6 bg-blue-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-blue-600">
                  Start building
                </span>
              </motion.div>

              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.08}
                className="mb-5 font-black leading-[0.93] tracking-[-0.04em] text-slate-900"
                style={{
                  fontSize: "clamp(32px, 5vw, 66px)",
                  fontFamily:
                    "'DM Serif Display', 'Playfair Display', Georgia, serif",
                }}
              >
                Ready to move
                <br />
                <span
                  style={{
                    background:
                      "linear-gradient(95deg, #2563EB 10%, #7C3AED 90%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  faster?
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.16}
                className="mb-10 max-w-sm text-[14px] leading-[1.8] text-slate-500"
              >
                One conversation is all it takes. Let's figure out exactly what
                your product needs.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.24}
                className="flex flex-col sm:flex-row items-start gap-3"
              >
                <button
                  className="group flex items-center gap-2 rounded-full px-8 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:shadow-blue-300 hover:shadow-xl active:scale-95 cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(135deg, #2563EB 0%, #4F46E5 100%)",
                  }}
                >
                  Book a Call
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>
                <button className="rounded-full border border-slate-200 px-8 py-3.5 text-[14px] font-semibold text-slate-600 transition hover:bg-slate-50 hover:border-slate-300 active:scale-95 cursor-pointer">
                  View Services
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}