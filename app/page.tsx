"use client";
declare const ire: any;
declare global {
  interface Window {
    ire?: (...args: any[]) => void;
  }
}
import Script from "next/script";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/traveler-v2/hero-section";
import RevealTextSection from "@/components/traveler-v2/reveal-text-section";
import WhatWeHandleSection from "@/components/traveler-v2/what-we-handle-section";
import FeaturedInSection from "@/components/traveler-v2/featured-in-section";
import ReviewSection from "@/components/traveler-v2/review-section";
import StrugglesSection from "@/components/traveler-v2/struggles-section";
import HowWeHelpSection from "@/components/traveler-v2/how-we-help-section";
import PricingSection from "@/components/traveler-v2/pricing-section";
import FaqSection from "@/components/traveler-v2/faq-section";
import CtaSection from "@/components/traveler-v2/cta-section";
import { useEffect, useState } from "react";
import { useGetMembershipPlansQuery } from "../redux/services/api";
import { useFacebookPixel } from "@/redux/hooks/use-facebook-pixel";
import Banner from "@/components/banner";
export default function Home() {
  useGetMembershipPlansQuery(undefined);

  const [bannerVisible, setBannerVisible] = useState(false);

  // Show banner after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const { trackEvent } = useFacebookPixel();

  // Track landing page view on component mount
  useEffect(() => {
    trackEvent('ViewContent', {
      content_name: 'Landing Page',
      content_category: 'Homepage',
      content_type: 'website',
    });
  }, [trackEvent]);

  return (
    <div className="bg-white">
      <Banner isVisible={bannerVisible} onClose={() => setBannerVisible(false)} />

           {/* ✅ Load the IRE global script */}
      <Script
        id="ire-sdk"
        src="https://utt.impactcdn.com/A6477190-e994-4812-b281-2b613f0e188b1.js" // <-- replace with actual URL
        strategy="afterInteractive"
        onLoad={() => {
          // console.log("IRE script loaded");
          if (typeof window.ire !== "undefined") {
            window.ire("identify", {
              customerId: "",
              customerEmail: "",
              customProfileId: "",
            });
          }
        }}
      />
      {/* Header and Hero are siblings */}

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
      <PricingSection />
      <FaqSection />
      </main>

      <Footer />
    </div>
  );
}
