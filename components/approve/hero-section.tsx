import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="px-4 md:px-5">
            <div className="relative w-full pt-[520px] md:pt-[354px] pb-16 md:pb-[60px] bg-cover bg-center rounded-3xl px-5 md:px-0 overflow-hidden">
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/approve/5668816-uhd_4096_2160_30fps.mp4" type="video/mp4" />
                </video>

                <div className="relative z-10">
                    <div className="mx-auto max-w-7xl text-center">
                        <h1 className="text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] font-bold leading-12 sm:leading-[72px] text-white text-center">Outsource Your Busy Life</h1>
                        <p className="mt-5 text-base leading-6 sm:text-lg md:text-xl text-white font-medium mb-10 text-center">We Handle Home, Family, Travel & Lifestyle 24/7 - For Less Than $1 A Day.</p>
                        <Link href="/approvedlux/pricing" className="inline-block w-full md:w-auto text-base leading-6 px-8 py-4 bg-[#EBAD24] border-0 rounded-[58px] font-medium text-white cursor-pointer transition-transform transform hover:scale-105">Explore Membership</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}