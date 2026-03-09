"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-[#FBFBFC]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent" />
      </div>

      <div className="container max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-[11px] font-black tracking-[0.3em] text-blue-600 uppercase mb-6 block"
        >
          Services
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-[900] text-slate-900 tracking-tighter mb-8 leading-[0.9]"
        >
          Engineering Digital <br /> Systems That <span className="text-blue-600">Scale</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-slate-500 text-xl md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
        >
          We partner with ambitious companies to design, build, and scale modern digital systems — from product MVPs to enterprise infrastructure.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-10 py-4 bg-[#0055FF] text-white rounded-full font-bold text-lg shadow-xl shadow-blue-200/50 hover:bg-[#0044CC] transition-all">
            Book a Call
          </button>
          <button className="px-10 py-4 border-2 border-slate-200 text-slate-600 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Floating Decorative Element */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-20 w-64 h-64 opacity-20 md:opacity-100"
      >
        <Image src="/cuberight.png" width={300} height={300} alt="Cube" className="object-contain" />
      </motion.div>
    </section>
  );
}