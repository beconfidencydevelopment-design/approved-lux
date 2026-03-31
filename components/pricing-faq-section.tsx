import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HelpCircle } from "lucide-react";

const faqSections = [
  {
    title: "General",
    faqs: [
      {
        question: "What is Approved Experiences Traveler?",
        answer:
          "Approved Experiences Traveler is an annual membership program that gives you access to deeply discounted, curated travel services—including luxury hotels, vacation homes, car rentals, flights and timeshares—through our proprietary platform and concierge team.",
      },
      {
        question: "Who is the program designed for?",
        answer:
          "Our program is perfect for frequent leisure and business travelers who value upscale accommodations, seamless booking, white-glove support, and want to save up to 70% off retail rates.",
      },
    ],
  },
  {
    title: "Membership & Pricing",
    faqs: [
      {
        question: "How much does membership cost?",
        answer:
          "The annual membership fee varies contingent upon the membership that you have. Becoming a Gold Member is a $799 investment. Becoming a Platinum Member is a $1,199 investment. Becoming a Diamond Member is a $1,699 investment. We accept all major credit cards (Visa, Mastercard, AMEX, Discover) as well as ACH bank transfers for corporate memberships. Payment plans are available upon request for groups or corporate buys.",
      },
    ],
  },
  {
    title: "Booking & Benefits",
    faqs: [
      {
        question: "How do I make a booking?",
        answer:
          "Log in to the member portal at traveler.approvedexperiences.com, provide your travel dates, desired itinerary and any special requests; we’ll handle the rest.",
      },
      {
        question: "What discounts can I expect?",
        answer:
          "Hotels: Up to 70% off rack rates at 1 million+ properties\nCruises: Up to 40% off on 44+ cruise lines\nVacation Homes: Access to 500,000+ homes at exclusive member rates\nCar Rentals: Up to 50% off at 30,000+ locations\nFlights & Timeshares: Special negotiated savings and points-earning opportunities",
      },
      {
        question: "Are blackout dates or restrictions applied?",
        answer:
          "Some peak-season dates and special-event properties may have limited availability. We’ll always transparently note any booking restrictions when you search or inquire.",
      },
    ],
  },
  {
    title: "Changes, Cancellations & Support",
    faqs: [
      {
        question: "What is your cancellation policy?",
        answer:
          "Cancellation policies vary by provider. If you need to cancel or modify, contact us at least 72 hours before your travel date for most accommodations. Our team will guide you through penalty-free options whenever possible.",
      },
      {
        question: "How do I get help during my trip?",
        answer:
          "Our dedicated customer support team is available via phone from 9:00 AM EST to 9:00 PM EST. If anything goes wrong—flight delays, room issues, ground transport hiccups—we’ll intervene immediately.",
      },
    ],
  },
  {
    title: "Refund Policy",
    faqs: [
      {
        question:
          "What is your Approved Experiences Traveler membership refund policy?",
        answer:
          "All Approved Experiences Traveler membership fees are final and non-refundable. Once your membership is activated, no refunds, credits or prorated reimbursements will be issued under any circumstances. Please review our membership terms carefully before you join.",
      },
    ],
  },
  {
    title: "Corporate & Group Programs",
    faqs: [
      {
        question: "Do you offer corporate or group memberships?",
        answer:
          "Yes. We have volume-discounted corporate packages starting at 10 seats, with customized reporting, virtual payment cards and centralized billing. Contact hello@approvedexperiences.com for a tailored quote.",
      },
      {
        question: "How do I get help during my trip?",
        answer:
          "Our dedicated customer support team is available via phone from 9:00 AM EST to 9:00 PM EST. If anything goes wrong—flight delays, room issues, ground transport hiccups—we’ll intervene immediately.",
      },
    ],
  },
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I join?",
        answer:
          "Visit our membership page at www.approvedexperiences.com/traveler, choose your plan, and complete the quick 3-step registration.",
      },
    ],
  },
];
interface PricingFaqSectionProps {
  id?: string;
}
export default function PricingFaqSection({ id }: PricingFaqSectionProps) {
  return (
    <section className="px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Here are some frequently{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
            asked questions
          </span>
        </h2>
        <p className="text-gray-600">
          Everything you need to know about the product and billing. Can't find
          the answer you're looking for? Please chat to our friendly team.
        </p>
      </div>

      <div className="space-y-8">
        {faqSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-[18px] font-medium text-[#525253] mb-4">
              {section.title}
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {section.faqs.map((faq, faqIndex) => (
                <AccordionItem
                  key={faqIndex}
                  value={`item-${sectionIndex}-${faqIndex}`}
                  className="border border-[#E9F0FF] rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left text-[20px] font-medium text-[#0E0E0F] hover:no-underline">
                    <div className="flex items-center">
                      <div className="rounded-full p-2 mr-4">
                        <HelpCircle className="text-[#6898FF]" />
                      </div>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#525253] font-normal text-[14px] pb-4 pl-14">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}
