"use client";

import Image from "next/image";
import { useState } from "react";
import { useMobile } from "./ui/use-mobile";

export default function PlatformSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isMobile = useMobile();

  const cards = [
    {
      image: "/luxury-hotel-room.png",
      title: "Hotels",
      description:
        "Gain access to over 1 million handpicked hotels worldwide, offering unbeatable discounts of up to 70% off retail prices.",
      alt: "Luxury hotel room",
    },
    {
      image: "/airplane-flying-in-blue-sky.jpg",
      title: "Flights",
      description:
        "Soar to new heights with points earned from flying with our network of over 700 global airlines.",
      alt: "Airplane flying in the sky",
    },
    {
      image: "/luxury-cruise-ship-on-ocean.jpg",
      title: "Cruises",
      description:
        "Unlock up to 40% off on over 44 major cruise lines, boasting more than 30,000 enticing itineraries.",
      alt: "Cruise ship at a port",
    },
    {
      image: "/modern-luxury-vacation-home.jpg",
      title: "Homes",
      description:
        "Indulge in luxurious vacation homes across the globe, perfect for any getaway.",
      alt: "Modern vacation home",
    },
     {
      image: "/cars.png",
      title: "Rides",
      description:
        "Enjoy up to 50% off car rentals at over 30,000 convenient pick-up spots.",
      alt: "Rides",
    },
     {
      image: "/luxvilla.jpeg",
      title: "Villas & Luxury Homes",
      description:
        "Access a marketplace of hundreds of timeshares to bid on or offer your own timeshare up for booking.",
      alt: "Modern vacation home",
    },
  ];

  const visibleCards = isMobile ? 1 : 3.5;

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = cards.length - Math.floor(visibleCards);
      return prev < maxSlide ? prev + 1 : 0;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = cards.length - Math.floor(visibleCards);
      return prev > 0 ? prev - 1 : maxSlide;
    });
  };

  const cardWidth = 100 / visibleCards;

  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        {/* Header for desktop */}
        <div className="hidden md:flex md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
              All-In-One{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
                Platform
              </span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-500">
              Unlock exclusive access to countless hotels, vacation homes, car
              rental locations, and flights with our travel membership—crafted
              for ultimate convenience and style.
            </p>
          </div>
          <div className="mt-6 flex items-center space-x-2 md:mt-0">
            <button
              onClick={prevSlide}
              className="rounded-full border border-gray-300 p-3 transition-colors hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Header for mobile */}
        <div className="md:hidden">
          <h2 className="text-4xl font-semibold text-gray-900 sm:text-5xl">
            All-In-One{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Platform
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500">
            Unlock exclusive access to countless hotels, vacation homes, car
            rental locations, and
            <br /> flights with our travel membership—crafted for ultimate
            convenience and style.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-8 overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 md:gap-6"
            style={{
              transform: isMobile
                ? `translateX(calc(-${currentSlide * 100}% - ${
                    currentSlide * 1
                  }rem))`
                : `translateX(-${currentSlide * cardWidth}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl bg-[#F7FAFF] p-2"
                style={{
                  width: isMobile ? "100%" : `calc(${cardWidth}% - 1rem)`,
                }}
              >
                <Image
                  className="h-48 w-full rounded-2xl object-cover"
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={224}
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation for mobile */}
        <div className="mt-6 flex items-center justify-center space-x-2 md:hidden">
          <button
            onClick={prevSlide}
            className="rounded-full border border-gray-300 p-3 transition-colors hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="rounded-full bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
