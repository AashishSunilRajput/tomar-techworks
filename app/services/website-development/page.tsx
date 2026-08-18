"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  Globe,
  Layout,
  Search,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Business Websites",
    description:
      "Professional websites that clearly communicate your services, build trust and help convert visitors into enquiries.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Websites that provide a smooth experience across desktop, tablet and mobile devices.",
  },
  {
    icon: Search,
    title: "SEO-Friendly Structure",
    description:
      "Clean page structure and technical foundations that make your website easier for search engines to understand.",
  },
  {
    icon: Gauge,
    title: "Performance Focused",
    description:
      "Fast-loading pages with a focus on performance, usability and a smooth customer experience.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use suitable modern technologies based on the requirements, project scope and long-term needs.",
  },
  {
    icon: Globe,
    title: "Business Integrations",
    description:
      "Connect your website with forms, CRMs, payment systems, APIs, analytics and other business tools.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, audience, services and what you want the website to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We define the pages, features, content structure and technical approach before development.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the website with responsive layouts, required functionality and integrations.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and final review, we help prepare the website for production and launch.",
  },
];

const websiteTypes = [
  "Business websites",
  "Corporate websites",
  "Service websites",
  "Landing pages",
  "Portfolio websites",
  "Company websites",
];

export default function WebsiteDevelopmentPage() {
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
                <Globe size={15} />
                Website Development
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Websites that make your business{" "}
                <span className="text-cyan-300">look professional.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                We build modern, responsive and business-focused websites
                designed to help you establish trust, reach customers and
                generate enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
                >
                  Start Your Website
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <div className="overflow-hidden rounded-2xl bg-white">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                    <div className="ml-4 h-2 w-36 rounded-full bg-gray-100" />
                  </div>

                  {/* Website Preview */}
                  <div className="p-5 sm:p-7">
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-navy" />

                      <div className="flex gap-2">
                        <div className="h-2 w-8 rounded bg-gray-200" />
                        <div className="h-2 w-8 rounded bg-gray-200" />
                        <div className="h-2 w-8 rounded bg-gray-200" />
                      </div>
                    </div>

                    <div className="mt-10 max-w-xs">
                      <div className="h-5 w-48 rounded bg-navy" />
                      <div className="mt-2 h-5 w-32 rounded bg-primary/70" />

                      <div className="mt-4 space-y-2">
                        <div className="h-2 w-full rounded bg-gray-100" />
                        <div className="h-2 w-4/5 rounded bg-gray-100" />
                      </div>

                      <div className="mt-5 h-9 w-28 rounded-full bg-primary" />
                    </div>

                    <div className="mt-10 grid grid-cols-3 gap-2">
                      <div className="h-16 rounded-xl bg-blue-50" />
                      <div className="h-16 rounded-xl bg-gray-50" />
                      <div className="h-16 rounded-xl bg-cyan-50" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <Smartphone size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-navy">
                      Responsive
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Desktop • Tablet • Mobile
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Website Types */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {websiteTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-2 text-sm font-medium text-gray-500"
              >
                <Check size={15} className="text-primary" />
                {type}
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
              What You Get
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              More than just a website.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Every website should have a purpose. We focus on the design,
              performance, usability and functionality that support your
              business goals.
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
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className="rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <Icon size={22} strokeWidth={1.8} />
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

      {/* Process */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Our Process
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                From idea to launch.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We keep the process straightforward and transparent so you
                always know what happens next.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Discuss your requirements
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="space-y-4">
              {process.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
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
          <div className="rounded-3xl bg-navy px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Technology
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  The right technology for the project.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                  We choose technologies based on your requirements, expected
                  scale, integrations and long-term maintenance needs rather
                  than forcing every project into the same stack.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "PHP",
                  "Laravel",
                  "WordPress",
                  "WooCommerce",
                  "APIs",
                ].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              After Launch
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Need help after your website goes live?
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We also provide ongoing website maintenance and technical
              support, so you don't have to manage everything on your own.
            </p>

            <Link
              href="/services/website-maintenance"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Explore Maintenance & Support
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to build your website?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us about your business and what you need. We&apos;ll help
              you plan the right website for your goals.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Start Your Project
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