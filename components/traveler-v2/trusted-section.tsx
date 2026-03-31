import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Marquee } from "../ui/marquee";

export default function TrustedSection() {
  const trusted = [
    {
      icon: "/approved-lux/trusted-by/netflix.svg",
    },
    {
      icon: "/approved-lux/trusted-by/adidas.svg",
    },
    {
      icon: "/approved-lux/trusted-by/yeezy.svg",
    },
    {
      icon: "/approved-lux/trusted-by/louis.png",
    },
    {
      icon: "/approved-lux/trusted-by/nksfb.svg",
    },
    {
      icon: "/approved-lux/trusted-by/epic.svg",
    },
    {
      icon: "/approved-lux/trusted-by/a16z.svg",
    },
    {
      icon: "/approved-lux/trusted-by/rock-nation.png",
    },
    {
      icon: "/approved-lux/trusted-by/andreessen.png",
    },
  ];

  return (
    <section className="pt-[24px] lg:pt-[60px] pb-[24px] lg:pb-[100px] grid gap-[24px] lg:gap-[70px]">
      <h3 className="text-[#001F63] text-[24px] leading-[32px] lg:text-[40px] lg:leading-[48px] text-center font-medium">
        Trusted By
      </h3>

      {/* marquee */}
      <div className="relative overflow-y-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 lg:w-40 bg-gradient-to-r from-white to-white/5" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 lg:w-40 bg-gradient-to-l from-white to-white/5" />
        <Marquee className="[--duration:20s] [--gap:55px]">
          {trusted.map((item) => (
            <Image
              key={item.icon}
              src={item.icon}
              alt={`${item.icon}-alt`}
              height={300}
              width={700}
              className="h-10 w-auto max-w-none shrink-0 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
