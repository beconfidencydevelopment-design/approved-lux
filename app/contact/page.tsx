import Image from "next/image";
import Header from "@/components/header";
import ContactForm from "@/components/contact/contact-form";
import Footer from "@/components/footer";


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]">
      <Header />

      <main className="mx-auto w-full max-w-screen-xl px-4 pb-12">

        <section className="mt-8 rounded-2xl bg-[#ffffff] p-4 sm:p-6 lg:p-8">
          <div className="grid gap-5 lg:grid-cols-[1.25fr_0.8fr] lg:items-center">
            <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F7F7] p-4 sm:p-6">
              <ContactForm />
            </div>

            <aside className="rounded-2xl p-5 sm:p-6">
              <h2 className="text-[34px] leading-[42px] font-medium text-[#0E0E0F]">
                Let&apos;s Plan Your Next Trip Effortlessly
              </h2>
              <p className="mt-4 text-lg text-[#525253]">
                Tell us what you need - from flights to exclusive experiences - and
                your personal concierge will handle every detail.
              </p>

              <ul className="mt-6 space-y-3 text-[#525253]">
                <li className="flex items-start gap-2">
                  <span className="text-[#6B7280]">✓</span>
                  <span>Personalized travel planning tailored to your preferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B7280]">✓</span>
                  <span>Access to better rates and exclusive experiences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#6B7280]">✓</span>
                  <span>One point of contact managing everything for you</span>
                </li>
              </ul>

            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
