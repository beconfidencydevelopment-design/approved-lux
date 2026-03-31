// // import { Check } from "lucide-react";
// // import Image from "next/image";
// // import Link from "next/link";

// // // Reusable component for the notification
// // const JamesJustJoined = ({ className }: { className?: string }) => (
// //   <div
// //     className={`bg-transparent backdrop-blur-lg px-2 rounded-2xl  w-max border border-white/20 ${className}`}
// //   >
// //     <div className="flex items-center gap-2">
// //       <p className="font-semibold text-white text-sm">James just joined!</p>
// //       <div className="bg-green-500 rounded-full p-0.5">
// //         <Check className="w-3 h-3 text-white" />
// //       </div>
// //     </div>
// //     <p className="text-white/80 text-xs mt-1">New York, NY</p>
// //   </div>
// // );

// // export default function HeroSection() {
// //   return (
// //     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
// //       {/* Background Image */}
// //       <div className="absolute inset-0 rounded-3xl m-4">
// //         <Image
// //           src="/background-image.png"
// //           alt="Tropical beach resort paradise"
// //           fill
// //           priority
// //           className="object-cover rounded-3xl hero-bg"
// //         />
// //         <div className="absolute inset-0 rounded-3xl"/>
// //       </div>

// //       {/* Become a member button */}
// //       <Link
// //         href="/register"
// //         className="fixed flex items-center justify-center z-30 right-6 top-1/2 -translate-y-1/2 bg-blue-600 text-white font-semibold py-4 px-3 rounded-full hover:bg-blue-700  transition-transform transform hover:scale-105"
// //       >
// //         <span className="[writing-mode:vertical-rl] rotate-180">
// //           Become A Member
// //         </span>
// //       </Link>

// //       {/* Hero Content */}
// //       <div className="relative z-10 text-center text-white px-4">
// //         {/* User Avatars */}
// //         <div className="flex items-center justify-center mb-6">
// //           <div className="flex -space-x-3">
// //             <Image
// //               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
// //               src="/CustomerTestimonialPhotos-3.png"
// //               alt="User 1"
// //               width={40}
// //               height={40}
// //             />
// //             <Image
// //               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
// //               src="/CustomerTestimonialPhotos-2.png"
// //               alt="User 2"
// //               width={40}
// //               height={40}
// //             />
// //             <Image
// //               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
// //               src="/CustomerTestimonialPhotos.png"
// //               alt="User 3"
// //               width={40}
// //               height={40}
// //             />
// //           </div>
// //           <p className="ml-4 font-semibold">12K+ Users</p>
// //         </div>

// //         {/* Hero Text */}
// //         <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bold leading-tight">
// //           Save Up To 70% On <br />
// //           Every Trip - Guaranteed
// //         </h1>
// //         <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90">
// //           Join thousands of travelers who get up to 70% off luxury hotels,
// //           resorts, cruises & more. Our members save up to $1,000+ per trip with
// //           Approved Experiences Traveler.
// //         </p>
// //       </div>

// //       {/* Bottom Actions */}
// //       <div className="absolute bottom-16 w-full z-20">
// //         {/* Mobile view */}
// //         <div className="md:hidden flex flex-col gap-4 mx-6">
// //           <JamesJustJoined className="self-end" />
// //           <Link
// //             href="/#how-it-works"
// //             className="text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700  transition-transform transform hover:scale-105"
// //           >
// //             How It Works
// //           </Link>
// //           <Link
// //             href="/pricing"
// //             className="w-full text-center bg-transparent backdrop-blur-lg backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20  transition-transform transform hover:scale-105 border border-white/20"
// //           >
// //             Explore Pricing
// //           </Link>
// //         </div>

