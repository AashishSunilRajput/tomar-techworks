import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Web, E-commerce, AI & Custom Software",
  description:
    "Explore Tomar Techworks services including website development, e-commerce, custom software, AI solutions, API integrations and website maintenance.",
  alternates: {
    canonical: "https://tomartechworks.com/services",
  },
  openGraph: {
    title: "Services | Web, E-commerce, AI & Custom Software",
    description:
      "Website development, e-commerce, custom software, AI solutions, API integrations and maintenance services from Tomar Techworks.",
    url: "https://tomartechworks.com/services",
    siteName: "Tomar Techworks",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}