"use client";

import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "I've never experienced travel like this before. The wholesale pricing is incredible, and the rewards program is a game-changer. Highly recommend Approved Experiences!",
    name: "Sarah Johnson",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos.png",
  },
  {
    id: 2,
    text: "The convenience and style of Approved Experiences are unmatched. Booking flights and hotels has never been easier, and the discounts are fantastic. A must-have for any traveler!",
    name: "Emily White",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-4.png",
  },
  {
    id: 3,
    text: "I still can't believe how much I saved on my Maldives trip - over $1200 off the resort alone. This membership paid of itself after my first vacation.",
    name: "Isabella Brooks",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-8.png",
  },
  {
    id: 4,
    text: "Approved Experiences has transformed how I plan and book my adventures. The exclusive deals and seamless booking process make travel planning a joy!",
    name: "David Chen",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-2.png",
  },
  {
    id: 5,
    text: "As someone who travels frequently for work, I appreciate the efficiency and savings that Approved Experiences provides. It's become an essential tool for my travel needs.",
    name: "Liam Bennett",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-5.png",
  },
   {
    id: 6,
     text: "I've never experienced travel like this before. The wholesale pricing is incredible, and the rewards program is a game-changer. Highly recommend Approved Experiences!",
    name: "Yuki Tanaka",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-6.png",
  },
   {
    id: 7,
    text: "I love spontaneous trips, but flights and hotels always killed the vibe -untill now. With these discounts, I can chase every adventure without draining my savings",
    name: "Alicia Morgan",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-7.png",
  },
   {
    id: 8,
    text: "As someone who travels frequently for work, I appreciate the efficiency and savings that Approved Experiences provides. It's become an essential tool for my travel needs.",
    name: "Malcom Stevens",
    title: "Approved Traveler",
    image: "/CustomerTestimonialPhotos-3.png",
  },

];

export default function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(2);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getTestimonialIndex = (offset: number) => {
    return (currentIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="py-10 md:py-10 overflow-hidden">
      <div className=" mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 text-balance">
          Our Happy{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
            Clients
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-[#525253] text-lg text-pretty">
          With an average savings of $1,000 per trip, we have saved our clients
          $146,048,827 and offer a 110% value guarantee if you find a better
          price with our competitors.
        </p>
        <div className="flex justify-center items-center mt-8 space-x-2">
          <Image
            src="/CustomerTestimonialPhotos.png"
            alt="Client 1"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <Image
            src="/CustomerTestimonialPhotos-2.png"
            alt="Client 2"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <Image
            src="/CustomerTestimonialPhotos-3.png"
            alt="Client 3"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white "
          />
          <Image
            src="/CustomerTestimonialPhotos-4.png"
            alt="Client 4"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
          <Image
            src="/CustomerTestimonialPhotos-5.png"
            alt="Client 5"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-white"
          />
        </div>

        <div className="mt-12 relative h-[350px] flex items-center justify-center">
          <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const relativeIndex = index - currentIndex;
              const distance = Math.abs(relativeIndex);

              let opacity = "opacity-0";
              let transform = "scale-75";
              let zIndex = 0;
              let position = "left-1/2 -translate-x-1/2"; // Center by default

              if (distance === 0) {
                // Center
                opacity = "opacity-100";
                transform = "scale-100";
                zIndex = 20;
                position = "left-1/2 -translate-x-1/2";
              } else if (distance === 1) {
                // Left and Right
                opacity = "opacity-60";
                transform = "scale-90";
                zIndex = 10;
                if (relativeIndex === -1) {
                  position = "left-1/4 -translate-x-1/2"; // Left
                } else {
                  position = "right-1/4 translate-x-1/2"; // Right
                }
              } else if (distance === 2) {
                // Far Left and Far Right
                opacity = "opacity-30";
                transform = "scale-75";
                zIndex = 5;
                if (relativeIndex === -2) {
                  position = "left-0 -translate-x-1/2"; // Far Left
                } else {
                  position = "right-0 translate-x-1/2"; // Far Right
                }
              }

              const isVisible = distance <= 2;
              const displayClass =
                distance > 2
                  ? "hidden"
                  : distance > 1
                  ? "hidden lg:block"
                  : distance > 0
                  ? "hidden md:block"
                  : "";

              return (
                <div
                  key={testimonial.id}
                  className={`absolute transition-all duration-500 ease-in-out ${position} ${transform} ${opacity} ${displayClass}`}
                  style={{ zIndex }}
                >
                  <div
                    className={`text-left p-6 rounded-2xl bg-[#F7FAFF] border border-[#E9F0FF] w-80 min-h-[260px] ${
                      distance === 0 ? "relative" : ""
                    }`}
                  >
                    {distance === 0 && (
                      <>
                        <div className="absolute -top-2 -left-2 w-5 h-5 border-t-[1.5px] border-l-[1.5px] border-blue-500"></div>
                        <div className="absolute -top-2 -right-2 w-5 h-5 border-t-[1.5px] border-r-[1.5px] border-blue-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-[1.5px] border-l-[1.5px] border-blue-500"></div>
                        <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-[1.5px] border-r-[1.5px] border-blue-500"></div>
                      </>
                    )}
                    <p
                      className={`text-gray-600 ${
                        distance > 0 ? "text-sm" : ""
                      }`}
                    >
                      {testimonial.text}
                    </p>
                    <div className="flex items-center mt-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={distance === 0 ? 48 : 40}
                        height={distance === 0 ? 48 : 40}
                        className={`rounded-full object-cover ${
                          distance === 0 ? "w-12 h-12" : "w-10 h-10"
                        }`}
                      />
                      <div className="ml-3">
                        <p
                          className={`font-semibold text-gray-900 flex items-center ${
                            distance > 0 ? "text-sm" : ""
                          }`}
                        >
                          {testimonial.name}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`text-blue-500 ml-1 ${
                              distance === 0 ? "h-4 w-4" : "h-3 w-3"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l4.25-4.25z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="text-gray-400 border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-100 transition"
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
            onClick={nextTestimonial}
            className="text-white bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center hover:bg-blue-700 transition"
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
    </section>
  );
}
