"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import Banner from "@/components/banner";

const VD_URL =
  "https://pub-0629005fcfb44f7ca99f4fbb3b9937c3.r2.dev/2327415_British_Virgin_1920x1080.mp4";

const firstnames = [
  "James",
  "Michael",
  "Sarah",
  "Emily",
  "David",
  "Olivia",
  "Daniel",
];

const lastnames = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Taylor"];

const cities = [
  "Miami, FL",
  "Los Angeles, CA",
  "New York, NY",
  "Chicago, IL",
  "Austin, TX",
  "Seattle, WA",
];

// Small "user just joined" toast (same UI as the homepage hero popup).
const UserJustJoined = ({
  className,
  name,
  location,
}: {
  className?: string;
  name: string;
  location: string;
}) => (
  <div
    className={`bg-white px-4 py-2 rounded-2xl w-max border border-[#2563EB] ${
      className ?? ""
    }`}
  >
    <div className="flex items-center gap-2">
      <p className="font-semibold text-black text-sm">{name} just joined!</p>
      <div className="bg-[#2563EB] rounded-full p-0.5">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
    <p className="text-black/80 text-xs mt-1">{location}</p>
  </div>
);

export default function HeroSection() {
  const [bannerVisible, setBannerVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState(() => {
    const randomFirstName =
      firstnames[Math.floor(Math.random() * firstnames.length)];
    const randomLastName =
      lastnames[Math.floor(Math.random() * lastnames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    return {
      fullName: `${randomFirstName} ${randomLastName}`,
      location: randomCity,
    };
  });
  const [showNotification, setShowNotification] = useState(false);

  // Mirror the homepage popup behavior: show after a short delay.
  useEffect(() => {
    const timer = setTimeout(() => {
      setBannerVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFirstName =
        firstnames[Math.floor(Math.random() * firstnames.length)];
      const randomLastName =
        lastnames[Math.floor(Math.random() * lastnames.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];

      setCurrentUser({
        fullName: `${randomFirstName} ${randomLastName}`,
        location: randomCity,
      });
      setShowNotification(true);

      const hideTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(hideTimeout);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-[100px]">
      <Banner
        isVisible={bannerVisible}
        onClose={() => setBannerVisible(false)}
      />
      <div className="relative w-full pt-[300px] lg:pt-[500px] bg-cover bg-center px-4 lg:px-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={VD_URL}
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-gradient-to-b from-[#FFFFFF00] from-52% via-[#FFFFFF] via-72% to-[#FFFFFF] to-100%" />

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#A9C4FF]/10 px-4 py-2.5 text-[14px] leading-[22px] text-[#001F63] shadow-sm border border-white/50 backdrop-blur-xs">
              <span className="relative flex h-3.5 w-3.5 shrink-0" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#001F63] opacity-60" />
                <span className="relative m-auto size-2.5 rounded-full bg-[#001F63]" />
              </span>
              US-Based Personal Assistants
            </div>

            <h1 className="mt-4 text-[40px] leading-[48px] lg:text-[64px] lg:leading-[68px] font-semibold text-[#001F63]">
            The{" "}
              <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent pr-1">
              Travel Membership 
              </span>
              That 
Unlocks Insider Pricing
            </h1>

            <p className="mt-4 text-[18px] leading-[24px] lg:text-[20px] lg:leading-[28px] font-normal text-[#515153]">
            Access private travel rates normally reserved for industry professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <UserJustJoined
          name={currentUser.fullName}
          location={currentUser.location}
          className="fixed bottom-24 md:bottom-5 right-4 md:right-25 z-50"
        />
      )}
    </section>
  );
}
