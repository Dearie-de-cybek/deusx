"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, Maximize, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Scalable System Architecture",
    description: "We design systems that remain reliable and performant as your product and user base grow. Our architectures are built to handle sudden traffic spikes and complex data processing without friction.",
    icon: Maximize,
    color: "text-blue-600",
    bg: "bg-blue-50"
  },
  {
    title: "Product-Focused Engineering",
    description: "Our development process prioritizes usability, business outcomes, and long-term maintainability. We don't just write code; we build tools that solve specific operational challenges for your team.",
    icon: BarChart3,
    color: "text-indigo-600",
    bg: "bg-indigo-50"
  },
  {
    title: "Security-First Development",
    description: "Security is integrated into every stage of our engineering process. From encrypted data layers to rigorous API authentication, we ensure your intellectual property and user data are ironclad.",
    icon: Shield,
    color: "text-violet-600",
    bg: "bg-violet-50"
  },
  {
    title: "Performance & Optimization",
    description: "We engineer platforms that are fast, efficient, and built to handle real-world demand. We optimize every millisecond of the critical path to ensure a seamless experience for global users.",
    icon: Zap,
    color: "text-emerald-600",
    bg: "bg-emerald-50"
  },
];

export default function FeatureBreakdown() {
  return (
    <section className="py-32 md:py-48 bg-white border-y border-slate-50">
      <div className="container max-w-[1100px] mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[900] text-slate-900 tracking-tighter mb-6"
          >
            How We Deliver <span className="text-blue-600 font-black">Impact</span>
          </motion.h2>
          <div className="h-1 w-24 bg-blue-600 rounded-full" />
        </div>

        {/* FEATURE BLOCKS */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-start gap-10 md:gap-24 group"
            >
              {/* LEFT: ICON VISUAL */}
              <div className="relative flex-shrink-0">
                <div className={`w-20 h-20 md:w-24 md:h-24 ${feature.bg} rounded-[32px] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  <feature.icon className={`${feature.color}`} size={40} strokeWidth={1.5} />
                </div>
                {/* Decorative ghost icon behind */}
                <feature.icon className={`absolute -top-4 -right-4 ${feature.color} opacity-10 blur-sm`} size={64} />
              </div>

              {/* RIGHT: CONTENT */}
              <div className="flex-1 pt-2">
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
                
                {/* Subtle Progress Indicator Line */}
                <div className="mt-10 h-[1px] w-full bg-slate-100 relative overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileInView={{ x: "0%" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className={`absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-blue-600/30 to-transparent`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}