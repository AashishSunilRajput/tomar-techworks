import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Web, Software & AI Projects",
  description:
    "Explore Tomar Techworks projects and digital solutions, including AI chatbots, business websites, e-commerce solutions and custom business software.",
  alternates: {
    canonical: "https://tomartechworks.com/portfolio",
  },
  openGraph: {
    title: "Portfolio | Web, Software & AI Projects",
    description:
      "Explore Tomar Techworks projects and digital solutions, including AI chatbots, business websites, e-commerce solutions and custom business software.",
    url: "https://tomartechworks.com/portfolio",
    siteName: "Tomar Techworks",
    type: "website",
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}