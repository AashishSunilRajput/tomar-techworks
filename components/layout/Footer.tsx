"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "E-commerce", href: "/services/ecommerce" },
  { label: "Custom Software", href: "/services/custom-software" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "API Integrations", href: "/services/api-integrations" },
  { label: "Website Maintenance", href: "/services/website-maintenance" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071027] text-white">
      <div className="container-main">
        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.2fr_1fr] lg:py-20">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Tomar Techworks Home"
            >
              <img
                src="/images/brand/tomar-techworks-footer-logo-transparent.png"
                alt="Tomar Techworks"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/50">
              We build modern websites, custom software and AI solutions that
              help businesses grow and work smarter.
            </p>

            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get in touch
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:account@tomartechworks.com"
                className="flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span>account@tomartechworks.com</span>
              </a>

              <a
                href="tel:+918767311963"
                className="flex items-start gap-3 text-sm text-white/50 transition-colors hover:text-white"
              >
                <Phone size={17} className="mt-0.5 shrink-0" />
                <span>+91 8767 311963</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-white/50">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>
                  India
                  <br />
                  Serving businesses across India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-4 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Tomar Techworks. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </footer>
    );
}