export default function TrustedSection() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-5 sm:py-10 font-manrope">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight">
                Trusted by thousands <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
                  of travelers worldwide
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-center">
              <div className="sm:text-left">
                <p className="text-3xl font-bold text-[#001F63]">1,100+</p>
                <p className="mt-1 text-slate-500">
                  Private jet charters fulfilled
                </p>
              </div>
              <div className="sm:text-left">
                <p className="text-3xl font-bold text-[#001F63]">5,000+</p>
                <p className="mt-1 text-slate-500">
                  Private aviation hours flown
                </p>
              </div>
              <div className="sm:text-left">
                <p className="text-3xl font-bold text-[#001F63]">1,000+</p>
                <p className="mt-1 text-slate-500">Clients serviced</p>
              </div>
              <div className="sm:text-left">
                <p className="text-3xl font-bold text-[#001F63]">3,000+</p>
                <p className="mt-1 text-slate-500">Commercial flights booked</p>
              </div>
            </div>
          </div>
          {/* bottom text */}
          <div className=" flex mt-16 text-center max-w-6xl mx-auto">
            <p className="text-base md:text-[40px] font-medium text-[#525253] leading-relaxed">
              With 30+ years of industry experience, Approved Experiences has
              left its mark on the travel industry.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
