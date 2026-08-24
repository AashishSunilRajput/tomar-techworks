"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Globe,
  LayoutDashboard,
  ShoppingCart,
} from "lucide-react";

const projects = [
  {
    category: "AI Product",
    title: "TT AI Chat",
    description:
      "AI-powered customer support chatbot with knowledge base, website widget, lead capture and conversation management.",
    icon: Bot,
    tags: ["AI", "Chatbot", "Knowledge Base"],
    href: "https://chat.tomartechworks.com/",
    featured: true,
  },
  {
    category: "Business Website",
    title: "Modern Business Websites",
    description:
      "Professional, responsive websites designed around business goals, services and customer experience.",
    icon: Globe,
    tags: ["Next.js", "Responsive", "SEO"],
    href: "/services/website-development",
    featured: false,
  },
  {
    category: "Business Software",
    title: "Custom Business Solutions",
    description:
      "Custom dashboards, management systems and software designed for specific business workflows.",
    icon: LayoutDashboard,
    tags: ["Web App", "Dashboard", "API"],
    href: "/services/custom-software",
    featured: false,
  },
  {
    category: "E-commerce",
    title: "Online Store Solutions",
    description:
      "E-commerce experiences with product management, payments and integrations for growing businesses.",
    icon: ShoppingCart,
    tags: ["E-commerce", "Payments", "Integration"],
    href: "/services/ecommerce",
    featured: false,
  },
];

export default function Portfolio() {
  return (
    <section className="section-padding bg-surface">
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
              Selected Work
            </span>

           <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl lg:text-5xl">
  Web, Software & AI Solutions We Build
</h2>

           <p className="mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
  Explore examples of AI products, business websites, custom software
  and e-commerce solutions built to solve real business needs.
</p>
          </div>

          <Link
            href="/portfolio"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
          >
            View all work
            <ArrowUpRight
              size={17}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={project.href}
                  className="group block h-full overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  {/* Project Visual */}
                  <div
                    className={`relative flex h-64 items-center justify-center overflow-hidden ${
                      project.featured
                        ? "bg-navy"
                        : "bg-gradient-to-br from-gray-50 to-blue-50"
                    }`}
                  >
                    {/* Decorative shapes */}
                    <div
                      className={`absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl ${
                        project.featured
                          ? "bg-primary/30"
                          : "bg-blue-200/50"
                      }`}
                    />

                    <div
                      className={`absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-3xl ${
                        project.featured
                          ? "bg-cyan-400/10"
                          : "bg-cyan-100/50"
                      }`}
                    />

                    {/* Fake product preview */}
                    <div
                      className={`relative w-[78%] max-w-md overflow-hidden rounded-2xl border shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] ${
                        project.featured
                          ? "border-white/10 bg-white"
                          : "border-gray-200 bg-white"
                      }`}
                    >
                      {/* Browser header */}
                      <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-red-300" />
                        <span className="h-2 w-2 rounded-full bg-yellow-300" />
                        <span className="h-2 w-2 rounded-full bg-green-300" />

                        <div className="ml-3 h-2 w-28 rounded-full bg-gray-100" />
                      </div>

                      <div className="p-4">
                        <div className="flex gap-3">
                          <div className="w-12 rounded-lg bg-navy p-2">
                            <div className="mx-auto h-5 w-5 rounded-md bg-primary" />

                            <div className="mt-5 space-y-2">
                              <div className="h-1.5 rounded bg-white/20" />
                              <div className="h-1.5 rounded bg-white/10" />
                              <div className="h-1.5 rounded bg-white/10" />
                            </div>
                          </div>

                          <div className="flex-1">
                            <div className="h-2 w-24 rounded bg-gray-200" />

                            <div className="mt-3 grid grid-cols-2 gap-2">
                              <div className="h-12 rounded-lg bg-blue-50" />
                              <div className="h-12 rounded-lg bg-gray-50" />
                            </div>

                            <div className="mt-2 h-20 rounded-lg bg-gray-50">
                              <div className="flex h-full items-end gap-1 p-3">
                                {[30, 45, 38, 60, 50, 75, 65].map(
                                  (height, i) => (
                                    <div
                                      key={i}
                                      className="flex-1 rounded-t bg-primary/70"
                                      style={{ height: `${height}%` }}
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating icon */}
                    <div
                      className={`absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-xl shadow-lg ${
                        project.featured
                          ? "bg-primary text-white"
                          : "bg-white text-primary"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.category}
                      </span>

                      <ArrowUpRight
                        size={18}
                        className="text-gray-300 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-navy">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
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
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-500">
            Have an idea you&apos;d like to build?
          </p>

          <Link
            href="/contact"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Let&apos;s build it together
            <ArrowRightIcon />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <ArrowUpRight
      size={16}
      className="transition-transform hover:-translate-y-0.5 hover:translate-x-0.5"
    />
  );
}