"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  Globe,
  Headphones,
  Plug,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    number: "01",
    title: "Website Development",
    description:
      "Professional, responsive websites designed to represent your business and convert visitors into customers.",
    features: [
      "Business websites",
      "Landing pages",
      "Corporate websites",
      "Responsive design",
      "SEO-friendly structure",
    ],
    href: "/services/website-development",
  },
  {
    icon: ShoppingCart,
    number: "02",
    title: "E-commerce Development",
    description:
      "Online stores built around your products, customers and business operations.",
    features: [
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Order management",
      "Third-party integrations",
    ],
    href: "/services/ecommerce",
  },
  {
    icon: Code2,
    number: "03",
    title: "Custom Software",
    description:
      "Business-specific web applications and dashboards designed around the way your business actually works.",
    features: [
      "Admin dashboards",
      "Management systems",
      "Customer portals",
      "Internal tools",
      "Custom workflows",
    ],
    href: "/services/custom-software",
  },
  {
    icon: Bot,
    number: "04",
    title: "AI Solutions",
    description:
      "Practical AI solutions that help businesses improve customer support, automate tasks and capture more leads.",
    features: [
      "AI chatbots",
      "Knowledge-base AI",
      "Lead capture",
      "AI integrations",
      "Business automation",
    ],
    href: "/services/ai-solutions",
    featured: true,
  },
  {
    icon: Plug,
    number: "05",
    title: "API & Integrations",
    description:
      "Connect your website or software with the tools and services your business already uses.",
    features: [
      "REST API integration",
      "CRM integration",
      "Payment gateways",
      "Third-party services",
      "Custom API development",
    ],
    href: "/services/api-integrations",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Maintenance & Support",
    description:
      "Keep your website or application secure, updated and running smoothly after launch.",
    features: [
      "Bug fixes",
      "Security updates",
      "Performance improvements",
      "Content changes",
      "Feature enhancements",
    ],
    href: "/services/website-maintenance",
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Technology solutions built for{" "}
              <span className="text-cyan-300">your business.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              From websites and e-commerce to custom software, AI and ongoing
              support — we help businesses build and improve their digital
              presence.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Discuss Your Project
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    service.featured
                      ? "border-primary/30 bg-navy text-white shadow-lg shadow-blue-900/10"
                      : "border-gray-200 bg-white hover:border-blue-200"
                  }`}
                >
                  {service.featured && (
                    <div className="absolute right-5 top-5 rounded-full bg-primary/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                      Featured
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        service.featured
                          ? "bg-primary text-white"
                          : "bg-blue-50 text-primary"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                    <span
                      className={`text-xs font-bold tracking-widest ${
                        service.featured
                          ? "text-white/20"
                          : "text-gray-200"
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  <h2
                    className={`mt-7 text-xl font-semibold ${
                      service.featured ? "text-white" : "text-navy"
                    }`}
                  >
                    {service.title}
                  </h2>

                  <p
                    className={`mt-3 text-sm leading-6 ${
                      service.featured ? "text-white/55" : "text-gray-500"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div
                    className={`my-6 h-px ${
                      service.featured ? "bg-white/10" : "bg-gray-100"
                    }`}
                  />

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-center gap-3 text-sm ${
                          service.featured
                            ? "text-white/70"
                            : "text-gray-600"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            service.featured
                              ? "bg-primary/20 text-cyan-300"
                              : "bg-blue-50 text-primary"
                          }`}
                        >
                          <Check size={12} strokeWidth={2.5} />
                        </span>

                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-7">
                    <Link
                      href={service.href}
                      className={`group/link inline-flex items-center gap-2 text-sm font-semibold ${
                        service.featured
                          ? "text-cyan-300"
                          : "text-primary"
                      }`}
                    >
                      Explore Service
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Why Work With Us
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              One technology partner for the long term.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              You don't have to find a different team for every technology
              requirement. We can help from the first idea through development,
              launch and ongoing improvement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Understand",
                text: "We first understand your business and what you actually need.",
              },
              {
                title: "Build",
                text: "We select the right technology and build a solution around your requirements.",
              },
              {
                title: "Support",
                text: "We stay available for maintenance, improvements and future requirements.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >
                <span className="text-sm font-bold text-primary">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold text-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Not sure which service you need?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              That's okay. Tell us about your business and we'll help you
              identify the right solution.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Talk to Us
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