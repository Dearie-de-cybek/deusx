"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
 
  Globe,
  Database,
  Search,
  Zap,
  Lock,
  Terminal,
  ChevronRight,
  Activity,
} from "lucide-react";

// ─── DATA STRUCUTRE: CAPABILITY CLUSTERS ─────────────────────────────────────

// ─── ANIMATION VARIANTS ──────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

const GridBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
        backgroundSize: '40px 40px' 
      }} 
    />
    <div className="absolute inset-0 bg-radial-at-t from-blue-50/50 via-transparent to-transparent" />
  </div>
);

export default function HomePage() {
 
  return (
    <main className="bg-white antialiased selection:bg-blue-600 selection:text-white">
      
      {/* ══════════════════════════════════════════════════════════════════════
          HERO SECTION: AUTHORITY & PRECISION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20">
        <GridBackground />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="h-[1px] w-12 bg-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600">
              Technical Partnership Studio
            </span>
          </motion.div>

          <motion.h1 
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl text-slate-900 font-medium leading-[0.95] tracking-tight mb-8"
            style={{ fontSize: "clamp(48px, 8vw, 110px)", fontFamily: "var(--font-dm-serif)" }}
          >
            Engineering <br />
            <span className="text-slate-400 italic">Complex</span> Systems.
          </motion.h1>

          <motion.p 
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-xl text-lg md:text-xl text-slate-500 leading-relaxed mb-12"
          >
            We are a high-discipline engineering team that solves difficult technical problems. 
            No templates. No generic shortcuts. Just precise, scalable architecture.
          </motion.p>

          <motion.div 
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <button className="bg-slate-900 text-white px-8 py-4 rounded-sm font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center gap-3">
              Start a Conversation
              <ArrowRight size={16} />
            </button>
            <button className="border border-slate-200 px-8 py-4 rounded-sm font-medium hover:bg-slate-50 transition-all">
              View Capabilities
            </button>
          </motion.div>
        </div>

        {/* Technical Detail: Animated Node (Bottom Right) */}
        <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
            <pre className="text-[10px] leading-tight text-blue-600 font-mono">
                {`
                [SYSTEM_READY]
                > ARCH: X64_DISTR
                > NODES: ACTIVE
                > LATENCY: 12ms
                > SEC_LEVEL: HIGH
                `}
            </pre>
        </div>
      </section>

  
      {/* ══════════════════════════════════════════════════════════════════════
          THE "WHY" SECTION: CALM AUTHORITY
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="container mx-auto max-w-4xl px-6 text-center relative z-10">
            <motion.div 
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 mb-8"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Engineering Discipline</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-10" style={{ fontFamily: "var(--font-dm-serif)" }}>
                "Most agencies ship code. <br />
                <span className="text-blue-500 italic">We ship assets."</span>
            </h2>
            
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
                DeusX was founded on the principle that software should be a force multiplier, not a liability. 
                We build with the assumption that your system will need to handle 100x today’s load tomorrow.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-slate-800">
                {[
                    { label: "Architecture", val: "Clean" },
                    { label: "Security", val: "Hardened" },
                    { label: "Performance", val: "Optimized" },
                    { label: "Codebase", val: "Audit-Ready" },
                ].map((stat, i) => (
                    <div key={i}>
                        <div className="text-xs uppercase tracking-tighter text-slate-500 mb-1">{stat.label}</div>
                        <div className="text-sm font-bold text-white uppercase tracking-widest">{stat.val}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          FINAL CALL TO ACTION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-white">
        <div className="container mx-auto max-w-6xl px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-medium text-slate-900 mb-8" style={{ fontFamily: "var(--font-dm-serif)" }}>
                Build it properly.
            </h2>
            <p className="text-slate-500 mb-12">Available for select engineering partnerships in 2024.</p>
            <button className="bg-blue-600 text-white px-12 py-5 rounded-sm font-bold hover:bg-slate-900 transition-all duration-300">
                Inquire via Terminal
            </button>
        </div>
      </section>

    </main>
  );
}