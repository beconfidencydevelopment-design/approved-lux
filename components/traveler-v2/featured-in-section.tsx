"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const logos = [
  {
    src: "/approved-lux/featured-in/image-1.png",
    alt: "Haute Living",
  },
  {
    src: "/approved-lux/featured-in/image-2.png",
    alt: "Travel + Leisure",
  },
  {
    src: "/approved-lux/featured-in/image-3.png",
    alt: "Black Enterprise",
  },
  {
    src: "/approved-lux/featured-in/image-4.png",
    alt: "Yahoo Finance",
  },
];

const stats = [
  {
    value: 1100,
    suffix: "K+",
    label: "Private Jet Charters",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Total Hours Flown",
  },
  {
    value: 1000,
    suffix: "+",
    label: "Clients Served",
  },
  {
    value: 3000,
    suffix: "+",
    label: "Flights Booked",
  },
];

function CountUpValue({
  end,
  suffix = "",
  durationMs = 1400,
  start = false,
}: {
  end: number;
  suffix?: string;
  durationMs?: number;
  start?: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) {
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const tick = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // ease-out for a smoother finish
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrameId);
  }, [durationMs, end, start]);

  return (
    <>
      {new Intl.NumberFormat("en-US").format(value)}
      {suffix}
    </>
  );
}

export default function FeaturedInSection() {
  const statsSectionRef = useRef<HTMLDivElement | null>(null);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const element = statsSectionRef.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 lg:py-[70px] px-4">
      <div className="mx-auto w-full max-w-7xl px-4 grid gap-[60px]">
        <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
          As{" "}
          <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent">
            Featured
          </span>{" "}
          In
        </h1>

        {/* Mobile: horizontal carousel */}
        <div className="sm:hidden">
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="min-w-[85%] snap-center flex items-center justify-center rounded-2xl border border-[#E9F0FF] bg-white p-4"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={320}
                  height={120}
                  className="h-auto w-full max-w-[220px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Desktop: grid */}
        <div className="hidden gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo) => (
            <div
              key={logo.src}
              className="flex items-center justify-center rounded-2xl border border-[#E9F0FF] bg-white p-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={320}
                height={120}
                className="h-auto w-full max-w-[220px] object-contain"
              />
            </div>
          ))}
        </div>

        <div
          ref={statsSectionRef}
          className="grid grid-cols-2 divide-y divide-[#F4F4F4] lg:grid-cols-4 lg:divide-x lg:divide-y-0 border-t border-t-[#F4F4F4] pt-10"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-6">
              <p className="text-[24px] leading-[32px] lg:text-[64px] lg:leading-[72px] font-semibold text-[#001F63]">
                <CountUpValue
                  end={stat.value}
                  suffix={stat.suffix}
                  start={startCounter}
                />
              </p>
              <p className="mt-2 text-[14px] leading-[20px] text-[#515153]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
