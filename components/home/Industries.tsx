"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Home,
  ShoppingBag,
  BriefcaseBusiness,
  Store,
  Rocket,
} from "lucide-react";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Websites, digital workflows and software solutions for healthcare businesses.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Digital platforms and websites that make learning and communication easier.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description:
      "Modern property websites, lead systems and tools for real estate businesses.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description:
      "Online stores and integrations designed around your products and customers.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Digital solutions that help service businesses manage leads and customers.",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description:
      "Professional websites and digital tools that help local businesses grow online.",
  },
  {
    icon: Rocket,
    title: "Startups",
    description:
      "Flexible technology solutions for startups building and validating new ideas.",
  },
];

export default function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Industries
            </span>

           <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
  Technology Solutions for Different Industries
</h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
  We build websites, custom software, AI solutions and digital tools
  tailored to the needs of different industries, customers and business
  goals.
</p>
          </div>

          <p className="max-w-xs text-sm leading-6 text-gray-500 lg:text-right">
            Don&apos;t see your industry?
            <br />
            <span className="font-semibold text-navy">
              Let&apos;s discuss your requirement.
            </span>
          </p>
        </motion.div>

        {/* Industries */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className={`group rounded-3xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold text-gray-200 transition-colors group-hover:text-blue-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-navy">
                  {industry.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-3xl border border-gray-200 bg-surface px-7 py-8 sm:px-9"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold text-navy">
                Have a business idea or a specific challenge?
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                We can help you figure out the right technology approach.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Talk to Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}