import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | AI, Automation & Custom Software",
  description:
    "Explore Tomar Techworks business solutions for AI automation, digital presence, e-commerce, business process automation, API integrations and custom software.",
  alternates: {
    canonical: "https://tomartechworks.com/solutions",
  },
  openGraph: {
    title: "Solutions | AI, Automation & Custom Software",
    description:
      "Practical technology solutions for AI automation, e-commerce, API integrations, business process automation and custom software.",
    url: "https://tomartechworks.com/solutions",
    siteName: "Tomar Techworks",
    type: "website",
  },
};

export default function SolutionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}