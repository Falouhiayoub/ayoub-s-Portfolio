"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  Cpu,
  Sparkles,
  ArrowRight,
  Radio,
  RefreshCw,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "Full-Stack Web Application",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "transmitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const predefinedSubjects = [
    "Full-Stack Web Application",
    "Mobile App (iOS/Android)",
    "AI / RAG Integration",
    "Backend / Cloud System",
    "Full-Time / Contract Role",
    "Other Mission Inquiry",
  ];

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleWhatsAppDirect = () => {
    const defaultText = formData.message.trim()
      ? `Hello Ayoub, I am reaching out regarding: ${formData.subject}. Message: ${formData.message}`
      : `Hello Ayoub, I came across your portfolio and would like to connect!`;
    const encoded = encodeURIComponent(defaultText);
    window.open(`https://wa.me/212621853998?text=${encoded}`, "_blank");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required transmission parameters.");
      return;
    }

    setStatus("transmitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        throw new Error(data.error || "Subsystem packet transmission failure.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Transmission error:", err);
      setStatus("error");
      setErrorMessage(
        err.message || "Network transmission failed. Please reach out via Direct WhatsApp or Email fallback."
      );
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      contact: "",
      subject: "Full-Stack Web Application",
      message: "",
      honeypot: "",
    });
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 w-full overflow-hidden border-t border-white/5">
      {/* Background glow ambiance */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Radio className="w-3.5 h-3.5 animate-pulse text-primary" />
            <span>DIRECT TELEMETRY GATEWAY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">Transmission</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-xl font-mono">
            Have a project in mind, recruitment query, or technical opportunity? Transmit your signal directly to my inbox and phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Direct Quick Reach Protocols */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Reachability Card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-mono">Direct Uplink Vectors</h3>
                  <p className="text-xs text-muted font-mono">Active 24/7 // Instant Notification Route</p>
                </div>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 font-mono text-xs">
                
                {/* WhatsApp Direct */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-white/5 hover:border-emerald-500/40 transition-all group flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-white font-semibold">
                      <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-3.5 h-3.5" />
                      </div>
                      <span>Instant WhatsApp</span>
                    </div>
                    <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full font-bold">
                      FASTEST ROUTE
                    </span>
                  </div>
                  <p className="text-muted text-[11px]">
                    Opens directly on your mobile/desktop WhatsApp with your inquiry pre-loaded.
                  </p>
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full mt-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 text-xs transition-all cursor-pointer group-hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                  >
                    <span>Launch WhatsApp Chat</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Email Channel */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-white/5 hover:border-primary/40 transition-all group flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-white font-semibold">
                      <div className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                        <Mail className="w-3.5 h-3.5" />
                      </div>
                      <span>Kernel Email</span>
                    </div>
                    <button
                      onClick={() => handleCopy("falouhiayoub9@gmail.com", "email")}
                      className="text-muted hover:text-primary transition-colors flex items-center gap-1 text-[10px] cursor-pointer bg-white/5 px-2 py-1 rounded"
                      title="Copy Email"
                    >
                      {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                  <a
                    href="mailto:falouhiayoub9@gmail.com"
                    className="text-white hover:text-primary transition-colors text-xs font-bold truncate underline decoration-dashed decoration-white/20 underline-offset-4"
                  >
                    falouhiayoub9@gmail.com
                  </a>
                </div>

                {/* Direct Phone Channel */}
                <div className="p-4 rounded-xl bg-[#090d16] border border-white/5 hover:border-secondary/40 transition-all group flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5 text-white font-semibold">
                      <div className="w-7 h-7 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                        <Phone className="w-3.5 h-3.5" />
                      </div>
                      <span>Phone / Voice</span>
                    </div>
                    <button
                      onClick={() => handleCopy("+212621853998", "phone")}
                      className="text-muted hover:text-secondary transition-colors flex items-center gap-1 text-[10px] cursor-pointer bg-white/5 px-2 py-1 rounded"
                      title="Copy Phone"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedPhone ? "Copied!" : "Copy"}</span>
                    </button>
                  </div>
                  <a
                    href="tel:+212621853998"
                    className="text-white hover:text-secondary transition-colors text-xs font-bold underline decoration-dashed decoration-white/20 underline-offset-4"
                  >
                    +212 621 853 998
                  </a>
                </div>

              </div>

              {/* Status footer pill */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-muted">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-white font-semibold">Ready for Deployment</span>
                </div>
                <span>Morocco (GMT+1)</span>
              </div>

            </div>

            {/* Diagnostic Box */}
            <div className="p-4 rounded-xl bg-[#050816]/80 border border-white/5 font-mono text-[11px] text-muted space-y-1.5">
              <div className="text-primary font-bold flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>AFOS Protocol Guarantee:</span>
              </div>
              <p className="text-xs text-gray-300">
                Messages submitted through the terminal trigger instantaneous notifications on mobile and email channels with zero data leakage.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Terminal Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.06)] font-mono flex flex-col">
              
              {/* Terminal Titlebar */}
              <div className="bg-[#050816] px-4 py-3 flex justify-between items-center border-b border-white/5 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block shadow-[0_0_6px_rgba(239,68,68,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block shadow-[0_0_6px_rgba(234,179,8,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block shadow-[0_0_6px_rgba(34,197,94,0.5)]" />
                </div>
                <span className="text-[11px] text-muted font-bold tracking-wider">
                  ayoub@afos-kernel: ~/send-transmission.sh
                </span>
                <div className="flex items-center gap-1.5 text-[9px] text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span>ENC-TLS 1.3</span>
                </div>
              </div>

              {/* Terminal Form Body */}
              <div className="p-6 sm:p-8">
                
                <AnimatePresence mode="wait">
                  
                  {/* IDLE / INPUT STATE */}
                  {status === "idle" && (
                    <motion.form
                      key="idle-form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Honeypot for bot protection */}
                      <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      {/* Row 1: Name & Contact Vector */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Name Input */}
                        <div className="space-y-2">
                          <label className="text-[11px] text-muted flex items-center gap-1.5">
                            <span className="text-secondary font-bold">&gt;</span>
                            <span className="text-white font-bold">sys.sender_identity</span>
                            <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. John Doe / Alex Morgan"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-[#050816] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-xs text-white placeholder:text-muted/50 outline-none transition-all"
                          />
                        </div>

                        {/* Email or Phone Input */}
                        <div className="space-y-2">
                          <label className="text-[11px] text-muted flex items-center gap-1.5">
                            <span className="text-secondary font-bold">&gt;</span>
                            <span className="text-white font-bold">sys.return_channel</span>
                            <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Email or Phone number"
                            value={formData.contact}
                            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            className="w-full bg-[#050816] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 text-xs text-white placeholder:text-muted/50 outline-none transition-all"
                          />
                        </div>

                      </div>

                      {/* Row 2: Subject Preset Selectors */}
                      <div className="space-y-2">
                        <label className="text-[11px] text-muted flex items-center gap-1.5">
                          <span className="text-secondary font-bold">&gt;</span>
                          <span className="text-white font-bold">sys.mission_scope</span>
                        </label>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {predefinedSubjects.map((sub) => (
                            <button
                              type="button"
                              key={sub}
                              onClick={() => setFormData({ ...formData, subject: sub })}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all cursor-pointer border ${
                                formData.subject === sub
                                  ? "bg-primary/15 text-primary border-primary shadow-[0_0_10px_rgba(0,229,255,0.2)] font-bold"
                                  : "bg-[#050816] text-muted border-white/5 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {sub}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Row 3: Message Payload Textarea */}
                      <div className="space-y-2">
                        <label className="text-[11px] text-muted flex items-center gap-1.5">
                          <span className="text-secondary font-bold">&gt;</span>
                          <span className="text-white font-bold">sys.payload_data</span>
                          <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Describe project requirements, tech stack, timeline, or recruitment query..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-[#050816] border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl p-4 text-xs text-white placeholder:text-muted/50 outline-none resize-none transition-all leading-relaxed"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-95 text-[#050816] font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT PACKET TO KERNEL</span>
                      </button>

                    </motion.form>
                  )}

                  {/* TRANSMITTING STATE */}
                  {status === "transmitting" && (
                    <motion.div
                      key="transmitting-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary animate-pulse">
                          <Cpu className="w-8 h-8 animate-spin" />
                        </div>
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 filter blur-xl animate-pulse" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-primary font-bold text-sm tracking-wider uppercase animate-pulse">
                          [ TRANSMITTING PACKETS... ]
                        </div>
                        <p className="text-xs text-muted max-w-sm">
                          Routing encrypted message buffer through TLS 1.3 gateway to kernel destination.
                        </p>
                      </div>

                      {/* Cyber progress line */}
                      <div className="w-48 h-1.5 bg-[#050816] rounded-full overflow-hidden border border-white/10">
                        <div className="h-full bg-gradient-to-r from-primary via-accent to-secondary w-full animate-[scanline_1.5s_ease-in-out_infinite]" />
                      </div>
                    </motion.div>
                  )}

                  {/* SUCCESS STATE */}
                  {status === "success" && (
                    <motion.div
                      key="success-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-8 flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-emerald-400 font-bold text-sm md:text-base tracking-wider uppercase">
                          [ TRANSMISSION CONFIRMED ]
                        </div>
                        <p className="text-xs text-gray-300 max-w-md leading-relaxed">
                          Your packet has been successfully verified and delivered to Ayoub’s inbox & notification hub. Expect a response shortly!
                        </p>
                      </div>

                      {/* Transmission snapshot */}
                      <div className="w-full max-w-md p-4 rounded-xl bg-[#050816] border border-white/10 text-left text-[11px] space-y-2 text-muted">
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-white font-bold">SENDER:</span>
                          <span className="text-primary">{formData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-white/5 pb-1.5">
                          <span className="text-white font-bold">CONTACT:</span>
                          <span className="text-gray-300">{formData.contact}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white font-bold">MISSION:</span>
                          <span className="text-accent">{formData.subject}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        <button
                          onClick={resetForm}
                          className="bg-white/10 hover:bg-white/15 border border-white/10 text-white font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>SEND ANOTHER TRANSMISSION</span>
                        </button>
                        <button
                          onClick={handleWhatsAppDirect}
                          className="bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 font-bold py-2.5 px-5 rounded-xl text-xs flex items-center gap-2 transition-all cursor-pointer"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>CONTINUE ON WHATSAPP</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* ERROR STATE */}
                  {status === "error" && (
                    <motion.div
                      key="error-view"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-8 flex flex-col items-center justify-center text-center space-y-6"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <AlertTriangle className="w-8 h-8" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-red-400 font-bold text-sm tracking-wider uppercase">
                          [ TRANSMISSION INTERRUPTED ]
                        </div>
                        <p className="text-xs text-gray-300 max-w-md">
                          {errorMessage || "Subsystem packet transmission failure."}
                        </p>
                      </div>

                      {/* Fallback actions */}
                      <div className="w-full max-w-md p-4 rounded-xl bg-[#050816] border border-white/10 text-center text-xs space-y-3">
                        <p className="text-muted text-[11px]">
                          Fallback routes are immediately available:
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2.5">
                          <button
                            onClick={handleWhatsAppDirect}
                            className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>WhatsApp Route</span>
                          </button>
                          <a
                            href={`mailto:falouhiayoub9@gmail.com?subject=${encodeURIComponent(
                              formData.subject || "Mission Inquiry"
                            )}&body=${encodeURIComponent(
                              `From: ${formData.name}\nContact: ${formData.contact}\n\n${formData.message}`
                            )}`}
                            className="flex-1 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-bold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Direct Mailto</span>
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={() => setStatus("idle")}
                        className="text-xs text-muted hover:text-white underline decoration-dashed underline-offset-4 cursor-pointer font-bold"
                      >
                        [ RETRY TRANSMISSION ]
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>

              </div>

              {/* Terminal Bottom Diagnostic Bar */}
              <div className="bg-[#050816] px-6 py-3 border-t border-white/5 flex flex-wrap justify-between items-center text-[10px] text-muted select-none">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-secondary" />
                  <span>AFOS TELEMETRY v2.6 // KERNEL ONLINE</span>
                </div>
                <span>STATUS: READY_FOR_INBOUND</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
