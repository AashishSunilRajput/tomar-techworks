"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
            <Sparkles size={15} />
            Let&apos;s build something useful
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-cyan-300">Let&apos;s turn it into reality.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            Whether you need a new website, custom software, an AI solution or
            ongoing technical support, let&apos;s discuss what your business
            needs.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy shadow-xl transition-all hover:bg-blue-50"
            >
              Start Your Project
              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MessageCircle size={17} />
              Talk to Us
            </Link>
          </div>

          {/* Supporting text */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/40">
            <span>Web Development</span>
            <span className="hidden sm:block">•</span>
            <span>Custom Software</span>
            <span className="hidden sm:block">•</span>
            <span>AI Solutions</span>
            <span className="hidden sm:block">•</span>
            <span>Maintenance</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}