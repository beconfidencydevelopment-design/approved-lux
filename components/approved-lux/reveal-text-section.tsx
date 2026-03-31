"use client";

import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { VerifiedIcon } from "./icons/verified";
import { RevealWord } from "./shared/reveal-word";

const features = ["No hidden fees", "Cancel anytime", "Available 24/7"];

export default function RevealTextSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const text =
    "Stop spending your weekends planning. Stop losing hours to coordination. Approved Lux handles the details across travel, dining reservations, and lifestyle management, so you get time back and your plans run smoother";

  const words = text.split(" ");

  return (
    <section className="grid gap-4">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {features.map((f) => (
          <div
            key={f}
            className="px-2 lg:px-4 py-1 lg:py-2.5 rounded-full flex items-center justify-center gap-2 bg-[#001B44]/10 shrink-0 text-xs lg:text-sm"
          >
            <VerifiedIcon className="size-4 lg:size-5" /> {f}
          </div>
        ))}
      </div>

      <div ref={sectionRef} className="px-4">
        <p className="mx-auto max-w-4xl text-center text-[28px] leading-[36px] lg:text-[36px] lg:leading-[44px]">
          {words.map((word, index) => {
            const start = index / words.length;
            const end = start + 1 / words.length;

            return (
              <RevealWord
                key={`${word}-${index}`}
                progress={scrollYProgress}
                range={[start, end]}
              >
                {word}
              </RevealWord>
            );
          })}
        </p>
      </div>
    </section>
  );
}
