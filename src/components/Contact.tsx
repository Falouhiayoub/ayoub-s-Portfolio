"use client";

import React from "react";
import { Terminal, Mail, Phone, ExternalLink, Cpu } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background lights */}
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-primary tracking-widest uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Kernel Shell</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Contact Terminal</h2>
        </div>

        {/* Terminal Body */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_35px_rgba(124,77,255,0.08)] flex flex-col min-h-[380px] font-mono">
          
          {/* Terminal Window Header */}
          <div className="bg-[#050816] px-4 py-3 flex justify-between items-center border-b border-white/5 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px] text-muted font-bold tracking-wider">ayoub@afos-kernel: ~/contact-details</span>
            <div className="w-14" /> {/* Spacer */}
          </div>

          {/* Terminal Window Body Content */}
          <div className="p-6 md:p-8 flex-1 flex flex-col justify-between text-xs text-[#8A94A6] leading-relaxed">
            
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-muted mb-1"># COGNITIVE REACH PROTOCOLS INITIALIZED</p>
                <p className="text-[10px] text-muted"># RUNNING IN SECURE DIAGNOSTIC SHELL</p>
              </div>

              {/* Email output line */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-bold">&gt;</span>
                  <span className="text-white font-bold">sys.get_email()</span>
                </div>
                <div className="pl-6 flex flex-wrap items-center gap-3">
                  <span className="text-muted">stdout.output:</span>
                  <a
                    href="mailto:falouhiayoub9@gmail.com"
                    className="text-primary hover:text-accent font-bold text-sm underline decoration-dashed underline-offset-4 flex items-center gap-1.5 transition-colors group cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
                    <span>falouhiayoub9@gmail.com</span>
                    <ExternalLink className="w-3 h-3 text-muted opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Phone output line */}
              <div className="space-y-2 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-secondary font-bold">&gt;</span>
                  <span className="text-white font-bold">sys.get_phone()</span>
                </div>
                <div className="pl-6 flex flex-wrap items-center gap-3">
                  <span className="text-muted">stdout.output:</span>
                  <a
                    href="tel:+212621853998"
                    className="text-primary hover:text-accent font-bold text-sm underline decoration-dashed underline-offset-4 flex items-center gap-1.5 transition-colors group cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-secondary group-hover:text-primary transition-colors" />
                    <span>+212 621 853 998</span>
                    <ExternalLink className="w-3 h-3 text-muted opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Diagnostic gateway tracer */}
              <div className="border-t border-white/5 pt-6 text-[10px] text-muted space-y-1">
                <p>&gt; ping -c 1 Morocco_gateway</p>
                <p className="text-emerald-400 font-bold">&gt; Morocco_gateway online. latency: 36ms</p>
                <p>&gt; status: awaiting inbound connection... (ready for recruitment hooks)</p>
              </div>
            </div>

            {/* Decorative bottom bar */}
            <div className="flex justify-between items-center mt-6 border-t border-white/5 pt-4 text-[9px] text-muted font-mono select-none">
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3 text-primary animate-pulse" />
                <span>AFOS CORE 2.6</span>
              </span>
              <span>LOG: REACHABILITY_VERIFIED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
