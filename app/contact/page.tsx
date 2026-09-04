"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const projectTypes = [
  "Website Development",
  "E-commerce",
  "Custom Software",
  "AI Solutions",
  "API Integration",
  "Website Maintenance",
  "Other",
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  // =========================================================
  // VALIDATION
  // =========================================================

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

  // Name
const cleanName = formData.name.trim();

if (!cleanName) {
  newErrors.name = "Please enter your name.";
} else if (cleanName.length < 2) {
  newErrors.name = "Name must be at least 2 characters.";
} else if (cleanName.length > 100) {
  newErrors.name = "Name cannot exceed 100 characters.";
} else if (!/^[A-Za-z\s'-]+$/.test(cleanName)) {
  newErrors.name =
    "Name can contain only letters, spaces, hyphens and apostrophes.";
}

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email =
          "Please enter a valid email address.";
      }
    }

    // Phone - optional
  if (formData.phone.trim()) {
  const cleanedPhone = formData.phone.replace(/\D/g, "");

  const phoneNumber = cleanedPhone.startsWith("91")
    ? cleanedPhone.slice(2)
    : cleanedPhone;

  if (!/^[6-9]\d{9}$/.test(phoneNumber)) {
    newErrors.phone =
      "Please enter a valid 10-digit mobile number.";
  }
}

    // Project Type
    if (!formData.projectType) {
      newErrors.projectType =
        "Please select a project type.";
    }

    // Message
    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us about your project.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message =
        "Please enter at least 10 characters.";
    }

    return newErrors;
  };

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error for current field
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    // Remove previous status
    if (status) {
      setStatus(null);
    }
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus(null);

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message ||
            "Unable to send your enquiry."
        );
      }

      setStatus({
        type: "success",
        message:
          "Thank you! Your enquiry has been sent successfully. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-navy py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">

          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />

          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-3xl" />

        </div>

        <div className="container-main relative">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mx-auto max-w-3xl text-center"
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-cyan-300">
              <MessageSquare size={15} />
              Let&apos;s Talk
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-cyan-300">
                useful.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
              Have a website, software, AI or
              integration project in mind? Tell us
              what you&apos;re looking to build and
              we&apos;ll get back to you.
            </p>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="section-padding">

        <div className="container-main">

          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            {/* =================================================
                CONTACT INFORMATION
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Get In Touch
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                Tell us what you need.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Whether you have a clear project
                requirement or just an idea, you can
                reach out to us. We&apos;ll discuss your
                requirements and suggest the right
                approach.
              </p>

              <div className="mt-8 space-y-4">

                {/* Email */}

                <a
                  href="mailto:account@tomartechworks.com"
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <Mail size={19} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Email
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      account@tomartechworks.com
                    </p>

                  </div>

                </a>

                {/* Phone */}

                <a
                  href="tel:+918767311963"
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5 transition hover:border-blue-200 hover:shadow-sm"
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <Phone size={19} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      +91 8767311963
                    </p>

                  </div>

                </a>

                {/* Location */}

                <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <MapPin size={19} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      India
                    </p>

                  </div>

                </div>

                {/* Response Time */}

                <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-primary">
                    <Clock3 size={19} />
                  </div>

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Response Time
                    </p>

                    <p className="mt-1 text-sm font-semibold text-navy">
                      Usually within 1 business day
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 sm:p-8"
            >

              <div className="mb-7">

                <h3 className="text-2xl font-bold text-navy">
                  Start a conversation
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Tell us about your project and
                  we&apos;ll get back to you.
                </p>

              </div>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >

                {/* ===========================================
                    NAME + EMAIL
                =========================================== */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      Your Name{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-primary/10 ${
                        errors.name
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-primary"
                      }`}
                    />

                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.name}
                      </p>
                    )}

                  </div>

                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      Email Address{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="test@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-primary/10 ${
                        errors.email
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-primary"
                      }`}
                    />

                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.email}
                      </p>
                    )}

                  </div>

                </div>

                {/* ===========================================
                    PHONE + PROJECT TYPE
                =========================================== */}

                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Phone */}

                  <div>

                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      Phone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-primary/10 ${
                        errors.phone
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-primary"
                      }`}
                    />

                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.phone}
                      </p>
                    )}

                  </div>

                  {/* Project Type */}

                  <div>

                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium text-navy"
                    >
                      Project Type{" "}
                      <span className="text-red-500">
                        *
                      </span>
                    </label>

                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:ring-4 focus:ring-primary/10 ${
                        errors.projectType
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-200 focus:border-primary"
                      }`}
                    >

                      <option value="">
                        Select a service
                      </option>

                      {projectTypes.map(
                        (type) => (
                          <option
                            key={type}
                            value={type}
                          >
                            {type}
                          </option>
                        )
                      )}

                    </select>

                    {errors.projectType && (
                      <p className="mt-1.5 text-xs text-red-500">
                        {errors.projectType}
                      </p>
                    )}

                  </div>

                </div>

                {/* ===========================================
                    MESSAGE
                =========================================== */}

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-navy"
                  >
                    Tell us about your project{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you looking to build or improve?"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-xl border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:ring-4 focus:ring-primary/10 ${
                      errors.message
                        ? "border-red-400 focus:border-red-400"
                        : "border-gray-200 focus:border-primary"
                    }`}
                  />

                  <div className="mt-1.5 flex items-center justify-between">

                    {errors.message ? (
                      <p className="text-xs text-red-500">
                        {errors.message}
                      </p>
                    ) : (
                      <span />
                    )}

                    <span className="text-xs text-gray-400">
                      {formData.message.length}/1000
                    </span>

                  </div>

                </div>

                {/* ===========================================
                    STATUS
                =========================================== */}

                {status && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: -5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`rounded-xl px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}

                {/* ===========================================
                    SUBMIT BUTTON
                =========================================== */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy/90 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {isSubmitting
                    ? "Sending..."
                    : "Send Enquiry"}

                  {!isSubmitting && (
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  )}

                </button>

                <p className="text-center text-xs text-gray-400">
                  We&apos;ll use your information only
                  to respond to your enquiry.
                </p>

              </form>

            </motion.div>

          </div>

        </div>

      </section>

      {/* =====================================================
          WHAT HAPPENS NEXT
      ===================================================== */}

      <section className="section-padding bg-surface">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              What Happens Next
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
              Simple from the first conversation.
            </h2>

          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "You Tell Us",
                text: "Share your idea, problem or project requirements.",
              },
              {
                number: "02",
                title: "We Discuss",
                text: "We understand your requirements and discuss possible solutions.",
              },
              {
                number: "03",
                title: "Plan the Work",
                text: "If we&apos;re a good fit, we define the scope and next steps.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="rounded-3xl border border-gray-200 bg-white p-7"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-xs font-bold text-cyan-300">
                  {item.number}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-navy">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-navy py-20">

        <div className="container-main">

          <div className="mx-auto max-w-3xl text-center">

            <CheckCircle2
              size={42}
              className="mx-auto text-cyan-300"
              strokeWidth={1.5}
            />

            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Have a project in mind?
            </h2>

            <p className="mt-4 text-base leading-7 text-white/60">
              Don&apos;t worry if your requirements
              aren&apos;t fully defined yet. Start with
              a conversation.
            </p>

            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition hover:bg-blue-50"
            >
              Send Your Enquiry
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}