"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar  from "../components/layout/Navbar";
import Footer  from "../components/layout/Footer";
import { 
  Maximize, BarChart3, ShieldCheck, Cloud, 
  Sparkles, Settings, ArrowRight 
} from "lucide-react";

const features = [
  { title: "Scalable Architecture", desc: "Systems designed to handle millions of requests without performance degradation.", icon: Maximize },
  { title: "Product-Focused Engineering", desc: "We build features that solve business problems, not just write code.", icon: BarChart3 },
  { title: "Security-First Thinking", desc: "Encryption, secure auth, and hardening are baked into every layer.", icon: ShieldCheck },
  { title: "Cloud-Native Delivery", desc: "Automated CI/CD pipelines and infrastructure as code for rapid deployment.", icon: Cloud },
  { title: "AI-Ready Systems", desc: "Built-in data pipelines to support future machine learning and automation.", icon: Sparkles },
  { title: "Long-Term Maintainability", desc: "Clean, documented codebases that your internal team can actually manage.", icon: Settings },
];

export default function FeaturesPage() {
  const fUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    <main className="bg-white">
      <Navbar />
      
      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-[#FBFBFC]">
        <div className="container max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <motion.span initial="hidden" animate="visible" variants={fUp} className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 block">Features</motion.span>
          <motion.h1 initial="hidden" animate="visible" variants={fUp} transition={{ delay: 0.1 }} className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8 leading-[0.9]">Built for Serious <br /> Digital Execution</motion.h1>
          <motion.p initial="hidden" animate="visible" variants={fUp} transition={{ delay: 0.2 }} className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium">DeusX delivers modern systems with performance, security, and scale in mind. We don't just build apps; we engineer foundations.</motion.p>
        </div>
      </section>

      {/* GRID */}
      <section className="py-24">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -8 }} className="p-10 rounded-[32px] bg-[#F8F9FF] border border-slate-100 group transition-all">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 text-blue-600">
                  <f.icon size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="py-24">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="bg-[#081222] rounded-[48px] p-10 md:p-24 relative overflow-hidden text-center md:text-left">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <h2 className="text-3xl md:text-5xl font-[900] text-white tracking-tight mb-8">The DeusX Methodology</h2>
                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                  We combine product thinking with rigid engineering discipline. This ensures that every system we build is not only technically sound but also aligned with your business clarity and roadmap.
                </p>
              </div>
              <div className="w-64 h-64 relative">
                <Image src="/cube-right.png" alt="Visual" fill className="object-contain opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-[900] text-slate-900 mb-8">Scale Your Execution Today.</h2>
        <button className="px-10 py-4 bg-[#0055FF] text-white rounded-full font-bold text-lg hover:bg-[#0044CC] transition-all">Book a Call</button>
      </section>

      <Footer />
    </main>
  );
}