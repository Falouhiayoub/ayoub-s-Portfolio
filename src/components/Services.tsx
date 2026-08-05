"use client";

import { motion } from "framer-motion";
import { 
  Brain, Globe, Network, Cpu, LayoutDashboard, ShoppingCart, 
  MessageSquareCode, Wrench, ShieldCheck
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: any;
  glowColor: string;
}

const SERVICES: Service[] = [
  {
    title: "AI Web Applications",
    description: "Intelligent web apps with integrated LLMs (OpenAI, Gemini), semantic vector search, data generation, and custom machine learning inference.",
    icon: Brain,
    glowColor: "rgba(0, 229, 255, 0.25)"
  },
  {
    title: "Business Websites",
    description: "SEO-optimized, ultra-fast, premium marketing sites built with Next.js and Tailwind, styled with cinematic GSAP and Framer Motion reveals.",
    icon: Globe,
    glowColor: "rgba(124, 77, 255, 0.25)"
  },
  {
    title: "Workflow Automation",
    description: "Enterprise automations connecting Slack, Email, Stripe, CRMs, and internal systems using n8n, custom cron scripts, or Node.js workers.",
    icon: Network,
    glowColor: "rgba(138, 251, 255, 0.25)"
  },
  {
    title: "REST APIs",
    description: "Highly secure, type-safe, and self-documenting REST & GraphQL endpoints constructed with Node.js, Express, or Laravel PHP.",
    icon: Cpu,
    glowColor: "rgba(0, 229, 255, 0.25)"
  },
  {
    title: "Interactive Dashboards",
    description: "Real-time client monitoring control centers with charting libraries, live WebSocket hooks, data tables, and customized theme controls.",
    icon: LayoutDashboard,
    glowColor: "rgba(124, 77, 255, 0.25)"
  },
  {
    title: "E-Commerce",
    description: "Full-scale custom shopping carts, secure inventory tracking, admin managers, and integrated multi-currency Stripe checkout gateways.",
    icon: ShoppingCart,
    glowColor: "rgba(138, 251, 255, 0.25)"
  },
  {
    title: "AI Chatbots",
    description: "Retrieval-Augmented Generation (RAG) virtual assistants designed to parsing PDFs, querying databases, and resolving client tickets 24/7.",
    icon: MessageSquareCode,
    glowColor: "rgba(0, 229, 255, 0.25)"
  },
  {
    title: "Internal Business Tools",
    description: "High-productivity custom CRM applications, employee clock managers, operational sheets pipelines, and secure data visualizers.",
    icon: Wrench,
    glowColor: "rgba(124, 77, 255, 0.25)"
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background radial lights */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-secondary tracking-widest uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Capability Index</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Operational Specializations</h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((serv, index) => {
            const Icon = serv.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative glass-card rounded-2xl border border-white/5 p-6 flex flex-col justify-between min-h-[220px] overflow-hidden"
              >
                {/* Glow sphere back drop */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${serv.glowColor} 0%, transparent 60%)`
                  }}
                />

                <div className="space-y-4">
                  {/* Glowing Icon holder */}
                  <div className="w-10 h-10 rounded-lg bg-cards border border-white/5 flex items-center justify-center group-hover:border-primary/20 transition-colors">
                    <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {serv.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted text-xs leading-relaxed font-normal">
                    {serv.description}
                  </p>
                </div>

                {/* Sub-corner ticks decoration */}
                <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-white/10 group-hover:bg-primary/50 transition-colors rounded-full" />
                <div className="absolute top-1.5 right-1.5 w-1 h-1 bg-white/10 group-hover:bg-primary/50 transition-colors rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
