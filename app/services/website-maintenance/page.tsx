"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  Globe,
  Headphones,
  Lock,
  RefreshCw,
  Search,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Bug Fixes",
    description:
      "Investigate and resolve website issues that affect functionality or user experience.",
  },
  {
    icon: RefreshCw,
    title: "Updates",
    description:
      "Keep supported website components, dependencies and content updated when required.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Help maintain a safer website through appropriate updates, monitoring and security practices.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Identify opportunities to improve loading speed, usability and overall website performance.",
  },
  {
    icon: Settings,
    title: "Content Changes",
    description:
      "Make required content, page and configuration changes without you having to handle the technical work.",
  },
  {
    icon: Headphones,
    title: "Technical Support",
    description:
      "Get technical assistance when you need help understanding or resolving a website-related issue.",
  },
];

const supportAreas = [
  "Business Websites",
  "E-commerce Websites",
  "WordPress Websites",
  "Custom Web Applications",
  "API Integrations",
  "Existing Projects",
];

const process = [
  {
    number: "01",
    title: "Review",
    description:
      "We understand your website, current setup and the type of support you need.",
  },
  {
    number: "02",
    title: "Identify",
    description:
      "We identify bugs, updates, improvements or maintenance tasks that need attention.",
  },
  {
    number: "03",
    title: "Fix & Improve",
    description:
      "We work on the agreed tasks and test the changes before considering them complete.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "For ongoing requirements, we can continue supporting your website as new needs arise.",
  },
];

export default function WebsiteMaintenancePage() {
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
                <Headphones size={15} />
                Maintenance & Support
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Keep your website{" "}
                <span className="text-cyan-300">running smoothly.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Websites need attention after launch too. We help businesses
                with maintenance, bug fixes, updates, improvements and ongoing
                technical support.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
                >
                  Get Support
                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>

            {/* Maintenance Visual */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl">
                <div className="rounded-2xl bg-white p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                      <ShieldCheck size={21} />
                    </div>

                    <div>
                      <div className="h-3 w-28 rounded bg-navy" />
                      <div className="mt-2 h-2 w-20 rounded bg-gray-200" />
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      "Website Status",
                      "Security Updates",
                      "Performance",
                      "System Health",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                      >
                        <div className="flex items-center gap-3">
                          <div className="h-7 w-7 rounded-lg bg-blue-50" />

                          <span className="text-xs font-medium text-gray-600">
                            {item}
                          </span>
                        </div>

                        <div
                          className={`h-2 w-2 rounded-full ${
                            index === 2
                              ? "bg-yellow-300"
                              : "bg-green-400"
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Areas */}
      <section className="border-b border-gray-100 py-10">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {supportAreas.map((item) => (
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

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What We Handle
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Technical support when you need it.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Whether your website needs a small fix or ongoing technical
              attention, we can help with a range of maintenance requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
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
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Maintenance */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Why It Matters
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Launching a website is not the finish line.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Websites change over time. Content needs updating, software
                dependencies change, integrations can stop working and new
                business requirements appear.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Globe,
                  title: "Keep Content Current",
                  text: "Make important business information and website content easier to keep updated.",
                },
                {
                  icon: Lock,
                  title: "Stay Updated",
                  text: "Address relevant software and security updates as part of ongoing maintenance.",
                },
                {
                  icon: Gauge,
                  title: "Improve Performance",
                  text: "Identify and address performance issues that may affect visitors.",
                },
                {
                  icon: Search,
                  title: "Fix Problems Early",
                  text: "Address technical issues before they become larger problems where possible.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-primary">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-navy">
                        {item.title}
                      </h3>

                      <p className="mt-1.5 text-xs leading-5 text-gray-500">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                Support without the technical headache.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We keep maintenance work structured so you know what needs to
                be done and what has been completed.
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

      {/* Existing Website */}
      <section className="section-padding">
        <div className="container-main">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 lg:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Already Have a Website?
                </span>

                <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl">
                  You don't necessarily need a new website.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-500">
                  If your existing website has problems or needs improvements,
                  we can first evaluate the current setup and discuss what can
                  be fixed or improved.
                </p>
              </div>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white hover:bg-navy/90"
              >
                Get Your Website Reviewed
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need help with your website?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us what is not working or what you want to improve. We'll
              help you figure out the next step.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
            >
              Contact Tomar Techworks
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