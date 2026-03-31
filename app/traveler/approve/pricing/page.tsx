"use client";
import ApprovePricingCards from "@/components/approve/pricing/pricing-cards";
import ApprovePricingFaqs from "@/components/approve/pricing/pricing-faqs";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollToTop from "@/components/scroll-to-top";
import { useEffect } from "react";

export default function ApprovePricingPage() {
  // Improved scroll to FAQ section
  useEffect(() => {
    const scrollToFaq = () => {
      // Check if we're on client side and URL has faq parameter
      if (typeof window === 'undefined') return;
      
      const urlParams = new URLSearchParams(window.location.search);
      const hasFaqParam = urlParams.has('faq');
      
      if (hasFaqParam) {
        // Try multiple times with increasing delays
        const tryScroll = (attempt: number) => {
          const faqSection = document.getElementById('pricing-faq-section');
          
          if (faqSection) {
            const yOffset = -80; // Adjust for header height
            const y = faqSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
          } else if (attempt < 5) {
            // Try again after a delay
            setTimeout(() => tryScroll(attempt + 1), 200 * attempt);
          }
        };
        
        // Start trying to scroll
        setTimeout(() => tryScroll(1), 300);
      }
    };

    scrollToFaq();
  }, []);

  // Scroll to FAQ section on hash
  useEffect(() => {
    if (window.location.hash === '#faq') {
      const timer = setTimeout(() => {
        const faqSection = document.getElementById('pricing-faq-section');
        if (faqSection) {
          faqSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="bg-white">
      <Header />

      <main>
        <ApprovePricingCards/>
        <section id="pricing-faq-section">
          <ApprovePricingFaqs/>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}