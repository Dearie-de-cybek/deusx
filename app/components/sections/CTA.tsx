"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + custom * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }),
  };

  return (
    <section className="relative w-full py-24 md:py-40 bg-[#FBFBFC] overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-100/30 blur-[120px] pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative max-w-[1100px] mx-auto bg-white rounded-[32px] md:rounded-[48px] p-10 md:p-24 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden flex flex-col items-center text-center"
        >
          {/* EYEBROW */}
          <motion.span
            custom={0}
            variants={itemVariants}
            className="text-[11px] font-black tracking-[0.25em] text-blue-600 uppercase mb-6"
          >
            Ready to build something serious?
          </motion.span>

          {/* HEADLINE */}
          <motion.h2
            custom={1}
            variants={itemVariants}
            className="text-4xl md:text-6xl font-[900] text-slate-900 leading-tight mb-8 tracking-tight max-w-3xl"
          >
            Let’s Build Your Next <br className="hidden md:block" /> Digital System.
          </motion.h2>

          {/* SUPPORTING TEXT */}
          <motion.p
            custom={2}
            variants={itemVariants}
            className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mb-12 leading-relaxed"
          >
            Work with a team that understands how to design, engineer, and scale modern digital products.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            custom={3}
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 relative z-20"
          >
            <button className="w-full sm:w-auto px-10 py-4 bg-[#0055FF] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-200/50 hover:bg-[#0044CC] transition-all flex items-center justify-center gap-2 group">
              Book a Call
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 bg-transparent border-2 border-slate-200 text-slate-600 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
              View Our Services
            </button>
          </motion.div>

          {/* DECORATIVE CUBE (Bottom Right) */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-10 -right-10 w-40 md:w-64 opacity-80 md:opacity-100 pointer-events-none select-none"
          >
            <Image 
              src="/cuberight.png" 
              alt="Glossy Decorative Cube" 
              width={300} 
              height={300} 
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}