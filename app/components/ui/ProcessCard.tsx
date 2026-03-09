"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: keyof typeof LucideIcons;
  badgeColor: string;
  index: number;
}

export function ProcessCard({ title, description, icon, badgeColor, index }: ProcessCardProps) {
  const IconComponent = LucideIcons[icon] as React.ElementType;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
      className="relative z-10 flex flex-col p-10 md:p-12 rounded-[32px] bg-[#F8F9FF] border border-white shadow-[0_20px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-500 h-full"
    >
      {/* ICON BADGE */}
      <div className={cn(
        "w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-sm",
        badgeColor
      )}>
        <IconComponent size={24} className="text-white" strokeWidth={2} />
      </div>

      {/* CONTENT */}
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h3>
      <p className="text-slate-500 leading-relaxed text-[16px] md:text-[17px] font-medium">
        {description}
      </p>
    </motion.div>
  );
}