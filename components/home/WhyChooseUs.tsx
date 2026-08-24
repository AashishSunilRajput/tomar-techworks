"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Code2,
    title: "Built Around Your Needs",
    description:
      "We build solutions around your actual business requirements instead of forcing your workflow into a generic template.",
  },
  {
    icon: BrainCircuit,
    title: "Modern Technology",
    description:
      "From modern web applications to AI-powered solutions, we choose technology based on the problem we're solving.",
  },
  {
    icon: ShieldCheck,
    title: "Business-Focused Approach",
    description:
      "We focus on creating practical digital solutions that are useful for your customers and your day-to-day operations.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "Our relationship doesn't have to end after launch. We can continue with maintenance, improvements and technical support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="container-main relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why Tomar Techworks
            </span>

           <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
  Why Businesses Choose Tomar Techworks
</h2>

           <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
  Whether you need a business website, custom software, eCommerce
  platform or AI solution, Tomar Techworks focuses on understanding
  your requirements first and building practical technology solutions
  that support your business goals.
</p>

            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Learn more about us
              <ArrowUpRight
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            {/* Small visual */}
            <div className="mt-12 hidden overflow-hidden rounded-3xl bg-navy p-6 sm:block">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                    Our approach
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Understand → Build → Improve
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary">
                  <BrainCircuit size={22} className="text-white" />
                </div>
              </div>

              <div className="mt-6 h-px bg-white/10" />

              <div className="mt-5 flex flex-wrap gap-2">
                {["Web", "Software", "AI", "Integrations", "Support"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}