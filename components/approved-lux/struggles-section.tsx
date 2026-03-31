"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const struggles = [
  {
    id: 1,
    tag: "Too Many Tabs, No Plan",
    description: "17 browser tabs, 3 group chats, and still no clear plan",
    img: "/approved-lux/struggles/image-1.png",
    initialOffset: 0,
  },
  {
    id: 2,
    tag: "Plans That Fall Apart",
    description:
      "Reservations that slip, dates that shift, and details that break the trip",
    img: "/approved-lux/struggles/image-2.png",
    initialOffset: 40,
  },
  {
    id: 3,
    tag: "Admin Never Stops",
    description:
      "Life admin piling up while you are trying to travel or recharge",
    img: "/approved-lux/struggles/image-3.png",
    initialOffset: 80,
  },
  {
    id: 4,
    tag: "Decision Fatigue",
    description:
      "Time spent comparing options, then second-guessing the choice",
    img: "/approved-lux/struggles/image-4.png",
    initialOffset: 120,
  },
];

export default function StrugglesSection() {
  const desktopCardsRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: desktopCardsRef,
    offset: ["start 75%", "end 35%"],
  });

  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-16 lg:mb-24">
          <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px]">
            Struggles You Face
          </h1>
          <p className="text-[#525253] text-lg lg:text-xl text-center">
            If you are the person who <b>'just handles it,'</b> you know the
            real cost
          </p>
        </div>

        {/* Desktop View: Staggered Layout */}
        <div
          ref={desktopCardsRef}
          className="hidden lg:grid grid-cols-4 gap-6 items-start"
        >
          {struggles.map((s, index) => {
            const y = useTransform(scrollYProgress, [0, 0.75], [s.initialOffset, 0]);

            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                style={{ y }}
                className="h-full"
              >
                <CardContent s={s} />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile View: Sticky Stacking Effect */}
        <div className="flex flex-col gap-10 lg:hidden">
          {struggles.map((s, index) => (
            <MobileStackingCard key={s.id} s={s} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}

// Reusable Content
const CardContent = ({ s }: { s: any }) => (
  <>
    <div
      className="h-full px-4 pt-4 pb-0 bg-[#FAFAFA] rounded-xl border border-[#E9F0FF] flex flex-col gap-3"
    >
      <div className="w-fit px-4 py-2 rounded-full bg-[#FC3F15]/10 text-[#FC3F15] flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-[#FC3F15]" />
        <p className="text-sm">{s.tag}</p>
      </div>

      <p className="text-[#525253] text-lg font-medium line-clamp-3 min-h-[84px]">
        {s.description}
      </p>

      <Image
        src={s.img}
        alt={s.tag}
        height={550}
        width={300}
        className="mt-auto w-full max-w-[220px] h-auto object-contain self-center"
      />
    </div>
  </>
);

// Mobile Stacking Logic
const MobileStackingCard = ({ s, index }: { s: any; index: number }) => {
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
        <CardContent s={s} />
      </motion.div>
    </div>
  );
};

