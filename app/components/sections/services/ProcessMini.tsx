"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "Deep-dive into business logic, user needs, and technical constraints.",
    icon: Search,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Design",
    description: "Architectural mapping and high-fidelity UX/UI system design.",
    icon: PenTool,
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    title: "Build & Scale",
    description: "Disciplined engineering and deployment with a focus on long-term growth.",
    icon: Rocket,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  }
];

export default function ProcessMini() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container max-w-[1000px] mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-[900] text-slate-900 tracking-tight mb-4">
            Our Delivery Process
          </h2>
          <p className="text-slate-500 font-medium">Simple. Transparent. Built for speed.</p>
        </div>

        {/* STEP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-slate-100 z-0" />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              {/* STEP NUMBER CIRCLE */}
              <div className="absolute -top-4 -right-2 w-6 h-6 rounded-full bg-white border border-slate-100 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-sm">
                0{index + 1}
              </div>

              {/* ICON CIRCLE */}
              <div className={`w-20 h-20 rounded-[28px] ${step.bg} flex items-center justify-center mb-8 border border-white shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:-translate-y-1`}>
                <step.icon className={`${step.color}`} size={28} strokeWidth={2} />
              </div>

              {/* TEXT CONTENT */}
              <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}