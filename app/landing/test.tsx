"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  ShieldCheck,
  Zap, 
  Cpu,
  Terminal, 
  ChevronRight,
  Activity,
  Database,
  Code2,
  Lock,
  Boxes,
  Server
} from "lucide-react";

// ─── VISUAL COMPONENTS ──────────────────────────────────────────────────────

const SystemMapHero = () => (
  <div className="relative w-full h-full min-h-[500px] flex items-center justify-center pointer-events-none select-none">
    <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-70">
      {/* Structural Rings */}
      <circle cx="300" cy="300" r="120" stroke="#E2E8F0" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="220" stroke="#F1F5F9" strokeWidth="0.5" />
      
      {/* Animated Path 01 */}
      <motion.circle
        cx="300" cy="300" r="120"
        stroke="#2563EB" strokeWidth="1"
        strokeDasharray="20 180"
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Pulsing Nodes */}
      {[
        { x: 300, y: 180, delay: 0 },
        { x: 404, y: 360, delay: 0.5 },
        { x: 196, y: 360, delay: 1 },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r="3" fill="#2563EB" />
          <motion.circle 
            cx={node.x} cy={node.y} r="8" stroke="#2563EB" strokeWidth="0.5"
            animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
          />
        </g>
      ))}

      {/* Connection Lines */}
      <motion.path 
        d="M300 180 L404 360 L196 360 Z" 
        stroke="#CBD5E1" strokeWidth="0.5"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </svg>
    
    {/* Data Floating Text */}
    <div className="absolute inset-0 font-mono text-[9px] text-slate-400">
      <motion.div 
        animate={{ y: [0, -40], opacity: [0, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-[40%] left-[20%] text-blue-600 font-bold"
      >
        // SYST_READY_V2
      </motion.div>
      <motion.div 
        animate={{ y: [0, -30], opacity: [0, 1, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute top-[60%] right-[15%]"
      >
        LOAD_BAL: ACTIVE
      </motion.div>
    </div>
  </div>
);

// ─── DATA ────────────────────────────────────────────────────────────────────

const capabilities = [
  {
    category: "Product Engineering",
    icon: Cpu,
    description: "Building resilient, high-scale technical foundations for serious platforms.",
    tag: "UNIT_01",
    items: [
      { title: "FinTech Development", details: "Ledger systems, payment rails, and high-compliance architecture." },
      { title: "Modern Backends", details: "Distributed systems built for sub-second latency and infinite scale." },
      { title: "Systems Integration", details: "Connecting fragmented legacy stacks into unified, high-performance flows." }
    ]
  },
  {
    category: "Technology Leadership",
    icon: Activity,
    description: "Bridging the gap between business objectives and engineering reality.",
    tag: "UNIT_02",
    items: [
      { title: "Fractional CTO", details: "Executive-level technical strategy without the full-time overhead." },
      { title: "E2E Partnership", details: "Taking products from napkin sketches to series-A ready infrastructure." },
      { title: "Architecture Strategy", details: "Designing systems that won't require a total rewrite in 12 months." }
    ]
  },
  {
    category: "Trust & Infrastructure",
    icon: ShieldCheck,
    description: "Hardening your infrastructure against the modern threat landscape.",
    tag: "UNIT_03",
    items: [
      { title: "Cybersecurity Audits", details: "Deep-packet inspection and penetration testing for critical systems." },
      { title: "Cloud Modernization", details: "Migrating legacy technical debt to secure, automated cloud native envs." },
      { title: "Software Quality Audit", details: "Root-cause analysis for failing performance and architectural rot." }
    ]
  }
];

const principles = [
  { title: "Scalability First", desc: "We design with the assumption that your load will 100x.", icon: Zap },
  { title: "Secure by Design", desc: "Security isn't a feature; it's the foundation of every line written.", icon: Lock },
  { title: "Architecture Integrity", desc: "We build systems that are maintainable a decade from now.", icon: Boxes },
  { title: "Clarity over Complexity", desc: "Clean code and documentation are the marks of seniority.", icon: Terminal },
];

// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className="w-4 h-[1px] bg-blue-600" />
    <span className="text-xs font-mono font-bold uppercase tracking-[0.4em] text-slate-500">{text}</span>
  </div>
);

export default function HomePage() {
  const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  return (
    <main className="bg-white selection:bg-blue-600 selection:text-white antialiased">
      
      {/* ══════════════════════════════════════════════════════════════════════
          HERO: THE ARCHITECTURAL OPENING
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 border-b border-slate-100 overflow-hidden">
        {/* Dynamic Grid Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />
        
        <div className="container relative z-10 px-6 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 px-4 py-2 mb-10 border border-slate-200 bg-white/80 backdrop-blur-sm"
            >
              <Activity size={14} className="text-blue-600" />
              <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-slate-500">
                Operational Status: Engineering Elite
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-8xl lg:text-[115px] font-medium tracking-tighter leading-[0.85] mb-12 text-slate-900"
              style={{ fontFamily: "var(--font-dm-serif), serif" }}
            >
              Engineering <br />
              <span className="text-blue-600 italic font-light">Complex</span> Systems.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-2xl text-xl md:text-2xl text-slate-500 leading-relaxed mb-12"
            >
              We design, build, and scale software platforms for companies that require absolute technical authority over generic marketing solutions.
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <button className="bg-slate-900 text-white px-10 py-5 text-base font-bold hover:bg-blue-600 transition-all flex items-center gap-3 active:scale-95 shadow-xl shadow-slate-200">
                Start a Conversation
                <ArrowUpRight size={18} />
              </button>
              <button className="border border-slate-200 px-10 py-5 text-base font-bold hover:bg-slate-50 transition-colors">
                View Capabilities
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 hidden lg:block h-full relative">
            <SystemMapHero />
          </div>
        </div>

        {/* Hero Footer: Credibility Strip */}
        <div className="absolute bottom-0 w-full border-t border-slate-100 py-10 bg-white/50 backdrop-blur-sm hidden lg:block">
          <div className="container mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              { label: "01", val: "High-Scale Infrastructure" },
              { label: "02", val: "Strategic Tech Leadership" },
              { label: "03", val: "Security & Trust Compliance" },
              { label: "04", val: "End-to-End Modernization" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-1 border-l border-slate-200 pl-6">
                <span className="text-[10px] font-mono text-blue-600 font-bold">{item.label}</span>
                <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">{item.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: WHAT WE SOLVE (CONTEXT & AUTHORITY)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionLabel text="The Standard" />
              <h2 className="text-5xl md:text-6xl font-medium tracking-tighter leading-tight mb-8">
                If your system <span className="text-blue-600 italic">matters</span>, it deserves precision.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-xl text-slate-500 leading-relaxed mb-8">
                We don’t work with templates or "dev shop" shortcuts. We partner with founders and technical leaders who are building serious assets. Whether it’s architectural rot, scaling bottlenecks, or greenfield systems that cannot fail.
              </p>
              <div className="flex gap-12 font-mono text-[11px] font-bold text-slate-400">
                <span className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> SYSTEM_RESCUE</span>
                <span className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> SCALE_READY</span>
                <span className="flex items-center gap-2"> <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> SECURITY_HARDENED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CAPABILITIES: THE THREE PILLARS (PRESERVED)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            
            {/* Left Side: Sticky Labels */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <SectionLabel text="Core Capabilities" />
              <h2 className="text-5xl font-medium text-slate-900 mb-8" style={{ fontFamily: "var(--font-dm-serif)" }}>
                Engineered for <br />Confidence.
              </h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10">
                Our services are clustered into three technical pillars designed to move the needle for growing systems.
              </p>
              <div className="space-y-4">
                {capabilities.map((cap, idx) => (
                    <div 
                        key={idx}
                        className={`text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 flex items-center gap-4 ${hoveredCapability === idx ? 'text-blue-600' : 'text-slate-300'}`}
                    >
                        <div className={`h-[1px] transition-all duration-500 ${hoveredCapability === idx ? 'w-8 bg-blue-600' : 'w-4 bg-slate-200'}`} />
                        {cap.category}
                    </div>
                ))}
              </div>
            </div>

            {/* Right Side: Large Interactive Cards */}
            <div className="lg:col-span-8 space-y-6">
              {capabilities.map((cap, idx) => (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredCapability(idx)}
                  onMouseLeave={() => setHoveredCapability(null)}
                  className="group bg-white border border-slate-200 p-10 md:p-16 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-900/5 overflow-hidden relative"
                >
                  <div className="flex items-start justify-between mb-16">
                    <cap.icon className="text-slate-900 group-hover:text-blue-600 transition-colors" size={40} strokeWidth={1.5} />
                    <span className="font-mono text-[10px] font-bold text-slate-300 tracking-tighter uppercase">{cap.tag} // SYSTEM_MODULE</span>
                  </div>

                  <h3 className="text-5xl font-medium mb-6 text-slate-900 tracking-tight">{cap.category}</h3>
                  <p className="text-xl text-slate-500 mb-16 max-w-xl leading-relaxed">{cap.description}</p>

                  <div className="space-y-2 border-t border-slate-100 pt-12">
                    {cap.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between group/item py-5 border-b border-slate-50 last:border-0 transition-colors hover:bg-slate-50/50 px-2">
                            <div className="max-w-md">
                                <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{item.details}</p>
                            </div>
                            <ChevronRight size={18} className="text-slate-200 group-hover/item:translate-x-2 group-hover/item:text-blue-600 transition-all" />
                        </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: PRINCIPLES (ESTABLISHING AUTHORITY)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionLabel text="The DeusX Way" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">
            {principles.map((p, i) => (
              <div key={i} className="bg-white p-12 transition-all hover:bg-slate-50 group">
                <p.icon className="text-slate-300 group-hover:text-blue-600 transition-colors mb-12" size={32} strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-4 text-slate-900 tracking-tight uppercase">{p.title}</h4>
                <p className="text-slate-500 leading-relaxed text-base">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          METHODOLOGY: INDUSTRIAL PRECISION (PRESERVED)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[120px] font-bold overflow-hidden whitespace-nowrap leading-none select-none">
          SYSTEM_ARCHITECTURE_V3_DEBUG_MODE_STABLE
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-4xl mb-24">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-[1px] bg-blue-500" />
              <span className="text-xs font-mono font-bold tracking-[0.4em] text-blue-500 uppercase">Operational Protocol</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter leading-[0.85] mb-12">
              Most ship code. <br />
              <span className="text-blue-500 italic font-light">We ship assets.</span>
            </h2>
            <p className="text-2xl text-slate-400 leading-relaxed max-w-2xl">
              Software is either a force multiplier or a liability. Our methodology ensures your system remains the former.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { step: "01", title: "Analyze", icon: Terminal, desc: "Deep technical audit and system constraint discovery." },
              { step: "02", title: "Architect", icon: Database, desc: "Designing for 100x scale with modular integrity." },
              { step: "03", title: "Engineer", icon: Code2, desc: "High-precision development with rigorous testing." },
              { step: "04", title: "Scale", icon: Cpu, desc: "Automated deployment and performance optimization." },
            ].map((m, i) => (
              <div key={i} className="bg-slate-900 p-12 hover:bg-slate-800 transition-all group">
                <m.icon size={28} className="text-slate-600 group-hover:text-blue-500 transition-colors mb-16" />
                <span className="text-[10px] font-mono text-slate-500 block mb-4 tracking-widest">{m.step} // DISCOVERY</span>
                <h4 className="text-2xl font-medium mb-4">{m.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          NEW: ENGAGEMENT MODELS (CLARITY FOR CLIENTS)
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <SectionLabel text="Partnership Structures" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { 
                label: "Strategic", 
                title: "Fractional CTO", 
                desc: "High-level technical roadmap, team scaling, and architectural oversight for ventures without full-time leadership." 
              },
              { 
                label: "Execution", 
                title: "Engineering Partner", 
                desc: "Taking total ownership of a mission-critical platform or greenfield product from architecture to production." 
              },
              { 
                label: "Advisory", 
                title: "Technical Audit", 
                desc: "Deep-dive analysis of existing codebases, performance bottlenecks, and security vulnerabilities with an actionable fix-map." 
              },
            ].map((model, i) => (
              <div key={i} className="p-10 border border-slate-100 hover:border-blue-200 transition-all bg-slate-50/30">
                <span className="text-[10px] font-mono font-bold text-blue-600 uppercase tracking-widest mb-6 block">[{model.label}]</span>
                <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">{model.title}</h3>
                <p className="text-lg text-slate-500 leading-relaxed">{model.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          CTA: THE HIGH-VALUE INVITATION
      ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-48 bg-slate-900 relative overflow-hidden">
        {/* Architectural Background lines for CTA */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[1px] bg-slate-700" />
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[1px] bg-slate-700" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1)_0%,transparent_70%)]" />
        </div>

        <div className="container px-6 mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 mb-10 bg-slate-900/80 backdrop-blur-md"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">Available for select partnerships Q2 2024</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-medium tracking-tighter mb-12 text-white" style={{ fontFamily: "var(--font-dm-serif), serif" }}>
              Build it <span className="italic text-blue-500 font-light">properly.</span>
            </h2>
            
            <p className="text-2xl text-slate-400 mb-16 leading-relaxed">
              If your product requires technical authority, engineer it with a team that understands scale, security, and performance.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <button className="bg-blue-600 text-white px-16 py-7 text-xl font-bold hover:bg-white hover:text-slate-900 transition-all active:scale-95 shadow-2xl shadow-blue-500/20">
                Inquire via Terminal
              </button>
              
              <div className="flex gap-12 font-mono text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                <span>Response Time: &lt; 24h</span>
                <span>Secure Connection</span>
                <span>Elite Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}