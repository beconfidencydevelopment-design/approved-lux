import Image from "next/image";

export default function FeaturedSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 sm:py-24 font-manrope">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight text-balance">
            As{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Featured
            </span>{" "}
            In
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-[#525253] text-pretty">
            {/* Unlock exclusive access to countless hotels, vacation homes, car
            rental locations, and <br /> flights with our travel
            membership—crafted for ultimate convenience and style. */}
            With 1,100 private jet charters, 5,000+ hours flown, 1,000+ clients
            served,
            <br />
            and 3,000+ flights booked, Approved Experiences Traveler delivers
            <br />
            unmatched expertise built on decades in luxury travel
          </p>
        </div>
        {/* bottom part */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
            <Image
              src="/haute.jpg"
              alt="HAUTE LIVING"
              width={250}
              height={50}
            />
            <Image
              src="/travel.jpg"
              alt="TRAVEL+NOIRE"
              width={250}
              height={50}
            />
            <Image
              src="/black.jpg"
              alt="BLACK ENTERPRISE"
              width={250}
              height={50}
            />
            <Image
              src="/yahoo.jpg"
              alt="YAHOO FINANCE"
              width={250}
              height={50}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
