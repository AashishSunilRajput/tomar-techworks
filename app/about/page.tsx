"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Code2,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built around your business requirements.",
  },
  {
    icon: Bot,
    title: "AI Solutions",
    description:
      "Practical AI solutions that help businesses automate support, answer questions and capture leads.",
  },
  {
    icon: Users,
    title: "Custom Software",
    description:
      "Business-specific software, dashboards and digital tools designed around your workflows.",
  },
];

const values = [
  "Business-first approach",
  "Clear communication",
  "Modern technology",
  "Scalable solutions",
  "Long-term support",
  "Practical AI adoption",
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              About Tomar Techworks
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              We build technology around{" "}
              <span className="text-cyan-300">real business needs.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Tomar Techworks helps businesses build, improve and maintain
              their digital presence through websites, custom software,
              integrations and practical AI solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Who We Are
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                A technology partner, not just a development team.
              </h2>

              <p className="mt-6 text-base leading-7 text-gray-600">
                We believe technology should solve a business problem, not
                simply add another tool to your business.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600">
                From a professional website for a growing business to a
                custom web application or AI-powered customer support system,
                we focus on understanding the requirement first and then
                choosing the right technology.
              </p>

              <p className="mt-4 text-base leading-7 text-gray-600">
                Our goal is simple: build useful digital solutions that are
                reliable today and flexible enough to grow with your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl bg-surface p-8 sm:p-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <Code2 className="text-primary" size={24} />
                    <p className="mt-5 text-sm font-semibold text-navy">
                      Build
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Websites & software
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <Bot className="text-primary" size={24} />
                    <p className="mt-5 text-sm font-semibold text-navy">
                      Automate
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      AI & integrations
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white p-5 shadow-sm">
                    <ShieldCheck className="text-primary" size={24} />
                    <p className="mt-5 text-sm font-semibold text-navy">
                      Maintain
                    </p>
                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      Support & improvements
                    </p>
                  </div>

                  <div className="rounded-2xl bg-navy p-5 text-white shadow-sm">
                    <Lightbulb className="text-cyan-300" size={24} />
                    <p className="mt-5 text-sm font-semibold">
                      Improve
                    </p>
                    <p className="mt-1 text-xs leading-5 text-white/50">
                      Grow with technology
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What We Do
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Technology services for growing businesses.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We combine development, integrations and AI to create practical
              digital solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Simple thinking. Solid execution.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We keep projects focused on business outcomes, usability and
                long-term maintainability.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                  }}
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4"
                >
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-primary"
                  />

                  <span className="text-sm font-medium text-navy">
                    {value}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us what you&apos;re trying to build and let&apos;s explore
              the right technology solution for your business.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Start a Conversation
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}