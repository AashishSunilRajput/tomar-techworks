import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Start Your Web, Software or AI Project",
  description:
    "Contact Tomar Techworks to discuss website development, e-commerce, custom software, AI solutions, API integrations or website maintenance.",
  alternates: {
    canonical: "https://tomartechworks.com/contact",
  },
  openGraph: {
    title: "Contact | Start Your Web, Software or AI Project",
    description:
      "Talk to Tomar Techworks about your website, software, AI, e-commerce or integration project.",
    url: "https://tomartechworks.com/contact",
    siteName: "Tomar Techworks",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}