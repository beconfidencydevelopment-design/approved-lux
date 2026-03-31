"use client"

import { Button } from "./ui/button"


export default function HolidayOfferBanner() {
  return (
    <div className="relative w-full overflow-hidden py-6 md:py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/offer.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Video Animation */}
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/offer.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-start lg:items-center justify-between gap-6 md:gap-10 xl:gap-12 2xl:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left md:pl-8 lg:pl-12 xl:pl-16 2xl:pl-20 max-w-4xl">
            <h3 className="font-bold tracking-wider mb-2 xl:text-[24px] text-[16px] uppercase" style={{ 
              color: '#EBAD24',
              fontFamily: 'var(--font-archivo-black)',
              fontWeight: '400',
              lineHeight: '32px',
              textTransform: 'uppercase'
            }}>
              LIMITED TIME HOLIDAY OFFER
            </h3>
            <h2 className="font-bold text-pretty uppercase xl:text-[24px] text-[16px]" style={{ 
              color: '#FAFAFA',
              fontFamily: 'var(--font-archivo-black)',
              fontWeight: '400',
              lineHeight: '32px',
              textTransform: 'uppercase'
            }}>
              UP TO <span style={{
                color: '#FAFAFA',
                fontFamily: 'var(--font-archivo-black)',
                fontSize: '48px',
                fontWeight: '400',
                lineHeight: '32px',
                textTransform: 'uppercase'
              }}>$200 OFF</span> YOUR TRAVELER MEMBERSHIP
            </h2>
          </div>

          {/* CTA Button */}
          <div className="shrink-0 md:pr-8 lg:pr-12 xl:pr-16 2xl:pr-20">
            <Button
              className="bg-[#EBAD24] rounded-[8px] shadow-lg hover:bg-[#EBAD24] cursor-pointer transition-all p-6"
              style={{
                color: '#FAFAFA',
                textAlign: 'center',
                fontFamily: 'var(--font-archivo-black)',
                fontSize: '24px',
                fontWeight: '900',
                lineHeight: '32px'
              }}
              onClick={() => {
                // Handle button click - navigate to offer page or scroll to section
                const element = document.getElementById("offer-details")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Unlock Savings Now
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}
