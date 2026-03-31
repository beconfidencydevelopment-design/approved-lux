import Image from "next/image";
import moderns from "../../../utils/modern.json";
import ModernItem from "./modern-item";
import Link from "next/link";

export default function ModernSection() {
    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                    <div className="flex flex-col gap-5 order-2 md:order-1">
                        {moderns && moderns.map((modern, key) => (
                            <ModernItem
                                key={key}
                                item={modern}
                            />
                        ))}
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-[32px] leading-10 sm:text-5xl font-semibold text-slate-900 tracking-tight text-balance mb-6 md:mb-10 md:leading-[58px] text-center md:text-left">
                            The Modern{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3149FA] to-[#8E98FE]">
                                Personal Assistant Reinvented
                            </span>
                        </h2>
                        <Link href="/approvedlux/pricing" className="inline-block w-full md:w-auto text-base leading-6 px-8 py-4 bg-[#EBAD24] border-0 rounded-[58px] font-medium text-white cursor-pointer transition-transform transform hover:scale-105">Explore Membership</Link>
                        <div className="mt-6 md:mt-12 relative w-full aspect-3/2">
                            <Image
                                src="/approve/modern.jpg"
                                alt="TRAVEL+NOIRE"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
