"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, MapPin, Cpu, ShieldCheck, Zap } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
}

function AnimatedCounter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 1500; // ms
    const incrementTime = Math.max(Math.floor(duration / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl sm:text-4xl font-extrabold text-white text-glow-primary">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="about" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background lights */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-secondary tracking-widest uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Identity Profile</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Who Am I?</h2>
        </div>

        {/* Dashboard Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Main Info Dashboard Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-8 glass-card rounded-2xl border border-white/5 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden"
          >
            {/* Grid Line Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(0,229,255,0.08),transparent_70%)] pointer-events-none" />
            
            {/* Dashboard Header Bar */}
            <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute" />
                <span className="font-mono text-xs text-emerald-400 tracking-wider">INTELLIGENCE AGENT ONLINE</span>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-muted font-mono">
                <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-primary" /> CPU: 12%</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-secondary" /> SECURE</span>
              </div>
            </div>

            {/* Profile Info fields */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                <div className="md:col-span-3 text-[10px] font-bold text-primary font-mono tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  NAME
                </div>
                <div className="md:col-span-9 text-lg font-bold text-white">Ayoub Falouhi</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-white/5 pt-4">
                <div className="md:col-span-3 text-[10px] font-bold text-primary font-mono tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  ROLE
                </div>
                <div className="md:col-span-9 text-lg font-bold text-white text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  AI-Augmented Full-Stack Developer
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-white/5 pt-4">
                <div className="md:col-span-3 text-[10px] font-bold text-primary font-mono tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  LOCATION
                </div>
                <div className="md:col-span-9 text-base font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-secondary" />
                  Morocco
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-t border-white/5 pt-4">
                <div className="md:col-span-3 text-[10px] font-bold text-primary font-mono tracking-widest uppercase flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary rounded-full" />
                  COGNITIVE PATH
                </div>
                <div className="md:col-span-9 text-muted text-sm sm:text-base font-normal leading-relaxed">
                  Passionate about building modern web applications, AI integrations, and workflow automation systems. I enjoy solving real business problems using scalable technologies, artificial intelligence, and intuitive user experiences.
                </div>
              </div>
            </div>

            {/* Dashboard Footer decoration */}
            <div className="flex gap-2 justify-end mt-8 border-t border-white/5 pt-4 font-mono text-[9px] text-muted">
              <span>SYS.UPTIME: 1842h 12m</span>
              <span>•</span>
              <span>INDEX: 99.8%</span>
            </div>
          </motion.div>

          {/* Stats Cards Column */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            
            {/* Stat 1 */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl border border-white/5 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Zap className="w-12 h-12 text-primary" />
              </div>
              <span className="text-[10px] font-bold text-muted font-mono tracking-widest uppercase">Projects Done</span>
              <div className="mt-4">
                <AnimatedCounter value={24} suffix="+" />
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl border border-white/5 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Cpu className="w-12 h-12 text-secondary" />
              </div>
              <span className="text-[10px] font-bold text-muted font-mono tracking-widest uppercase">Tech Stack</span>
              <div className="mt-4">
                <AnimatedCounter value={15} suffix="+" />
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl border border-white/5 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <User className="w-12 h-12 text-primary" />
              </div>
              <span className="text-[10px] font-bold text-muted font-mono tracking-widest uppercase">Automations</span>
              <div className="mt-4">
                <AnimatedCounter value={40} suffix="+" />
              </div>
            </motion.div>

            {/* Stat 4 */}
            <motion.div
              variants={itemVariants}
              className="glass-card rounded-2xl border border-white/5 p-5 md:p-6 flex flex-col justify-between relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck className="w-12 h-12 text-accent" />
              </div>
              <span className="text-[10px] font-bold text-muted font-mono tracking-widest uppercase">Git Commits</span>
              <div className="mt-4">
                <AnimatedCounter value={1200} suffix="+" />
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
