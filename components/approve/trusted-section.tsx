import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function TrustedSection() {

    const trusted = [
        {
            icon: "/approve/rating.png",
            name: "Jessica Eze",
            text: "As a founder, I use the concierge daily. Restaurant tables, travel, errands… It’s like having an assistant who never sleeps."
        },
        {
            icon: "/approve/rating.png",
            name: "Phyllis Schwaiger",
            text: "They planned our Cancun family trip from flights to stroller rental. I didn’t lift a finger — except to sip my margarita."
        },
        {
            icon: "/approve/rating.png",
            name: "Tyler Abara",
            text: "The outcomes are game-changing. I always know they will get things done."
        },
        {
            icon: "/approve/rating.png",
            name: "Phyllis Schwaiger",
            text: "They planned our Cancun family trip from flights to stroller rental. I didn’t lift a finger — except to sip my margarita."
        },
    ];

    return (
        <section className="py-6 md:py-[70px]">
            <div className="bg-[url(/approve/trusted.jpg)] bg-no-repeat bg-cover bg-center py-6 md:pt-[70px] md:pb-10 px-4">
                <div className="mx-auto max-w-7xl">
                    <div className="">
                        <div className="md:flex md:flex-row md:items-center md:justify-between mb-6 md:mb-[60px]">
                            <div>
                                <h2 className="text-[32px] leading-10 sm:text-5xl font-semibold text-[#F7FAFF] tracking-tight text-balance md:leading-[58px] text-center md:text-left">Trusted by thousands</h2>
                            </div>
                            <div className="hidden md:flex items-center gap-4 md:mt-0">
                                <button
                                    className="slider-prev rounded-full text-white border group hover:bg-[#F7FAFF] border-[#F7FAFF] h-11 w-11 transition-colors cursor-pointer flex items-center justify-center"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-[#F7FAFF] group-hover:text-[#2563EB]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                                    />
                                </svg>
                                </button>
                                <button
                                    className="slider-next rounded-full text-white border border-[#F7FAFF] h-11 w-11 transition-colors group hover:bg-[#F7FAFF] flex items-center justify-center cursor-pointer"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-[#F7FAFF] group-hover:text-[#2563EB]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                                </button>
                            </div>
                        </div>
                        <div>
                            <Swiper
                                slidesPerView={3}
                                slidesPerGroup={1}
                                spaceBetween={16}
                                loop={true}
                                speed={500}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                navigation={{
                                    nextEl: ".slider-next",
                                    prevEl: ".slider-prev",
                                }}
                                modules={[Navigation]}
                            >
                                {
                                    trusted.map((item, key) => (
                                        <SwiperSlide key={key}> 
                                            <div key={key} className="bg-[rgba(255,255,255,0.2)] rounded-[20px] p-8">
                                                <img src={item.icon} />
                                                <p className="text-base leading-6 text-[#F7FAFF] my-8">{item.text}</p>
                                                <h6 className="text-base leading-6 text-[#F7FAFF]">{item.name}</h6>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                            <div className="md:hidden flex items-center justify-center mt-6 gap-4">
                                <button
                                    className="slider-prev rounded-full text-white border group hover:bg-[#F7FAFF] border-[#F7FAFF] h-11 w-11 transition-colors cursor-pointer flex items-center justify-center"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-[#F7FAFF] group-hover:text-[#2563EB]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M7 16l-4-4m0 0l4-4m-4 4h18"
                                    />
                                </svg>
                                </button>
                                <button
                                    className="slider-next rounded-full text-white border border-[#F7FAFF] h-11 w-11 transition-colors group hover:bg-[#F7FAFF] flex items-center justify-center cursor-pointer"
                                >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-[#F7FAFF] group-hover:text-[#2563EB]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
