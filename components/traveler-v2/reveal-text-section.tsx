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

export default function RevealTextSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "end 0.2"],
  });

  const text =
    "Members save $1,000+ per trip on average; often covering the cost of membership in a single vacation.";

  const words = text.split(" ");

  return (
    <section className="grid gap-4">
 
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
