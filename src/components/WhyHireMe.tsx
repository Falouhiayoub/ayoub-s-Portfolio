"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Laptop, Database, BrainCircuit, Workflow, LayoutGrid, Zap, CheckSquare 
} from "lucide-react";

interface Strength {
  title: string;
  metric: number;
  metricLabel: string;
  description: string;
  icon: any;
  glowColor: string;
}

const STRENGTHS: Strength[] = [
  {
    title: "Modern Frontend",
    metric: 99,
    metricLabel: "Lighthouse Performance",
    description: "Developing blazing-fast responsive screens using Next.js App Router, React Server Components (RSC), and custom Tailwind theme tokens.",
    icon: Laptop,
    glowColor: "rgba(0, 229, 255, 0.25)"
  },
  {
    title: "Scalable Backend",
    metric: 96,
    metricLabel: "Query Speed Efficiency",
    description: "Architecting structured database engines (MySQL, Mongo) and token authenticated REST controllers that scale with minimal latency.",
    icon: Database,
    glowColor: "rgba(124, 77, 255, 0.25)"
  },
  {
    title: "AI Integration",
    metric: 95,
    metricLabel: "Model Request Success",
    description: "Interfacing GPT and Gemini intelligence models directly into pipelines, utilizing semantic embeddings, caching, and custom prompt flows.",
    icon: BrainCircuit,
    glowColor: "rgba(138, 251, 255, 0.25)"
  },
  {
    title: "Automation Workflows",
    metric: 98,
    metricLabel: "SLA Integration Uptime",
    description: "Connecting operational databases with cloud hooks, slack integrations, and n8n scripts that process business events 24/7.",
    icon: Workflow,
    glowColor: "rgba(0, 229, 255, 0.25)"
  },
  {
    title: "Clean Architecture",
    metric: 100,
    metricLabel: "Modular Code Maintainability",
    description: "Adhering to strict DRY and SOLID software engineering principles, producing codebases that are easily reviewable, testable, and robust.",
    icon: LayoutGrid,
    glowColor: "rgba(124, 77, 255, 0.25)"
  },
  {
    title: "Performance Optimization",
    metric: 99,
    metricLabel: "Core Web Vitals Pass",
    description: "Optimizing bundle chunks, lazy-loading files, using static generator caching, and compressing media resources for instant viewport paints.",
    icon: Zap,
    glowColor: "rgba(138, 251, 255, 0.25)"
  }
];

function StrengthCard({ strength }: { strength: Strength }) {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const Icon = strength.icon;

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = strength.metric;
    const duration = 1200; // ms
    const increment = Math.max(Math.floor(duration / end), 12);

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / increment));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [isInView, strength.metric]);

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6 }}
      className="group relative glass-card rounded-2xl border border-white/5 p-6 flex flex-col justify-between overflow-hidden min-h-[220px]"
    >
      {/* Background glowing gradients */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${strength.glowColor} 0%, transparent 65%)`
        }}
      />

      {/* Top Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          {/* Glowing Icon */}
          <div className="w-10 h-10 rounded-lg bg-cards border border-white/5 flex items-center justify-center group-hover:border-primary/20 transition-colors">
            <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
          </div>
          
          {/* Animated counter indicator */}
          <div className="text-right">
            <div className="text-3xl font-black text-white text-glow-primary">{count}%</div>
            <div className="text-[7px] text-muted font-bold font-mono tracking-widest uppercase mt-0.5">
              {strength.metricLabel}
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
          {strength.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-muted text-xs leading-relaxed font-normal mt-4">
        {strength.description}
      </p>

      {/* Border accent details */}
      <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
      <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-primary/50 transition-colors" />
    </motion.div>
  );
}

export default function WhyHireMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  return (
    <section id="why-hire-me" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background light spheres */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-secondary tracking-widest uppercase">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Value Propositions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Why Hire Me?</h2>
        </div>

        {/* Strength Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {STRENGTHS.map((strength, index) => (
            <StrengthCard key={index} strength={strength} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
