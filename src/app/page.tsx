import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { AboutSection } from "@/components/AboutSection";
import { CtaBanner } from "@/components/CtaBanner";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { StickyCtaBar } from "@/components/StickyCtaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pb-24 md:pb-0">
        <Hero />
        <TrustSection />
        <ServicesSection />
        <FeaturesSection />
        <TestimonialsSection />
        <QuoteSection />
        <AboutSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyCtaBar />
    </>
  );
}
