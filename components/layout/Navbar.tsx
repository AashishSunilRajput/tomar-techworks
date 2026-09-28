"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? "border-border/80 bg-white/95 shadow-[0_4px_18px_rgb(11_19_43_/_0.06)]"
          : "border-transparent bg-white/75"
      }`}
    >
      <div className="container-main">
        <div className="flex h-[4.5rem] items-center justify-between sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0"
            onClick={() => setMobileOpen(false)}
            aria-label="Tomar Techworks Home"
          >
            <Image
              src="/images/brand/New-logo.png"
              alt="Tomar Techworks"
              width={1701}
              height={925}
              priority
              sizes="(max-width: 1023px) 112px, 132px"
              className="h-12 w-auto object-contain sm:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-1.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-[var(--radius-sm)] bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-[var(--shadow-subtle)]"
            >
              Start Your Project
              <ArrowUpRight
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-border text-navy transition-colors hover:bg-surface lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden lg:hidden"
            >
              <nav className="border-t border-border/70 py-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-[var(--radius-sm)] px-3 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-surface hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  ))}

                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Start Your Project
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

