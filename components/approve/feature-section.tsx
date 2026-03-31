import Image from "next/image";

export default function FeatureSection() {
    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 md:mb-[70px]">
                    <h2 className="text-[32px] sm:text-5xl font-semibold text-gray-900 text-balance mb-2 md:mb-5 text-center">
                        As{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3149FA] to-[#8E98FE]">
                            Featured{" "}
                        </span>
                        In
                    </h2>
                    <p className="mx-auto max-w-[780px] text-lg text-[#525253] text-center">With 1,100 private jet charters, 5,000+ hours flown, 1,000+ clients served and 3,000+ flights booked. We deliver unmatched expertise built on decades in luxury travel</p>
                </div>
                
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full md:w-auto">
                        <Image
                            src="/haute.jpg"
                            alt="HAUTE LIVING"
                            width={250}
                            height={50} 
                            className="w-full md:w-[250px]"
                        />
                        <Image
                            src="/travel.jpg"
                            alt="TRAVEL+NOIRE"
                            width={250}
                            height={50}
                            className="w-full md:w-[250px]"
                        />
                        <Image
                            src="/black.jpg"
                            alt="BLACK ENTERPRISE"
                            width={250}
                            height={50}
                            className="w-full md:w-[250px]"
                        />
                        <Image
                            src="/yahoo.jpg"
                            alt="YAHOO FINANCE"
                            width={250}
                            height={50}
                            className="w-full md:w-[250px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}