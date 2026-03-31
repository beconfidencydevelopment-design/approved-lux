import Link from "next/link";

export default function PricingSection() {
  return (
    <section id="pricing-section" className="py-10 lg:py-[70px]">
      <div className="mx-auto w-full max-w-7xl px-4 grid gap-12 lg:gap-[60px]">
        <div className="space-y-5">
          <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
            Pricing Plans
          </h1>
          <p className="text-center text-[#525253] max-w-md mx-auto">
            Effortless living for you or your circle. Our plans provide seamless
            travel and stress-free management.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Solo Lux */}
          <div className="rounded-2xl border border-[#E6EEFF] bg-white p-1.5  overflow-hidden h-full">
            <h3 className="text-[32px] leading-[40px] font-semibold text-[#001F63] px-6 py-5">
              Solo Lux
            </h3>

            <div
              className="rounded-xl p-6 text-[#40444D]"
              style={{
                backgroundImage: "url('/approved-lux/pricing/gradient.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <p className="text-sm font-medium sm:text-base text-white">
                Individual membership
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base text-white">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white">✓</span>
                  <span>Available 24/7 365 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white">✓</span>
                  <span>Cancel anytime you want</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-white">✓</span>
                  <span>Less than $1/Day</span>
                </li>
              </ul>
              <div className="mt-4 rounded-xl border border-[#E6EEFF]/20 bg-white/10 backdrop-blur-xl p-5 text-white sm:p-6">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-3xl font-semibold sm:text-4xl">
                    $24.99
                  </span>
                  <span className="text-sm sm:text-base">
                    /month for first 3 months.
                  </span>
                </div>
                <Link
                  href="/approvedlux/checkout?planId=44"
                  className="mt-4 block w-full rounded-full text-[#001F63] py-2.5 text-sm font-semibold bg-white sm:text-base hover:cursor-pointer hover:bg-[#EEF4FF] transition-colors text-center"
                >
                  Get Started
                </Link>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm">
                  <ShieldIcon />
                  <span>60 Days Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lux Circle */}
          <div className="rounded-2xl border border-[#E6EEFF] bg-white p-1.5  overflow-hidden h-full">
            <h3 className="text-[32px] leading-[40px] font-semibold text-[#001F63] px-6 py-5">
              Lux Circle
            </h3>

            <div className="rounded-xl bg-[#F7FAFF] p-6 text-[#40444D]">
              <p className="text-sm font-medium sm:text-base">
                Group membership (4-person account)
              </p>
              <ul className="mt-4 space-y-2 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#001F63]">✓</span>
                  <span>Available 24/7 365 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#001F63]">✓</span>
                  <span>Cancel anytime you want</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#001F63]">✓</span>
                  <span>Less than $1/Day</span>
                </li>
              </ul>
              <div className="mt-4 rounded-xl border border-[#E6EEFF] bg-white p-5 text-[#111827] sm:p-6">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-3xl font-semibold sm:text-4xl">
                    $89.99
                  </span>
                  <span className="text-sm text-[#525253] sm:text-base">
                    /month for first 3 months.
                  </span>
                </div>
                <Link
                  href="/approvedlux/checkout?planId=45"
                  className="mt-4 block w-full rounded-full bg-[#001F63] py-2.5 text-sm font-semibold text-white sm:text-base hover:cursor-pointer hover:bg-[#00174B] transition-colors text-center"
                >
                  Get Started
                </Link>
                <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#525253] sm:text-sm">
                  <ShieldIcon />
                  <span>60 Days Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ShieldIcon = () => {
  return (
    <svg
      width="21"
      height="22"
      viewBox="0 0 21 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2476 0C11.9287 9.67937e-05 13.2962 0.568012 14.4888 1.18555C14.8491 1.3721 15.1836 1.55705 15.5034 1.7334C16.2864 2.16507 16.9808 2.54703 17.7427 2.79004C18.1899 2.93264 18.5858 3.05989 18.8667 3.16992C19.1312 3.2735 19.4455 3.4153 19.6685 3.66309C19.8687 3.88561 19.9723 4.13505 20.0405 4.37402C20.1025 4.59099 20.1548 4.88517 20.2056 5.16699C21.4438 12.0324 18.7397 18.5374 12.1294 21.0684C11.4799 21.3171 11.0014 21.5 10.2505 21.5C9.49943 21.5 9.02039 21.3172 8.37063 21.0684C1.76035 18.5374 -0.9464 12.0326 0.291525 5.16699C0.342308 4.88518 0.395614 4.59099 0.457541 4.37402C0.525758 4.13517 0.628524 3.8855 0.828635 3.66309C1.0516 3.41529 1.36597 3.27354 1.63039 3.16992C1.91129 3.05985 2.3072 2.93272 2.75442 2.79004C3.51585 2.54709 4.20944 2.16494 4.99172 1.7334C5.31152 1.55699 5.6471 1.37218 6.00735 1.18555C7.19939 0.568007 8.56647 0 10.2476 0ZM16.1909 7.41602C16.0065 6.89571 15.435 6.62348 14.9146 6.80762C14.0366 7.11856 13.197 7.71154 12.4605 8.35742C11.7135 9.01247 11.0147 9.77324 10.4214 10.4844C9.98227 11.0108 9.59395 11.5186 9.27883 11.9492C8.99016 11.6035 8.70243 11.3508 8.42824 11.168C8.15392 10.9851 7.80058 10.7501 7.24856 10.75C6.69636 10.75 6.2487 11.1978 6.24856 11.75C6.24856 12.2707 6.64642 12.6989 7.15481 12.7461C7.35912 12.7656 7.91359 13.3164 8.35403 14.1973C8.51518 14.5196 8.83693 14.7305 9.1968 14.749C9.55666 14.7675 9.89902 14.5902 10.0923 14.2861C10.102 14.2716 10.4432 13.7609 10.606 13.5303C10.937 13.0613 11.4057 12.4271 11.9575 11.7656C12.5112 11.1019 13.1362 10.4249 13.7788 9.86133C14.4317 9.28882 15.0481 8.88242 15.5816 8.69336C16.1022 8.50898 16.3753 7.93661 16.1909 7.41602Z"
        fill="#71F268"
      />
    </svg>
  );
};
