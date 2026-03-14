"use client";

import React, { useState } from "react";
import  Navbar  from "../components/layout/Navbar";
import  Footer  from "../components/layout/Footer";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  { q: "What types of businesses do you work with?", a: "We primarily work with growth-stage startups, SaaS companies, and enterprise teams looking to modernize their technical infrastructure." },
  { q: "Can you build an MVP first and scale later?", a: "Absolutely. We specialize in building 'Scalable MVPs'—meaning we don't cut corners that will haunt you later." },
  { q: "How long does a project usually take?", a: "MVPs typically take 8-12 weeks. Strategy engagements are shorter, usually 2-4 weeks." },
  { q: "Do you offer cloud and deployment support?", a: "Yes, we handle the full CI/CD pipeline and cloud infrastructure setup (AWS/GCP/Azure)." },
  { q: "Can you help with AI integrations?", a: "Yes, we help businesses implement practical AI workflows and data processing systems." },
  { q: "How do we get started?", a: "The best way is to book a 15-minute discovery call to discuss your goals and technical needs." },
];

export default function HelpPage() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-white">
      <Navbar />
      
      <section className="pt-40 pb-24 bg-[#FBFBFC] text-center">
        <div className="container max-w-[1200px] mx-auto px-6">
          <span className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 block">Help</span>
          <h1 className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8 leading-[0.9]">Answers Before <br /> You Build</h1>
          <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">Everything you need to know about our process, engagement models, and delivery timelines.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-[800px] mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-slate-100 pb-4">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors">
                  <span className="text-xl font-bold text-slate-900">{f.q}</span>
                  {open === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {open === i && (
                  <div className="pb-6 text-slate-500 font-medium leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container max-w-[1200px] mx-auto px-6">
          <div className="bg-blue-600 rounded-[48px] p-12 text-center text-white relative overflow-hidden">
            <MessageCircle className="absolute -top-10 -right-10 w-64 h-64 text-white/10" />
            <h2 className="text-3xl font-black mb-6 relative z-10">Still have questions?</h2>
            <p className="text-white/80 font-medium mb-10 relative z-10">Our team is ready to help you navigate your technical roadmap.</p>
            <button className="px-10 py-4 bg-white text-blue-600 rounded-full font-bold relative z-10 shadow-lg">Reach Out Directly</button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}