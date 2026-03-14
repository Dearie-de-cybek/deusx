"use client";

import React from "react";
import  Navbar  from "../components/layout/Navbar";
import  Footer  from "../components/layout/Footer";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Discovery & Strategy",
    desc: "Good for early-stage founders or planning large-scale transformations.",
    price: "Custom Engagement",
    features: ["Technical Roadmap", "Architecture Design", "Stakeholder Alignment", "Infrastructure Audit"],
  },
  {
    name: "MVP & Product Build",
    desc: "Good for startups or companies building core products from scratch.",
    price: "Starting from $15k",
    features: ["End-to-end Development", "UX/UI System Design", "Core Backend Architecture", "Cloud Deployment"],
    primary: true
  },
  {
    name: "Scale & Optimization",
    desc: "Good for established companies improving existing digital infrastructure.",
    price: "Custom Monthly",
    features: ["Performance Tuning", "Security Hardening", "AI Integrations", "Dedicated Engineering Team"],
  }
];

export default function PricingPage() {
  return (
    <main className="bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-[#FBFBFC] text-center">
        <div className="container max-w-[1200px] mx-auto px-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 block">Pricing</span>
          <h1 className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8 leading-[0.9]">Flexible Engagements <br /> for Growth</h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Pricing depends on product scope, complexity, and business needs. We scope every build for long-term ROI.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((t, i) => (
            <div key={i} className={`p-10 rounded-[40px] border flex flex-col ${t.primary ? 'border-blue-600 bg-white shadow-xl scale-105 z-10' : 'border-slate-100 bg-[#F8F9FF]'}`}>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{t.name}</h3>
              <p className="text-slate-500 text-sm font-medium mb-8 leading-relaxed">{t.desc}</p>
              <div className="text-2xl font-black text-blue-600 mb-8">{t.price}</div>
              <ul className="space-y-4 mb-12 flex-grow">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-600">
                    <Check size={16} className="text-blue-600" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold transition-all ${t.primary ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-900 text-white'}`}>Contact for Scoping</button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-[800px] mx-auto px-6 text-center">
          <p className="text-slate-500 font-medium italic">Note: Every build is scoped according to business goals, delivery speed, infrastructure needs, and technical complexity. We ensure you only pay for what creates value.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}