"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRightCircle, ChevronRight } from "lucide-react";
import { ProcessCard } from "../ui/ProcessCard";

const steps = [
  {
    title: "Discover the Need",
    description: "We study the business, users, workflow gaps, and technical constraints before writing a single line of code.",
    icon: "Compass",
    badgeColor: "bg-gradient-to-br from-blue-500 to-blue-600",
  },
  {
    title: "Design the Solution",
    description: "We define the product structure, architecture, scope, and user experience needed to solve the real problem well.",
    icon: "Layers",
    badgeColor: "bg-gradient-to-br from-violet-500 to-violet-600",
  },
  {
    title: "Build, Refine & Launch",
    description: "We ship with discipline, refine from feedback, and prepare the system for reliability, growth, and scale.",
    icon: "Rocket",
    badgeColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6 relative">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[900] text-slate-900 mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 max-w-xl mx-auto text-lg md:text-xl font-medium"
          >
            “Our process is built to turn ideas into clear, scalable digital systems without wasted motion.”
          </motion.p>
        </div>

        {/* CARDS GRID WITH CONNECTORS */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
          
          {/* SVG CONNECTORS (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            {/* Connector 1 -> 2 */}
            <motion.svg 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute top-1/2 left-[28%] w-[15%] h-20 -translate-y-full" 
              viewBox="0 0 100 40" 
              fill="none"
            >
              <path 
                d="M0 30 C 30 0, 70 0, 100 30" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
              />
              <path d="M98 28 L101 31 L97 33" stroke="#E2E8F0" strokeWidth="1.5" />
            </motion.svg>

            {/* Connector 2 -> 3 */}
            <motion.svg 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute top-1/2 left-[61%] w-[15%] h-20 -translate-y-full" 
              viewBox="0 0 100 40" 
              fill="none"
            >
              <path 
                d="M0 30 C 30 0, 70 0, 100 30" 
                stroke="#E2E8F0" 
                strokeWidth="1.5" 
                strokeDasharray="4 4" 
                fill="none" 
              />
              <path d="M98 28 L101 31 L97 33" stroke="#E2E8F0" strokeWidth="1.5" />
            </motion.svg>
          </div>

          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <ProcessCard step={""} {...step} index={index} icon={step.icon as any} />
              {/* Mobile/Tablet Spacer Arrows */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-2 text-slate-200">
                  <ChevronRight className="rotate-90 lg:rotate-0" size={32} strokeWidth={1.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* BOTTOM LINK */}
        <div className="mt-20 md:mt-28 flex justify-center">
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-3 text-slate-400 font-bold hover:text-slate-900 transition-all group tracking-wide"
          >
            Learn more 
            <ArrowRightCircle size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}