// //         {/* Desktop view */}
// //         <div className="hidden md:flex items-center px-4">
// //           <div className="flex-1" />
// //           <div className="flex items-center justify-center gap-4">
// //             <Link
// //               href="/#how-it-works"
// //               className="text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700  transition-transform transform hover:scale-105"
// //             >
// //               How It Works
// //             </Link>
// //             <Link
// //               href="/pricing"
// //               className="bg-transparent backdrop-blur-lg text-center  backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20  transition-transform transform hover:scale-105 border border-white/20"
// //             >
// //               Explore Pricing
// //             </Link>
// //           </div>
// //           <div className="flex-1 flex justify-end mr-2">
// //             <JamesJustJoined />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import { Check } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// // Arrays of names (you can move these to a separate file if needed)
// const firstnames = [
//   "James",
//   "John",
//   "Robert",
//   "Michael",
//   "William",
//   "David",
//   "Richard",
//   "Joseph",
//   "Thomas",
//   "Charles",
//   "Christopher",
//   "Daniel",
//   "Matthew",
//   "Anthony",
//   "Donald",
//   "Mark",
//   "Paul",
//   "Steven",
//   "Andrew",
//   "Kenneth",
//   "Joshua",
//   "Kevin",
//   "Brian",
//   "George",
//   "Edward",
//   "Ronald",
//   "Timothy",
//   "Jason",
//   "Jeffrey",
//   "Ryan",
//   "Jacob",
//   "Gary",
//   "Nicholas",
//   "Eric",
//   "Jonathan",
//   "Stephen",
//   "Larry",
//   "Justin",
//   "Scott",
//   "Brandon",
//   "Benjamin",
//   "Samuel",
//   "Gregory",
//   "Alexander",
//   "Patrick",
//   "Frank",
//   "Raymond",
//   "Jack",
//   "Dennis",
//   "Mary",
//   "Patricia",
//   "Jennifer",
//   "Linda",
//   "Elizabeth",
//   "Barbara",
//   "Susan",
//   "Jessica",
//   "Sarah",
//   "Karen",
//   "Nancy",
//   "Margaret",
//   "Lisa",
//   "Betty",
//   "Dorothy",
//   "Sandra",
//   "Ashley",
//   "Kimberly",
//   "Donna",
//   "Emily",
//   "Michelle",
//   "Carol",
//   "Amanda",
//   "Melissa",
//   "Deborah",
//   "Stephanie",
//   "Rebecca",
//   "Laura",
//   "Sharon",
//   "Cynthia",
//   "Kathleen",
//   "Amy",
//   "Shirley",
//   "Angela",
//   "Helen",
//   "Anna",
//   "Brenda",
//   "Pamela",
//   "Nicole",
//   "Samantha",
//   "Katherine",
//   "Emma",
//   "Ruth",
//   "Christine",
//   "Catherine",
//   "Debra",
//   "Rachel",
//   "Carolyn",
//   "Janet",
//   "Maria",
// ];

// const lastnames = [
//   "Smith",
//   "Johnson",
//   "Williams",
//   "Brown",
//   "Jones",
//   "Garcia",
//   "Miller",
//   "Davis",
//   "Rodriguez",
//   "Martinez",
//   "Hernandez",
//   "Lopez",
//   "Gonzalez",
//   "Wilson",
//   "Anderson",
//   "Thomas",
//   "Taylor",
//   "Moore",
//   "Jackson",
//   "Martin",
//   "Lee",
//   "Perez",
//   "Thompson",
//   "White",
//   "Harris",
//   "Sanchez",
//   "Clark",
//   "Ramirez",
//   "Lewis",
//   "Robinson",
//   "Walker",
//   "Young",
//   "Allen",
//   "King",
//   "Wright",
//   "Scott",
//   "Torres",
//   "Nguyen",
//   "Hill",
//   "Flores",
//   "Green",
//   "AdAMS",
//   "Nelson",
//   "Baker",
//   "Hall",
//   "Rivera",
//   "Campbell",
//   "Mitchell",
//   "Carter",
//   "Roberts",
//   "Gomez",
//   "Phillips",
//   "Evans",
//   "Turner",
//   "Diaz",
//   "Parker",
//   "Cruz",
//   "Edwards",
//   "Collins",
//   "Reyes",
//   "Stewart",
//   "Morris",
//   "Morales",
//   "Murphy",
//   "Cook",
//   "Rogers",
//   "Gutierrez",
//   "Ortiz",
//   "Morgan",
//   "Cooper",
//   "Peterson",
//   "Bailey",
//   "Reed",
//   "Kelly",
//   "Howard",
//   "Ramos",
//   "Kim",
//   "Cox",
//   "Ward",
//   "Richardson",
//   "Watson",
//   "Brooks",
//   "Chavez",
//   "Wood",
//   "James",
//   "Bennett",
//   "Gray",
//   "Mendoza",
//   "Ruiz",
//   "Hughes",
//   "Price",
//   "Alvarez",
//   "Castillo",
//   "Sanders",
//   "Patel",
//   "Myers",
//   "Long",
//   "Ross",
//   "Foster",
//   "Jimenez",
// ];

