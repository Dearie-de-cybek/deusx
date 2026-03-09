"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-50 px-8 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-black tracking-tight text-slate-900 uppercase">
          Your Company
        </div>
        
        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold text-slate-500 uppercase tracking-wider">
          <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">Services <ChevronDown size={14} /></button>
          <button className="flex items-center gap-1 hover:text-slate-900 transition-colors">Features <ChevronDown size={14} /></button>
          <button className="hover:text-slate-900 transition-colors">Company</button>
          <button className="hover:text-slate-900 transition-colors">Pricing</button>
          <button className="hover:text-slate-900 transition-colors">Help</button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-8">
          <button className="hidden sm:block text-[13px] font-bold text-blue-600 uppercase tracking-wider hover:text-blue-700">
            Sign in
          </button>
          <button className="px-7 py-3 bg-[#0055FF] text-white rounded-lg text-[13px] font-bold uppercase tracking-widest shadow-lg shadow-blue-100 hover:bg-blue-600 transition-all">
            Book a Call
          </button>
        </div>
      </div>
    </nav>
  );
}