"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Search,
  Settings2,
  Code2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We understand your business, goals, users and the problem you want to solve.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy",
    description:
      "We define the right approach, features and technology before development begins.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Our team turns the approved plan into a responsive, reliable and scalable solution.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "We test the solution, prepare it for production and help you get it live.",
  },
  {
    number: "05",
    icon: Settings2,
    title: "Support",
    description:
      "After launch, we can continue with maintenance, improvements and technical support.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-main">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            How We Work
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
            From idea to launch, with a clear process.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            We keep the development process straightforward, transparent and
            focused on what matters to your business.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gray-200 lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="relative text-center"
                >
                  {/* Step Icon */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-primary shadow-sm">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  {/* Number */}
                  <p className="mt-5 text-xs font-bold tracking-[0.2em] text-primary">
                    {step.number}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-semibold text-navy">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-3 rounded-2xl border border-blue-100 bg-white px-6 py-5 text-center sm:flex-row sm:text-left"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary">
            <CheckCircle2 size={18} />
          </div>

          <p className="text-sm leading-6 text-gray-600">
            <span className="font-semibold text-navy">
              Clear communication at every step.
            </span>{" "}
            You stay informed about progress, decisions and the next milestone.
          </p>

          <ArrowRight
            size={17}
            className="hidden shrink-0 text-primary sm:block"
          />
        </motion.div>
      </div>
    </section>
  );
}