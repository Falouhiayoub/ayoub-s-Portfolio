"use client";

import { motion } from "framer-motion";
import AICore from "./AICore";
import { ArrowRight, MessageSquare, FileText } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -50 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Moving lights background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left: Headline & Actions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 self-start bg-primary/10 border border-primary/20 rounded-full px-3.5 py-1.5 text-xs font-semibold text-primary tracking-wide backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            INTELLIGENCE PROTOCOL v2.6 ACTIVE
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white"
          >
            Building{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary text-glow-primary">
              Intelligent
            </span>{" "}
            Web Experiences.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed"
          >
            I develop AI-powered web applications, automation systems, and scalable full-stack solutions that help businesses work smarter.
          </motion.p>

          {/* Actions */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <button
              onClick={() => handleScroll("projects")}
              className="group relative flex items-center gap-2.5 bg-primary text-[#050816] font-bold px-6 py-3.5 rounded-lg overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScroll("contact")}
              className="group flex items-center gap-2 bg-cards hover:bg-cards/80 text-white font-semibold px-6 py-3.5 rounded-lg border border-white/10 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.1)] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-muted group-hover:text-primary transition-colors" />
              <span>Contact Me</span>
            </button>

            <a
              href="/ayoub%20falouhi%20CV%20(1).pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-muted hover:text-white font-medium px-4 py-3.5 rounded-lg transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 group-hover:text-secondary transition-colors" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Quick stats list */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5"
          >
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-[10px] text-muted tracking-wider uppercase font-bold">Client Success</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-[10px] text-muted tracking-wider uppercase font-bold">Automation Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">&lt;100ms</div>
              <div className="text-[10px] text-muted tracking-wider uppercase font-bold">API Latency</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Floating AI Core 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="lg:col-span-5 h-[350px] sm:h-[450px] lg:h-[550px] w-full relative flex items-center justify-center"
        >
          {/* Subtle bounding dashboard layout */}
          <div className="absolute inset-0 border border-white/5 rounded-2xl bg-cards/10 backdrop-blur-[2px] pointer-events-none" />
          {/* Corner highlights */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/40 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/40 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/40 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/40 rounded-br-2xl pointer-events-none" />
          
          <AICore />
        </motion.div>

      </div>
    </section>
  );
}
