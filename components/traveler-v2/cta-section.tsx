import { FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";

const perks = [
  { label: "No complicated terms", icon: FileText },
  { label: "No hidden conditions", icon: ShieldCheck },
];

export default function CtaSection() {
  return (
    <section className="py-10 lg:py-[70px] bg-[#FAFAFA]">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0A3EBB] px-4 py-8 text-white lg:px-[50px] lg:py-[60px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://pub-0629005fcfb44f7ca99f4fbb3b9937c3.r2.dev/1761286_Daytona_Beach_Florida_1280x720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,63,201,0.95)] via-[rgba(0,63,201,0.6)] to-[rgba(0,63,201,0.15)]" />
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
                Travel With Confidence
              </h2>
              <p className="text-sm text-white/90 sm:text-base">
                If you ever find the same trip available at a lower price
                elsewhere, Approved Experiences will refund 110% of the
                difference.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium sm:text-base">
                That means you can book knowing you are protected by one of the
                strongest guarantees in the travel industry.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="#pricing-section"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#001F63] shadow-[0_15px_40px_-30px_rgba(0,31,99,0.9)] hover:cursor-pointer sm:text-base"
                >
                  Just better travel pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
