"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  Code2,
  Database,
  LayoutDashboard,
  Lock,
  Settings,
  Users,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Custom Dashboards",
    description:
      "Centralized dashboards that help your team monitor important business information and activities.",
  },
  {
    icon: Settings,
    title: "Business Workflows",
    description:
      "Digital workflows designed around the way your business operates instead of forcing you into a generic system.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Manage users, roles and access permissions according to your business requirements.",
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Organize and manage business data through structured applications and databases.",
  },
  {
    icon: Lock,
    title: "Access Control",
    description:
      "Build role-based access and protected areas for different types of users.",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Turn business data into useful reports and dashboards that support better decisions.",
  },
];

const solutions = [
  "Admin panels",
  "CRM systems",
  "Management systems",
  "Customer portals",
  "Internal business tools",
  "Custom web applications",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your current process, users, problems and the outcome you want from the software.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define the application structure, user flows, features and technical approach.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the application in modules so functionality can be tested and improved throughout development.",
  },
  {
    number: "04",
    title: "Deploy & Improve",
    description:
      "After testing and deployment, we can continue improving the software as your business evolves.",
  },
];

export default function CustomSoftwarePage() {
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
                <Code2 size={15} />
                Custom Software
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Software built around{" "}
                <span className="text-cyan-300">your business.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Replace spreadsheets, disconnected tools and manual processes
                with custom software designed around the way your business
                actually works.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
                >
                  Discuss Your Project
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            {/* Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
                  </div>

                  <div className="flex min-h-[300px]">
                    <div className="hidden w-20 border-r border-gray-100 bg-gray-50 p-3 sm:block">
                      <div className="h-5 rounded bg-navy" />
                      <div className="mt-7 space-y-3">
                        <div className="h-2 rounded bg-gray-200" />
                        <div className="h-2 rounded bg-gray-200" />
                        <div className="h-2 rounded bg-primary/30" />
                        <div className="h-2 rounded bg-gray-200" />
                      </div>
                    </div>

                    <div className="flex-1 p-5">
                      <div className="h-4 w-32 rounded bg-navy" />

                      <div className="mt-6 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-xl bg-blue-50" />
                        <div className="h-16 rounded-xl bg-cyan-50" />
                        <div className="h-16 rounded-xl bg-gray-50" />
                      </div>

                      <div className="mt-5 grid grid-cols-[1.4fr_1fr] gap-2">
                        <div className="h-28 rounded-xl bg-gray-50" />
                        <div className="h-28 rounded-xl bg-blue-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-b border-gray-100 py-10">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {solutions.map((item) => (
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
              What We Build
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Technology that solves real business problems.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We build practical software that helps businesses organize
              operations, reduce repetitive work and manage information more
              effectively.
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
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
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

      {/* Why Custom */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Why Custom Software
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Your business is different. Your software can be too.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Off-the-shelf software can be useful, but sometimes your
                business needs a workflow that doesn't fit into a standard
                product. Custom software lets us build around your actual
                process.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Designed around your workflow",
                "Only the features your business needs",
                "Can integrate with existing systems",
                "Can grow with your business",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-primary">
                    <Check size={16} />
                  </div>

                  <span className="text-sm font-medium text-navy">
                    {item}
                  </span>
                </div>
              ))}
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
                From business problem to working software.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We break complex projects into manageable stages so the
                development process remains clear.
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
                  className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-6"
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

      {/* Technology */}
      <section className="section-padding">
        <div className="container-main">
          <div className="rounded-3xl bg-navy px-7 py-10 sm:px-10 lg:px-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Technology
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Built with technologies suited to your project.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                  We select the technology stack according to the application's
                  requirements, integrations, expected usage and future
                  maintenance needs.
                </p>
              </div>

              <div className="flex max-w-sm flex-wrap justify-start gap-2 lg:justify-end">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "PHP",
                  "Laravel",
                  "Prisma",
                  "PostgreSQL",
                  "APIs",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Have a business process you want to improve?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us what you're trying to solve. We'll help you explore
              whether custom software is the right solution.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
            >
              Discuss Your Project
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