"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, Globe, Code, Code2, Palette, Boxes, Wind, Cpu, Server, 
  Terminal, Database, HardDrive, Send, ShieldCheck, GitBranch, 
  GitPullRequest, Box, RefreshCw, Hammer, Cloud, CloudLightning, 
  Brain, Sparkles, Network, TerminalSquare
} from "lucide-react";

interface TechItem {
  name: string;
  category: "frontend" | "backend" | "devops" | "ai";
  icon: any;
  glowColor: string;
  description: string;
}

const TECH_STACK: TechItem[] = [
  // Frontend
  { name: "React.js", category: "frontend", icon: Layers, glowColor: "rgba(0, 229, 255, 0.4)", description: "Dynamic UI Library" },
  { name: "Next.js", category: "frontend", icon: Globe, glowColor: "rgba(255, 255, 255, 0.4)", description: "React Framework" },
  { name: "JavaScript", category: "frontend", icon: Code, glowColor: "rgba(251, 191, 36, 0.4)", description: "Core Web Language" },
  { name: "TypeScript", category: "frontend", icon: Code2, glowColor: "rgba(59, 130, 246, 0.4)", description: "Type-Safe Javascript" },
  { name: "Tailwind CSS", category: "frontend", icon: Palette, glowColor: "rgba(6, 182, 212, 0.4)", description: "Utility CSS styling" },
  { name: "Redux Toolkit", category: "frontend", icon: Boxes, glowColor: "rgba(124, 58, 237, 0.4)", description: "State Management" },
  { name: "Framer Motion", category: "frontend", icon: Wind, glowColor: "rgba(236, 72, 153, 0.4)", description: "Fluid Animations" },
  
  // Backend
  { name: "Node.js", category: "backend", icon: Server, glowColor: "rgba(34, 197, 94, 0.4)", description: "JS Server Engine" },
  { name: "Express.js", category: "backend", icon: Terminal, glowColor: "rgba(148, 163, 184, 0.4)", description: "Node Framework" },
  { name: "Laravel", category: "backend", icon: Cpu, glowColor: "rgba(239, 68, 68, 0.4)", description: "PHP MVC Framework" },
  { name: "MySQL", category: "backend", icon: Database, glowColor: "rgba(0, 229, 255, 0.4)", description: "Relational DB" },
  { name: "MongoDB", category: "backend", icon: HardDrive, glowColor: "rgba(16, 185, 129, 0.4)", description: "NoSQL Database" },
  { name: "MockAPI", category: "backend", icon: TerminalSquare, glowColor: "rgba(99, 102, 241, 0.4)", description: "Mock API Testing" },
  { name: "Postman", category: "backend", icon: Send, glowColor: "rgba(249, 115, 22, 0.4)", description: "API Testing Client" },
  { name: "Jest", category: "backend", icon: ShieldCheck, glowColor: "rgba(239, 68, 68, 0.4)", description: "Unit Test Runner" },

  // DevOps
  { name: "Docker", category: "devops", icon: Box, glowColor: "rgba(59, 130, 246, 0.4)", description: "App Containerization" },
  { name: "Git", category: "devops", icon: GitBranch, glowColor: "rgba(249, 115, 22, 0.4)", description: "Version Control" },
  { name: "GitHub", category: "devops", icon: GitPullRequest, glowColor: "rgba(255, 255, 255, 0.4)", description: "Code Hosting" },
  { name: "CI/CD", category: "devops", icon: RefreshCw, glowColor: "rgba(16, 185, 129, 0.4)", description: "Build Pipelines" },
  { name: "Jenkins", category: "devops", icon: Hammer, glowColor: "rgba(217, 119, 6, 0.4)", description: "Build Automation" },
  { name: "Vercel", category: "devops", icon: Cloud, glowColor: "rgba(255, 255, 255, 0.4)", description: "Deployment Platform" },
  { name: "Netlify", category: "devops", icon: CloudLightning, glowColor: "rgba(6, 182, 212, 0.4)", description: "Hosting Platform" },

  // AI & Automations
  { name: "OpenAI", category: "ai", icon: Brain, glowColor: "rgba(16, 185, 129, 0.4)", description: "GPT Integrations" },
  { name: "Gemini", category: "ai", icon: Sparkles, glowColor: "rgba(59, 130, 246, 0.4)", description: "Multimodal AI Core" },
  { name: "n8n", category: "ai", icon: Network, glowColor: "rgba(236, 72, 153, 0.4)", description: "Workflow Automation" }
];

export default function TechStack() {
  const [filter, setFilter] = useState<"all" | "frontend" | "backend" | "devops" | "ai">("all");

  const filteredTech = TECH_STACK.filter(
    (tech) => filter === "all" || tech.category === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <section id="tech" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title & filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-secondary tracking-widest uppercase">
              <Cpu className="w-3.5 h-3.5" />
              <span>Core Protocols</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Futuristic Control Center</h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 bg-cards/60 border border-white/5 rounded-xl p-1.5 backdrop-blur-md">
            {(["all", "frontend", "backend", "devops", "ai"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition-all tracking-wider uppercase cursor-pointer ${
                  filter === cat
                    ? "bg-primary text-[#050816] shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                    : "text-muted hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ scale: 0.9, opacity: 0, transition: { duration: 0.2 } }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  key={tech.name}
                  className="group relative glass-card rounded-xl border border-white/5 p-4 md:p-5 flex flex-col items-center text-center justify-center min-h-[140px] overflow-hidden"
                  style={{
                    // Injecting customized inline glows on card hover
                    ["--hover-glow" as any]: tech.glowColor,
                  }}
                >
                  {/* Subtle hover background radial glow */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at center, ${tech.glowColor} 0%, transparent 70%)`
                    }}
                  />

                  {/* Icon with hover glowing effect */}
                  <div className="w-12 h-12 rounded-xl bg-cards border border-white/5 flex items-center justify-center mb-3 group-hover:border-primary/30 transition-colors shadow-inner">
                    <Icon className="w-6 h-6 text-muted group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Tech Name */}
                  <span className="font-bold text-white text-sm tracking-wide mb-1">
                    {tech.name}
                  </span>

                  {/* Tech description */}
                  <span className="text-[10px] text-muted font-medium font-mono uppercase tracking-wider">
                    {tech.description}
                  </span>

                  {/* Corner indicator ticks */}
                  <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-white/10 group-hover:border-primary/50 transition-colors" />
                  <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-white/10 group-hover:border-primary/50 transition-colors" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
