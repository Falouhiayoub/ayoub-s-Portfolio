"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import BootScreen from "@/components/BootScreen";
import MatrixGrid from "@/components/MatrixGrid";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyHireMe from "@/components/WhyHireMe";
import Contact from "@/components/Contact";
import { Cpu, Terminal, Layers, HelpCircle, Code, Briefcase, Mail } from "lucide-react";

export default function Home() {
  const [bootComplete, setBootComplete] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "about", label: "About", icon: Layers },
    { id: "tech", label: "Tech", icon: Code },
    { id: "projects", label: "Projects", icon: Briefcase },
    { id: "services", label: "Services", icon: Cpu },
    { id: "process", label: "Process", icon: Terminal },
    { id: "why-hire-me", label: "Strengths", icon: HelpCircle },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -50 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* 1. Loading AI boot sequence */}
      <BootScreen onComplete={() => setBootComplete(true)} />

      {bootComplete && (
        <SmoothScroll>
          {/* Base Layout Backgrounds & Overlays */}
          <MatrixGrid />
          <CustomCursor />
          
          {/* Cyber aesthetics overlays */}
          <div className="noise-overlay" />
          <div className="scanlines" />

          {/* 2. Floating Cyber Glass Navbar */}
          <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 rounded-2xl glass-card border border-white/10 px-6 py-3 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          >
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-white font-bold tracking-wider text-xs md:text-sm cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                <Cpu className="w-4 h-4 text-primary group-hover:animate-spin" />
              </div>
              <span className="font-mono text-glow-primary">A.F.O.S</span>
            </button>

            {/* Nav Menu */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all uppercase tracking-wider cursor-pointer ${
                    activeSection === item.id 
                      ? "text-primary bg-primary/5 border border-primary/20" 
                      : "text-muted hover:text-white border border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Action */}
            <button
              onClick={() => handleScroll("contact")}
              className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-bold px-3 py-1.5 rounded-lg text-[10px] md:text-xs tracking-wider uppercase cursor-pointer transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>TRANSMIT</span>
            </button>
          </motion.header>

          {/* 3. Main Dashboard Contents */}
          <main className="relative z-10 w-full min-h-screen flex flex-col gap-24 sm:gap-32 md:gap-40">
            
            <Hero />
            <About />
            <TechStack />
            <Projects />
            <Services />
            <Process />
            <WhyHireMe />
            <Contact />

          </main>

          {/* 4. Futuristic Footer */}
          <footer className="relative z-10 w-full bg-[#050816] border-t border-white/5 py-12 px-6 text-center font-mono text-[10px] text-muted overflow-hidden">
            <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright & Kernel version */}
              <div className="flex flex-col items-center md:items-start gap-1">
                <span className="text-white font-bold tracking-widest text-[11px]">AYOUB FALOUHI PORTFOLIO</span>
                <span>SYSTEM LOGS: v2.6.0-stable // COMPILED SUCCESSFULLY</span>
              </div>

              {/* Status bar mock */}
              <div className="flex gap-4 items-center">
                <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" /> NETWORK ONLINE</span>
                <span>•</span>
                <span>SECURE ENCRYPTED CHANNEL</span>
              </div>

              {/* Back to top scroll */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hover:text-primary transition-colors cursor-pointer uppercase font-bold"
              >
                [ TERMINAL_REBOOT_TOP ]
              </button>
            </div>
          </footer>
        </SmoothScroll>
      )}
    </>
  );
}
