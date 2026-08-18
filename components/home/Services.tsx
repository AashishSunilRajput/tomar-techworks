"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Globe2,
  Headphones,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Website Development",
    description:
      "Modern, responsive websites designed to build trust and turn visitors into customers.",
    href: "/services/website-development",
  },
  {
    number: "02",
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Scalable online stores with smooth shopping experiences, payments and business integrations.",
    href: "/services/ecommerce",
  },
  {
    number: "03",
    icon: Code2,
    title: "Custom Software",
    description:
      "Business software tailored to your workflows, operations and unique requirements.",
    href: "/services/custom-software",
  },
  {
    number: "04",
    icon: Bot,
    title: "AI Solutions",
    description:
      "AI-powered chatbots and automation solutions that help businesses serve customers better.",
    href: "/services/ai-solutions",
  },
  {
    number: "05",
    icon: Workflow,
    title: "API & CRM Integrations",
    description:
      "Connect websites and business systems with APIs, CRMs, payment platforms and third-party tools.",
    href: "/services/api-integrations",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Website Maintenance",
    description:
      "Reliable ongoing support, updates, security and improvements to keep your website running smoothly.",
    href: "/services/website-maintenance",
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-main">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Technology solutions built around your business.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            From your first website to custom software and AI-powered
            solutions, we help businesses build, improve and maintain their
            digital presence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                  delay: index * 0.07,
                }}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  {/* Number */}
                  <span className="absolute right-6 top-6 text-sm font-semibold text-gray-200 transition-colors group-hover:text-blue-100">
                    {service.number}
                  </span>

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Content */}
                  <div className="mt-7">
                    <h3 className="text-xl font-semibold text-navy">
                      {service.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
                      {service.description}
                    </p>
                  </div>

                  {/* Link */}
                  <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-semibold text-primary">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl bg-navy px-7 py-8 sm:flex-row sm:items-center sm:px-9"
        >
          <div>
            <p className="text-lg font-semibold text-white">
              Have a specific requirement?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Tell us what you need and we&apos;ll help you find the right
              approach.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
          >
            Discuss Your Project
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}