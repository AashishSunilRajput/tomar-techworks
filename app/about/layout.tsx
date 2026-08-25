import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Web, Software & AI Solutions",
  description:
    "Learn about Tomar Techworks, a technology partner helping businesses build websites, custom software, integrations and practical AI solutions.",
  alternates: {
    canonical: "https://tomartechworks.com/about",
  },
  openGraph: {
    title: "About | Web, Software & AI Solutions",
    description:
      "Learn about Tomar Techworks and our approach to websites, custom software, integrations and practical AI solutions.",
    url: "https://tomartechworks.com/about",
    siteName: "Tomar Techworks",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}