// // Array of cities for location
// const cities = [
//   "New York, NY",
//   "Los Angeles, CA",
//   "Chicago, IL",
//   "Houston, TX",
//   "Phoenix, AZ",
//   "Philadelphia, PA",
//   "San Antonio, TX",
//   "San Diego, CA",
//   "Dallas, TX",
//   "San Jose, CA",
//   "Austin, TX",
//   "Jacksonville, FL",
//   "Fort Worth, TX",
//   "Columbus, OH",
//   "Charlotte, NC",
//   "San Francisco, CA",
//   "Indianapolis, IN",
//   "Seattle, WA",
//   "Denver, CO",
//   "Washington, DC",
//   "Boston, MA",
//   "El Paso, TX",
//   "Nashville, TN",
//   "Detroit, MI",
//   "Oklahoma City, OK",
//   "Portland, OR",
//   "Las Vegas, NV",
//   "Memphis, TN",
//   "Louisville, KY",
//   "Baltimore, MD",
//   "Milwaukee, WI",
//   "Albuquerque, NM",
//   "Tucson, AZ",
//   "Fresno, CA",
//   "Sacramento, CA",
//   "Mesa, AZ",
//   "Kansas City, MO",
//   "Atlanta, GA",
//   "Long Beach, CA",
//   "Colorado Springs, CO",
// ];

// // Function to generate a random name and location
// function generateRandomUser() {
//   const randomFirstName =
//     firstnames[Math.floor(Math.random() * firstnames.length)];
//   const randomLastName =
//     lastnames[Math.floor(Math.random() * lastnames.length)];
//   const randomCity = cities[Math.floor(Math.random() * cities.length)];

//   return {
//     firstName: randomFirstName,
//     lastName: randomLastName,
//     fullName: `${randomFirstName} ${randomLastName}`,
//     location: randomCity,
//   };
// }

// // Reusable component for the notification
// // const UserJustJoined = ({
// //   className,
// //   name,
// //   location,
// // }: {
// //   className?: string;
// //   name: string;
// //   location: string;
// // }) => (
// //   <div
// //     className={`bg-[#02143a33] px-4 py-2 rounded-2xl w-max border border-white/20 ${className}`}
// //   >
// //     <div className="flex items-center gap-2">
// //       <p className="font-semibold text-white text-sm">{name} just joined!</p>
// //       <div className="bg-green-500 rounded-full p-0.5">
// //         <Check className="w-3 h-3 text-white" />
// //       </div>
// //     </div>
// //     <p className="text-white/80 text-xs mt-1">{location}</p>
// //   </div>
// // );

// const UserJustJoined = ({
//   className,
//   name,
//   location,
// }: {
//   className?: string;
//   name: string;
//   location: string;
// }) => (
//   <div
//     className={`bg-white px-4 py-2 rounded-2xl w-max border border-[#2563EB] ${className}`}
//   >
//     <div className="flex items-center gap-2">
//       <p className="font-semibold text-black text-sm">{name} just joined!</p>
//       <div className="bg-[#2563EB] rounded-full p-0.5">
//         <Check className="w-3 h-3 text-white" />
//       </div>
//     </div>
//     <p className="text-black/80 text-xs mt-1">{location}</p>
//   </div>
// );

// export default function HeroSection() {
//   const [currentUser, setCurrentUser] = useState(() => generateRandomUser());
//   const [showNotification, setShowNotification] = useState(false);
//   useEffect(() => {
//     // Change the name every 10 seconds
//     const interval = setInterval(() => {
//       setCurrentUser(generateRandomUser());
//     }, 400000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     // Change the name every 10 seconds
//     const interval = setInterval(() => {
//       setCurrentUser(generateRandomUser());
//       setShowNotification(true);

//       // Hide notification after 3 seconds
//       const hideTimeout = setTimeout(() => {
//         setShowNotification(false);
//       }, 5000);

//       // Cleanup timeout on next interval
//       return () => clearTimeout(hideTimeout);
//     }, 10000);

//     // Cleanup interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div className="absolute inset-0 rounded-3xl m-4">
//         <Image
//           src="/background-image.png"
//           alt="Tropical beach resort paradise"
//           fill
//           priority
//           className="object-cover rounded-3xl hero-bg"
//         />
//         <div className="absolute inset-0 rounded-3xl" />
//       </div>

