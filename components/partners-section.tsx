import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 text-balance">
            Partners In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
              Our Network
            </span>
          </h2>
          {/* <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500 text-pretty">
            Unlock exclusive access to countless hotels, vacation homes, car
            rental locations, and flights with our travel membership—crafted for
            ultimate convenience and style.
          </p> */}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
          {/* social media  */}
          {/* <div className="flex items-center gap-4 p-3 rounded-full border border-gray-200 bg-gray-50 w-max">
            <span className="text-gray-700 font-medium">Follow</span>
            <div className="flex items-center gap-3">
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/facebook.jpg"
                  alt="Facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Image src="/x.jpg" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600">
                <Image
                  src="/insta.jpg"
                  alt="Instagram"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div> */}
{/* parter image */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-auto">
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/hilton.jpg"
                alt="Hilton"
                width={120}
                height={48}
              />
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/ihg.jpg"
                alt="IHG Hotels & Resorts"
                width={120}
                height={48}
              />
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/world.jpg"
                alt="World of Hyatt"
                width={120}
                height={48}
              />
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/wynd.jpg"
                alt="Wyndham"
                width={120}
                height={48}
              />
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/marroitt.jpg"
                alt="Marriott"
                width={120}
                height={48}
              />
            </div>
            <div className="p-4 border border-gray-200 rounded-lg flex items-center justify-center">
              <Image
                className="h-8 w-auto"
                src="/mgm.jpg"
                alt="MGM Resorts"
                width={120}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
