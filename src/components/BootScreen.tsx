"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LOGS = [
  "SYSTEM CORE STACK: ONLINE",
  "CONNECTING INTEGRATED COGNITIVE AGENTS...",
  "ESTABLISHING SECURE PORTFOLIO GATEWAY...",
  "PARSING CORE MODULES (REACT, NEXT.JS, THREE)...",
  "COMPILING PORTFOLIO KERNEL INTERFACE...",
  "HANDSHAKE PROTOCOLS... ACTIVE",
  "SYSTEM DEPLOYMENT SUCCESSFUL.",
];

export default function BootScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Tick the progress bar
    const duration = 2400; // 2.4 seconds total boot
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let step = 0;

    const progressInterval = setInterval(() => {
      step++;
      const nextProgress = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(nextProgress);

      if (nextProgress === 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 500); // Trigger complete callback after fade out animation
        }, 300);
      }
    }, intervalTime);

    // Stream the terminal boot logs based on progress
    const logInterval = setInterval(() => {
      setVisibleLogs((prev) => {
        if (prev.length < BOOT_LOGS.length) {
          return [...prev, BOOT_LOGS[prev.length]];
        }
        clearInterval(logInterval);
        return prev;
      });
    }, 300);

    return () => {
      clearInterval(progressInterval);
      clearInterval(logInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#050816] z-99999 flex flex-col justify-between p-8 md:p-16 select-none font-mono text-xs overflow-hidden"
        >
          {/* Top terminal headers */}
          <div className="flex justify-between items-center text-muted border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span>A.F.O.S [Version 2.6.0]</span>
            </div>
            <span>LOC: MOROCCO // PORT: 443</span>
          </div>

          {/* Center boot loader */}
          <div className="flex flex-col items-center justify-center gap-6 my-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center"
            >
              {/* Outer spinning ring */}
              <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 border border-secondary/30 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Core pulsing light */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.1, 1], 
                  opacity: [0.3, 0.7, 0.3],
                  boxShadow: [
                    "0 0 20px rgba(0, 229, 255, 0.2)",
                    "0 0 40px rgba(0, 229, 255, 0.5)",
                    "0 0 20px rgba(0, 229, 255, 0.2)"
                  ]
                }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center border border-primary/40"
              >
                <span className="text-primary text-[10px] font-bold tracking-wider">{progress}%</span>
              </motion.div>
            </motion.div>

            <div className="text-center space-y-2">
              <h2 className="text-primary text-sm md:text-base font-bold tracking-[0.2em] text-glow-primary uppercase animate-pulse">
                Initializing Intelligence...
              </h2>
              <p className="text-muted text-[10px] md:text-xs">SYSTEM CONFIGURATION SEQUENCE ACTIVE</p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-sm md:max-w-md h-1.5 bg-cards border border-white/5 rounded-full overflow-hidden p-[1px]">
              <motion.div
                className="h-full bg-gradient-to-r from-secondary via-primary to-accent rounded-full shadow-[0_0_10px_#00E5FF]"
                style={{ width: `${progress}%` }}
                layoutId="progressBar"
              />
            </div>
          </div>

          {/* Bottom terminal logs stream */}
          <div className="w-full max-w-2xl mx-auto h-32 md:h-40 flex flex-col justify-end bg-cards/40 border border-white/5 rounded p-4 text-[10px] text-muted overflow-hidden">
            <div className="space-y-1.5 font-mono select-none pointer-events-none">
              {visibleLogs.map((log, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-accent">&gt;</span>
                  <span className={index === BOOT_LOGS.length - 1 ? "text-primary font-bold" : ""}>
                    {log}
                  </span>
                </motion.div>
              ))}
              {visibleLogs.length < BOOT_LOGS.length && (
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">&gt;</span>
                  <span className="w-1.5 h-3 bg-muted animate-[pulse_0.8s_infinite]" />
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
