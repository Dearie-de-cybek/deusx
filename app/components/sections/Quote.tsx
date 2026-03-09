"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="relative bg-[#000817] py-40 overflow-hidden">
      {/* Floating Cube Overlap - Half in Dark, Half in White */}
      <div className="absolute top-0 right-10 md:right-20 -translate-y-1/2 z-20 w-48 md:w-80">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <Image src="/cuberight.png" alt="Floating Element" width={320} height={320} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight text-white max-w-5xl mx-auto"
        >
          Our goal is to <span className="text-blue-400">give everyone</span> the opportunity to take advantage 
          of the most <span className="animate-gradient-text !bg-size-[200%]">cutting-edge technology</span> on the market.
        </motion.h2>
      </div>
    </section>
  );
}