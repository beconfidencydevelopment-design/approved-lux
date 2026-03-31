"use client";
declare const ire: any;
declare global {
  interface Window {
    ire?: (...args: any[]) => void;
  }
}
import Script from "next/script";
import ClientWrapper from "@/app/ClientWrapper";
import ClientsSection from "@/components/clients-section";
import ContactSection from "@/components/contact-section";
import FeaturedSection from "@/components/featured-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import PartnersSection from "@/components/partners-section";
import PlatformSection from "@/components/platform-section";
import PricingSection from "@/components/pricing-section";
import RewardCreditsSection from "@/components/reward-credits-section";
import SavingsSection from "@/components/savings-section";
import ScrollToTop from "@/components/scroll-to-top";
import StatsSection from "@/components/stats-section";
import TrustedSection from "@/components/trusted-section";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useFacebookPixel } from "@/redux/hooks/use-facebook-pixel";
import { useGetMembershipPlansQuery } from "@/redux/services/api";
export default function Home() {

 
  const {
    data: membershipPlans,
    error: membershipError,
    isLoading: membershipIsLoading,
    isSuccess: membershipIsError,
    isError: membershipisError,
    refetch: membershipRefetch,
  } = useGetMembershipPlansQuery(undefined);
  // console.log("membership plans:", membershipPlans);
  // const { data: profile , error, isLoading, isSuccess, isError, refetch} = useGetMemberProfileQuery(undefined, { skip: !token })

const { trackEvent } = useFacebookPixel();

  // Track landing page view on component mount
  useEffect(() => {
    trackEvent('ViewContent', {
      content_name: 'Landing Page',
      content_category: 'Homepage',
      content_type: 'website'
    });
  }, [trackEvent]);

  return (
    <div className="bg-white">

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
      <HeroSection />

      {/* Top section content */}
      <StatsSection />
      <PlatformSection />
      <FeaturedSection />
      <div id="how-it-works">
      <SavingsSection />
      </div>
      <PartnersSection />
      {/* <SocialSection /> */}

      {/* Middle section content */}
      <RewardCreditsSection />
      
      <TrustedSection />

      {/* Bottom section content */}
      <ClientWrapper>
      <ClientsSection />
      </ClientWrapper>
      <PricingSection data={membershipPlans?.data} />
      <ContactSection />

      <Footer />
      <ScrollToTop />
    </div>
  );
}
