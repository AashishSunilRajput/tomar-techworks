import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AISolutions from "@/components/home/AISolutions";
import HowWeWork from "@/components/home/HowWeWork";
import Industries from "@/components/home/Industries";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Script from "next/script";

export default function Home() {
  return (
      <>
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AISolutions />
      <HowWeWork />
      <Industries />
      <Portfolio />
      <FAQ />
      <FinalCTA />
    </main>
     <Script
        src="https://chatwidget.tomartechworks.com/widget.js"
        data-key="ar_live_9SNRUzfW7Q4zZtBM"
        strategy="afterInteractive"
      />
      </>
  );
}