"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bot,
  Check,
  Circle,
  Database,
  Globe2,
  LayoutDashboard,
  MessageCircle,
  PlugZap,
  Send,
  Workflow,
} from "lucide-react";

const ecosystem = [
  { label: "Website", icon: Globe2 },
  { label: "AI", icon: Bot, active: true },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "API", icon: PlugZap },
  { label: "Software", icon: Workflow },
];

export default function HeroProductVisual() {
  const [phase, setPhase] = useState(0);
  const reducedMotion = useReducedMotion();
  const displayPhase = reducedMotion ? 3 : phase;

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    const sequence = window.setInterval(() => {
      setPhase((currentPhase) => (currentPhase + 1) % 4);
    }, 1100);

    return () => window.clearInterval(sequence);
  }, [reducedMotion]);

  return (
    <div
      aria-label="Tomar Techworks digital workspace preview"
      className="relative mx-auto w-full max-w-[40rem]"
      role="img"
    >
      <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-blue-50/70 blur-2xl" />

      <div className="overflow-hidden rounded-[var(--radius-lg)] border border-navy/10 bg-white shadow-[var(--shadow-elevated)]">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-[var(--radius-sm)] bg-navy text-[10px] font-bold text-white">
              TT
            </div>
            <div>
              <p className="text-[11px] font-semibold text-navy sm:text-xs">
                Tomar Techworks
              </p>
              <p className="text-[10px] text-gray-400">Digital workspace</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-gray-400 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Systems ready
          </div>
        </div>

        <div className="grid bg-[#f4f7fb] lg:grid-cols-[8rem_1fr]">
          <aside className="hidden border-r border-gray-200 bg-navy p-4 lg:block">
            <div className="flex items-center gap-2 text-white">
              <LayoutDashboard size={14} />
              <span className="text-[11px] font-semibold">Workspace</span>
            </div>

            <div className="mt-8 space-y-2">
              {["Overview", "Conversations", "Knowledge"].map(
                (item, index) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 rounded-md px-2 py-2 text-[10px] ${
                      index === 0
                        ? "bg-white/10 text-white"
                        : "text-white/45"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    {item}
                  </div>
                )
              )}
            </div>
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary">
                  Workspace
                </p>
                <h2 className="mt-1 text-base font-semibold tracking-tight text-navy sm:text-lg">
                  Customer experience
                </h2>
              </div>
              <div className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[10px] text-gray-500">
                Live preview
              </div>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-[var(--radius-md)] border border-gray-200 bg-white p-3.5 shadow-sm sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 text-primary">
                      <Bot size={14} />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-navy">
                        AI Assistant
                      </p>
                      <p className="text-[9px] text-gray-400">Knowledge ready</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-[9px] text-emerald-600">
                    <Circle size={7} fill="currentColor" /> Ready
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-auto max-w-[88%] rounded-lg rounded-tr-sm bg-primary px-3 py-2 text-[10px] leading-4 text-white"
                  >
                    Can you help me choose the right solution for my business?
                  </motion.div>

                  {displayPhase === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center gap-1.5 px-1 text-[10px] text-gray-400"
                    >
                      <span>AI is thinking</span>
                      <span className="flex gap-0.5">
                        {[0, 1, 2].map((dot) => (
                          <motion.span
                            key={dot}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 0.8, repeat: Infinity, delay: dot * 0.12 }}
                            className="h-1 w-1 rounded-full bg-primary"
                          />
                        ))}
                      </span>
                    </motion.div>
                  )}

                  {displayPhase >= 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35 }}
                      className="max-w-[92%] rounded-lg rounded-tl-sm border border-gray-200 bg-gray-50 px-3 py-2 text-[10px] leading-4 text-gray-600"
                    >
                      Absolutely. I can help you explore websites, e-commerce,
                      custom software and AI solutions.
                    </motion.div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-md border border-gray-200 bg-white px-2.5 py-2">
                  <span className="flex-1 text-[9px] text-gray-400">Ask about your project...</span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-navy text-white">
                    <Send size={11} />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                <div className="rounded-[var(--radius-md)] border border-gray-200 bg-navy p-3.5 text-white shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-300">
                    <Database size={14} />
                    <span className="text-[10px] font-semibold">Knowledge</span>
                  </div>
                  <p className="mt-3 text-[10px] leading-4 text-white/55">
                    Business context connected
                  </p>
                  <div className="mt-3 h-1 rounded-full bg-white/10">
                    <div className="h-1 w-3/4 rounded-full bg-cyan-300" />
                  </div>
                </div>

                <div className="rounded-[var(--radius-md)] border border-gray-200 bg-white p-3.5 shadow-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <Check size={14} />
                    <span className="text-[10px] font-semibold text-navy">Lead / Enquiry</span>
                  </div>
                  <p className="mt-3 text-[10px] leading-4 text-gray-500">
                    {displayPhase >= 3 ? "Ready for follow-up" : "Listening for intent"}
                  </p>
                  <div className={`mt-3 h-1 rounded-full ${phase >= 3 ? "bg-emerald-100" : "bg-blue-50"}`}>
                    <motion.div
                      animate={{ width: displayPhase >= 3 ? "100%" : "38%" }}
                      className={`h-1 rounded-full ${displayPhase >= 3 ? "bg-emerald-500" : "bg-primary"}`}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-1.5 rounded-[var(--radius-md)] border border-gray-200 bg-white p-2.5">
              {ecosystem.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div
                      className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[9px] font-medium ${
                        item.active
                          ? "border-blue-200 bg-blue-50 text-primary"
                          : "border-gray-200 bg-white text-gray-500"
                      }`}
                    >
                      <Icon size={11} />
                      {item.label}
                    </div>
                    {index < ecosystem.length - 1 && (
                      <span aria-hidden="true" className="text-gray-300">/</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
