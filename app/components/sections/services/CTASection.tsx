"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-[1100px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative bg-[#081222] rounded-[48px] p-10 md:p-20 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] flex flex-col items-center text-center"
        >
          {/* DECORATIVE MESH GRADIENT (Inside the dark card) */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/10 to-transparent pointer-events-none" />

          {/* EYEBROW */}
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[11px] font-black tracking-[0.3em] text-blue-400 uppercase mb-8"
          >
            Ready to Build Something Serious?
          </motion.span>

          {/* HEADLINE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-[900] text-white leading-[1.1] mb-8 tracking-tighter max-w-3xl"
          >
            Work with DeusX to design and engineer the digital systems your business needs to grow.
          </motion.h2>

          {/* BUTTON GROUP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5 md:gap-8 mt-4"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-[#0055FF] text-white rounded-full font-black text-lg shadow-2xl shadow-blue-500/20 hover:bg-[#0044CC] hover:scale-105 transition-all flex items-center justify-center gap-3 group">
              Book a Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-full font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3">
              Contact Us
              <MessageSquare size={18} className="opacity-60" />
            </button>
          </motion.div>

          {/* DECORATIVE CUBE: Peeking from the edge */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-12 -right-12 w-48 md:w-64 opacity-40 pointer-events-none select-none"
          >
            <Image 
              src="/cuberight.png" 
              alt="Floating visual" 
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