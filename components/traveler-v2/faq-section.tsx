"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FaqItem = {
  question: string;
  answer: string;
  answerHtml?: boolean;
};

const faqs: FaqItem[] = [
  {
    question: "What is Approved Experiences Traveler?",
    answer:
      "Approved Experiences Traveler is an annual membership program that gives you access to deeply discounted, curated travel services-including luxury hotels, vacation homes, car rentals, flights and timeshares-through our proprietary platform and concierge team.",
  },
  {
    question: "Who is the program designed for?",
    answer:
      "Our program is perfect for frequent leisure and business travelers who value upscale accommodations, seamless booking, white-glove support, and want to save up to 70% off retail rates.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "The annual membership fee varies contingent upon the membership that you have. Becoming a Gold Member is a $799 investment. Becoming a Platinum Member is a $1,199 investment. Becoming a Diamond Member is a $1,699 investment. We accept all major credit cards (Visa, Mastercard, AMEX, Discover) as well as ACH bank transfers for corporate memberships. Payment plans are available upon request for groups or corporate buys.",
  },
  {
    question: "How do I make a booking?",
    answer:
      "Log in to the member portal at traveler.approvedexperiences.com, provide your travel dates, desired itinerary and any special requests; we'll handle the rest.",
  },
  {
    question: "What discounts can I expect?",
    answer:
      "Hotels: Up to 70% off rack rates at 1 million+ properties. Cruises: Up to 40% off on 44+ cruise lines. Vacation Homes: Access to 500,000+ homes at exclusive member rates. Car Rentals: Up to 50% off at 30,000+ locations. Flights & Timeshares: Special negotiated savings and points-earning opportunities.",
  },
  {
    question: "Are blackout dates or restrictions applied?",
    answer:
      "Some peak-season dates and special-event properties may have limited availability. We'll always transparently note any booking restrictions when you search or inquire.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation policies vary by provider. If you need to cancel or modify, contact us at least 72 hours before your travel date for most accommodations. Our team will guide you through penalty-free options whenever possible.",
  },

];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-10 lg:py-[70px]">
      <div className="mx-auto w-full max-w-7xl px-4 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:gap-[60px]">
        <div className="space-y-6">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-semibold text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#525253] max-w-sm mx-auto lg:mx-0">
              Everything you wanted to know about our concierge service
            </p>
          </div>

          <div className="space-y-3 text-center lg:text-left">
            <p className="text-sm text-[#5D5D60]">Still have questions?</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#001F63] px-6 py-2.5 text-sm font-semibold text-white hover:cursor-pointer transition-transform active:scale-95 w-full lg:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="space-y-2.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={item.question}
                layout
                className="rounded-xl border border-[#E9F0FF] bg-white overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left hover:cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="relative h-5 w-5 flex-shrink-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={isOpen ? "fill" : "stroke"}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.15 }}
                        >
                          {isOpen ? <QuestionIconFill /> : <QuestionIconStroke />}
                        </motion.div>
                      </AnimatePresence>
                    </span>
                    <span className="text-sm font-semibold text-[#0F172A] sm:text-base">
                      {item.question}
                    </span>
                  </span>
                  
                  <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-[#0F172A]"
                  >
                    {isOpen ? <MinusIcon /> : <PlusIcon />}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 pb-5 pt-1">
                        {item.answerHtml ? (
                          <div
                            className="text-xs text-[#5D5D60] sm:text-sm leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: item.answer }}
                          />
                        ) : (
                          <p className="text-xs text-[#5D5D60] sm:text-sm leading-relaxed">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
/* --- SVG Icons --- */

const QuestionIconFill = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.85417 0C15.2965 0 19.7083 4.41186 19.7083 9.85417C19.7083 15.2965 15.2965 19.7083 9.85417 19.7083C4.41186 19.7083 0 15.2965 0 9.85417C0 4.41186 4.41186 0 9.85417 0ZM9.85829 13.0625C9.34606 13.0625 8.9375 13.4729 8.9375 13.9792C8.9375 14.4854 9.34606 14.8958 9.85004 14.8958C10.3623 14.8958 10.7708 14.4854 10.7708 13.9792C10.7708 13.4729 10.3623 13.0625 9.85829 13.0625ZM9.85417 4.8125C8.33534 4.8125 7.10417 6.04372 7.10417 7.5625C7.10417 8.06878 7.51457 8.47917 8.02083 8.47917C8.52711 8.47917 8.9375 8.06878 8.9375 7.5625C8.9375 7.05624 9.34789 6.64583 9.85417 6.64583C10.3604 6.64583 10.7708 7.05624 10.7708 7.5625C10.7708 7.74636 10.7177 7.91499 10.6262 8.05723C10.5179 8.22543 10.3802 8.40281 10.2107 8.61355L10.1285 8.7153C9.98626 8.89112 9.82547 9.09013 9.6789 9.29152C9.33423 9.76525 8.9375 10.421 8.9375 11.2292C8.9375 11.7354 9.34789 12.1458 9.85417 12.1458C10.3604 12.1458 10.7708 11.7354 10.7708 11.2292C10.7708 11.0248 10.8716 10.7684 11.1613 10.3702C11.2779 10.2099 11.4037 10.0542 11.5453 9.87892L11.639 9.76287C11.8101 9.5502 12.0022 9.30673 12.1679 9.04924C12.444 8.62006 12.6042 8.10856 12.6042 7.5625C12.6042 6.04372 11.373 4.8125 9.85417 4.8125Z"
      fill="#2563EB"
    />
  </svg>
);

const QuestionIconStroke = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M9.85449 0C15.2968 0 19.709 4.41219 19.709 9.85449C19.709 15.2968 15.2968 19.709 9.85449 19.709C4.41219 19.709 0 15.2968 0 9.85449C1.16771e-07 4.41219 4.41219 1.16768e-07 9.85449 0ZM9.85449 1.375C5.17158 1.375 1.375 5.17158 1.375 9.85449C1.375 14.5374 5.17158 18.334 9.85449 18.334C14.5374 18.334 18.334 14.5374 18.334 9.85449C18.334 5.17158 14.5374 1.375 9.85449 1.375ZM9.85547 13.5215C10.3616 13.5215 10.7723 13.9314 10.7725 14.4375C10.7725 14.9438 10.3617 15.3545 9.85547 15.3545H9.84766C9.3414 15.3545 8.93066 14.9438 8.93066 14.4375C8.93084 13.9314 9.3415 13.5215 9.84766 13.5215H9.85547ZM9.85449 4.58398C11.2467 4.58398 12.375 5.71227 12.375 7.10449C12.375 7.60515 12.2285 8.07357 11.9756 8.4668C11.8171 8.71311 11.6318 8.94878 11.4609 9.16113C11.4297 9.19999 11.3984 9.23802 11.3682 9.27539C11.2265 9.45079 11.0968 9.61213 10.9766 9.77734C10.6799 10.185 10.542 10.4916 10.542 10.7715V11.2295C10.542 11.6092 10.2342 11.917 9.85449 11.917C9.4748 11.917 9.16699 11.6092 9.16699 11.2295V10.7715C9.16699 10.039 9.52651 9.43301 9.86426 8.96875C10.007 8.77256 10.1634 8.57829 10.3057 8.40234C10.3341 8.36712 10.3625 8.33253 10.3896 8.29883C10.5592 8.08806 10.704 7.90287 10.8193 7.72363C10.9339 7.54556 11 7.33363 11 7.10449C11 6.47167 10.4873 5.95898 9.85449 5.95898C9.22167 5.95898 8.70898 6.47167 8.70898 7.10449C8.70898 7.48408 8.40103 7.79182 8.02148 7.79199C7.64179 7.79199 7.33398 7.48419 7.33398 7.10449C7.33398 5.71227 8.46227 4.58398 9.85449 4.58398Z"
      fill="#2563EB"
    />
  </svg>
);

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M8 3.25C8.41421 3.25 8.75 3.58579 8.75 4V7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H8.75V12C8.75 12.4142 8.41421 12.75 8 12.75C7.58579 12.75 7.25 12.4142 7.25 12V8.75H4C3.58579 8.75 3.25 8.41421 3.25 8C3.25 7.58579 3.58579 7.25 4 7.25H7.25V4C7.25 3.58579 7.58579 3.25 8 3.25Z"
      fill="currentColor"
    />
  </svg>
);

const MinusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M4 7.25H12C12.4142 7.25 12.75 7.58579 12.75 8C12.75 8.41421 12.4142 8.75 12 8.75H4C3.58579 8.75 3.25 8.41421 3.25 8C3.25 7.58579 3.58579 7.25 4 7.25Z"
      fill="currentColor"
    />
  </svg>
);
