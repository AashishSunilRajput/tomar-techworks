"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What kind of websites do you build?",
    answer:
      "We build modern business websites, service websites, landing pages, e-commerce websites and custom web applications. The solution is planned according to your business requirements and goals.",
  },
  {
    question: "Can you build custom software for my business?",
    answer:
      "Yes. We can build custom dashboards, management systems, internal tools, customer portals and other web-based software around your specific business workflow.",
  },
  {
    question: "Do you provide AI chatbot solutions?",
    answer:
      "Yes. Our AI solution, AR AI Chat, can be integrated into business websites to answer customer questions using business-specific knowledge, capture leads and manage conversations.",
  },
  {
    question: "Can you integrate my website with other software?",
    answer:
      "Yes. We can integrate websites and applications with APIs, CRMs, payment gateways and other third-party services depending on the available integration options.",
  },
  {
    question: "Do you provide website maintenance after development?",
    answer:
      "Yes. We offer ongoing maintenance and technical support, including updates, bug fixes, security-related improvements, content changes and feature enhancements.",
  },
  {
    question: "How much does a website or software project cost?",
    answer:
      "Every project is different, so pricing depends on the scope, features, integrations and complexity. Contact us with your requirements and we can discuss the right solution and estimate.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline depends on the project scope. A simple business website can be completed much faster than a custom software or AI project. We define the expected timeline after understanding the requirements.",
  },
  {
    question: "Can you work with an existing website or software?",
    answer:
      "Yes. We can work with existing websites and applications for improvements, integrations, bug fixes, redesigns, performance improvements and ongoing maintenance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              FAQ
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy sm:text-4xl">
              Questions? We&apos;ve got answers.
            </h2>

            <p className="mt-5 max-w-md text-base leading-7 text-gray-600">
              Here are some of the questions businesses commonly ask before
              starting a project with us.
            </p>

            <div className="mt-8 rounded-2xl bg-surface p-5">
              <p className="text-sm font-semibold text-navy">
                Still have a question?
              </p>

              <p className="mt-1 text-sm leading-6 text-gray-500">
                Tell us what you&apos;re looking to build and we&apos;ll help
                you figure out the next step.
              </p>

              <a
                href="/contact"
                className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Talk to us →
              </a>
            </div>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/40"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold leading-6 text-navy sm:text-base">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                          <div className="border-t border-blue-100 pt-4">
                            <p className="text-sm leading-6 text-gray-600">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}