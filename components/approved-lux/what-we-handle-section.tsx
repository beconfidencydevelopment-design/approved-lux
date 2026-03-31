import Image from "next/image";
import { Marquee } from "../ui/marquee";
import Link from "next/link";

const items = [
  {
    id: 1,
    image: "/approved-lux/what-we-handle/image-1.png",
    text: "Book my dinner at Carbone",
  },
  {
    id: 2,
    image: "/approved-lux/what-we-handle/image-2.png",
    text: "Find me a last-minute flight to Miami",
  },
  {
    id: 3,
    image: "/approved-lux/what-we-handle/image-3.png",
    text: "Return flight package",
  },
  {
    id: 4,
    image: "/approved-lux/what-we-handle/image-4.png",
    text: "Schedule my dog grooming",
  },
  {
    id: 5,
    image: "/approved-lux/what-we-handle/image-5.png",
    text: "Plan my anniversary weekend",
  },
  {
    id: 6,
    image: "/approved-lux/what-we-handle/image-6.png",
    text: "Find a babysitter for Saturday",
  },
  {
    id: 7,
    image: "/approved-lux/what-we-handle/image-7.png",
    text: "Book my dinner at Carbone",
  },
  {
    id: 8,
    image: "/approved-lux/what-we-handle/image-8.png",
    text: "Find me a last-minute flight to Miami",
  },
];

export default function WhatWeHandleSection() {
  return (
    <section className="pt-[45px] pb-[32px] lg:pt-[80px] lg:pb-[80px]">
      <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
        What We Handle
      </h1>

      <div className="relative overflow-y-hidden">
        {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 lg:w-20 bg-gradient-to-r from-white to-white/5" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 lg:w-20 bg-gradient-to-l from-white to-white/5" /> */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 lg:w-40 bg-gradient-to-l from-[#FFFFFF00] from-10% via-[#FFFFFF] via-72% to-[#FFFFFF] to-100%" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 lg:w-40 bg-gradient-to-r from-[#FFFFFF00] from-10% via-[#FFFFFF] via-72% to-[#FFFFFF] to-100%" />

        <div className="py-[60px]">
          <Marquee className="[--duration:30s] [--gap:20px]">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAFA] border border-[#E9F0FE] p-4 rounded-2xl grid gap-2.5"
              >
                <Image
                  key={item.id}
                  src={item.image}
                  alt={`${item.image}-alt`}
                  height={700}
                  width={300}
                  className="h-[330px] w-full object-cover rounded-xl"
                />
                <p className="">{item.text}</p>
              </div>
            ))}
          </Marquee>
          <Marquee reverse className="[--duration:30s] [--gap:20px]">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAFAFA] border border-[#E9F0FE] p-4 rounded-2xl grid gap-2.5"
              >
                <Image
                  key={item.id}
                  src={item.image}
                  alt={`${item.image}-alt`}
                  height={700}
                  width={300}
                  className="h-[330px] w-full object-cover rounded-xl"
                />
                <p className="">{item.text}</p>
              </div>
            ))}
          </Marquee>
        </div>


      </div>
      <div className="flex w-full max-w-full flex-col items-stretch justify-center gap-2 px-[10px] sm:mx-auto sm:max-w-xs sm:flex-row sm:flex-wrap sm:items-center sm:px-0">
          <Link
            href="#pricing-section"
            className="block w-full text-sm font-medium text-white bg-[#001F63] rounded-full px-4 py-2 text-center hover:bg-gray-900 shadow sm:w-auto"
          >
            Try It Now
          </Link>
          <Link
            href="https://studies.approvedexperiences.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm font-medium underline rounded-full px-4 py-2 text-center"
          >
            See What We Can Handle
          </Link>
        </div>
    </section>
  );
}
