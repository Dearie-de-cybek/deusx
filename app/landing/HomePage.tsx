"use client";


import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Shield, 
   ShieldCheck,
 
  Zap, 
  Cpu,
  Terminal, 
  ChevronRight,
  Activity
} from "lucide-react";

// ─── CLUSTERED DATA ──────────────────────────────────────────────────────────


const capabilities = [
  {
    category: "Product Engineering",
    icon: Cpu,
    description: "Building resilient, high-scale technical foundations.",
    items: [
      { title: "FinTech Development", details: "Ledger systems, payment rails, and high-compliance architecture." },
      { title: "Modern Backends", details: "Distributed systems built for sub-second latency and infinite scale." },
      { title: "Systems Integration", details: "Connecting fragmented legacy stacks into unified, high-performance flows." }
    ]
  },
  {
    category: "Technology Leadership",
    icon: Activity,
    description: "Strategic engineering partnership for growing teams.",
    items: [
      { title: "Fractional CTO", details: "Executive-level technical strategy without the full-time overhead." },
      { title: "E2E Partnership", details: "Taking products from napkin sketches to series-A ready infrastructure." },
      { title: "Architecture Strategy", details: "Designing systems that won't require a total rewrite in 12 months." }
    ]
  },
  {
    category: "Trust & Infrastructure",
    icon: ShieldCheck,
    description: "Hardening your stack against the modern threat landscape.",
    items: [
      { title: "Cybersecurity Audits", details: "Deep-packet inspection and penetration testing for critical systems." },
      { title: "Cloud Modernization", details: "Migrating legacy technical debt to secure, automated cloud native envs." },
      { title: "Software Quality Audit", details: "Root-cause analysis for failing performance and architectural rot." }
    ]
  }
];


// ─── COMPONENTS ─────────────────────────────────────────────────────────────

const SectionLabel = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2 mb-8">
    <div className="w-2 h-2 bg-blue-600 rounded-none" />
    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-500">{text}</span>
  </div>
);

