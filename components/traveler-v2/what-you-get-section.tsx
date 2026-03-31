"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const panelVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: easeOut },
      opacity: { duration: 0.2 },
    },
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.45, ease: easeOut },
      opacity: { duration: 0.3, delay: 0.04 },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15 },
      height: { duration: 0.35, ease: easeOut },
    },
  },
};

const tabs = [
  {
    id: "01",
    title: "Dedicated Concierge + Personal Assistant",
    intro: "A single point of contact handling your requests across:",
    bullets: [
      {
        label: "Travel Planning & Bookings",
        text: "Hotels, flights, ground transport, full itinerary coordination",
      },
      {
        label: "Dining Reservations",
        text: "Hard-to-book restaurants, scheduling, confirmations",
      },
      {
        label: "Lifestyle Management",
        text: "Personal tasks, logistics coordination, and ongoing admin support",
      },
    ],
    image: "/approved-lux/what-you-get/image-1.png",
  },
  {
    id: "02",
    title: "Centralized Itineraries",
    intro:
      "All trip details, reservations, and confirmations organized in one place.",
    bullets: [
      {
        label: "Clear formatting",
        text: "Easy access and real-time updates for every traveler",
      },
    ],
    image: "/approved-lux/what-you-get/image-2.png",
  },
  {
    id: "03",
    title: "Proactive Support",
    intro: "Changes handled without friction.",
    bullets: [
      {
        label: "Last-minute adjustments",
        text: "Managed quickly by your concierge team",
      },
      {
        label: "Ongoing assistance",
        text: "Before, during, and after travel",
      },
    ],
    image: "/approved-lux/what-you-get/image-3.png",
  },
];

export default function WhatYouGetSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = tabs[activeTab];

  return (
    <section className="pb-10 lg:pb-[70px]">
      <div className="mx-auto w-full max-w-7xl px-4 grid gap-[60px]">
        <div className="space-y-5">
          <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
            What You
            <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent">
              {" "}
              Get
            </span>{" "}
          </h1>
          <p className="text-center text-[#525253] max-w-sm mx-auto">
            A dedicated execution layer for your travel and lifestyle not just
            advice, but action.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-5">
            <div role="tablist" className="space-y-10">
              {tabs.map((tab, index) => {
                const isActive = index === activeTab;
                return (
                  <motion.div
                    key={tab.id}
                    layout
                    className="space-y-4"
                    transition={{ layout: { duration: 0.35, ease: easeOut } }}
                  >
                    <motion.button
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(index)}
                      whileTap={{ scale: 0.99 }}
                      className="flex w-full cursor-pointer items-center gap-4 text-left"
                    >
                      <motion.span
                        layout
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold ${
                          isActive
                            ? "border-[#2E49F8] bg-[#2E49F8] text-white"
                            : "border-[#C9D7FF] text-[#7E93C9]"
                        }`}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      >
                        {tab.id}
                      </motion.span>
                      <span
                        className={`text-base font-semibold lg:text-2xl transition-colors duration-300 ${
                          isActive ? "text-[#001F63]" : "text-[#6B7280]"
                        }`}
                      >
                        {tab.title}
                      </span>
                    </motion.button>

                    <AnimatePresence initial={false} mode="sync">
                      {isActive && (
                        <motion.div
                          key="panel"
                          role="tabpanel"
                          variants={panelVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="overflow-hidden pl-12 text-[#525253]"
                        >
                          <div className="space-y-3 pb-0.5">
                            <motion.p
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.38,
                                delay: 0.08,
                                ease: easeOut,
                              }}
                              className="text-sm lg:text-base"
                            >
                              {tab.intro}
                            </motion.p>
                            <div className="space-y-3">
                              {tab.bullets.map((item, bi) => (
                                <motion.div
                                  key={item.label}
                                  initial={{ opacity: 0, y: 12 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{
                                    duration: 0.38,
                                    delay: 0.14 + bi * 0.07,
                                    ease: easeOut,
                                  }}
                                  className="space-y-1.5"
                                >
                                  <p className="text-sm font-semibold text-[#0E0E0F] lg:text-base">
                                    {item.label}
                                  </p>
                                  <p className="text-xs lg:text-sm text-[#515153]">
                                    {item.text}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                            <motion.div
                              initial={{ opacity: 0, scaleX: 0.03 }}
                              animate={{ opacity: 1, scaleX: 1 }}
                              transition={{
                                delay:
                                  0.2 + Math.max(0, tab.bullets.length - 1) * 0.07,
                                opacity: {
                                  duration: 0.55,
                                  ease: easeOut,
                                },
                                scaleX: {
                                  duration: 4.75,
                                  /* Slow in the middle and at the end — feels like growth from center */
                                  ease: [0.2, 0.85, 0.15, 1],
                                },
                              }}
                              className="h-[2px] w-full origin-center bg-gradient-to-r from-white via-[#155DFC] to-white"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-[900/640] w-full overflow-hidden rounded-[22px] border border-[#E9F0FF] shadow-[0_25px_70px_-55px_rgba(0,31,99,0.6)]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: easeOut }}
                >
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    priority={activeTab === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
