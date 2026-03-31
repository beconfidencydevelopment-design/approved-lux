import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-12 md:py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl p-8 md:p-25 text-center bg-[#FAFAFA] bg-[radial-gradient(#DFDFDF_1px,transparent_1px)] [background-size:16px_16px]">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#001F63] text-balance">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Join today or contact our team for more information.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="flex w-full max-w-xs flex-col gap-4 md:w-auto md:flex-row">
              <Link
                href="/traveler/pricing"
                // className="bg-white border border-[#001F63] text-[#001F63] font-semibold px-8 py-3 rounded-full hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition text-center"
                className="bg-[--color-custom-blue] text-center text-white font-semibold px-8 py-3 rounded-full bg-[#2563EB] transition"
              >
                Join Now
              </Link>
              <Link
                href="/contact"
                className="bg-white border border-[#001F63] text-[#001F63] font-semibold px-8 py-3 rounded-full hover:bg-[#2563EB] hover:border-[#2563EB] hover:text-white transition text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
