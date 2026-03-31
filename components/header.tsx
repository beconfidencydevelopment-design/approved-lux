// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { logout } from "@/redux/slices/authSlice";

// export default function Header() {
//   const dispatch = useDispatch();
//   const token = useSelector((state: any) => state.auth.token);
//   const pathname = usePathname();

//   // Ensure we only render after client mount
//   const [mounted, setMounted] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   const handleLogout = () => {
//     dispatch(logout());
//   };

//   const navLinks = [
//     { href: "/", label: "Traveler 2.0" },
//     { href: "#", label: "Concierge" },
//     { href: "#", label: "Company" },
//     { href: "#", label: "Blog" },
//     { href: "#", label: "FAQ's" },
//     // { href: "/pricing", label: "Pricing" },
//   ];

//   return (
//     <header className="left-0 w-full bg-white py-4 z-50">
//       <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
//         <nav className="flex items-center justify-between">
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/approved-experiences-logo-red.jpg"
//               alt="Approved Experiences Logo"
//               width={160}
//               height={40}
//               className="h-8 md:h-10 w-auto"
//             />
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="md:hidden bg-[#001F63] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900"
//             aria-label="Toggle mobile menu"
//           >
//             <div className="flex flex-col h-3 justify-center items-center">
//               {mobileMenuOpen ? (
//                 <>
//                   <span className="block w-4 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
//                   <span className="block w-4 h-0.5 bg-white opacity-0"></span>
//                   <span className="block w-4 h-0.5 bg-white transform -rotate-45 -translate-y-0.5"></span>
//                 </>
//               ) : (
//                 <>
//                   <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
//                   <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
//                   <span className="block w-4 h-0.5 bg-white"></span>
//                 </>
//               )}
//             </div>
//             <span className="text-sm font-medium">Menu</span>
//           </button>

//           {/* Navigation Links */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-medium rounded-full px-4 py-2 ${
//                   pathname === link.href || (link.href === "/" && pathname === "/")
//                     ? "bg-[#F7FAFF] text-[#2563EB]"
//                     : "text-[#525253] hover:bg-[#F7FAFF] hover:text-[#2563EB]"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="hidden md:flex items-center space-x-4">
//             {mounted && !token && (
//               <Link href="/login" className="text-sm font-medium text-[#001F63] hover:bg-[#F7FAFF] hover:text-[#2563EB] rounded-full px-4 py-2">
//                 Log In
//               </Link>
//             )}
//             {mounted && token && (
//               <button
//                 onClick={handleLogout}
//                 className="text-sm font-medium text-[#001F63] hover:text-gray-700"
//               >
//                 Logout
//               </button>
//             )}
//             <Link href="#" className="text-sm font-medium text-white bg-[#001F63] rounded-full px-5 py-2.5 hover:bg-gray-900 shadow">
//               Contact Us
//             </Link>
//           </div>
//         </nav>

//         {/* Mobile Navigation Drawer */}
//         {mobileMenuOpen && (
//           <>
//             <div
//               className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//               onClick={() => setMobileMenuOpen(false)}
//             ></div>
//             <div className={`fixed inset-0 bg-white transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden`}>
//               <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//                 <div className="flex items-center justify-between">
//                   <Link href="/" className="flex items-center">
//                     <Image
//                       src="/approved-experiences-logo-red.jpg"
//                       alt="Approved Experiences Logo"
//                       width={160}
//                       height={40}
//                       className="h-8 md:h-10 w-auto"
//                     />
//                   </Link>
//                   <button
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="md:hidden bg-[#001F63] text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-gray-900"
//                     aria-label="Close menu"
//                   >
//                     <div className="flex flex-col h-3 justify-center items-center">
//                       <span className="block w-4 h-0.5 bg-current transform rotate-45 translate-y-0.5"></span>
//                       <span className="block w-4 h-0.5 bg-current opacity-0"></span>
//                       <span className="block w-4 h-0.5 bg-current transform -rotate-45 -translate-y-0.5"></span>
//                     </div>
//                     <span className="text-sm font-medium">Back</span>
//                   </button>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="space-y-4">
//                   <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#2563EB] bg-[#F7FAFF] rounded-full px-4 py-2 text-center">
//                     Traveler
//                   </Link>
//                   <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Concierge</Link>
//                   <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Company</Link>
//                   <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Blog</Link>
//                   <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">{"FAQ's"}</Link>
//                   <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center">Log In</Link>
//                    {/* <Link href="/login" className="text-sm font-medium text-[#001F63] hover:bg-[#F7FAFF] hover:text-[#2563EB] rounded-full px-4 py-2">
//                 Log In
//               </Link> */}
//                 </div>
//                 <div className="border-t border-gray-200 pt-4 mt-6 space-y-4">
//                   <Link href="https://www.approvedexperiences.com/contact" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-medium text-white bg-[#001F63] rounded-full px-4 py-2 text-center hover:bg-gray-900 shadow">
//                     Contact Us
//                   </Link>
//                 </div>

