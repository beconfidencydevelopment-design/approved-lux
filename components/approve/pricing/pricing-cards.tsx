import Link from "next/link";
import { useState } from "react";
import { approvePricingData } from "@/data/approvePricingData";

export default function ApprovePricingCards() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 md:mb-[60px]">
                    <h2 className="text-[32px] sm:text-5xl font-semibold text-gray-900 text-balance mb-2 md:mb-5 text-center">
                        Pricing{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3149FA] to-[#8E98FE]">
                            Plans
                        </span>
                    </h2>
                    <p className="mx-auto max-w-[780px] text-lg text-[#525253] text-center">
                        Your life, streamlined. Whether it's just for you or shared with your inner circle, our two personal assistant plans deliver effortless travel, seamless planning, and stress-free lifestyle management—anytime, anywhere.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {approvePricingData.map((plan, index) => (
                        <div
                            key={index}
                            className={`rounded-3xl p-6  cursor-pointer border border-[#E9F0FF] h-full ${index === active ? 'bg-[#EBAD24]' : 'bg-[#F7FAFF]'}`}
                            onClick={() => setActive(index)}
                        >
                            <div className="mb-3 md:mb-4">
                                <h2 className={`text-[28px] leading-9 md:text-[48px] md:leading-[58px] font-medium md:font-semibold mb-2 md:mb-1 ${index === active ? 'text-[#F7FAFF]' : 'text-[#0E0E0F]'}`}>{plan.name}</h2>
                                <p className={`text-lg leading-6 font-semibold ${index === active ? 'text-[#F7FAFF]' : 'text-[#525253]'}`}>{plan.subtitle}</p>
                            </div>
                            <p className={`text-base leading-6 font-medium ${index === active ? 'text-[#F4F4F4]' : 'text-[#525253]'}`}>{plan.description}</p>
                            <p className={`text-xl leading-7 mt-4 font-bold ${index === active ? 'text-[#F7FAFF]' : 'text-[#F7FAFF]'}`}>Less Than A $1 A Day</p>
                            <div className="mt-8">
                                <div className="flex items-end mb-5">
                                    <span className={`text-[32px] leading-8 font-semibold mr-2 ${index === active ? 'text-[#F7FAFF]' : 'text-[#525253]'}`}>${plan.discountedPrice}</span>
                                    <span className={`text-2xl leading-6 font-medium ${index === active ? 'text-[#F7FAFF]' : 'text-[#525253]'}`}><del>${plan.regularPrice}</del></span>
                                    <span className={`text-base leading-4 ${index === active ? 'text-[#F4F4F4]' : 'text-[#525253]'}`}>/ {plan.billingPeriod}</span>
                                </div>
                                <Link href={`/approvedlux/checkout?planId=${plan.id}`} className={`text-lg leading-6 font-medium p-4 rounded-[56px] block text-center transition ease-in-out duration-300 ${index === active ? 'text-[#0E0E0F] bg-[#F7FAFF] hover:bg-[#0E0E0F] hover:text-[#F7FAFF]' : 'text-[#F7FAFF] bg-[#EBAD24] hover:bg-[#0E0E0F]'}`}>{plan.button_text}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}