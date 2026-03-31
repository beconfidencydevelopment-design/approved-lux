const VD_URL =
  "https://pub-0629005fcfb44f7ca99f4fbb3b9937c3.r2.dev/money-video.mp4";

export default function MoneyBackSection() {
  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden min-h-[490px] lg:min-h-[650px] rounded-2xl">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={VD_URL} type="video/mp4" />
          </video>

          {/* Subtle Overlay */}
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

          {/* Text Overlay */}
          <div className="absolute inset-0 z-10 flex items-end px-6 pb-10 sm:px-10 sm:pb-12 lg:px-16 lg:pb-16">
            <div className="w-full text-white">
              <div className="flex w-full flex-col gap-6 sm:items-end sm:justify-between sm:flex-row">
                <div>
                  <p className="text-4xl font-bold leading-none sm:text-5xl lg:text-6xl">
                    60 Days
                  </p>
                  <p className="mt-2 text-xl sm:text-5xl">
                    Money Back Guarantee
                  </p>
                </div>
                <p className="max-w-sm text-sm text-[#F4F4F4] sm:text-base">
                  If you do not feel Approved Lux is a fit in your first 60
                  days, request cancellation and we will refund the membership
                  fee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
