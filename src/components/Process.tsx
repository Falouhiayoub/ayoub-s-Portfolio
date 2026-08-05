"use client";

import { motion } from "framer-motion";
import { 
  Compass, Palette, Code, Brain, CloudLightning, Settings, HelpCircle 
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  glowColor: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "blueprinting & requirements",
    description: "Aligning on core business metrics, user persona requirements, API contract shapes, and choosing optimal technological stacks.",
    icon: Compass,
    glowColor: "rgba(0, 229, 255, 0.3)"
  },
  {
    number: "02",
    title: "Design",
    subtitle: "blueprints & design systems",
    description: "Architecting interactive wireframes, establishing dark futuristic palettes, layout models, glassmorphic accents, and core styling assets.",
    icon: Palette,
    glowColor: "rgba(124, 77, 255, 0.3)"
  },
  {
    number: "03",
    title: "Develop",
    subtitle: "full-stack compilation",
    description: "Writing scalable Next.js code, structuring secure REST/GraphQL API controllers, and linking local database structures with Jest testing coverage.",
    icon: Code,
    glowColor: "rgba(138, 251, 255, 0.3)"
  },
  {
    number: "04",
    title: "Integrate AI",
    subtitle: "cognitive intelligence hook",
    description: "Connecting OpenAI / Gemini APIs, constructing robust n8n workflow chains, automated prompts parser layers, and database synchronization nodes.",
    icon: Brain,
    glowColor: "rgba(0, 229, 255, 0.3)"
  },
  {
    number: "05",
    title: "Deploy",
    subtitle: "ci/cd pipeline launch",
    description: "Pushing production assets to Vercel/Docker hosts via Jenkins automated pipelines, executing end-to-end integration tests, and checking SEO scores.",
    icon: CloudLightning,
    glowColor: "rgba(124, 77, 255, 0.3)"
  },
  {
    number: "06",
    title: "Maintain",
    subtitle: "system optimization & logs",
    description: "Monitoring live API metrics, resolving system query performance leaks, keeping dependencies current, and applying critical security updates.",
    icon: Settings,
    glowColor: "rgba(138, 251, 255, 0.3)"
  }
];

export default function Process() {
  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 1.5, ease: "easeInOut" as const }
    }
  };

  return (
    <section id="process" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background lights */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-primary tracking-widest uppercase">
            <Compass className="w-3.5 h-3.5" />
            <span>Workflow Sequence</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Systemized Execution</h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Glowing Line (hidden on small viewports) */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent origin-top hidden md:block"
            style={{
              boxShadow: "0 0 10px rgba(0, 229, 255, 0.3)"
            }}
          />

          <div className="space-y-12 relative">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row items-stretch md:justify-between w-full relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node node indicator */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[7px] md:-translate-x-1.5 w-3.5 h-3.5 rounded-full bg-cards border-2 border-primary z-10 hidden md:block">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent absolute inset-0 m-auto animate-ping" />
                  </div>

                  {/* Staggered content blocks */}
                  <motion.div
                    initial={{ x: isEven ? -40 : 40, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-8 md:pl-0 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="group relative glass-card rounded-2xl border border-white/5 p-6 overflow-hidden">
                      {/* Node number badge */}
                      <span className="absolute top-4 right-4 font-mono font-bold text-4xl text-white/5 group-hover:text-primary/10 transition-colors">
                        {step.number}
                      </span>

                      {/* Header layout */}
                      <div className={`flex gap-3.5 items-center mb-3 ${
                        isEven ? "md:flex-row-reverse" : "md:flex-row"
                      }`}>
                        <div className="w-10 h-10 rounded-lg bg-cards border border-white/5 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white text-base group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-[9px] font-bold text-secondary font-mono tracking-wider uppercase">
                            {step.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted text-xs leading-relaxed font-normal">
                        {step.description}
                      </p>

                      {/* Background slide accent glows */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at bottom, ${step.glowColor} 0%, transparent 80%)`
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Empty gap spacer for centering on desktop */}
                  <div className="w-[45%] hidden md:block" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
