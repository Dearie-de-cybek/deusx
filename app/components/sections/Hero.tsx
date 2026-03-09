"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    // Note: We remove overflow-hidden so the phone can spill out
    <section className="relative pt-32 md:pt-44 bg-white min-h-[90vh] flex flex-col items-center">
      
      {/* 1. The Background Image Gradient (Blends to White) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/bghero.png" // Your provided image
          alt="background"
          fill
          priority
          className="object-cover object-bottom" // Aligns gradient to bottom to blend with next section
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Text Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] font-bold tracking-[0.25em] text-blue-600 uppercase mb-5">
            The Future Belongs to You
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[84px] font-[900] tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Technology belongs to <span className="text-gradient-premium">everyone</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 text-lg md:text-xl mb-10">
            Accelerate your business and jump into the new era with the help of a team of A-players.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <button className="px-9 py-4 bg-[#0055FF] text-white rounded-full font-bold shadow-2xl shadow-blue-300 hover:scale-105 transition-all">
            Book a Call
          </button>
          <button className="flex items-center gap-3 font-bold text-slate-900 group">
            How it works 
            <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
              <Play size={14} fill="currentColor" />
            </span>
          </button>
        </div>

        {/* The 3D Composition with Section Overlap */}
        <div className="relative w-full max-w-7xl mx-auto h-[400px] md:h-[500px]">
          
          {/* Main Device: Positioned to overflow the section bottom */}
          <motion.div 
            initial={{ y: 100, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-0 z-20 w-[320px] md:w-[480px] drop-shadow-[0_60px_70px_rgba(0,0,0,0.15)]"
          >
            <Image 
              src="/device-mockup.png" 
              alt="Device" 
              width={480} 
              height={960}
              className="translate-y-20 md:translate-y-32" // This pushes it into the next section
            />
          </motion.div>

          {/* Left Cube: Moved further apart */}
          <motion.div 
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[-5%] md:left-[5%] z-10 w-24 md:w-48"
          >
            <Image src="/cubeleft.png" alt="Cube" width={200} height={200} />
          </motion.div>

          {/* Right Cube: Moved further apart */}
          <motion.div 
            animate={{ y: [0, 40, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 right-[-5%] md:right-[5%] z-10 w-32 md:w-64"
          >
            <Image src="/cuberight.png" alt="Cube" width={260} height={260} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}