//       {/* Become a member button */}
//       <Link
//         href="/pricing"
//         className="fixed flex items-center justify-center z-30 right-6 top-1/2 -translate-y-1/2 bg-[#2563EB] text-white font-semibold py-4 px-3 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
//       >
//         <span className="[writing-mode:vertical-rl] rotate-180">
//           Become A Member
//         </span>
//       </Link>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center text-white px-4">
//         {/* User Avatars */}
//         <div className="flex items-center justify-center mb-6">
//           <div className="flex -space-x-3">
//             <Image
//               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
//               src="/CustomerTestimonialPhotos-3.png"
//               alt="User 1"
//               width={40}
//               height={40}
//             />
//             <Image
//               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
//               src="/CustomerTestimonialPhotos-2.png"
//               alt="User 2"
//               width={40}
//               height={40}
//             />
//             <Image
//               className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
//               src="/CustomerTestimonialPhotos.png"
//               alt="User 3"
//               width={40}
//               height={40}
//             />
//           </div>
//           <p className="ml-4 font-semibold text-2xl">12K+ Users</p>
//         </div>

//         {/* Hero Text */}
//         <h1 className="text-6xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//           Save Up To 70% On <br />
//           Every Trip - Guaranteed
//         </h1>
//         <p className="mt-6 max-w-4xl mx-auto text-xl text-white/90 font-medium">
//           Join thousands of travelers who get up to 70% off luxury hotels,
//           resorts, cruises & more. Our members save up to $1,000+ per trip with
//           Approved Experiences Traveler.
//         </p>
//       </div>

//       {/* Bottom Actions */}
//       <div className="absolute bottom-16 w-full z-20">
//         {/* Mobile view */}
//         <div className="md:hidden flex flex-col gap-4 mx-6">
//           <Link
//             href="/#how-it-works"
//             className="text-center bg-[#2563EB] text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 transition-transform transform hover:scale-105"
//           >
//             How It Works
//           </Link>
//           <Link
//             href="/pricing"
//             className="w-full text-center bg-transparent backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20 transition-transform transform hover:scale-105 border border-white/20"
//           >
//             Explore Pricing
//           </Link>
//         </div>

//         {/* Desktop view */}
//         <div className="hidden md:flex items-center px-4">
//           <div className="flex-1" />
//           <div className="flex items-center justify-center gap-4">
//             <Link
//               href="/#how-it-works"
//               className="text-center bg-blue-600 text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 transition-transform transform hover:scale-105"
//             >
//               How It Works
//             </Link>
//             <Link
//               href="/pricing"
//               className="bg-transparent backdrop-blur-lg text-center text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20 transition-transform transform hover:scale-105 border border-white/20"
//             >
//               Explore Pricing
//             </Link>
//           </div>
//           <div className="flex-1 flex justify-end mr-2"></div>
//         </div>
//       </div>
//      {showNotification &&
//      <UserJustJoined
//         name={currentUser.fullName}
//         location={currentUser.location}
//         className="fixed bottom-5 right-25 z-50"
//       />
//      }
//     </section>
//   );
// }

"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "./banner";

// ... (keep all your existing arrays and functions for random users)

const UserJustJoined = ({
  className,
  name,
  location,
}: {
  className?: string;
  name: string;
  location: string;
}) => (
  <div
    className={`bg-white px-4 py-2 rounded-2xl w-max border border-[#2563EB] ${className}`}
  >
    <div className="flex items-center gap-2">
      <p className="font-semibold text-black text-sm">{name} just joined!</p>
      <div className="bg-[#2563EB] rounded-full p-0.5">
        <Check className="w-3 h-3 text-white" />
      </div>
    </div>
    <p className="text-black/80 text-xs mt-1">{location}</p>
  </div>
);

