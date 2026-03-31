"use client";

import Link from "next/link";

const rows = [
  {
    option: "Approved Lux",
    optionIcon: "check",
    whatYouGet: "Real assistant, unlimited tasks",
    downside: "Variable",
    bestFor: "Busy professionals",
  },
  {
    option: "Full-Time Assistant",
    optionIcon: "briefcase",
    whatYouGet: "Dedicated employee",
    downside: "Lacks Expertise",
    bestFor: "Executives",
  },
  {
    option: "Credit Card Concierge",
    optionIcon: "card",
    whatYouGet: "Limited requests",
    downside: "Not there when needed",
    bestFor: "Occasional use",
  },
  {
    option: "DIY Booking",
    optionIcon: "clock",
    whatYouGet: "Your time",
    downside: "Hours weekly",
    bestFor: "Budget planning",
  },
  {
    option: "Virtual Assistants",
    optionIcon: "bot",
    whatYouGet: "Task-based only",
    downside: "Hidden fees & charges",
    downsidePill: true,
    bestFor: "Small tasks",
  },
];

export default function ComparisonTable() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="space-y-8">
          <h2 className="text-center text-[32px] leading-[40px] font-semibold text-[#0B2B6B] lg:text-[48px] lg:leading-[58px] mb-20">
            Comparison{" "}
            <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent">
              LUX vs Them
            </span>
          </h2>

          <div className="relative">
            <div className="absolute shrink-0 whitespace-nowrap left-1/2 -top-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2E49F8] lg:px-6 px-2 py-2 text-center text-base font-medium text-white shadow-md">
              $24.99/mo{" "}
              <span className="text-white/80 text-sm">
                vs $3,000+/mo traditional assistants
              </span>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#CFE0FF] bg-white">
              <div className="overflow-x-auto">
                <div className="min-w-[760px]">
                  <div className="grid grid-cols-[1.35fr_1fr_1fr_1fr] bg-[#001F63] text-base font-medium text-[#FFFFFF]">
                    <div className="px-6 py-4">Option</div>
                    <div className="px-6 py-4">What you get</div>
                    <div className="px-6 py-4">Typical downside</div>
                    <div className="px-6 py-4">Best for</div>
                  </div>

                  <div className="divide-y divide-[#CFE0FF] text-base">
                    {rows.map((row, index) => (
                      <div
                        key={row.option}
                        className={`grid grid-cols-[1.35fr_1fr_1fr_1fr] items-center ${
                          index % 2 === 1 ? "bg-[#F8FBFF]" : "bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-3 px-6 py-4 font-semibold text-[#111827]">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E9F0FF] text-[#2563EB]">
                            <OptionIcon type={row.optionIcon} />
                          </span>
                          {row.option}
                        </div>
                        <div className="px-6 py-4 text-[#111827]">
                          {row.whatYouGet}
                        </div>
                        <div className="px-6 py-4 text-[#001F63] font-semibold">
                          {row.downsidePill ? (
                            <span className="inline-flex items-center justify-center shrink-0 whitespace-nowrap rounded-full bg-[#D9E6FF] px-3 py-1 text-xs font-semibold text-[#1E3A8A]">
                              {row.downside}
                            </span>
                          ) : (
                            row.downside
                          )}
                        </div>
                        <div className="px-6 py-4 text-[#111827]">
                          {row.bestFor}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-base text-[#6B7280] lg:text-lg">
              All Memberships are month to month.
            </p>
            <Link href={"#pricing-section"} className="block w-full rounded-full bg-[#001F63] px-6 py-2.5 text-center text-base font-medium text-white hover:bg-[#00123D] sm:inline-flex sm:w-auto">
              Get Access Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const OptionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "check":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      );
    case "briefcase":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
          <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
        </svg>
      );
    case "card":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
        </svg>
      );
    case "clock":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "bot":
      return (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="7" width="16" height="12" rx="3" />
          <path d="M9 7V5a3 3 0 0 1 6 0v2" />
          <circle cx="9" cy="13" r="1" />
          <circle cx="15" cy="13" r="1" />
          <path d="M8 17h8" />
        </svg>
      );
    default:
      return null;
  }
};
