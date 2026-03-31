import Image from "next/image";

export default function PortfolioSection() {
    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5">
                        <video className="rounded-3xl h-[388px] md:h-[600px] object-cover" src="/approve/videos/9335793-hd_1080_1920_25fps.mp4" autoPlay muted loop playsInline></video>
                        <div className="relative w-full aspect-3/2 h-[388px] md:h-[316px]">
                            <Image
                                src="/approve/portfolios/portfolio-1.jpg"
                                alt="HAUTE LIVING"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <video className="rounded-3xl h-[388px] md:h-[298px] object-cover" src="/approve/videos/7119637-hd_1920_1080_25fps.mp4" autoPlay muted loop playsInline></video>
                        <video className="rounded-3xl h-[388px] md:h-[298px] object-cover" src="/approve/videos/8902153-hd_1920_1080_25fps.mp4" autoPlay muted loop playsInline></video>
                        <video className="rounded-3xl h-[388px] md:h-[298px] object-cover" src="/approve/videos/4569931-uhd_4096_2160_25fps.mp4" autoPlay muted loop playsInline></video>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="relative w-full aspect-3/2 h-[388px] md:h-[316px]">
                            <Image
                                src="/approve/portfolios/portfolio-2.jpg"
                                alt="HAUTE LIVING"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                        <div className="relative w-full aspect-3/2 h-[388px] md:h-[600px]">
                            <Image
                                src="/approve/portfolios/portfolio-3.jpg"
                                alt="HAUTE LIVING"
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