"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "../../lib/utils";

const services = [
  { title: "Web", techs: "React, Angular, NodeJS", icon: "Box", active: true },
  { title: "Ecommerce", techs: "Magento, Shopify", icon: "Zap", active: false },
  { title: "App", techs: "React Native, Flutter", icon: "Smartphone", active: false },
  { title: "Software", techs: "Electron.js", icon: "Layers", active: false },
  { title: "Interface Design", techs: "React, Angular, NodeJS", icon: "Layout", active: false },
  { title: "Social Media", techs: "React, Angular, NodeJS", icon: "Share2", active: false },
];

export default function Services() {
  return (
    <section className="bg-white pt-48 pb-32 relative z-10">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">
            Services & Technologies
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={cn(
                  "relative p-8 transition-all duration-500 rounded-[32px]",
                  service.active ? "bg-white shadow-[0_40px_80px_rgba(0,0,0,0.06)] border-t-2 border-blue-500" : "bg-transparent"
                )}
              >
                {/* Icon Circle */}
                <div className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-8 shadow-lg",
                  service.active ? "bg-blue-600 text-white" : "bg-indigo-500 text-white"
                )}>
                  <IconComponent size={24} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm font-bold text-slate-400 mb-4">{service.techs}</p>
                <p className="text-slate-500 leading-relaxed text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </motion.div>
            );
          })}
        </div>
        
        {/* Footer Link */}
        <div className="mt-20 flex justify-center">
          <button className="flex items-center gap-3 font-bold text-slate-400 hover:text-slate-900 transition-all group">
            Our services 
            <LucideIcons.ArrowRightCircle className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}