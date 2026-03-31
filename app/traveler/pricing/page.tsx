// "use client";
// declare const ire: any;
// import ContactSection from "@/components/contact-section";
// import Footer from "@/components/footer";
// import Header from "@/components/header";
// import PricingFaqSection from "@/components/pricing-faq-section";
// import PricingPlansSection from "@/components/pricing-plans-section";
// import ScrollToTop from "@/components/scroll-to-top";
// import { useGetMemberProfileQuery } from "@/redux/services/api";
// import { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import sha1 from "sha1";

// export default function PricingPage() {
//   const token = useSelector((state: any) => state.auth.token);
//   const tokenRef = useRef(token);
//   tokenRef.current = token; // keep latest token
//   const { data, error, isLoading, isSuccess, isError, refetch } =
//     useGetMemberProfileQuery(undefined, {
//       skip: !token, // Skip the query if no token is available
//     });
//   useEffect(() => {
//     if (!tokenRef.current) return;

//     let isMounted = true;

//     refetch().then((res) => {
//       if (!isMounted) return;
//       const profile = res?.data;

//       if (typeof ire !== "undefined" && profile?.user?.email) {
//         const customerEmailSHA1 = sha1(profile.user.email);
//         ire("identify", {
//           customerId: tokenRef.current || profile.user.id,
//           customerEmail: customerEmailSHA1,
//           customProfileId: tokenRef.current,
//         });
//       }
//     });

//     return () => {
//       isMounted = false; // cancel if unmounted
//     };
//   }, []);

//   return (
//     <div className="bg-white">
//       <Header />
//       <main>
//         <PricingPlansSection />
//         <PricingFaqSection />
//         <ContactSection />
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

"use client";
declare const ire: any;
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import PricingFaqSection from "@/components/pricing-faq-section";
import PricingPlansSection from "@/components/pricing-plans-section";
import ScrollToTop from "@/components/scroll-to-top";
import { useGetMemberProfileQuery } from "@/redux/services/api";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import sha1 from "sha1";

export default function PricingPage() {
  const token = useSelector((state: any) => state.auth.token);
  const tokenRef = useRef(token);
  tokenRef.current = token;
  const { data, error, isLoading, isSuccess, isError, refetch } =
    useGetMemberProfileQuery(undefined, {
      skip: !token,
    });

  useEffect(() => {
    if (!tokenRef.current) return;
    let isMounted = true;

    refetch().then((res) => {
      if (!isMounted) return;
      const profile = res?.data;

      if (typeof ire !== "undefined" && profile?.user?.email) {
        const customerEmailSHA1 = sha1(profile.user.email);
        ire("identify", {
          customerId: tokenRef.current || profile.user.id,
          customerEmail: customerEmailSHA1,
          customProfileId: tokenRef.current,
        });
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  // Improved scroll to FAQ section
  useEffect(() => {
    const scrollToFaq = () => {
      // Check if we're on client side and URL has faq parameter
      if (typeof window === 'undefined') return;
      
      const urlParams = new URLSearchParams(window.location.search);
      const hasFaqParam = urlParams.has('faq');
      
      // console.log('URL Params:', window.location.search);
      // console.log('Has FAQ param:', hasFaqParam);
      
      if (hasFaqParam) {
        // Try multiple times with increasing delays
        const tryScroll = (attempt: number) => {
          const faqSection = document.getElementById('pricing-faq-section');
          // console.log('FAQ Section found:', faqSection);
          
          if (faqSection) {
            const yOffset = -80; // Adjust for header height
            const y = faqSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
            window.scrollTo({
              top: y,
              behavior: 'smooth'
            });
            // console.log('Scrolling to FAQ section');
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

  // In your pricing page, add this useEffect:
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
        <PricingPlansSection />
        <section id="pricing-faq-section">
        <PricingFaqSection id="pricing-faq-section" />

          </section>
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}