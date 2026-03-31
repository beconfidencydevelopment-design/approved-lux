const VD_URL = "https://pub-0629005fcfb44f7ca99f4fbb3b9937c3.r2.dev/2327415_British_Virgin_1920x1080.mp4";

export default function HeroSection() {
  return (
    <section className="pb-[100px]">
      <div className="relative w-full pt-[300px] lg:pt-[500px] bg-cover bg-center px-4 lg:px-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={VD_URL}
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-gradient-to-b from-[#FFFFFF00] from-52% via-[#FFFFFF] via-72% to-[#FFFFFF] to-100%" />

        <div className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#A9C4FF]/10 px-4 py-2.5 text-[14px] leading-[22px] text-[#001F63] shadow-sm border border-white/50 backdrop-blur-xs">
              <span className="relative flex h-3.5 w-3.5 shrink-0" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#001F63] opacity-60" />
                <span className="relative m-auto size-2.5 rounded-full bg-[#001F63]" />
              </span>
              US-Based Personal Assistants
            </div>

            <h1 className="mt-4 text-[40px] leading-[48px] lg:text-[64px] lg:leading-[72px] font-semibold text-[#001F63]">
            The{" "}
              <span className="bg-gradient-to-r from-[#3149FA] to-[#8E98FE] bg-clip-text text-transparent pr-1">
              Travel Membership 
              </span>
              That 
Unlocks Insider Pricing
            </h1>

            <p className="mt-4 text-[18px] leading-[24px] lg:text-[20px] lg:leading-[28px] font-normal text-[#515153]">
            Access private travel rates normally reserved for industry professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
