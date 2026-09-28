import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MotionConfig } from "framer-motion";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tomartechworks.com"),

  title: {
    default: "Tomar Techworks | Web, Software & AI Solutions",
    template: "%s | Tomar Techworks",
  },

  description:
    "Tomar Techworks provides modern website development, custom software, AI chatbot solutions, eCommerce development and technology services for businesses.",

  keywords: [
    "Tomar Techworks",
    "web development",
    "website development",
    "custom software development",
    "AI chatbot development",
    "AI solutions",
    "eCommerce development",
    "WordPress development",
    "Next.js development",
    "PHP development",
  ],

  authors: [
    {
      name: "Tomar Techworks",
      url: "https://tomartechworks.com",
    },
  ],

  creator: "Tomar Techworks",
  publisher: "Tomar Techworks",

  alternates: {
    canonical: "https://tomartechworks.com/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://tomartechworks.com/",
    siteName: "Tomar Techworks",
    title: "Tomar Techworks | Web, Software & AI Solutions",
    description:
      "Modern website development, custom software, AI chatbot solutions and eCommerce development for businesses.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tomar Techworks | Web, Software & AI Solutions",
    description:
      "Modern website development, custom software, AI chatbot solutions and eCommerce development for businesses.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MotionConfig reducedMotion="user">
          <Navbar />

          <div className="flex-1">{children}</div>

          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}