"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Check,
  FileText,
  MessageSquare,
  Plug,
  Sparkles,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    icon: Bot,
    title: "AI Chatbots",
    description:
      "AI-powered chat experiences that can answer customer questions using business-provided information.",
  },
  {
    icon: FileText,
    title: "Knowledge-Based AI",
    description:
      "Connect AI experiences with your business documents, FAQs, products and other structured knowledge.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support AI",
    description:
      "Help customers find relevant information through conversational interfaces available on your website.",
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Explore AI-assisted workflows for repetitive tasks, information handling and business processes.",
  },
  {
    icon: Plug,
    title: "AI Integrations",
    description:
      "Connect AI functionality with your existing website, CRM, APIs and other business systems.",
  },
  {
    icon: BrainCircuit,
    title: "Custom AI Solutions",
    description:
      "Build AI functionality around a specific business requirement instead of using a one-size-fits-all approach.",
  },
];

const process = [
  {
    number: "01",
    title: "Identify the Use Case",
    description:
      "We understand where AI could provide practical value for your customers or internal team.",
  },
  {
    number: "02",
    title: "Prepare the Data",
    description:
      "We identify the information, documents, APIs or business data the solution needs.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description:
      "We develop the AI experience and connect it with the required website or business systems.",
  },
  {
    number: "04",
    title: "Test & Improve",
    description:
      "We test responses, workflows and integrations and continue improving the solution based on real usage.",
  },
];

export default function AISolutionsPage() {
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
                <Sparkles size={15} />
                AI Solutions
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Practical AI for{" "}
                <span className="text-cyan-300">real businesses.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                We build practical AI solutions that can help businesses
                improve customer interactions, organize knowledge and automate
                useful workflows.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
                >
                  Discuss an AI Idea
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>

            {/* AI Preview */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary">
                      <Bot size={18} />
                    </div>

                    <div>
                      <div className="h-2.5 w-20 rounded bg-navy" />
                      <div className="mt-1.5 h-2 w-14 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="space-y-4 p-5 sm:p-7">
                    <div className="ml-auto max-w-[75%] rounded-2xl rounded-br-md bg-blue-50 p-3">
                      <div className="h-2 w-full rounded bg-primary/20" />
                      <div className="mt-2 h-2 w-2/3 rounded bg-primary/20" />
                    </div>

                    <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-gray-50 p-4">
                      <div className="flex items-center gap-2">
                        <Sparkles size={13} className="text-primary" />
                        <div className="h-2 w-24 rounded bg-gray-300" />
                      </div>

                      <div className="mt-3 space-y-2">
                        <div className="h-2 w-full rounded bg-gray-200" />
                        <div className="h-2 w-4/5 rounded bg-gray-200" />
                        <div className="h-2 w-3/5 rounded bg-gray-200" />
                      </div>
                    </div>

                    <div className="h-10 rounded-full border border-gray-200 bg-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              AI That Has a Purpose
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Don't add AI just because it's trending.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We focus on identifying useful business problems first and then
              selecting an AI approach that makes sense for that particular
              problem.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
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

      {/* AR AI Chat */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="rounded-3xl bg-navy p-8 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  <Sparkles size={15} />
                  Our AI Product
                </span>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  TT AI Chat
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                  An AI chat solution designed to help businesses provide
                  website visitors with answers based on their own business
                  information and knowledge base.
                </p>

                <Link
                  href="https://chat.tomartechworks.com/"
                  className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
                >
                  Discuss AI Chat for Your Business
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-cyan-300">
                <Bot size={42} strokeWidth={1.4} />
              </div>
            </div>
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
                From AI idea to useful solution.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We start with the business problem, not the technology.
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
              Have an AI idea?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us what you want to improve or automate. We'll help you
              explore a practical approach.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
            >
              Talk About Your Idea
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