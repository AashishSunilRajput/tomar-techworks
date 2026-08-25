"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          When you interact with Tomar Techworks, we may collect information
          that you voluntarily provide to us, such as your name, email
          address, phone number, company name, project requirements and other
          information you choose to include when contacting us.
        </p>

        <p>
          We may also collect limited technical information automatically when
          you visit our website, such as browser type, device information,
          general usage information and information about how you interact
          with our website.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    content: (
      <>
        <p>
          We may use the information we collect for purposes such as:
        </p>

        <ul>
          <li>Responding to enquiries and communication requests.</li>
          <li>
            Understanding your business requirements and providing relevant
            services.
          </li>
          <li>Preparing proposals, estimates or project discussions.</li>
          <li>Providing and improving our website and services.</li>
          <li>
            Communicating with you about projects, support or service-related
            matters.
          </li>
          <li>Maintaining website security and preventing misuse.</li>
        </ul>

        <p>
          We do not use personal information for purposes unrelated to the
          reason it was provided unless permitted or required by applicable
          law.
        </p>
      </>
    ),
  },
  {
    id: "contact-forms",
    title: "3. Contact Forms and Enquiries",
    content: (
      <>
        <p>
          If you submit information through a contact form or another enquiry
          method on our website, we may use the information you provide to
          respond to your request.
        </p>

        <p>
          Please avoid submitting sensitive personal information through
          general contact forms unless it is specifically requested and
          necessary for the service you are seeking.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to support
          website functionality, understand general website usage and improve
          the user experience.
        </p>

        <p>
          Depending on the technologies used on the website, third-party
          services may also place cookies or collect information according to
          their own privacy policies.
        </p>

        <p>
          You can manage or restrict cookies through your browser settings.
          Disabling certain cookies may affect some website functionality.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "5. Third-Party Services",
    content: (
      <>
        <p>
          We may use third-party providers to support website hosting,
          analytics, communication, security, infrastructure, AI functionality
          or other business operations.
        </p>

        <p>
          These providers may process information on our behalf or collect
          information according to their own terms and privacy policies.
        </p>

        <p>
          We aim to work with reputable service providers and only use
          third-party services where they are reasonably required for our
          website or business operations.
        </p>
      </>
    ),
  },
  {
    id: "ai-services",
    title: "6. AI-Powered Services",
    content: (
      <>
        <p>
          Tomar Techworks may provide AI-powered solutions, including AI
          chatbots and knowledge-based AI systems, as part of our services.
        </p>

        <p>
          Where an AI solution is configured for a business, information
          processed by that solution may depend on the specific configuration,
          integrations and data provided by that business.
        </p>

        <p>
          Businesses using our AI solutions are responsible for ensuring that
          the information they provide to their AI system is collected and
          processed lawfully and in accordance with applicable privacy
          requirements.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    title: "7. Data Security",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures to protect
          information against unauthorized access, misuse, alteration or
          disclosure.
        </p>

        <p>
          However, no method of transmission over the internet or electronic
          storage can be guaranteed to be completely secure. Therefore, we
          cannot guarantee absolute security of information transmitted to or
          through our website.
        </p>
      </>
    ),
  },
  {
    id: "data-retention",
    title: "8. Data Retention",
    content: (
      <>
        <p>
          We retain information only for as long as reasonably necessary for
          the purpose for which it was collected, to provide requested
          services, maintain business records, resolve disputes, enforce
          agreements or comply with applicable legal obligations.
        </p>

        <p>
          The actual retention period may vary depending on the type of
          information and the reason it was collected.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "9. Sharing of Information",
    content: (
      <>
        <p>
          We do not sell or rent your personal information.
        </p>

        <p>
          We may share information with service providers, technology
          partners, professional advisers or other parties where reasonably
          necessary to operate our business, provide services, protect our
          website or comply with legal obligations.
        </p>

        <p>
          We may also disclose information where required by applicable law,
          legal process or a valid governmental request.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "10. Your Privacy Rights",
    content: (
      <>
        <p>
          Depending on applicable law and your circumstances, you may have
          rights regarding your personal information, including the ability
          to request access, correction, updating or deletion of certain
          information.
        </p>

        <p>
          If you would like to make a privacy-related request, please contact
          us using the contact information provided below. We may need to
          verify your identity before processing certain requests.
        </p>
      </>
    ),
  },
  {
    id: "external-links",
    title: "11. External Links",
    content: (
      <>
        <p>
          Our website may contain links to external websites, platforms or
          services that are not operated by Tomar Techworks.
        </p>

        <p>
          We are not responsible for the privacy practices, content or
          security of external websites. We recommend reviewing the privacy
          policy of any third-party website you visit.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "12. Children's Privacy",
    content: (
      <>
        <p>
          Our services are intended for businesses and general users and are
          not specifically directed toward children.
        </p>

        <p>
          We do not knowingly request or intentionally collect personal
          information from children through our website.
        </p>
      </>
    ),
  },
  {
    id: "policy-changes",
    title: "13. Changes to This Privacy Policy",
    content: (
      <>
        <p>
          We may update this Privacy Policy from time to time to reflect
          changes in our services, website, technology, legal requirements or
          business practices.
        </p>

        <p>
          When changes are made, the updated version will be published on this
          page with a revised effective date.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "14. Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how information
          is handled by Tomar Techworks, you can contact us through our
          website.
        </p>

        <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <p className="font-semibold text-navy">Tomar Techworks</p>

          <p className="mt-2 text-sm text-gray-600">
            Website: tomartechworks.com
          </p>

          <Link
            href="/contact"
            className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Contact Us
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />
        </div>

        <div className="container-main relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl"
          >
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <ArrowLeft
                size={16}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Home
            </Link>

            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
              <ShieldCheck size={28} strokeWidth={1.7} />
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
              Your privacy matters to us. This Privacy Policy explains how
              Tomar Techworks collects, uses and protects information when you
              use our website and services.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/50">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Effective Date: August 25, 2026
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Tomar Techworks
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="border-b border-gray-100 bg-surface py-10">
        <div className="container-main">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "We respect your privacy",
              "We do not sell personal information",
              "We use information to provide and improve our services",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-5"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-primary"
                />

                <p className="text-sm font-medium text-navy">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  On this page
                </p>

                <nav className="mt-5 space-y-2">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="block border-l-2 border-gray-100 py-1 pl-4 text-sm text-gray-500 transition-colors hover:border-primary hover:text-primary"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Policy */}
            <div className="max-w-3xl">
              <div className="mb-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-7">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <ShieldCheck size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-navy">
                      Your privacy is important to us.
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      This policy describes our general approach to handling
                      information when you visit the Tomar Techworks website,
                      contact us or use our services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {sections.map((section, index) => (
                  <motion.section
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.02,
                    }}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-5 space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
                      {section.content}
                    </div>
                  </motion.section>
                ))}
              </div>

              {/* Last Updated */}
              <div className="mt-14 border-t border-gray-200 pt-7">
                <p className="text-sm text-gray-400">
                  Last updated: August 25, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-300">
              <ShieldCheck size={27} strokeWidth={1.6} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Have a privacy question?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              If you have any questions about this Privacy Policy or how we
              handle information, feel free to contact us.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-blue-50"
            >
              Contact Tomar Techworks
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}