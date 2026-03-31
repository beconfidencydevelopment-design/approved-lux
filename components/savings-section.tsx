"use client";
import Image from "next/image";
import { useState } from "react";

const deals = {
  Mexico: [
    {
      id: 1,
      image: "/luxurious-hotel-room-ocean-view-beds.jpg",
      alt: "Luxurious hotel room with two beds and a view of the ocean",
      title: "Banyan Tree Mayakoba",
      location: "Playa del Carmen, Quintana Roo",
      travelerPrice: 5308,
      competitorPrice: 10963,
      savings: 5655,
      competitors: [
        { name: "Expedia", price: 10963 },
        { name: "Hotels.com", price: 10963 },
        { name: "Travelocity", price: 10963 },
      ],
    },
    {
      id: 2,
      image: "/hotel-room-floral-bedding-balcony-view.jpg",
      alt: "Hotel room with floral bedding and a balcony view",
      title: "The Pyramid at Grand Oasis - All Inclusive",
      location: "Cancun, Quintana Roo",
      travelerPrice: 1697,
      competitorPrice: 3308,
      savings: 1611,
      competitors: [
        { name: "Expedia", price: 3308 },
        { name: "Hotels.com", price: 3308 },
        { name: "Travelocity", price: 3308 },
      ],
    },
  ],
  Miami: [
    {
      id: 1,
      image: "/luxury-resort-swimming-pool-palm-trees.jpg",
      alt: "Luxury resort with a swimming pool and palm trees",
      title: "Fontainebleau Miami Beach",
      location: "Miami Beach, Florida",
      travelerPrice: 3200,
      competitorPrice: 5500,
      savings: 2300,
      competitors: [
        { name: "Booking.com", price: 5500 },
        { name: "Expedia", price: 5500 },
        { name: "Hotels.com", price: 5500 },
      ],
    },
    {
      id: 2,
      image: "/modern-luxury-vacation-home.jpg",
      alt: "Modern luxury vacation home",
      title: "The Setai, Miami Beach",
      location: "Miami Beach, Florida",
      travelerPrice: 4500,
      competitorPrice: 7800,
      savings: 3300,
      competitors: [
        { name: "Booking.com", price: 7800 },
        { name: "Expedia", price: 7800 },
        { name: "Travelocity", price: 7800 },
      ],
    },
  ],
};

export default function SavingsSection() {
  const [activeTab, setActiveTab] = useState<"Mexico" | "Miami">("Mexico");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="py-16 sm:py-24 font-manrope">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight text-balance">
            See The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Savings
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            One week in {activeTab} for two adults.
          </p>
        </div>
        <div className="mt-8 flex sm:justify-start items-center gap-2">
          <button
            onClick={() => setActiveTab("Mexico")}
            className={`flex-1 sm:flex-none px-6 py-2 text-sm font-semibold rounded-[10px] ${
              activeTab === "Mexico"
                ? "text-[#2563EB] bg-[#E9F0FF]"
                : "text-black hover:bg-slate-100"
            }`}
          >
            Mexico
          </button>
          <button
            onClick={() => setActiveTab("Miami")}
            className={`flex-1 sm:flex-none px-6 py-2 text-sm font-semibold rounded-[10px] ${
              activeTab === "Miami"
                ? "text-[#2563EB] bg-[#E9F0FF]"
                : "text-black hover:bg-slate-100"
            }`}
          >
            Miami
          </button>
        </div>

        <div className="mt-12 space-y-8">
          {deals[activeTab].map((deal) => (
            <div
              key={deal.id}
              className="bg-[#F7FAFF] rounded-3xl px-2 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <Image
                className="w-full h-90 object-cover rounded-2xl"
                src={deal.image}
                alt={deal.alt}
                width={600}
                height={320}
              />
              <div className="p-2 sm:p-4">
                <h3 className="text-2xl font-bold text-slate-900">
                  {deal.title}
                </h3>
                <p className="mt-1 text-slate-500">{deal.location}</p>

                <div className="mt-6 space-y-4 text-slate-600">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-bold text-[#0E0E0F]">Traveler</span>
                    <span className="font-bold text-[#0E0E0F]">
                      ${deal.travelerPrice.toLocaleString()}
                    </span>
                  </div>
                  {deal.competitors.map((competitor) => (
                    <div
                      key={competitor.name}
                      className="flex justify-between items-center"
                    >
                      <span>{competitor.name}</span>
                      <span>${competitor.price.toLocaleString()}</span>
                    </div>
                  ))}
                </div>

                <hr className="my-6 border-[#F7FAFF]" />
                {/* bottom part */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-sm text-[#0E0E0F]">Total Price</p>
                    <p className="text-2xl font-bold text-[#001F63]">
                      ${deal.travelerPrice.toLocaleString()}{" "}
                      <span className="text-lg font-normal text-[#001F63] line-through">
                        ${deal.competitorPrice.toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="w-full sm:w-auto bg-[#E9F0FF] text-[#001F63] text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap text-center">
                    Savings with Traveler
                    <span className="font-bold">
                     {" "} ${deal.savings.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
