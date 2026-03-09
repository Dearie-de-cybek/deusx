"use client";
import { motion } from "framer-motion";
import { Layers, Cpu, Smartphone, Cloud, Sparkles, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Web Platform Development",
    description: "We build modern web platforms designed for performance, reliability, and scale.",
    icon: Layers,
    capabilities: ["Custom Web Applications", "High-Performance Websites", "Dashboard & Admin Systems", "API Integrations"],
    color: "bg-blue-600"
  },
  {
    title: "SaaS Product Development",
    description: "From MVP to fully scalable SaaS platforms, we design systems that support growth.",
    icon: Cpu,
    capabilities: ["MVP Architecture", "Subscription Platforms", "Multi-tenant Systems", "Product Scaling"],
    color: "bg-indigo-600"
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications built for usability, speed, and maintainability.",
    icon: Smartphone,
    capabilities: ["iOS & Android Apps", "React Native Development", "Mobile UX Optimization", "Backend Integration"],
    color: "bg-violet-600"
  },
 {
    title: "Cloud & DevOps",
    stack: "AWS • CI/CD • Kubernetes",
    description: "Reliable cloud architecture and deployment pipelines that support modern scalable systems.",
    icon: "Cloud",
    gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
    capabilities: ["AWS"]
  },
  {
    title: "AI Solutions",
    stack: "Automation • Workflows",
    description: "Practical AI implementations that streamline operations and unlock new business capabilities.",
    icon: "Sparkles",
    gradient: "bg-gradient-to-br from-pink-500 to-pink-700",
    capabilities: ["Claude"]
  },
  {
    title: "Cyber Security",
    stack: "Audits • Web3 • Trust",
    description: "Secure architectures and blockchain-enabled systems built with resilience and trust.",
    icon: "ShieldCheck",
    gradient: "bg-gradient-to-br from-teal-500 to-emerald-700",
    capabilities: ["Hackers"]
  },
];

export default function CoreServicesGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-[900] text-slate-900 tracking-tight mb-4">Our Core Services</h2>
          <div className="w-20 h-1.5 bg-blue-600 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-[40px] bg-[#F8F9FF] border border-slate-100 group transition-all"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 font-medium mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.capabilities.map((cap, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm font-bold text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {cap}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}