// Arrays of names (you can move these to a separate file if needed)
const firstnames = [
  "James",
  "John",
  "Robert",
  "Michael",
  "William",
  "David",
  "Richard",
  "Joseph",
  "Thomas",
  "Charles",
  "Christopher",
  "Daniel",
  "Matthew",
  "Anthony",
  "Donald",
  "Mark",
  "Paul",
  "Steven",
  "Andrew",
  "Kenneth",
  "Joshua",
  "Kevin",
  "Brian",
  "George",
  "Edward",
  "Ronald",
  "Timothy",
  "Jason",
  "Jeffrey",
  "Ryan",
  "Jacob",
  "Gary",
  "Nicholas",
  "Eric",
  "Jonathan",
  "Stephen",
  "Larry",
  "Justin",
  "Scott",
  "Brandon",
  "Benjamin",
  "Samuel",
  "Gregory",
  "Alexander",
  "Patrick",
  "Frank",
  "Raymond",
  "Jack",
  "Dennis",
  "Mary",
  "Patricia",
  "Jennifer",
  "Linda",
  "Elizabeth",
  "Barbara",
  "Susan",
  "Jessica",
  "Sarah",
  "Karen",
  "Nancy",
  "Margaret",
  "Lisa",
  "Betty",
  "Dorothy",
  "Sandra",
  "Ashley",
  "Kimberly",
  "Donna",
  "Emily",
  "Michelle",
  "Carol",
  "Amanda",
  "Melissa",
  "Deborah",
  "Stephanie",
  "Rebecca",
  "Laura",
  "Sharon",
  "Cynthia",
  "Kathleen",
  "Amy",
  "Shirley",
  "Angela",
  "Helen",
  "Anna",
  "Brenda",
  "Pamela",
  "Nicole",
  "Samantha",
  "Katherine",
  "Emma",
  "Ruth",
  "Christine",
  "Catherine",
  "Debra",
  "Rachel",
  "Carolyn",
  "Janet",
  "Maria",
];

const lastnames = [
  "Smith",
  "Johnson",
  "Williams",
  "Brown",
  "Jones",
  "Garcia",
  "Miller",
  "Davis",
  "Rodriguez",
  "Martinez",
  "Hernandez",
  "Lopez",
  "Gonzalez",
  "Wilson",
  "Anderson",
  "Thomas",
  "Taylor",
  "Moore",
  "Jackson",
  "Martin",
  "Lee",
  "Perez",
  "Thompson",
  "White",
  "Harris",
  "Sanchez",
  "Clark",
  "Ramirez",
  "Lewis",
  "Robinson",
  "Walker",
  "Young",
  "Allen",
  "King",
  "Wright",
  "Scott",
  "Torres",
  "Nguyen",
  "Hill",
  "Flores",
  "Green",
  "AdAMS",
  "Nelson",
  "Baker",
  "Hall",
  "Rivera",
  "Campbell",
  "Mitchell",
  "Carter",
  "Roberts",
  "Gomez",
  "Phillips",
  "Evans",
  "Turner",
  "Diaz",
  "Parker",
  "Cruz",
  "Edwards",
  "Collins",
  "Reyes",
  "Stewart",
  "Morris",
  "Morales",
  "Murphy",
  "Cook",
  "Rogers",
  "Gutierrez",
  "Ortiz",
  "Morgan",
  "Cooper",
  "Peterson",
  "Bailey",
  "Reed",
  "Kelly",
  "Howard",
  "Ramos",
  "Kim",
  "Cox",
  "Ward",
  "Richardson",
  "Watson",
  "Brooks",
  "Chavez",
  "Wood",
  "James",
  "Bennett",
  "Gray",
  "Mendoza",
  "Ruiz",
  "Hughes",
  "Price",
  "Alvarez",
  "Castillo",
  "Sanders",
  "Patel",
  "Myers",
  "Long",
  "Ross",
  "Foster",
  "Jimenez",
];

// Array of cities for location
const cities = [
  "New York, NY",
  "Los Angeles, CA",
  "Chicago, IL",
  "Houston, TX",
  "Phoenix, AZ",
  "Philadelphia, PA",
  "San Antonio, TX",
  "San Diego, CA",
  "Dallas, TX",
  "San Jose, CA",
  "Austin, TX",
  "Jacksonville, FL",
  "Fort Worth, TX",
  "Columbus, OH",
  "Charlotte, NC",
  "San Francisco, CA",
  "Indianapolis, IN",
  "Seattle, WA",
  "Denver, CO",
  "Washington, DC",
  "Boston, MA",
  "El Paso, TX",
  "Nashville, TN",
  "Detroit, MI",
  "Oklahoma City, OK",
  "Portland, OR",
  "Las Vegas, NV",
  "Memphis, TN",
  "Louisville, KY",
  "Baltimore, MD",
  "Milwaukee, WI",
  "Albuquerque, NM",
  "Tucson, AZ",
  "Fresno, CA",
  "Sacramento, CA",
  "Mesa, AZ",
  "Kansas City, MO",
  "Atlanta, GA",
  "Long Beach, CA",
  "Colorado Springs, CO",
];

