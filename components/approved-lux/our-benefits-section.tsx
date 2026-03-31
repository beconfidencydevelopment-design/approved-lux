export default function OurBenefitsSection() {
  return (
    <section className="py-10 lg:py-20 bg-white">
      <div className="relative min-h-[320px] overflow-hidden border border-[#E9F0FF] bg-[url(/approved-lux/our-benefits/bg.png)] bg-cover bg-center lg:min-h-[440px]">
        <div className="absolute inset-0 bg-gradient-to-l from-white/10 via-white/0 to-white/0" />

        <div className="relative max-w-7xl mx-auto px-4 pb-5 pt-[120px] lg:pt-7">
          <div className="flex w-full justify-end">
            <div className="w-full max-w-[520px] rounded-[24px] border border-white/60 bg-white/35 p-6 text-[#001F63] shadow-[0_20px_60px_-30px_rgba(10,70,216,0.6)] backdrop-blur-md lg:p-10">
              <h2 className="text-[30px] leading-[38px] font-semibold lg:text-[48px] lg:leading-[120%]">
                Our Benefit&apos;s
              </h2>

              <div className="mt-6 flex flex-col gap-6 text-[#001F63]">
                <div>
                  <h3 className="text-lg font-semibold lg:text-xl">
                    Travel Co-Ordination
                  </h3>
                  <p className="mt-1 text-sm text-[#525253] lg:text-base">
                    We plan, book, and manage every detail of your travel.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold lg:text-xl">
                    Access to exclusive experiences
                  </h3>
                  <p className="mt-1 text-sm text-[#525253] lg:text-base">
                    Get access to places and events most people cannot book.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold lg:text-xl">
                    The Dreaded To-Dos
                  </h3>
                  <p className="mt-1 text-sm text-[#525253] lg:text-base">
                    Offload life admin and reclaim hours every week.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
