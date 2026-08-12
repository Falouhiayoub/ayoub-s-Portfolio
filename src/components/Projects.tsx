"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, Sparkles, 
  MapPin, ShoppingBag, Car, ShieldAlert, CheckCircle2, ArrowRight
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  demoUrl: string;
  githubUrl: string;
  stats: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
  previewWidget: "fashion" | "booking" | "sos";
}

const PROJECTS: Project[] = [
  {
    id: "fashion-fuel",
    title: "Fashion Fuel",
    category: "AI Powered E-Commerce",
    description: "A premium modern e-commerce platform built with React, Redux Toolkit, and MockAPI, powered by Gemini AI and n8n automations for automated tagging, pricing optimizations, and smart customer reviews parsing.",
    features: [
      "Responsive Fluid UI Layout",
      "Robust Redux Toolkit State Engine",
      "Dynamic MockAPI backend data sync",
      "Gemini AI Integration for auto-tagging",
      "n8n automations for slack hooks & email workflows",
      "Comprehensive Jest Unit testing suite",
      "Optimized cached API calls for speed",
      "Interactive multi-angle product gallery",
      "Animated dashboards & store sales statistics"
    ],
    tech: ["React.js", "Redux Toolkit", "Gemini AI", "n8n", "Tailwind CSS", "MockAPI", "Jest"],
    demoUrl: "https://project-fil-rouge-github.vercel.app/",
    githubUrl: "https://github.com/Falouhiayoub/project-fil-rouge-github",
    stats: [
      { label: "AI Parsing Speed", value: "<150ms" },
      { label: "State Hydration", value: "3ms" },
      { label: "Conversion Lift", value: "+24%" }
    ],
    accentColor: "#00E5FF",
    gradient: "from-[#00E5FF]/20 to-[#7C4DFF]/10",
    previewWidget: "fashion"
  },
  {
    id: "booking-app",
    title: "Booking App",
    category: "Car Rental Platform",
    description: "A high-performance full-stack booking system designed with Laravel, featuring complex database relations, secure token-based authentication, Stripe gateway integrations, and automatic email notifications.",
    features: [
      "Secure JWT (JSON Web Token) Authentication",
      "Integrated Stripe Payment processing pipeline",
      "Automated transactional emails via NodeMailer",
      "Clean architectural REST API handlers",
      "Comprehensive Admin dashboard statistics",
      "Advanced booking scheduler & conflict resolver",
      "Role-Based Access Control (RBAC)"
    ],
    tech: ["Laravel", "PHP", "MySQL", "Stripe", "Node.js", "JWT Auth", "Postman"],
    demoUrl: "https://demo.example.com/booking-app",
    githubUrl: "https://github.com/example/booking-app",
    stats: [
      { label: "Payment Latency", value: "1.2s" },
      { label: "Query Speed", value: "8ms" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    accentColor: "#7C4DFF",
    gradient: "from-[#7C4DFF]/20 to-[#8AFBFF]/10",
    previewWidget: "booking"
  },
  {
    id: "sos-ksar",
    title: "SOS Ksar",
    category: "Emergency Management Platform",
    description: "A mission-critical emergency coordination system designed to report incidents, track field responders, and organize relief resources in real time with high reliability and secure system boundaries.",
    features: [
      "Real-time Incident reporting websocket channels",
      "Dynamic resources inventory & field logs",
      "Highly secure database and endpoint architecture",
      "Scalable express/mongo cluster deployment",
      "n8n-mediated disaster responder notifications",
      "Unit & integration testing workflow strategies"
    ],
    tech: ["Node.js", "Express.js", "MongoDB", "n8n", "WebSockets", "Jest", "Docker"],
    demoUrl: "https://demo.example.com/sos-ksar",
    githubUrl: "https://github.com/Falouhiayoub/Sos-ksar",
    stats: [
      { label: "WebSocket Sync", value: "4ms" },
      { label: "Dispatch Accuracy", value: "99.8%" },
      { label: "Failover Time", value: "<2s" }
    ],
    accentColor: "#8AFBFF",
    gradient: "from-[#8AFBFF]/20 to-[#7C4DFF]/10",
    previewWidget: "sos"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Custom visual widget inside cards to act as beautiful, low-overhead animated previews
  const renderPreviewWidget = (type: "fashion" | "booking" | "sos") => {
    if (type === "fashion") {
      return (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-[#00E5FF]">
          <div className="flex justify-between items-center border-b border-[#00E5FF]/20 pb-2">
            <span>[GEMINI PARSER ENGINE]</span>
            <span className="w-1.5 h-1.5 bg-[#00E5FF] rounded-full animate-ping" />
          </div>
          <div className="my-auto space-y-1">
            <div className="flex gap-2 items-center bg-[#00E5FF]/5 p-1 rounded border border-[#00E5FF]/10">
              <ShoppingBag className="w-3 h-3 text-[#00E5FF]" />
              <span>Parsed: &quot;Linen Bomber Jacket&quot;</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-muted">
              <span>Confidence: 98.4%</span>
              <span className="text-[#8AFBFF]">Auto-Tagged ✓</span>
            </div>
          </div>
          {/* Animated Mini graph */}
          <div className="flex items-end gap-1.5 h-10 w-full pt-1 border-t border-[#00E5FF]/10">
            {[20, 45, 30, 60, 50, 75, 90].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="flex-1 bg-gradient-to-t from-[#00E5FF] to-[#7C4DFF] rounded-t-sm"
              />
            ))}
          </div>
        </div>
      );
    }

    if (type === "booking") {
      return (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-[#7C4DFF]">
          <div className="flex justify-between items-center border-b border-[#7C4DFF]/20 pb-2">
            <span>[STRIPE GATEWAY v3]</span>
            <CheckCircle2 className="w-3 h-3 text-[#8AFBFF]" />
          </div>
          <div className="my-auto space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-muted">CAR_ID:</span>
              <span className="text-white flex items-center gap-1"><Car className="w-3 h-3 text-[#7C4DFF]" /> Tesla Model 3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted">STATUS:</span>
              <span className="text-emerald-400 bg-emerald-500/10 px-1 py-0.5 rounded text-[8px]">Escrow Secured</span>
            </div>
          </div>
          {/* Mock card input code highlight */}
          <div className="bg-[#7C4DFF]/5 border border-[#7C4DFF]/15 rounded p-2 text-[8px] text-muted">
            <span className="text-[#8AFBFF]">await</span> stripe.paymentIntents.create(&#123; <br />
            &nbsp;&nbsp;amount: 8500, currency: &apos;usd&apos;<br />
            &#125;);
          </div>
        </div>
      );
    }

    if (type === "sos") {
      return (
        <div className="w-full h-full flex flex-col justify-between p-4 font-mono text-[9px] text-[#8AFBFF]">
          <div className="flex justify-between items-center border-b border-[#8AFBFF]/20 pb-2">
            <span>[CRISIS MAP COORDINATES]</span>
            <ShieldAlert className="w-3 h-3 text-red-500 animate-pulse" />
          </div>
          <div className="relative my-auto h-16 w-full bg-[#8AFBFF]/5 rounded border border-[#8AFBFF]/10 flex items-center justify-center overflow-hidden">
            {/* Blinking radar grid circle */}
            <div className="absolute w-12 h-12 rounded-full border border-[#8AFBFF]/20 animate-ping" />
            <div className="absolute w-24 h-24 rounded-full border border-[#8AFBFF]/10 animate-[spin_5s_linear_infinite]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(138,251,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(138,251,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />
            
            <MapPin className="w-3.5 h-3.5 text-red-400 z-10 animate-bounce" />
            
            <span className="absolute bottom-1 right-2 text-[7px] text-[#8AFBFF]">LAT: 31.7917° N</span>
          </div>
          <div className="flex justify-between items-center text-[7px] text-muted pt-1">
            <span>WebSockets: ACTIVE</span>
            <span className="text-green-400">Responders Dispatched</span>
          </div>
        </div>
      );
    }
  };

  return (
    <section id="projects" className="relative py-24 w-full overflow-hidden border-t border-white/5">
      {/* Background lights */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-primary tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Operational Deployments</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Premium Applications</h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="group glass-card rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between h-[450px] cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              {/* Top styling gradient cover */}
              <div className={`h-40 w-full bg-gradient-to-br ${project.gradient} border-b border-white/5 relative flex items-center justify-center p-6 overflow-hidden`}>
                {/* Embedded animated live-widgets */}
                <div className="w-full h-full bg-[#050816]/80 rounded-xl border border-white/10 backdrop-blur-sm relative overflow-hidden group-hover:border-primary/20 transition-all">
                  {renderPreviewWidget(project.previewWidget)}
                </div>
              </div>

              {/* Information body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-bold text-primary font-mono tracking-widest uppercase mb-1.5 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted text-xs line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Badges list */}
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="bg-cards border border-white/5 text-[9px] font-bold font-mono text-muted px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-cards border border-white/5 text-[9px] font-bold font-mono text-primary px-2 py-1 rounded">
                        +{project.tech.length - 3} MORE
                      </span>
                    )}
                  </div>

                  {/* Expand CTA */}
                  <div className="flex justify-between items-center text-xs font-bold text-white group-hover:text-primary transition-colors border-t border-white/5 pt-4">
                    <span>EXPLORE DEEP METRICS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Glowing card border shadows */}
              <div 
                className="absolute inset-0 border border-transparent rounded-2xl group-hover:border-white/10 pointer-events-none transition-colors"
                style={{
                  boxShadow: `inset 0 0 15px rgba(255,255,255,0.01)`
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Case Study Glass Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-99999 flex items-center justify-center p-4 bg-[#050816]/90 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="w-full max-w-4xl max-h-[85vh] bg-[#0D1117] border border-white/10 rounded-2xl overflow-y-auto shadow-[0_0_50px_rgba(0,229,255,0.15)] flex flex-col"
              >
                {/* Header */}
                <div className="sticky top-0 bg-[#0D1117]/80 backdrop-blur-md border-b border-white/5 p-6 flex justify-between items-center z-10">
                  <div>
                    <span className="text-[10px] font-bold text-primary font-mono tracking-widest uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-black text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-lg bg-cards hover:bg-white/5 border border-white/10 hover:border-white/20 transition-all text-muted hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable details */}
                <div className="p-6 md:p-8 space-y-8 flex-1">
                  
                  {/* Summary / Description */}
                  <div>
                    <h4 className="text-xs font-bold text-primary font-mono tracking-widest uppercase mb-2">SYSTEM SUMMATION</h4>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Core Statistics grid */}
                  <div>
                    <h4 className="text-xs font-bold text-primary font-mono tracking-widest uppercase mb-3">SYSTEM METRICS</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.stats.map((s, idx) => (
                        <div key={idx} className="bg-[#050816] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
                          <span className="text-[9px] font-bold text-muted font-mono tracking-wider uppercase">{s.label}</span>
                          <span className="text-xl md:text-2xl font-black text-white mt-1 text-glow-primary">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features detailed bullets */}
                  <div>
                    <h4 className="text-xs font-bold text-primary font-mono tracking-widest uppercase mb-3">INTEGRATED MODULES & FEATURES</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.features.map((feat, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start font-sans text-xs sm:text-sm text-muted">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technology Badges */}
                  <div>
                    <h4 className="text-xs font-bold text-primary font-mono tracking-widest uppercase mb-3">COMPILED STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="bg-cards border border-white/5 text-xs font-semibold font-mono text-white px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Sticky Footer actions */}
                <div className="sticky bottom-0 bg-[#0D1117] border-t border-white/5 p-6 flex flex-wrap gap-4 items-center justify-end">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cards hover:bg-cards/80 text-white font-semibold text-xs px-5 py-3 rounded-lg border border-white/10 hover:border-white/20 transition-all"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Repository</span>
                  </a>

                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
