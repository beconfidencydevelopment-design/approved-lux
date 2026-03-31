"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const items = [
  {
    id: 1,
    image: "/traveler/traver-box1.jpg",
    text: "Access Properties Worldwide",
    description: "Browse over 1,000,000+ properties across major cities and travel destinations.",
  },
  {
    id: 2,
    image: "/traveler/traver-box2.jpg",
    text: "Compare Prices Instantly",
    description: "Quickly compare rates with popular public booking platforms to find the best deal.",
  },
  {
    id: 3,
    image: "/traveler/traver-box3.jpg",
    text: "Compare Prices Instantly",
    description: "Book with confidence knowing you're protected by our 110% price protection policy.",
  },
];

export default function WhatWeHandleSection() {
  return (
    <section className="pb-[32px] lg:pb-[80px]">
      <div className="mx-auto mt-[60px] grid w-full max-w-7xl gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="rounded-2xl border border-[#E9F0FE] bg-[#FAFAFA] p-4"
            initial={{ opacity: 0, y: 26, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.55,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src={item.image}
              alt={item.text}
              height={700}
              width={700}
              className="h-[322px] w-full rounded-xl object-cover"
            />
            <h3 className="mt-3 text-[24px] leading-[32px] font-medium text-[#303036]">
              {item.text}
            </h3>
            <p className="mt-2 text-[#525253]">{item.description}</p>
          </motion.div>
        ))}
      </div>
      <div className="flex w-full max-w-full flex-col items-stretch justify-center gap-2 px-[10px] sm:mx-auto sm:max-w-xs sm:flex-row sm:flex-wrap sm:items-center sm:px-0 lg:max-w-fit lg:flex-nowrap pt-10">
          <Link
            href="#pricing-section"
            className="block w-full text-lg font-medium text-white bg-[#001F63] rounded-full px-6 py-3 text-center hover:bg-gray-900 shadow sm:w-auto"
          > Start Saving On Travel
          </Link>
          <Link
            href="https://studies.approvedexperiences.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-lg font-medium underline rounded-full px-6 py-3 text-center"
          >
           See How Traveler Works
          </Link>
        </div>
        
    </section>
  );
}
