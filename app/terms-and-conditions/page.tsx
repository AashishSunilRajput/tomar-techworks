"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

const sections = [
  {
    id: "introduction",
    title: "1. Introduction",
    content: (
      <>
        <p>
          Welcome to Tomar Techworks. These Terms & Conditions govern your
          access to and use of our website and the services we provide.
        </p>

        <p>
          By accessing our website, contacting us, requesting a service or
          engaging Tomar Techworks for a project, you acknowledge that you
          have read and understood these Terms & Conditions and agree to be
          bound by them.
        </p>

        <p>
          If you do not agree with these terms, please do not use our website
          or engage our services.
        </p>
      </>
    ),
  },
  {
    id: "services",
    title: "2. Our Services",
    content: (
      <>
        <p>
          Tomar Techworks provides technology and digital services that may
          include:
        </p>

        <ul>
          <li>Website development and design.</li>
          <li>E-commerce development.</li>
          <li>AI solutions and AI integrations.</li>
          <li>TT AI Chat and related AI functionality.</li>
          <li>Custom software and web application development.</li>
          <li>Website maintenance and technical support.</li>
          <li>API and third-party service integrations.</li>
        </ul>

        <p>
          The exact services, features, deliverables and technical
          requirements for a project will depend on the agreed project scope
          and requirements.
        </p>
      </>
    ),
  },
  {
    id: "project-scope",
    title: "3. Project Scope",
    content: (
      <>
        <p>
          Before starting a project, the scope of work, requirements,
          deliverables and other relevant details may be discussed and agreed
          between Tomar Techworks and the client.
        </p>

        <p>
          Features, functionality or work that is not included in the agreed
          scope may require additional time, cost or a separate agreement.
        </p>

        <p>
          Changes requested after development has started may affect the
          project timeline and overall cost.
        </p>
      </>
    ),
  },
  {
    id: "client-responsibilities",
    title: "4. Client Responsibilities",
    content: (
      <>
        <p>
          Clients are responsible for providing accurate information,
          content, assets, credentials and other materials reasonably required
          to complete a project.
        </p>

        <p>
          Clients are also responsible for ensuring that any content,
          trademarks, images, documents, customer data or other materials they
          provide can legally be used for the project.
        </p>

        <p>
          Delays in providing required information, approvals or access may
          affect the project timeline.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    title: "5. Pricing and Payments",
    content: (
      <>
        <p>
          Project pricing is generally based on the agreed scope,
          requirements, complexity and services involved.
        </p>

        <p>
          Payment terms, including any advance payment, milestone payments or
          final payment, will be communicated or agreed before or during the
          project.
        </p>

        <p>
          Additional work outside the agreed scope may be charged separately.
        </p>

        <p>
          Unless otherwise agreed, project delivery or access to certain
          deliverables may depend on completion of the applicable payment
          obligations.
        </p>
      </>
    ),
  },
  {
    id: "timeline",
    title: "6. Project Timelines",
    content: (
      <>
        <p>
          We make reasonable efforts to complete projects within the estimated
          timeline communicated to the client.
        </p>

        <p>
          However, project timelines may change due to factors such as
          changes in requirements, delayed approvals, unavailable third-party
          services, technical issues or circumstances outside our reasonable
          control.
        </p>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "7. Third-Party Services and Integrations",
    content: (
      <>
        <p>
          Projects may require third-party services such as hosting providers,
          domain registrars, payment gateways, APIs, analytics platforms,
          cloud services, AI providers or other external tools.
        </p>

        <p>
          Third-party services are generally subject to their own terms,
          pricing, availability and policies.
        </p>

        <p>
          Tomar Techworks is not responsible for outages, policy changes,
          pricing changes, service interruptions or other issues caused by
          third-party providers.
        </p>
      </>
    ),
  },
  {
    id: "ai-services",
    title: "8. AI Services and TT AI Chat",
    content: (
      <>
        <p>
          Tomar Techworks may provide AI-powered solutions, including
          <strong> TT AI Chat</strong>, AI chatbots, knowledge-based AI
          systems and AI integrations.
        </p>

        <p>
          AI-generated responses may not always be completely accurate,
          complete or suitable for a particular situation. AI functionality
          should therefore be reviewed and used appropriately for the intended
          business purpose.
        </p>

        <p>
          Clients are responsible for reviewing business information,
          knowledge-base content and other data supplied to an AI solution.
        </p>

        <p>
          Tomar Techworks does not guarantee that an AI system will produce
          error-free or uninterrupted results in every situation.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "9. Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise agreed in writing, clients retain ownership of
          content, logos, trademarks, business information and other materials
          supplied by them.
        </p>

        <p>
          Ownership or licensing of custom-developed source code, designs,
          assets and other project deliverables may depend on the applicable
          project agreement and payment terms.
        </p>

        <p>
          Third-party libraries, frameworks, plugins, fonts, APIs and other
          components remain subject to their respective licenses.
        </p>
      </>
    ),
  },
  {
    id: "website-content",
    title: "10. Website Content",
    content: (
      <>
        <p>
          Clients are responsible for the accuracy, legality and ownership of
          content they provide for websites, applications, e-commerce stores
          or other digital products.
        </p>

        <p>
          Tomar Techworks may assist with technical implementation but does
          not automatically verify the legal accuracy or ownership of all
          client-provided content.
        </p>
      </>
    ),
  },
  {
    id: "maintenance",
    title: "11. Maintenance and Support",
    content: (
      <>
        <p>
          Website maintenance and technical support may be provided as a
          separate service depending on the client's requirements and
          agreement.
        </p>

        <p>
          Maintenance may include updates, bug fixes, technical assistance,
          content changes or other agreed services.
        </p>

        <p>
          New features, major redesigns, significant changes or new
          integrations may be treated as separate development work.
        </p>
      </>
    ),
  },
  {
    id: "warranties",
    title: "12. Warranties and Service Availability",
    content: (
      <>
        <p>
          We make reasonable efforts to provide reliable and professional
          services. However, we do not guarantee that our website, services,
          applications or third-party integrations will always be available,
          uninterrupted or completely error-free.
        </p>

        <p>
          Any specific warranty or service-level commitment must be explicitly
          agreed in writing.
        </p>
      </>
    ),
  },
  {
    id: "limitation-of-liability",
    title: "13. Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, Tomar Techworks shall not
          be liable for indirect, incidental, special or consequential losses
          arising from the use of our website, services, software or
          third-party services.
        </p>

        <p>
          This may include losses resulting from business interruption, loss
          of profits, loss of data or third-party service failures.
        </p>

        <p>
          Nothing in these Terms & Conditions is intended to exclude or limit
          liability where such exclusion or limitation is not permitted by
          applicable law.
        </p>
      </>
    ),
  },
  {
    id: "termination",
    title: "14. Termination",
    content: (
      <>
        <p>
          Either party may end a project or service relationship in accordance
          with the applicable project agreement or mutually agreed terms.
        </p>

        <p>
          Outstanding payments for work already completed or services already
          provided may remain payable after termination.
        </p>

        <p>
          Any project-specific cancellation or refund terms will depend on the
          applicable agreement.
        </p>
      </>
    ),
  },
  {
    id: "prohibited-use",
    title: "15. Prohibited Use",
    content: (
      <>
        <p>
          You agree not to use our website or services for unlawful,
          fraudulent, abusive or malicious activities.
        </p>

        <p>
          You must not knowingly attempt to compromise the security of our
          website, systems, applications or infrastructure, or interfere with
          their normal operation.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "16. Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms & Conditions from time to time to reflect
          changes in our services, business practices, technology or legal
          requirements.
        </p>

        <p>
          Updated terms will be published on this page with a revised
          effective date.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "17. Governing Law",
    content: (
      <>
        <p>
          These Terms & Conditions shall be interpreted in accordance with
          applicable laws of India, unless otherwise agreed in a specific
          written agreement.
        </p>

        <p>
          Any dispute arising in connection with our services will be subject
          to the applicable legal jurisdiction in India.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "18. Contact Us",
    content: (
      <>
        <p>
          If you have questions about these Terms & Conditions or our
          services, please contact Tomar Techworks through our website.
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

export default function TermsAndConditionsPage() {
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
              <FileText size={28} strokeWidth={1.7} />
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/60 sm:text-lg">
              These terms explain the conditions that apply when you use the
              Tomar Techworks website or engage our technology and digital
              services.
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
              "Clear project scope and requirements",
              "Client and service responsibilities",
              "Third-party services remain subject to their own terms",
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

            {/* Terms Content */}
            <div className="max-w-3xl">
              <div className="mb-10 rounded-3xl border border-blue-100 bg-blue-50 p-6 sm:p-7">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <FileText size={20} />
                  </div>

                  <div>
                    <h2 className="font-semibold text-navy">
                      Please read these terms carefully.
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      These Terms & Conditions provide the general framework
                      for using our website and engaging Tomar Techworks for
                      technology and digital services.
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
              <FileText size={27} strokeWidth={1.6} />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Have questions about our terms?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              If you have any questions about our services or these Terms &
              Conditions, feel free to contact us.
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