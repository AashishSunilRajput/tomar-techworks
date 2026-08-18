"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  CreditCard,
  LayoutDashboard,
  Package,
  Search,
  ShoppingCart,
  Smartphone,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Online Store",
    description:
      "A professional storefront where customers can easily browse products, view details and place orders.",
  },
  {
    icon: Package,
    title: "Product Management",
    description:
      "Organize products, categories, pricing, images and other product information efficiently.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Connect your store with suitable payment gateways to provide customers with convenient payment options.",
  },
  {
    icon: LayoutDashboard,
    title: "Order Management",
    description:
      "Manage orders and customer information through a structured administrative interface.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Responsive shopping experiences designed to work smoothly across phones, tablets and desktops.",
  },
  {
    icon: Search,
    title: "Search & Discovery",
    description:
      "Help customers find products through search, categories, filters and a clear navigation structure.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand Your Store",
    description:
      "We understand your products, customers, sales process and the features your store requires.",
  },
  {
    number: "02",
    title: "Plan the Experience",
    description:
      "We plan the store structure, product flow, checkout experience and required integrations.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the storefront, product management, checkout and other required functionality.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test the shopping experience, forms, integrations and responsive behaviour before launch.",
  },
];

const storeTypes = [
  "Product Stores",
  "Service Stores",
  "B2C E-commerce",
  "B2B E-commerce",
  "Online Catalogs",
  "Custom Stores",
];

export default function EcommercePage() {
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
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
                <ShoppingCart size={15} />
                E-commerce Development
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Turn your products into a{" "}
                <span className="text-cyan-300">better online store.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                We build user-friendly e-commerce websites that make it easier
                for customers to discover products, place orders and interact
                with your business online.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
                >
                  Start Your Store
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

            {/* Store Preview */}
            <motion.div
              initial={{ opacity: 0, x: 25, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
                <div className="overflow-hidden rounded-2xl bg-white">
                  {/* Browser */}
                  <div className="flex items-center gap-1.5 border-b border-gray-100 px-4 py-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                    <div className="ml-4 h-2 w-36 rounded-full bg-gray-100" />
                  </div>

                  <div className="p-5 sm:p-7">
                    {/* Store Header */}
                    <div className="flex items-center justify-between">
                      <div className="h-3 w-20 rounded bg-navy" />

                      <div className="flex items-center gap-3">
                        <div className="hidden h-2 w-10 rounded bg-gray-200 sm:block" />
                        <div className="hidden h-2 w-10 rounded bg-gray-200 sm:block" />

                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-primary">
                          <ShoppingCart size={13} />
                        </div>
                      </div>
                    </div>

                    {/* Hero */}
                    <div className="mt-7 rounded-2xl bg-blue-50 p-5">
                      <div className="h-4 w-32 rounded bg-navy" />
                      <div className="mt-2 h-3 w-48 rounded bg-gray-200" />
                      <div className="mt-4 h-7 w-20 rounded-full bg-primary" />
                    </div>

                    {/* Products */}
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item}>
                          <div className="aspect-square rounded-xl bg-gray-100" />
                          <div className="mt-2 h-2 w-3/4 rounded bg-gray-200" />
                          <div className="mt-1 h-2 w-1/2 rounded bg-gray-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <CreditCard size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-navy">
                      Online Payments
                    </p>
                    <p className="text-[11px] text-gray-400">
                      Secure checkout experience
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Store Types */}
      <section className="border-b border-gray-100 bg-white py-10">
        <div className="container-main">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {storeTypes.map((type) => (
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
              Everything your online store needs.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We focus on creating an e-commerce experience that is simple for
              customers and manageable for your business.
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

      {/* Business Benefits */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Built For Business
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Your store should work for your business.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                An online store is more than a product catalog. It should make
                it easier for customers to discover what you sell and easier
                for your team to manage the business.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BarChart3,
                  title: "Business Visibility",
                  text: "Give your customers a professional place to discover your products.",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Shopping",
                  text: "Provide a convenient experience for customers browsing from their phones.",
                },
                {
                  icon: Truck,
                  title: "Order Flow",
                  text: "Create a structured journey from product discovery to order placement.",
                },
                {
                  icon: LayoutDashboard,
                  title: "Manage Easily",
                  text: "Keep important store operations organized through your management system.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.06,
                    }}
                    className="rounded-2xl border border-gray-200 bg-white p-5"
                  >
                    <Icon size={20} className="text-primary" />

                    <h3 className="mt-4 text-sm font-semibold text-navy">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {item.text}
                    </p>
                  </motion.div>
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
                From products to online orders.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                We keep the development process straightforward and focused on
                the shopping experience your customers need.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                Discuss your store
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

      {/* Integrations */}
      <section className="section-padding">
        <div className="container-main">
          <div className="rounded-3xl bg-navy px-7 py-10 sm:px-10 lg:px-14 lg:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Integrations
                </span>

                <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  Connect your store with your business tools.
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-white/55">
                  Depending on your requirements, we can connect your store
                  with payment gateways, CRMs, shipping services, APIs and
                  other third-party systems.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
                {[
                  "Payments",
                  "CRM",
                  "Shipping",
                  "REST APIs",
                  "Analytics",
                  "Third-party Tools",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="section-padding bg-surface">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Ongoing Support
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Need help after launch?
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              We can continue supporting your e-commerce website with
              maintenance, improvements, integrations and future feature
              development.
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

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to take your business online?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Tell us about your products and business. We&apos;ll help you
              plan an e-commerce solution that fits your requirements.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Start Your Store
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