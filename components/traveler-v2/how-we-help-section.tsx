"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const helps = [
  {
    id: 1,
    tag: "Hotels & Resorts",
    description:
      "Book luxury hotels and resorts around the world with member-only pricing up to 70% below retail rates.",
    img: "/traveler/travel-image-1.png",
    initialOffset: 0,
  },
  {
    id: 2,
    tag: "Flights & Cruises",
    description:
      "Book flights with hundreds of airlines worldwide and save up to 40% on cruises with major cruise lines.",
    img: "/traveler/travel-image-2.png",
    initialOffset: 40,
  },
  {
    id: 3,
    tag: "Luxury Villas & Homes",
    description:
      "Access premium properties and vacation homes normally unavailable through public booking platforms.",
    img: "/traveler/travel-image-3.png",
    initialOffset: 80,
  },
  {
    id: 4,
    tag: "Reward Credits",
    description:
      "Book luxury hotels and resorts around the world with member-only pricing up to 70% below retail rates.",
    img: "/traveler/travel-image-4.png",
    initialOffset: 120,
  },
];

export default function HowWeHelpSection() {
  const desktopCardsRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: cardsScrollYProgress } = useScroll({
    target: desktopCardsRef,
    offset: ["start 75%", "end 35%"],
  });

  

  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16 lg:mb-24">
          <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px]">
            Travelers Often Overpay For Trips.
          </h1>
          <div className="px-4">
            <p className="text-[#525253] text-lg lg:text-xl text-center">
            When you book travel through public platforms like Expedia <br /> or Hotels.com, you are seeing retail pricing.
            </p>
          </div>
        </div>

        {/* Desktop View: Staggered Layout */}
        <div
          ref={desktopCardsRef}
          className="hidden lg:grid grid-cols-4 gap-6 items-start"
        >
          {helps.map((h, index) => {
            const y = useTransform(
              cardsScrollYProgress,
              [0, 0.75],
              [h.initialOffset, 0],
            );

            return (
              <motion.div
                key={h.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                style={{ y }}
              >
                <CardContent h={h} idx={index} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Sticky Stacking Effect */}
        <div className="flex flex-col gap-10 lg:hidden">
          {helps.map((h, index) => (
            <MobileStackingCard key={h.id} h={h} index={index} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-5 mt-[60px]">
          <p className="text-[#525253] text-lg lg:text-xl text-center">
            Traveler turns the complicated process of finding deals into a
            simple membership experience.
          </p>
          <Link
            href="#pricing-section"
            className="w-full lg:w-fit block font-medium text-white bg-[#001F63] rounded-full px-6 py-2 text-center hover:bg-gray-900"
          >
            Become a Member
          </Link>
        </div>
      </div>
    </section>
  );
}

// Reusable Content
const CardContent = ({ h, idx }: { h: any; idx: number }) => (
  <>
    <div
      key={h.id}
      className="min-h-[430px] p-4 bg-[#FAFAFA] rounded-xl border border-[#E9F0FF] flex flex-col gap-3 overflow-hidden"
    >
      <div
        className={cn(
          "w-fit px-4 py-2 rounded-full bg-[#30B526]/10 text-[#30B526] flex items-center gap-2",

        )}
      >
        <span className={cn("size-2.5 rounded-full bg-[#30B526]")} />
        <p className="text-sm">{h.tag}</p>
      </div>

      <p className="text-[#525253] text-lg font-medium line-clamp-3">
        {h.description}
      </p>

      <Image
        src={h.img}
        alt={h.tag}
        height={700}
        width={300}
        className="mt-auto w-full h-[220px] object-contain object-bottom"
      />

      
    </div>
  </>
);

// Mobile Stacking Logic
const MobileStackingCard = ({ h, index }: { h: any; index: number }) => {
  return (
    <div
      className="sticky top-24 w-full"
      style={{ paddingTop: `${index * 20}px` }} // Slight offset so you see the cards behind
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ margin: "-100px" }}
      >
        <CardContent h={h} idx={index} />
      </motion.div>
    </div>
  );
};