//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { logout } from "@/redux/slices/authSlice";
// import HolidayOfferBanner from "./holiday-banner";
import DownArrow from "./approve/icons/down-arrow";

export default function Header() {
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.auth.token);
  const pathname = usePathname();

  // Ensure we only render after client mount
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openParent, setOpenParent] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

  const navLinks = [
    { href: "/traveler-v2", label: "Traveler 2.0" },
    { 
      href: "/approved-lux", 
      label: "Approved Lux Personal Assistant"
    },
    { 
      href: "#", 
      label: "Pricing",
      child: true,
      childItems: [
        {
          href: "/traveler/pricing",
          label: "Traveler 2.0 Pricing"
        },
        {
          href: "/approvedlux/pricing",
          label: "Lux Personal Assistant Pricing"
        }
      ]
    },
    { href: "/blog", label: "Blog" },
    {
      href: "https://studies.approvedexperiences.com/",
      label: "Case Studies",
    },
    { 
      href: "#", 
      label: "FAQs",
      child: true,
      childItems: [
        {
          href: "/traveler/pricing?faq",
          label: "Traveler FAQs"
        },
        {
          href: "/approvedlux/pricing?faq",
          label: "Lux Concierge FAQs"
        }
      ]
    }
  ];

  return (
    <>
      {/* <HolidayOfferBanner /> */}
      <header className="left-0 w-full bg-white z-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/ApprovedOriginal.png"
                alt="Approved Experiences Logo"
                width={173}
                height={80}
                // className="h-8 w-auto"
              />
            </Link>

            {/* Mobile Menu Toggle - Show only below 940px */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="max-lg:flex lg:hidden bg-[#001F63] text-white px-4 py-2 rounded-full items-center space-x-2 hover:bg-gray-900 hidden"
              aria-label="Toggle mobile menu"
            >
              <div className="flex flex-col h-3 justify-center items-center">
                {mobileMenuOpen ? (
                  <>
                    <span className="block w-4 h-0.5 bg-white transform rotate-45 translate-y-0.5"></span>
                    <span className="block w-4 h-0.5 bg-white opacity-0"></span>
                    <span className="block w-4 h-0.5 bg-white transform -rotate-45 -translate-y-0.5"></span>
                  </>
                ) : (
                  <>
                    <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
                    <span className="block w-4 h-0.5 bg-white mb-0.5"></span>
                    <span className="block w-4 h-0.5 bg-white"></span>
                  </>
                )}
              </div>
              <span className="text-sm font-medium">Menu</span>
            </button>

            {/* Navigation Links - Show only above 940px */}
            <div className="max-lg:hidden lg:flex items-center space-x-5">
              {/* {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium rounded-full px-4 py-2 ${
                    pathname === link.href || (link.href === "/" && pathname === "/")
                      ? "bg-[#F7FAFF] text-[#2563EB]"
                      : "text-[#525253] hover:bg-[#F7FAFF] hover:text-[#2563EB]"
                  }`}
                >
                  {link.label}
                </Link>
              ))} */}
              {navLinks.map((link, index) =>
                link.label ? (
                  <div className={`${link.child && 'relative group'}`} key={index}>
                    <Link
                      href={link.href}
                      className={`text-sm font-medium rounded-full px-4 py-2 flex items-center gap-1 ${
                        pathname === link.href ||
                        (link.href === "/" && pathname === "/")
                          ? "bg-[#F7FAFF] text-[#2563EB]"
                          : "text-[#525253] hover:bg-[#F7FAFF] hover:text-[#2563EB]"
                      }`}
                    >
                      {link.label}

                      {link.child && (
                        <span>
                          <DownArrow/>
                        </span>
                      )}
                    </Link>
                    {link.child && (
                      <div className="absolute right-0 w-[212px] bg-white rounded-2xl border border-[#2563EB] pt-2 px-3 pb-3 flex flex-col gap-1 translate-y-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                        <span className="relative rotate-180">
                          <DownArrow/>
                        </span>
                        {link.childItems?.map((child, key) => (
                          <Link
                            key={key}
                            href={child.href}
                            className="text-base leading-6 text-[#525253] py-2 px-3 hover:bg-[#F7FAFF] hover:text-[#2563EB] rounded-[50px]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={link.href} className="px-4 py-2" />
                )
              )}
            </div>

            {/* Action Buttons - Show only above 940px */}
            <div className="max-lg:hidden lg:flex items-center space-x-4">
              {mounted && !token && (
                <Link
                  href="/traveler/login"
                  className="text-sm font-medium text-[#001F63] hover:bg-[#F7FAFF] hover:text-[#2563EB] rounded-full px-4 py-2"
                >
                  Log In
                </Link>
              )}
              {mounted && token && (
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium text-[#001F63] hover:text-gray-700"
                >
                  Logout
                </button>
              )}
              <Link href="/contact" className="text-sm font-medium text-white bg-[#001F63] rounded-full px-5 py-2.5 hover:bg-gray-900 shadow">
                Contact Us
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation Drawer - Show only below 940px */}
          {mobileMenuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 max-lg:block lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              ></div>
              <div
                className={`fixed inset-0 bg-white transform ${
                  mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-50 max-lg:block lg:hidden`}
              >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex items-center justify-between">
                    <Link href="/traveler" className="flex items-center">
                      <Image
                        src="/ApprovedOriginal.png"
                        alt="Approved Experiences Logo"
                        width={173}
                        height={80}
                        // className="h-8 w-auto"
                      />
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="max-lg:flex lg:hidden bg-[#001F63] text-white px-4 py-2 rounded-full items-center space-x-2 hover:bg-gray-900"
                      aria-label="Close menu"
                    >
                      <div className="flex flex-col h-3 justify-center items-center">
                        <span className="block w-4 h-0.5 bg-current transform rotate-45 translate-y-0.5"></span>
                        <span className="block w-4 h-0.5 bg-current opacity-0"></span>
                        <span className="block w-4 h-0.5 bg-current transform -rotate-45 -translate-y-0.5"></span>
                      </div>
                      <span className="text-sm font-medium">Back</span>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {/* {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block text-sm font-medium rounded-full px-4 py-2 text-center ${
                          pathname === link.href || (link.href === "/" && pathname === "/")
                            ? "bg-[#F7FAFF] text-[#2563EB]"
                            : "text-[#525253] hover:text-gray-700"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))} */}
                    {navLinks.map(
                      (link, index) =>
                        link.label && (
                          <div key={index}>
                            <Link
                              href={link.href}
                              onClick={(e) => {
                                if (link.child) {
                                  e.preventDefault();
                                  setOpenParent(openParent === index ? null : index);
                                } else {
                                  setMobileMenuOpen(false);
                                }
                              }}
                              className={`flex items-center justify-center gap-1 block text-sm font-medium rounded-full px-4 py-2 text-center ${
                                pathname === link.href ||
                                (link.href === "/" && pathname === "/")
                                  ? "bg-[#F7FAFF] text-[#2563EB]"
                                  : "text-[#525253] hover:text-gray-700"
                              }`}
                            >
                              {link.label}

                              {link.child && (
                                <span>
                                  <DownArrow/>
                                </span>
                              )}
                            </Link>

                            {link.child && openParent === index && (
                              <div className="p-2 flex flex-col items-center">
                                {link.childItems?.map((child, key) => (
                                  <Link
                                    key={key}
                                    href={child.href}
                                    className="text-sm font-medium leading-6 text-[#525253] hover:text-gray-700 font-medium py-2 px-3"
                                    onClick={() => setMobileMenuOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                    )}

                    {mounted && !token && (
                      <div>
                        <Link
                          href="/traveler/login"
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm font-medium text-[#525253] hover:text-gray-700 text-center"
                        >
                          Log In
                        </Link>
                      </div>
                    )}
                    {mounted && token && (
                      <button
                        onClick={() => {
                          handleLogout();
                          setMobileMenuOpen(false);
                        }}
                        className="block w-full text-sm font-medium text-[#525253] hover:text-gray-700 text-center"
                      >
                        Logout
                      </button>
                    )}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-6 space-y-4">
                    <Link
                      href="/contact"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-medium text-white bg-[#001F63] rounded-full px-4 py-2 text-center hover:bg-gray-900 shadow"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}
