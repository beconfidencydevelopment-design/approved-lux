"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/traveler-v2/hero-section";
import Header from "@/components/header";
import TrustedSection from "@/components/traveler-v2/trusted-section";
import RevealTextSection from "@/components/traveler-v2/reveal-text-section";
import WhatWeHandleSection from "@/components/traveler-v2/what-we-handle-section";
import FeaturedInSection from "@/components/traveler-v2/featured-in-section";
import ReviewSection from "@/components/traveler-v2/review-section";
import StrugglesSection from "@/components/traveler-v2/struggles-section";
import HowWeHelpSection from "@/components/traveler-v2/how-we-help-section";
import OurBenefitsSection from "@/components/traveler-v2/our-benefits-section";
import WhatYouGetSection from "@/components/traveler-v2/what-you-get-section";
import ComparisonTable from "@/components/traveler-v2/comparison-table";
import MoneyBackSection from "@/components/traveler-v2/money-back-section";
import PricingSection from "@/components/traveler-v2/pricing-section";
import FaqSection from "@/components/traveler-v2/faq-section";
import CtaSection from "@/components/traveler-v2/cta-section";
import Footer from "@/components/footer";
export default function ApprovePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);
  }, []);

  return (
    <div className="bg-white">
      <Header />

      <main>
        <HeroSection />
        <RevealTextSection />
        <WhatWeHandleSection />
        <ReviewSection />
        <FeaturedInSection />
        <StrugglesSection />
        <HowWeHelpSection />
        <CtaSection />
        {/* <OurBenefitsSection />
        <WhatYouGetSection />
        <ComparisonTable />
        <MoneyBackSection /> */}
        <PricingSection />
        <FaqSection />
    
<Footer />
        {isModalOpen && (
          <>
            {/* Overlay */}
            {/* <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity duration-300"></div> */}

            {/* Modal */}
            {/* <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="transition-transform duration-300 transform scale-95 opacity-0 animate-modal-open">
                <MembershipModal closeModal={() => setIsModalOpen(false)} />
              </div>
            </div> */}
          </>
        )}
      </main>

      {/* <Footer /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}
