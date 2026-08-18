"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Database,
  Globe,
  Headphones,
  Layers3,
  Link2,
  Settings2,
  ShoppingCart,
  Sparkles,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI & Business Automation",
    description:
      "Use AI to automate repetitive work, answer customer questions and make everyday business operations more efficient.",
    problems: [
      "Too many repetitive customer questions",
      "Manual support and enquiry handling",
      "Employees spending time on repetitive tasks",
    ],
    benefits: [
      "AI-powered customer assistance",
      "Automated workflows",
      "Faster response times",
    ],
  },
  {
    icon: Globe,
    title: "Digital Presence",
    description:
      "Build a professional digital presence that helps your business attract customers, explain its services and generate enquiries.",
    problems: [
      "Outdated or unprofessional website",
      "Customers cannot easily find information",
      "Low online enquiry conversion",
    ],
    benefits: [
      "Modern responsive websites",
      "Clear service presentation",
      "Lead-focused user experience",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description:
      "Create online stores that make it easier for customers to discover products, place orders and complete purchases.",
    problems: [
      "Manual order management",
      "Poor online shopping experience",
      "Difficulty managing products and customers",
    ],
    benefits: [
      "Online product catalogues",
      "Order management",
      "Payment integration",
    ],
  },
  {
    icon: Settings2,
    title: "Business Process Automation",
    description:
      "Turn repetitive manual processes into streamlined digital workflows so your team can focus on more important work.",
    problems: [
      "Too much manual data entry",
      "Processes spread across different tools",
      "Human errors in routine operations",
    ],
    benefits: [
      "Automated workflows",
      "Centralized business data",
      "Reduced manual work",
    ],
  },
  {
    icon: Link2,
    title: "System & API Integration",
    description:
      "Connect the tools your business already uses so information can move between systems automatically.",
    problems: [
      "Multiple disconnected systems",
      "Duplicate data entry",
      "Manual transfer of information",
    ],
    benefits: [
      "API integrations",
      "System synchronization",
      "Automated data exchange",
    ],
  },
  {
    icon: Database,
    title: "Custom Business Software",
    description:
      "Build software around your actual business workflow instead of forcing your team to adapt to generic software.",
    problems: [
      "Generic software doesn't fit your workflow",
      "Growing operational complexity",
      "Limited visibility into business data",
    ],
    benefits: [
      "Custom dashboards",
      "Business management systems",
      "Scalable architecture",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We first understand your business, current workflow and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We identify the right technology and define a practical solution around your requirements.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, integrate and test the solution with a focus on usability and reliability.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "After launch, we can continue improving the solution as your business grows.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <Sparkles size={15} />
              Business Solutions
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology that solves{" "}
              <span className="text-cyan-300">real business problems.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              We don't build technology just because we can. We build digital
              solutions that help businesses work better, serve customers
              faster and grow with confidence.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-blue-50"
              >
                Discuss Your Problem
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Why Solutions
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Start with the problem. Choose the technology second.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Every business has different processes, customers and
                challenges. Instead of forcing a business into an off-the-shelf
                solution, we understand the requirement first and then choose
                the right technology.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Business-first approach",
                  "Practical and scalable solutions",
                  "Modern technology stack",
                  "Long-term support and improvement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-primary">
                      <Check size={14} />
                    </div>

                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="rounded-3xl bg-navy p-6 shadow-2xl shadow-blue-900/10 sm:p-8">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 w-28 rounded bg-white/20" />
                      <div className="mt-2 h-2 w-20 rounded bg-white/10" />
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                      <Zap size={18} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl bg-white/5 p-4">
                      <Headphones
                        size={18}
                        className="text-cyan-300"
                      />
                      <div className="mt-4 h-2 w-14 rounded bg-white/20" />
                      <div className="mt-2 h-1.5 w-20 rounded bg-white/10" />
                    </div>

                    <div className="rounded-xl bg-cyan-300/10 p-4">
                      <Bot size={18} className="text-cyan-300" />
                      <div className="mt-4 h-2 w-14 rounded bg-white/20" />
                      <div className="mt-2 h-1.5 w-20 rounded bg-white/10" />
                    </div>

                    <div className="rounded-xl bg-white/5 p-4">
                      <Layers3 size={18} className="text-cyan-300" />
                      <div className="mt-4 h-2 w-14 rounded bg-white/20" />
                      <div className="mt-2 h-1.5 w-20 rounded bg-white/10" />
                    </div>
                  </div>

                  <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/50">
                        Business efficiency
                      </span>
                      <span className="text-xs font-semibold text-cyan-300">
                        Improved
                      </span>
                    </div>

                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-4/5 rounded-full bg-cyan-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What We Solve
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Solutions built around your needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              From customer experience to internal operations, we can help
              turn technology challenges into practical digital systems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  className="group rounded-3xl border border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition group-hover:bg-primary group-hover:text-white">
                    <Icon size={21} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-navy">
                    {solution.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {solution.description}
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-400">
                      Common Problems
                    </p>

                    <div className="mt-3 space-y-2.5">
                      {solution.problems.map((problem) => (
                        <div
                          key={problem}
                          className="flex gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                          <span>{problem}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-6 h-px bg-gray-100" />

                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    What We Can Build
                  </p>

                  <div className="mt-3 space-y-2.5">
                    {solution.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-center gap-2 text-sm font-medium text-navy"
                      >
                        <Check size={15} className="text-primary" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Built For Different Businesses
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              One technology partner. Different business needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our solutions can be adapted to different industries and
              business sizes.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Healthcare",
              "Education",
              "Retail",
              "Professional Services",
              "Real Estate",
              "Manufacturing",
              "Startups",
              "Local Businesses",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-2xl border border-gray-200 bg-white p-5 text-center text-sm font-semibold text-navy transition hover:border-blue-200 hover:shadow-sm"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Our Process
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              From problem to solution.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-primary">
                  {item.number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
              <Sparkles size={15} />
              Have a business challenge?
            </span>

            <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
              Let's find the right solution for it.
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              You don't need to know exactly what technology you need. Tell us
              the problem and we'll help you figure out the approach.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-blue-50"
            >
              Discuss Your Requirement
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