export default function HeroSection() {
  // // Function to generate a random name and location
  function generateRandomUser() {
    const randomFirstName =
      firstnames[Math.floor(Math.random() * firstnames.length)];
    const randomLastName =
      lastnames[Math.floor(Math.random() * lastnames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];

    return {
      firstName: randomFirstName,
      lastName: randomLastName,
      fullName: `${randomFirstName} ${randomLastName}`,
      location: randomCity,
    };
  }
  const [currentUser, setCurrentUser] = useState(() => generateRandomUser());
  const [showNotification, setShowNotification] = useState(false);

  const [showBanner, setShowBanner] = useState(false); // Initialize to false instead of true
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted for client-side checks

  useEffect(() => {
    setIsMounted(true);

    // Show banner after 5 seconds on every page load/reload
    const bannerTimer = setTimeout(() => {
      setShowBanner(true);
    }, 5000); // 5 second delay

    return () => clearTimeout(bannerTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUser(generateRandomUser());
      setShowNotification(true);

      const hideTimeout = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(hideTimeout);
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 rounded-3xl m-4">
        <Image
          src="/background-image.png"
          alt="Tropical beach resort paradise"
          fill
          priority
          className="object-cover rounded-3xl hero-bg"
        />
        <div className="absolute inset-0 rounded-3xl" />
      </div>
      {/* Become a member button */}
      <Link
        href="/traveler/pricing"
        className="fixed flex items-center justify-center z-30 right-6 top-1/2 -translate-y-1/2 bg-[#2563EB] text-white font-semibold py-4 px-3 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">
          Become A Member
        </span>
      </Link>
      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 w-full">
        {/* User Avatars */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
          <div className="flex -space-x-3">
            <Image
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white"
              src="/CustomerTestimonialPhotos-3.png"
              alt="User 1"
              width={40}
              height={40}
            />
            <Image
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white"
              src="/CustomerTestimonialPhotos-2.png"
              alt="User 2"
              width={40}
              height={40}
            />
            <Image
              className="inline-block h-8 w-8 sm:h-10 sm:w-10 rounded-full ring-2 ring-white"
              src="/CustomerTestimonialPhotos.png"
              alt="User 3"
              width={40}
              height={40}
            />
          </div>
          <p className="ml-4 font-semibold text-lg sm:text-2xl">12K+ Users</p>
        </div>

        {/* Hero Text */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-tight">
            Save Up To 70% On <br />
            Every Trip - Guaranteed
          </h1>
          <p className="mt-4 sm:mt-6 max-w-3xl sm:max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-white/90 font-medium px-4">
            Join thousands of travelers who get up to 70% off luxury hotels,
            resorts, cruises & more. Our members save up to $1,000+ per trip
            with Approved Experiences Traveler.
          </p>
        </div>

        {/* Mobile Buttons - Now inside hero content for better flow */}
        <div className="flex lg:flex-row items-center justify-center flex-col gap-4 mx-4 mt-8">
          <Link
            href="/#how-it-works"
            className="lg:w-auto w-full text-center bg-[#2563EB] text-white font-semibold rounded-full px-8 py-3.5 hover:bg-blue-700 transition-transform transform hover:scale-105 text-sm sm:text-base"
          >
            How It Works
          </Link>

          <Link
            href="/traveler/pricing"
            className="lg:w-auto w-full text-center bg-transparent backdrop-blur-lg text-white font-semibold rounded-full px-8 py-3.5 hover:bg-white/20 transition-transform transform hover:scale-105 border border-white/20 text-sm sm:text-base"
          >
            Explore Pricing
          </Link>
        </div>
      </div>
      {/* Desktop Buttons - Still at bottom */}
      {/* Notification */}
      {showNotification && (
        <UserJustJoined
          name={currentUser.fullName}
          location={currentUser.location}
          className="fixed bottom-24 md:bottom-5 right-4 md:right-25 z-50"
        />
      )}
      {/* Banner Popup */}
      {isMounted && (
        <Banner isVisible={showBanner} onClose={handleCloseBanner} />
      )}{" "}
    </section>
  );
}
