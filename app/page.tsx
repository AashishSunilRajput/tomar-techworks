import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import AISolutions from "@/components/home/AISolutions";
import HowWeWork from "@/components/home/HowWeWork";
import Industries from "@/components/home/Industries";
import Portfolio from "@/components/home/Portfolio";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AISolutions />
      <HowWeWork />
      <Industries />
      <Portfolio />
      <FAQ />
      <FinalCTA />
    </>
  );
}