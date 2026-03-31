
import { useState } from "react";
import AccordionItem from "./prcing-faq-accordion-item";


export default function ApprovePricingFaqs() {
    const [openIndex, setOpenIndex] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    const handleToggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    const faqItems = [
        {
            title: "What exactly does the personal assistant service dox?",
            content: "Approved Lux provides a real, 24/7 US-based personal assistant who handles the planning, coordination, and execution behind everyday tasks and important moments. From travel and scheduling to reservations, home services, errands, and family coordination, we take care of the logistics so you don’t have to manage the details yourself.",
            defaultOpen: true
        },
        {
            title: "When are you available?",
            content: "Our team is available 24/7 for members. Whether it's a last-minute flight change, a weekend dinner reservation, or a Monday-morning reminder, we’re always here.",
            defaultOpen: false
        },
        {
            title: "Is this a travel agency?",
            content: "No — this is a full-service lifestyle concierge. Travel is just one part of what we do. In addition to trip planning, we also support dining, home management, daily essentials, personal shopping, gifting, and family needs.",
            defaultOpen: false
        },
        {
            title: "How fast will I get a response?",
            content: "Most requests receive a response within minutes. More complex requests (like itinerary building, sourcing contractors, or personal shopping) may take a little longer, but we always update you along the way.",
            defaultOpen: false
        },
        {
            title: "How do I submit a request?",
            content: "You can reach us via phone. Just tell us what you need, and we’ll take it from there.",
            defaultOpen: false
        },
        {
            title: "What types of things can I ask for?",
            content: "Almost anything related to your lifestyle, logistics, travel, home, or planning. Common requests include: <br/> – Booking travel or building itineraries <br/> – Restaurant reservations <br/> – Researching services or comparing options <br/> – Coordinating home repairs or cleaners <br/> – Sourcing gift ideas <br/> – Planning birthdays, holidays, and events <br/> – Finding childcare, classes, tutors, or camps <br/> – Managing everyday tasks and errands <br/> If we can legally and ethically handle it, we will.",
            defaultOpen: false
        },
        {
            title: "Are there any things you don’t do?",
            content: "Yes — we do not provide medical, legal, or financial advice. We also don’t perform physical tasks ourselves (e.g., cleaning, driving, babysitting). But we can source, coordinate, and book trusted providers for you.",
            defaultOpen: false
        },
        {
            title: "How is this different from using AI or search engines?",
            content: "AI and search tools give you options — we make decisions, handle the logistics, and execute for you. Instead of spending hours researching, comparing, booking, or coordinating, we do it for you. It’s personalized, human, and proactive.",
            defaultOpen: false
        },
        {
            title: "How does billing work?",
            content: "We offer a simple monthly membership. There are no surprise fees, and you can cancel anytime. If we book something with a third-party provider (hotel, service, event, etc.), you’ll simply pay them directly.",
            defaultOpen: false
        },
        {
            title: "Do you earn commissions on bookings or recommendations?",
            content: "No. All recommendations are unbiased and based entirely on what’s best for you. If we secure a lower rate or special offer on your behalf, the savings go directly to you.",
            defaultOpen: false
        },
        {
            title: "How many requests can I submit per month?",
            content: "Unlimited. Use us as often as you’d like — small tasks, big tasks, and everything in between.",
            defaultOpen: false
        },
        {
            title: "Can I share my membership?",
            content: "We offer two membership tiers: <br/> – Individual Plan (just for you) <br/> – Group Plan (up to 4 people) <br/> Each person has direct concierge access, with no need to filter requests through one account.",
            defaultOpen: false
        },
        {
            title: "Can you help with last-minute or urgent needs?",
            content: "Absolutely. Whether it's a same-day reservation, a flight issue, or an unexpected home emergency, we’re available 24/7 to jump in and assist.",
            defaultOpen: false
        },
        {
            title: "Do you work with families?",
            content: "Yes — from kid-friendly travel planning to local activities, camps, classes, tutors, childcare research, and holiday planning, we can support your entire household.",
            defaultOpen: false
        },
        {
            title: "Is my information kept private?",
            content: "Yes. All requests and personal details are confidential. We follow strict privacy and data-security protocols to protect your information.",
            defaultOpen: false
        },
        {
            title: "What if you can’t fulfill my request?",
            content: "If something is unavailable or impossible, we’ll provide the next best options — whether that’s alternative times, vendors, routes, reservations, or similar solutions. We always ensure you have a clear path forward.",
            defaultOpen: false
        },
        {
            title: "Is there a contract or long-term commitment?",
            content: "No long-term commitment is required. Our plans are month-to-month, and you can cancel anytime.",
            defaultOpen: false
        },
        {
            title: "Can businesses use this service?",
            content: "Yes — our concierge can support small businesses, founders, or teams with travel, scheduling, gifting, event planning, and day-to-day logistics.",
            defaultOpen: false
        }
    ];

    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 md:mb-12">
                    <h2 className="text-[32px] sm:text-5xl font-semibold text-gray-900 text-balance mb-2 md:mb-5 text-center">
                        Approved Lux Personal Assistant{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3149FA] to-[#8E98FE]">
                            FAQs
                        </span>
                    </h2>
                </div>

                <div className="hidden md:grid gap-4 grid-cols-1 md:grid-cols-2 ">
                    <div className="flex flex-col gap-4">
                        {faqItems.slice(0, 8).map((item, index) => (
                            <AccordionItem key={index} title={item.title} defaultOpen={item.defaultOpen}>
                                <p dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionItem>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        {faqItems.slice(8).map((item, index) => (
                            <AccordionItem
                                key={index + 8}
                                title={item.title}
                                defaultOpen={false}
                            >
                                <p dangerouslySetInnerHTML={{ __html: item.content }} />
                            </AccordionItem>
                        ))}
                    </div>
                </div>

                <div className="md:hidden flex flex-col gap-4">
                    {faqItems.slice(0, visibleCount).map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={item.title}
                            defaultOpen={item.defaultOpen}
                        >
                            <p dangerouslySetInnerHTML={{ __html: item.content }} />
                        </AccordionItem>
                    ))}

                    {visibleCount < faqItems.length && (
                        <button
                            onClick={loadMore}
                            className="bg-[#F7FAFF] mt-2 p-4 border border-[#001F63] text-base leading-6 font-medium text-[#001F63] hover:text-white hover:bg-[#001F63] transition rounded-[56px] w-full cursor-pointer"
                        >
                            Load More
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
