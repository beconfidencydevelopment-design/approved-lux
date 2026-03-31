import Image from "next/image";
import { Marquee } from "../ui/marquee";
import { StarIcon } from "./icons/star";

const reviews = [
  {
    id: 1,
    name: "Theresa Webb",
    role: "Approved Member",
    image:
      "/traveler/profile1.png",
    review:
      "The team handled my complex travel plans, including lodging and excursions, perfectly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Cameron Williamson",
    role: "Approved Member",
    image:
      "/traveler/profile2.png",
    review:
      "I'm consistently impressed by their promptness and the quality of their work.",
    rating: 5,
  },
  {
    id: 3,
    name: "Dianne Russell",
    role: "Approved Member",
    image:
      "/traveler/profile3.png",
    review:
      "Thanks to them, I have more time for my family and hobbies. They truly care.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kristin Watson",
    role: "Approved Member",
    image:
      "/traveler/profile4.png",
    review:
      "It's great to have a reliable assistant who knows exactly what I need and expect.",
    rating: 5,
  },
  {
    id: 5,
    name: "Eleanor Pena",
    role: "Approved Member",
    image:
      "/traveler/profile5.png",
    review:
      "It's great to have a reliable assistant who knows exactly what I need and expect.",
    rating: 5,
  },
  {
    id: 6,
    name: "Brooklyn Simmons",
    role: "Approved Member",
    image:
      "/traveler/profile6.png",
    review:
      "I can't recommend them enough for anyone seeking to streamline their hectic schedule.",
    rating: 5,
  },
  {
    id: 7,
    name: "Courtney Henry",
    role: "Approved Member",
    image:
      "/traveler/profile7.png",
    review:
      "Incredible service! They're always on call, ready to assist with any task, big or small.",
    rating: 5,
  },
  {
    id: 8,
    name: "Ralph Edwards",
    role: "Approved Member",
    image:
      "/traveler/profile8.png",
    review:
      "I deeply appreciate their assistance. They've significantly simplified my daily routine.",
    rating: 5,
  },
  {
    id: 9,
    name: "Jenny Wilson",
    role: "Approved Member",
    image:
      "/traveler/profile9.png",
    review:
      "The team's quick responses were invaluable in setting up a detailed trip across continents.",
    rating: 5,
  },
  {
    id: 10,
    name: "Ronald Richards",
    role: "Approved Member",
    image:
      "/traveler/profile10.png",
    review:
      "For professionals juggling multiple responsibilities, their service is an absolute must.",
    rating: 5,
  },
  {
    id: 11,
    name: "Guy Hawkins",
    role: "Approved Member",
    image:
      "/traveler/profile11.png",
    review:
      "I depend on them for everything, from booking flights to managing my calendar. Life-changing!",
    rating: 5,
  },
  {
    id: 12,
    name: "Wade Warren",
    role: "Approved Member",
    image:
      "/traveler/profile12.png",
    review:
      "Their meticulous approach and dedication to client satisfaction are truly remarkable.",
    rating: 5,
  },
];

type ReviewStat = {
  value: string;
  label: string;
  leadingStar?: boolean;
};



export default function ReviewSection() {
  return (
    <section className="py-10 lg:py-20 bg-[#FAFAFA]">
      <div className="mx-auto w-full px-4 lg:px-0 grid gap-[60px]">
        <h1 className="font-semibold text-center text-[#001F63] text-[32px] leading-[40px] lg:text-[48px] lg:leading-[120%]">
          What
          <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent">
            {" "}
            Our Members
          </span>{" "}
          Say
        </h1>

        <div className="relative overflow-y-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 lg:w-40 bg-gradient-to-l from-[#FAFAFA00] from-10% via-[#FAFAFA] via-72% to-[#FAFAFA] to-100%" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 lg:w-40 bg-gradient-to-r from-[#FAFAFA00] from-10% via-[#FAFAFA] via-72% to-[#FAFAFA] to-100%" />

          <div className="">
            <Marquee className="[--duration:90s] [--gap:20px]">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-[#E9F0FF] p-5 rounded-2xl flex flex-col gap-6 max-w-[420px]"
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <StarIcon key={i} className="size-5" />
                    ))}
                  </div>

                  <p className="text-[#525253]">{r.review}</p>

                  <div className="mt-auto flex items-center gap-2">
                    <Image
                      src={r.image}
                      alt={`${r.name}-img`}
                      height={500}
                      width={500}
                      className="size-9 object-cover rounded-full"
                    />
                    <p className="text-[#525253] font-semibold text-lg">
                      {r.name}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee reverse className="[--duration:90s] [--gap:20px]">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-[#E9F0FF] p-5 rounded-2xl flex flex-col gap-6 max-w-[420px]"
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <StarIcon key={i} className="size-5" />
                    ))}
                  </div>

                  <p className="text-[#525253]">{r.review}</p>

                  <div className="mt-auto flex items-center gap-2">
                    <Image
                      src={r.image}
                      alt={`${r.name}-img`}
                      height={500}
                      width={500}
                      className="size-9 object-cover rounded-full"
                    />
                    <p className="text-[#525253] font-semibold text-lg">
                      {r.name}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
            <Marquee className="[--duration:90s] [--gap:20px]">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="bg-white border border-[#E9F0FF] p-5 rounded-2xl flex flex-col gap-6 max-w-[420px]"
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <StarIcon key={i} className="size-5" />
                    ))}
                  </div>

                  <p className="text-[#525253]">{r.review}</p>

                  <div className="mt-auto flex items-center gap-2">
                    <Image
                      src={r.image}
                      alt={`${r.name}-img`}
                      height={500}
                      width={500}
                      className="size-9 object-cover rounded-full"
                    />
                    <p className="text-[#525253] font-semibold text-lg">
                      {r.name}
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>

      </div>
    </section>
  );
}
