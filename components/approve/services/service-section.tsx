import services from "../../../utils/services.json";
import ServiceItem from "./service-item";

export default function ServiceSection() {
    return (
        <section className="py-6 md:py-[70px] px-4">
            <div className="mx-auto max-w-7xl">
                <div className="mb-6 md:mb-[70px]">
                    <h2 className="text-[32px] sm:text-5xl font-semibold text-gray-900 text-balance mb-3 md:mb-5 text-center">
                        What{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3149FA] to-[#8E98FE]">
                            We Do
                        </span>
                    </h2>
                    <p className="mx-auto max-w-[780px] text-lg text-[#525253] text-center">
                        Approved Lux provides you with a real, US-based personal assistant who manages planning, coordination, and everyday logistics – from travel and scheduling to reservations and research – so you can focus on what matters.
                    </p>

                    <p className="mx-auto max-w-[880px] text-lg text-[#525253] text-center mt-5"> No long-term contracts. No hiring or management overhead. Just dependable execution 
when you need it.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
                    {services && services.map((service, key) => (
                        <ServiceItem
                            key={key}
                            item={service}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}