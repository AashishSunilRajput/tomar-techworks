"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Check,
  MessageCircle,
  Sparkles,
  UserRound,
} from "lucide-react";

const features = [
  "Knowledge-base powered answers",
  "Website chat widget",
  "Lead capture",
  "Conversation management",
  "Custom branding",
  "Business-specific responses",
];

export default function AISolutions() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-main relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr]">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={15} />
              AI Solutions
            </div>

            <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Give your business an AI assistant that knows your business.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Meet{" "}
              <span className="font-semibold text-white">AR AI Chat</span> —
              an AI-powered customer support chatbot designed to answer
              business-specific questions and help capture customer leads.
            </p>

            {/* Features */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-white/70"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/20 text-cyan-300">
                    <Check size={12} strokeWidth={2.5} />
                  </span>

                  {feature}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/solutions/ai-chatbot"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:bg-blue-50"
              >
                Explore AR AI Chat
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/35">
              An AI product by Tomar Techworks.
            </p>
          </motion.div>

          {/* Right - Chat Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-md"
          >
            {/* Glow */}
            <div className="absolute inset-8 rounded-full bg-primary/30 blur-3xl" />

            {/* Chat window */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Bot size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-navy">
                      AR AI Chat
                    </p>

                    <div className="mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      <span className="text-[11px] text-gray-400">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-primary">
                  AI Assistant
                </span>
              </div>

              {/* Messages */}
              <div className="space-y-4 bg-gray-50 p-5">
                {/* Bot */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Bot size={14} />
                  </div>

                  <div className="max-w-[82%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs leading-5 text-gray-600">
                      Hi! 👋 How can I help you today?
                    </p>
                  </div>
                </div>

                {/* User */}
                <div className="flex items-start justify-end gap-2.5">
                  <div className="max-w-[82%] rounded-2xl rounded-tr-md bg-primary px-4 py-3">
                    <p className="text-xs leading-5 text-white">
                      I&apos;d like to know more about your services.
                    </p>
                  </div>

                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-200 text-gray-500">
                    <UserRound size={14} />
                  </div>
                </div>

                {/* Bot */}
                <div className="flex items-start gap-2.5">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
                    <Bot size={14} />
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-md bg-white px-4 py-3 shadow-sm">
                    <p className="text-xs leading-5 text-gray-600">
                      Sure! We provide website development, e-commerce,
                      custom software, AI solutions and integrations.
                    </p>
                  </div>
                </div>

                {/* Lead prompt */}
                <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <div className="flex items-center gap-2">
                    <MessageCircle size={15} className="text-primary" />

                    <p className="text-xs font-semibold text-navy">
                      Interested in getting started?
                    </p>
                  </div>

                  <button
                    type="button"
                    className="mt-3 w-full rounded-xl bg-primary px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Talk to our team
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-gray-100 bg-white p-4">
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-3">
                  <span className="flex-1 text-xs text-gray-400">
                    Ask something...
                  </span>

                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-white">
                    <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-white p-3 shadow-xl sm:flex"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary">
                <Bot size={17} />
              </div>

              <div>
                <p className="text-xs font-semibold text-navy">
                  Business-ready AI
                </p>
                <p className="text-[10px] text-gray-400">
                  Powered by your knowledge
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}