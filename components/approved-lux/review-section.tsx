import Image from "next/image";
import { Marquee } from "../ui/marquee";
import { StarIcon } from "./icons/star";

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Director of Operations",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    review:
      "Their attention to detail and proactive communication made the entire project seamless. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Tech Lead at Innovate",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    review:
      "The technical expertise this team brings to the table is unmatched. They solved problems we didn't even know we had.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, GreenSpace",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150",
    review:
      "Efficient, creative, and extremely reliable. They turned our vision into reality in record time.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    review:
      "I've worked with many agencies, but none have the 'get it done' attitude that this team possesses.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jessica Blair",
    role: "Marketing Head",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
    review:
      "They delivered the project ahead of schedule and the quality was beyond what we expected.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Wilson",
    role: "CEO, CloudNine",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    review:
      "Truly the most reliable and efficient team I've ever worked with. They are our go-to partners.",
    rating: 5,
  },
  {
    id: 7,
    name: "Aisha Khan",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150",
    review:
      "The design aesthetics and functional implementation were perfectly balanced. A rare find in the industry.",
    rating: 4,
  },
  {
    id: 8,
    name: "Michael Scott",
    role: "Regional Manager",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150",
    review:
      "Professionalism at its finest. They kept us in the loop through every stage of development.",
    rating: 5,
  },
  {
    id: 9,
    name: "Linda Wu",
    role: "E-commerce Expert",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150",
    review:
      "Our sales increased by 40% after implementing the features they suggested. Incredible ROI.",
    rating: 5,
  },
  {
    id: 10,
    name: "James Miller",
    role: "Startup Mentor",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150",
    review:
      "They don't just build; they think along with you to ensure the product is market-ready.",
    rating: 5,
  },
  {
    id: 11,
    name: "Sophie Laurent",
    role: "UX Researcher",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=150&h=150",
    review:
      "Their user-centric approach made our platform much more intuitive and user-friendly.",
    rating: 5,
  },
  {
    id: 12,
    name: "Tom Harris",
    role: "IT Consultant",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&h=150",
    review:
      "A solid team that understands complex requirements and delivers without any fuss.",
    rating: 4,
  },
  {
    id: 13,
    name: "Priya Sharma",
    role: "Project Coordinator",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150",
    review:
      "The level of organization this team maintains is impressive. It makes my job so much easier.",
    rating: 5,
  },
  {
    id: 14,
    name: "Kevin Hartly",
    role: "App Developer",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&h=150",
    review:
      "Code quality is excellent. They followed all best practices and the documentation was clear.",
    rating: 5,
  },
  {
    id: 15,
    name: "Rachel Green",
    role: "Fashion Consultant",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&h=150",
    review:
      "Style and substance—they provided both. My website looks stunning and works perfectly.",
    rating: 5,
  },
  {
    id: 16,
    name: "Daniel Lee",
    role: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=150&h=150",
    review:
      "Their ability to handle large-scale data integration was vital for our recent success.",
    rating: 5,
  },
  {
    id: 17,
    name: "Emma Watson",
    role: "Branding Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
    review:
      "A beautiful implementation of our brand guidelines. Every pixel was in the right place.",
    rating: 4,
  },
  {
    id: 18,
    name: "Chris Pratt",
    role: "Venture Capitalist",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=150&h=150",
    review:
      "I've seen many pitches, but this team actually delivers on the promises they make.",
    rating: 5,
  },
  {
    id: 19,
    name: "Natalie Portman",
    role: "Content Manager",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
    review:
      "The management system they built for us saved our team over 20 hours a week.",
    rating: 5,
  },
  {
    id: 20,
    name: "John Wick",
    role: "Security Analyst",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=150&h=150",
    review:
      "Focus, commitment, and sheer will. They did exactly what they said they would do.",
    rating: 5,
  },
];

type ReviewStat = {
  value: string;
  label: string;
  leadingStar?: boolean;
};

const stats: ReviewStat[] = [
  {
    value: "4.9/5",
    label: "From 5000+ Members",
    leadingStar: true,
  },
  {
    value: "12k+",
    label: "Tasks Completed this month",
  },
  {
    value: "500+",
    label: "Members Already Joined",
  },
];

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

        <div className="grid grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="min-w-0 px-2 py-6 lg:px-4">
              <div className="flex items-center justify-center gap-1 sm:gap-1.5 lg:gap-2 text-[18px] leading-[24px] sm:text-[24px] sm:leading-[32px] lg:text-[64px] lg:leading-[72px] font-semibold text-[#001F63]">
                {stat.leadingStar ? (
                  <span className="inline-flex shrink-0" aria-hidden>
                    <StarIcon className="size-5 sm:size-6 lg:size-14" />
                  </span>
                ) : null}
                <span className="text-center">{stat.value}</span>
              </div>
              <p className="mt-2 text-[11px] leading-[16px] sm:text-[14px] sm:leading-[20px] text-[#515153] text-center">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
