"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Code2,
  ExternalLink,
  Globe,
  ShoppingCart,
  Smartphone,
} from "lucide-react";

const projects = [
  {
    title: "AR AI Chat",
    category: "AI Solutions",
    description:
      "An AI-powered website chat solution designed to help businesses answer visitor questions using their own business knowledge and information.",
    icon: Bot,
    tags: ["AI", "Chatbot", "Knowledge Base", "Web"],
    status: "Product",
  },
  {
    title: "Business Website Solutions",
    category: "Website Development",
    description:
      "Modern, responsive business websites focused on presenting services clearly and creating a professional online presence.",
    icon: Globe,
    tags: ["Next.js", "React", "Responsive", "SEO"],
    status: "Web",
  },
  {
    title: "E-commerce Solutions",
    category: "E-commerce",
    description:
      "E-commerce experiences designed around product presentation, customer journeys and business requirements.",
    icon: ShoppingCart,
    tags: ["E-commerce", "Payments", "Products", "Orders"],
    status: "Web",
  },
  {
    title: "Custom Business Software",
    category: "Custom Software",
    description:
      "Business-focused applications and management systems designed to simplify workflows and organize operational data.",
    icon: Code2,
    tags: ["Dashboard", "CRM", "APIs", "Database"],
    status: "Software",
  },
];

const capabilities = [
  "Web Applications",
  "AI Solutions",
  "Business Websites",
  "E-commerce",
  "Custom Software",
  "API Integrations",
];

export default function PortfolioPage() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <Code2 size={15} />
              Our Work
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ideas turned into{" "}
              <span className="text-cyan-300">digital solutions.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Explore some of the solutions, products and development
              capabilities we're building at Tomar Techworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-gray-100 py-10">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {capabilities.map((item) => (
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

      {/* Projects */}
      <section className="section-padding">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Selected Projects
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Built with purpose.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              A selection of products and solution areas that represent what
              we build and the technologies we work with.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  {/* Project Visual */}
                  <div className="relative h-64 overflow-hidden bg-navy p-6">
                    <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />

                    <div className="relative flex h-full items-center justify-center">
                      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-cyan-300">
                            <Icon size={16} />
                          </div>

                          <div>
                            <div className="h-2 w-24 rounded bg-white/30" />
                            <div className="mt-1.5 h-1.5 w-16 rounded bg-white/10" />
                          </div>
                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="h-20 rounded-xl bg-white/10" />
                          <div className="h-20 rounded-xl bg-white/5" />
                          <div className="h-20 rounded-xl bg-cyan-300/10" />
                        </div>

                        <div className="mt-3 h-3 rounded-full bg-white/10" />
                        <div className="mt-2 h-3 w-3/4 rounded-full bg-white/5" />
                      </div>
                    </div>

                    <span className="absolute right-5 top-5 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white/70">
                      {project.status}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                      {project.category}
                    </div>

                    <h3 className="mt-3 text-2xl font-bold text-navy">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Technology
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Modern technology. Practical solutions.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We select technologies according to the project's actual
                requirements, scalability needs and long-term maintainability.
              </p>

              <Link
                href="/services"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Explore our services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                "Next.js",
                "React",
                "Node.js",
                "PHP",
                "Laravel",
                "PostgreSQL",
                "Prisma",
                "AI",
                "REST APIs",
              ].map((technology) => (
                <div
                  key={technology}
                  className="flex h-20 items-center justify-center rounded-2xl border border-gray-200 bg-white text-sm font-semibold text-navy shadow-sm"
                >
                  {technology}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-main">
          <div className="rounded-3xl bg-navy p-8 sm:p-10 lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Our Approach
                </span>

                <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                  We build for the problem, not just the technology.
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-white/60">
                  Every project starts with understanding what the business
                  needs to achieve. Technology comes next.
                </p>
              </div>

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/5">
                <Smartphone
                  size={40}
                  className="text-cyan-300"
                  strokeWidth={1.4}
                />
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
              Have a project you'd like to build?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Let's discuss your idea and figure out the right way to turn it
              into a working solution.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy hover:bg-blue-50"
            >
              Start a Conversation
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