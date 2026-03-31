"use client";
import { useEffect, useState } from "react";
import FeatureSection from "@/components/approve/feature-section";
import HeroSection from "@/components/approve/hero-section";
import ModernSection from "@/components/approve/modern/modern-section";
import PortfolioSection from "@/components/approve/portfolio-section";
import ServiceSection from "@/components/approve/services/service-section";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ScrollToTop from "@/components/scroll-to-top";
import TrustedSection from "@/components/approve/trusted-section";
import MembershipModal from "@/components/approve/membership-modal";

export default function ApprovePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsModalOpen(true);
        }, 2000)
    }, []);

    return (
        <div className="bg-white">
            <Header />

            <main>
                <HeroSection/>
                <ServiceSection/>
                <FeatureSection/>
                <PortfolioSection/>
                <ModernSection/>
                <TrustedSection/>

                {isModalOpen && (
                    <>
                    {/* Overlay */}
                    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40 transition-opacity duration-300"></div>

                    {/* Modal */}
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="transition-transform duration-300 transform scale-95 opacity-0 animate-modal-open">
                            <MembershipModal closeModal={() => setIsModalOpen(false)} />
                        </div>
                    </div>
                    </>
                )}
            </main>

            <Footer />
            <ScrollToTop />
        </div>
    );
}