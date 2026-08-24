"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b132b08_1px,transparent_1px),linear-gradient(to_bottom,#0b132b08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-main relative">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles size={15} />
              Web • AI • Software
            </div>

            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight text-navy sm:text-6xl lg:text-7xl">
  Web, Software &
  <br />
  <span className="gradient-text">AI Solutions </span>
  for Your Business
</h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
  Tomar Techworks builds modern websites, custom software, AI chatbot
  solutions and eCommerce platforms that help businesses work smarter,
  serve customers better and grow.
</p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-primary-dark hover:shadow-xl"
              >
                Start Your Project
                <ArrowRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/solutions/ai-chatbot"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:border-blue-200 hover:bg-blue-50"
              >
                <MessageCircle size={17} />
                Explore AI Solutions
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ Custom-built solutions</span>
              <span>✓ Business-focused development</span>
              <span>✓ Long-term support</span>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-blue-400/20 blur-3xl" />

            {/* Main Dashboard */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-blue-900/10">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                </div>

                <div className="rounded-full bg-gray-50 px-3 py-1 text-[10px] font-medium text-gray-400">
                  tomartechworks.com
                </div>
              </div>

              {/* Dashboard */}
              <div className="grid grid-cols-[72px_1fr] bg-gray-50">
                {/* Sidebar */}
                <div className="border-r border-gray-100 bg-navy p-4">
                  <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-bold text-white">
                    TT
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="mx-auto h-2 w-7 rounded bg-white/30" />
                    <div className="mx-auto h-2 w-5 rounded bg-white/15" />
                    <div className="mx-auto h-2 w-7 rounded bg-white/15" />
                    <div className="mx-auto h-2 w-6 rounded bg-white/15" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-24 rounded bg-navy/10" />
                      <div className="mt-2 h-2 w-36 rounded bg-gray-200" />
                    </div>

                    <div className="h-8 w-8 rounded-full bg-blue-100" />
                  </div>

                  {/* Cards */}
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="h-2 w-16 rounded bg-gray-200" />
                      <div className="mt-3 h-5 w-12 rounded bg-primary/80" />
                      <div className="mt-3 h-1.5 w-full rounded bg-gray-100" />
                    </div>

                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="h-2 w-20 rounded bg-gray-200" />
                      <div className="mt-3 h-5 w-16 rounded bg-cyan-400" />
                      <div className="mt-3 h-1.5 w-3/4 rounded bg-gray-100" />
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-3 rounded-2xl bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-24 rounded bg-gray-200" />
                      <div className="h-2 w-12 rounded bg-blue-100" />
                    </div>

                    <div className="mt-6 flex h-28 items-end gap-2">
                      {[35, 50, 42, 65, 55, 78, 68, 92, 75, 100].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: 0 }}
                            animate={{ height: `${height}%` }}
                            transition={{
                              duration: 0.7,
                              delay: 0.5 + index * 0.05,
                            }}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-primary to-cyan-400"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* AI Card */}
                  <div className="mt-3 rounded-2xl bg-navy p-4 text-white shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
                        <Sparkles size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold">AI Assistant</p>
                        <p className="mt-0.5 text-[10px] text-white/50">
                          Ready to help your customers
                        </p>
                      </div>

                      <span className="ml-auto h-2 w-2 rounded-full bg-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating AI badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-primary">
                  <Sparkles size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-navy">
                    AI-powered
                  </p>
                  <p className="text-[11px] text-gray-500">
                    Business solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating code badge */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-4 top-1/3 hidden rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:block"
            >
              <p className="font-mono text-xs text-primary">
                {"<build />"}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}