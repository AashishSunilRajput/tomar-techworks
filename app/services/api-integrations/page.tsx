"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Link2,
  Lock,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Link2,
    title: "Third-Party Integrations",
    description:
      "Connect your website or application with external services your business already uses.",
  },
  {
    icon: Code2,
    title: "REST API Integration",
    description:
      "Connect applications through REST APIs to exchange data and trigger business workflows.",
  },
  {
    icon: Database,
    title: "CRM Integration",
    description:
      "Send leads, customers and other relevant information between your website and CRM systems.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Connect applications with suitable cloud-based services and business platforms.",
  },
  {
    icon: RefreshCw,
    title: "Data Synchronization",
    description:
      "Keep information synchronized between connected systems where the integration supports it.",
  },
  {
    icon: Lock,
    title: "Secure Integration",
    description:
      "Implement authentication and data handling appropriate to the APIs and systems being connected.",
  },
];

const integrations = [
  "CRM Systems",
  "Payment Gateways",
  "Business APIs",
  "Lead Systems",
  "E-commerce Platforms",
  "External Services",
];

const process = [
  {
    number: "01",
    title: "Understand Systems",
    description:
      "We identify the systems involved, available APIs and the information that needs to move between them.",
  },
  {
    number: "02",
    title: "Define Data Flow",
    description:
      "We map what data should be sent, received or synchronized and when each action should happen.",
  },
  {
    number: "03",
    title: "Build Integration",
    description:
      "We implement the required API calls, authentication, validation and business logic.",
  },
  {
    number: "04",
    title: "Test & Monitor",
    description:
      "We test successful and failed scenarios to make the integration reliable and easier to maintain.",
  },
];

export default function APIIntegrationsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="container-main relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
                <Link2 size={15} />
                API & Integrations
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Make your business systems{" "}
                <span className="text-cyan-300">work together.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Connect websites, applications, CRMs, payment systems and
                third-party services so your business data can move where it
                needs to go.
              </p>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
                >
                  Discuss an Integration
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>

            {/* API visual */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <GitBranch size={23} />
                  </div>

                  <div className="h-px flex-1 bg-white/10 mx-4" />

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300">
                    <Database size={23} />
                  </div>
                </div>

                <div className="my-8 flex items-center justify-center">
                  <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-300">
                    API
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="h-2 w-16 rounded bg-white/20" />
                    <div className="mt-3 h-2 w-full rounded bg-white/10" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-white/10" />
                  </div>

                  <div className="rounded-2xl bg-white/5 p-4">
                    <div className="h-2 w-16 rounded bg-white/20" />
                    <div className="mt-3 h-2 w-full rounded bg-white/10" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-white/10" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="border-b border-gray-100 py-10">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {integrations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm font-medium text-gray-500"
              >
                <Check size={15} className="text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What We Integrate
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Connect the tools your business depends on.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We help businesses connect systems so repetitive data entry can
              be reduced and information can flow between applications.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="rounded-3xl border border-gray-200 p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-navy">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Example Flow */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Example
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              From customer enquiry to your business system.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              For example, a website form can send customer information to
              another business system automatically through an API.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-col items-center gap-3 md:flex-row md:justify-center">
            {["Website", "API", "Business System"].map((item, index) => (
              <div key={item} className="flex items-center gap-3">
                <div className="rounded-2xl border border-gray-200 bg-white px-6 py-5 text-sm font-semibold text-navy shadow-sm">
                  {item}
                </div>

                {index < 2 && (
                  <ArrowRight
                    size={18}
                    className="hidden text-primary md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Process
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Integration without the confusion.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We first understand the systems and data flow, then build the
                integration around the actual business requirement.
              </p>
            </div>

            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                  className="flex gap-5 rounded-3xl border border-gray-200 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-xs font-bold text-cyan-300">
                    {item.number}
                  </div>

                  <div>
                    <h3 className="font-semibold text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>
                  </div>
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
              Need two systems to talk to each other?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us which systems you're using and what information needs to
              move between them.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
            >
              Discuss Your Integration
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