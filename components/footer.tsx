"use client";
import Image from "next/image";
import Link from "next/link";
import ScrollToTop from "./scroll-to-top";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/approvedexperiences",
    icon: "/approved-lux/footer/linkedin.svg",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/Approved-Experiences/61576327340387/?mibextid=wwXIfr",
    icon: "/approved-lux/footer/fb.svg",
  },
  {
    name: "X",
    href: "https://x.com/approvedexperiences",
    icon: "/approved-lux/footer/x.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/approvedexperiences/",
    icon: "/approved-lux/footer/instagram.svg",
  },
];

export default function Footer() {
  return (
    <footer className="text-white relative">
      <div className="bg-[#001F63] mx-auto px-6 sm:px-8 rounded-t-[40px] pt-10 sm:pt-12">
        <div className="bg-[#E9F0FF] text-gray-900 rounded-2xl p-6 sm:p-8 md:p-12 mb-16 sm:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-[32px] font-medium leading-tight text-[#0E0E0F]">
                Want product news and updates? <br className="hidden sm:block" />
                Sign up for our newsletter.
              </h3>
              <p className="mt-4 text-[#525253]">
                We care about your data. Read our{" "}
                <Link
                  href="https://app.termly.io/policy-viewer/policy.html?policyUUID=118d881e-6be5-45db-b82c-9df5ad6f8436"
                  className="text-[#2563EB] underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
            <div className="w-full max-w-md">
              <p className="font-semibold text-black mb-4">Sign up today</p>
              <form className="space-y-4">
                <div className="flex items-center rounded-full border border-[#001F63] bg-white">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow w-full px-4 py-2 rounded-full focus:outline-none text-[#525253]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "mailto:support@approvedexperiences.com")
                    }
                    className="bg-[#2563EB] text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition"
                  >
                    Subscribe
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 rounded border border-[#2563EB] text-[#2563EB] focus:ring-[#2563EB]"
                  />
                  <label htmlFor="terms" className="block text-sm text-gray-600">
                    I agree to{" "}
                    <Link
                      href="https://app.termly.io/policy-viewer/policy.html?policyUUID=c3a2a159-a4b8-4b03-b7f8-2d38bd2de0c9"
                      className="text-[#2563EB] underline"
                    >
                      Terms & Services
                    </Link>
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-6 pb-10">
          <div className="lg:col-span-2 flex flex-row items-center justify-between lg:flex-col lg:items-start lg:justify-start">
            <Link href="/traveler" className="shrink-0">
              <Image
                src="/approved-lux/footer/logo.svg"
                alt="Approved Experiences Logo"
                width={180}
                height={48}
                className="h-auto w-[160px] sm:w-[180px]"
              />
            </Link>
            <div className="flex items-center gap-2 lg:mt-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="w-9 h-9 flex items-center justify-center border border-[#1D3B8C] rounded-md hover:border-white transition"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px]"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-lg">Navigation</h4>
              <ul className="mt-4 space-y-3 text-[#C8D4F5]">
                <li>
                  <Link href="/traveler" className="hover:text-white transition">
                    Traveler 2.0
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/approvedlux"
                    className="hover:text-white transition"
                  >
                    Concierge
                  </Link>
                </li>
                <li>
                  <Link
                    href="/company"
                    prefetch={false}
                    className="hover:text-white transition"
                  >
                    Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.termly.io/policy-viewer/policy.html?policyUUID=118d881e-6be5-45db-b82c-9df5ad6f8436"
                    className="hover:text-white transition"
                  >
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg">Resources</h4>
              <ul className="mt-4 space-y-3 text-[#C8D4F5]">
                <li>
                  <Link
                    href="/traveler/pricing?faq"
                    className="hover:text-white transition"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/approvedlux"
                    className="hover:text-white transition"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-lg">Contact</h4>
              <ul className="mt-4 space-y-3 text-[#C8D4F5]">
                <li>Miami, Florida</li>
                <li>
                  <Link
                    href="mailto:support@approvedexperiences.com"
                    className="hover:text-white transition"
                  >
                    support@approvedexperiences.com
                  </Link>
                </li>
                <li>
                  <Link
                    href="tel:+18666781411"
                    className="hover:text-white transition"
                  >
                    +1 (866) 678-1411
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-[#0739A7] text-center">
          <p className="text-[#F4F4F4] text-sm">
            &copy; 2025 Approved Experiences, Inc. All rights reserved.
          </p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  );
}