export default function HomePage() {
   const [hoveredCapability, setHoveredCapability] = useState<number | null>(null);

  return (
    <main className="bg-white selection:bg-blue-600 selection:text-white">
      
      {/* ── HERO SECTION: ARCHITECTURAL PRECISION ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-20 border-b border-slate-100">
        {/* The Grid Background - Pure CSS */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
        
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 mb-8 border border-slate-200 bg-white/80 backdrop-blur-sm"
            >
              <Activity size={12} className="text-blue-600" />
              <span className="text-[10px] font-mono tracking-tighter uppercase">System Status: Elite Engineering Operational</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.85] mb-10"
            >
              Engineering <br />
              <span className="text-blue-600 font-light italic">Complex</span> Systems.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-lg md:text-xl text-slate-500 leading-relaxed mb-12"
            >
              We design, build, and scale software platforms for companies that require technical authority over generic marketing solutions.
            </motion.p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-3">
                Start a Conversation
                <ArrowUpRight size={16} />
              </button>
              <button className="border border-slate-200 px-8 py-4 text-sm font-medium hover:bg-slate-50 transition-colors">
                View Capabilities
              </button>
            </div>
          </div>
        </div>

        {/* Hero Footer Strip */}
        <div className="absolute bottom-0 w-full border-t border-slate-100 py-6 hidden lg:block">
          <div className="container mx-auto px-6 flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            <span>Next-Gen Architecture</span>
            <div className="flex gap-12">
              <span>01 / Product Engineering</span>
              <span>02 / Tech Leadership</span>
              <span>03 / Trust & Infra</span>
            </div>
          </div>
        </div>
      </section>

       {/* ══════════════════════════════════════════════════════════════════════
             CAPABILITIES: THE THREE PILLARS
         ══════════════════════════════════════════════════════════════════════ */}
         <section className="py-32 bg-slate-50">
           <div className="container mx-auto max-w-6xl px-6">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               
               {/* Left Side: Sticky Labels */}
               <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                 <h2 className="text-3xl font-medium text-slate-900 mb-6" style={{ fontFamily: "var(--font-dm-serif)" }}>
                   Core Capabilities
                 </h2>
                 <p className="text-slate-500 text-sm leading-relaxed mb-8">
                   We don't just "build apps." We engineer the systems that allow 
                   businesses to operate at scale with total confidence.
                 </p>
                 <div className="space-y-2">
                   {capabilities.map((cap, idx) => (
                       <div 
                           key={idx}
                           className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-colors ${hoveredCapability === idx ? 'text-blue-600' : 'text-slate-300'}`}
                       >
                           {`0${idx + 1} — ${cap.category}`}
                       </div>
                   ))}
                 </div>
               </div>
   
               {/* Right Side: Large Interactive Cards */}
               <div className="lg:col-span-8 space-y-4">
                 {capabilities.map((cap, idx) => (
                   <motion.div
                     key={idx}
                     onMouseEnter={() => setHoveredCapability(idx)}
                     onMouseLeave={() => setHoveredCapability(null)}
                     className="group bg-white border border-slate-200 p-8 md:p-12 transition-all hover:border-blue-600 hover:shadow-2xl hover:shadow-blue-100/50"
                   >
                     <div className="flex items-start justify-between mb-12">
                       <cap.icon className="text-slate-900 group-hover:text-blue-600 transition-colors" size={32} strokeWidth={1.5} />
                       <span className="font-mono text-xs text-slate-300">SYSTEM_UNIT_{cap.category.slice(0,3).toUpperCase()}</span>
                     </div>
   
                     <h3 className="text-4xl font-medium mb-4 text-slate-900">{cap.category}</h3>
                     <p className="text-slate-500 mb-12 max-w-md">{cap.description}</p>
   
                     <div className="grid grid-cols-1 md:grid-cols-1 gap-6 border-t border-slate-100 pt-8">
                       {cap.items.map((item, i) => (
                           <div key={i} className="flex items-center justify-between group/item py-2">
                               <div>
                                   <h4 className="font-bold text-slate-900 text-sm mb-1">{item.title}</h4>
                                   <p className="text-xs text-slate-500">{item.details}</p>
                               </div>
                               <ChevronRight size={14} className="text-slate-300 group-hover/item:translate-x-1 group-hover/item:text-blue-600 transition-all" />
                           </div>
                       ))}
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </section>
   

      {/* ── METHODOLOGY: DISCIPLINE OVER MOTION ── */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        {/* Subtle Tech Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none font-mono text-[100px] font-bold overflow-hidden whitespace-nowrap leading-none select-none">
          SYSTEM_ARCHITECTURE_V3_DEBUG_MODE_STABLE
        </div>

        <div className="container px-6 mx-auto relative z-10">
          <div className="max-w-3xl">
            <SectionLabel text="Methodology" />
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-12">
              Built with precision. <br />
              Operated with <span className="text-blue-500">discipline.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800 border border-slate-800">
            {[
              { step: "01", title: "Analyze", icon: Terminal },
              { step: "02", title: "Architect", icon: Shield },
              { step: "03", title: "Engineer", icon: Zap },
              { step: "04", title: "Scale", icon: ArrowUpRight },
            ].map((m, i) => (
              <div key={i} className="bg-slate-900 p-8 hover:bg-slate-800 transition-colors">
                <m.icon size={20} className="text-blue-500 mb-12" />
                <span className="text-[10px] font-mono text-slate-500 block mb-2">{m.step}</span>
                <h4 className="text-xl font-medium uppercase tracking-tight">{m.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA: HIGH CREDIBILITY ── */}
      <section className="py-24 border-t border-slate-100">
        <div className="container px-6 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-medium tracking-tight mb-6">If your system matters, build it properly.</h2>
            <p className="text-slate-500 mb-10 leading-relaxed">
              We partner with a limited number of clients per year to ensure every line of code meets our standard of technical excellence.
            </p>
            <button className="bg-blue-600 text-white px-12 py-5 font-medium hover:bg-slate-900 transition-all active:scale-95 shadow-2xl shadow-blue-200">
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}