"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import HeroProductVisual from "@/components/home/HeroProductVisual";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgb(219_234_254_/_0.6),transparent_30%),radial-gradient(circle_at_12%_88%,rgb(236_254_255_/_0.5),transparent_28%)]" />

      <div className="container-main relative">
        <div className="grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:py-20">
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                href="/services/ai-solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition-all hover:border-blue-200 hover:bg-blue-50"
              >
                <MessageCircle size={17} />
                Explore AI Solutions
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
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
            className="relative mx-auto w-full max-w-[40rem]"
          >
            <HeroProductVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}