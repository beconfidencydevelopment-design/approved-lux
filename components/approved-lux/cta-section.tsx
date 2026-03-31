import { RotateCw, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";

const perks = [
  { label: "Real Person", icon: UserRound },
  { label: "No Contracts", icon: ShieldCheck },
  { label: "Cancel Anytime", icon: RotateCw },
];

export default function CtaSection() {
  return (
    <section className="py-10 lg:py-[70px] bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div
          className="relative overflow-hidden rounded-[28px] bg-[#0A3EBB] px-4 py-8 text-white lg:px-[50px] lg:py-[60px]"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(0,63,201,0.95) 10%, rgba(0,63,201,0) 50%), url('/approved-lux/cta/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "top",
          }}
        >
          <div className="relative z-10 max-w-xl space-y-6">
            <div className="flex flex-wrap gap-2">
              {perks.map((perk) => (
                <span
                  key={perk.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2.5 text-xs font-medium backdrop-blur-sm"
                >
                  <perk.icon className="h-4 w-4" />
                  {perk.label}
                </span>
              ))}
            </div>

            <div className="space-y-4">
              <h2 className="text-[32px] leading-[40px] font-semibold lg:text-[48px] lg:leading-[120%]">
                Get your time back and let life run smoothly.
              </h2>
              <p className="text-sm text-white/90 sm:text-base">
                Approved Lux is built for people who want great outcomes without
                doing the coordination themselves.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium sm:text-base">
                Your first task is waiting. What will you hand off today?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#pricing-section"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#001F63] shadow-[0_15px_40px_-30px_rgba(0,31,99,0.9)] hover:cursor-pointer sm:text-base"
                >
                  Get Started
                </Link>
                <Link
                  href="https://studies.approvedexperiences.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold underline underline-offset-4 hover:cursor-pointer sm:text-base"
                >
                  See What We Can Handle
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
