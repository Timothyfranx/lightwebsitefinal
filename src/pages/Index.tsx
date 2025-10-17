import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import { WhyUsTimeline } from "@/components/why-us-timeline";
import ProcessSection from "@/components/process-section";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import { PricingStack } from "@/components/pricing-stack";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyUsTimeline />
      <ProcessSection />
      <PricingStack />
      <ProofOfWorkSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
