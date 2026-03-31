"use client";
import { useEffect, useState } from "react";
import HeroSection from "@/components/approved-lux/hero-section";
import Header from "@/components/header";
import TrustedSection from "@/components/approved-lux/trusted-section";
import RevealTextSection from "@/components/approved-lux/reveal-text-section";
import WhatWeHandleSection from "@/components/approved-lux/what-we-handle-section";
import FeaturedInSection from "@/components/approved-lux/featured-in-section";
import ReviewSection from "@/components/approved-lux/review-section";
import StrugglesSection from "@/components/approved-lux/struggles-section";
import HowWeHelpSection from "@/components/approved-lux/how-we-help-section";
import OurBenefitsSection from "@/components/approved-lux/our-benefits-section";
import WhatYouGetSection from "@/components/approved-lux/what-you-get-section";
import ComparisonTable from "@/components/approved-lux/comparison-table";
import MoneyBackSection from "@/components/approved-lux/money-back-section";
import PricingSection from "@/components/approved-lux/pricing-section";
import FaqSection from "@/components/approved-lux/faq-section";
import CtaSection from "@/components/approved-lux/cta-section";
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
        <TrustedSection />
        <RevealTextSection />
        <WhatWeHandleSection />
        <FeaturedInSection />
        <ReviewSection />
        <StrugglesSection />
        <HowWeHelpSection />
        <OurBenefitsSection />
        <WhatYouGetSection />
        <ComparisonTable />
        <MoneyBackSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
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
