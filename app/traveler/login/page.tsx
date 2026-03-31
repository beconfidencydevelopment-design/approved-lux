// "use client";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import {arriviaService} from "../../lib/arivia-api"; // Adjust path as needed
// import Script from "next/script";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contractNumber, setContractNumber] = useState("");
//   const [useSSO, setUseSSO] = useState(false);
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const router = useRouter();

//   // const handleSubmit = async (e: React.FormEvent) => {
//   //   e.preventDefault();
//   //   setIsLoading(true);
//   //   setError("");

//   //   try {
//   //     let result;
      
//   //     if (useSSO) {
//   //       // Single Sign-On (no password validation)
//   //       result = await arriviaService.loginSSO(email, contractNumber);
//   //     } else {
//   //       // Regular login with password validation
//   //       result = await arriviaService.login(email, password, contractNumber);
//   //     }

//   //     // // console.log("Login result:", result);
      
//   //     if (result.Token) {
//   //       // Store token locally if needed
//   //       localStorage.setItem('arrivia_token', result.Token);
        
//   //       // Redirect to Arrivia platform with token
//   //       const redirectUrl = `https://www.traveler.approvedexperiences.com/vacationclub/logincheck.aspx?Token=${result.Token}&RedirectURL=%2Frentals%2F`;
//   //       window.location.href = redirectUrl;
        
//   //     } else {
//   //       setError("Login failed: No token received");
//   //     }
//   //   } catch (err: any) {
//   //     // // console.error("Login error:", err);
//   //     setError(err.message || "Login failed. Please check your credentials.");
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // };
// // https://selene-trickish-bennett.ngrok-free.app/


// const handleSubmit = async (e: React.FormEvent) => {
//   e.preventDefault();
//   setIsLoading(true);
//   setError("");

//   try {
//     const response = await fetch('https://selene-trickish-bennett.ngrok-free.app/api/auth/arrivia-login', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email,
//         password,
//         contractNumber,
//         useSSO
//       }),
//     });

//     const result = await response.json();

//     if (!response.ok) {
//       throw new Error(result.error || 'Login failed');
//     }

//     // // console.log("Login result:", result);
    
//     if (result.data.token) {
//       // Store token locally if needed
//       localStorage.setItem('arrivia_token', result.data.token);
      
//       // Redirect to Arrivia platform with token
//       const redirectUrl = `https://members.approvedexperiences.com/vacationclub/logincheck.aspx?Token=${result.data.token}&RedirectURL=%2Frentals%2F`;
//       window.location.href = redirectUrl;
//     } else {
//       setError("Login failed: No token received");
//     }
//   } catch (err: any) {
//     // // console.error("Login error:", err);
//     setError(err.message || "Login failed. Please check your credentials.");
//   } finally {
//     setIsLoading(false);
//   }
// };


//   const handleForgotPassword = () => {
//     // Redirect to Arrivia's forgot password page
//     const forgotPasswordUrl = `https://www.traveler.approvedexperiences.com/ForgotPassword.aspx`;
//     window.location.href = forgotPasswordUrl;
//   };

//   return (
//     <div className="relative min-h-screen md:flex">
//       <Script
//               id="ire-sdk"
//               src="https://utt.impactcdn.com/A6477190-e994-4812-b281-2b613f0e188b1.js" // <-- replace with actual URL
//               strategy="afterInteractive"
//               onLoad={() => {
//                 // // console.log("IRE script loaded");
//                 if (typeof window.ire !== "undefined") {
//                   window.ire("identify", {
//                     customerId: "",
//                     customerEmail: "",
//                     customProfileId: "",
//                   });
//                 }
//               }}
//             />
//       {/* Background image for mobile, hidden on md+ */}
//       <div className="absolute inset-0 md:hidden">
//         <Image
//           src="/loginGirl.jpg"
//           alt="background"
//           fill
//           className="object-cover"
//           quality={100}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
//       </div>

//       {/* Image for desktop, hidden on mobile */}
//       <div className="hidden w-1/2 md:block">
//         <Image
//           src="/loginGirl.jpg"
//           alt="Woman enjoying travel"
//           width={800}
//           height={1200}
//           className="h-full w-full object-cover"
//         />
//       </div>

//       {/* Form section */}
//       <div className="relative z-10 flex w-full items-center justify-center p-6 md:w-1/2 md:p-12">
//         <div className="w-full max-w-md text-center md:text-left">
//           <Link
//             href="/traveler"
//             className="flex items-center justify-center md:justify-start text-[#525253] hover:text-gray-700"
//           >
//             &larr; Back home
//           </Link>
//           <Image
//             // src="/logo.jpg"
//               src="/ApprovedOriginal.png"
//             alt="Approved Experiences Logo"
//             width={200}
//             height={90}
//             className="mx-auto md:mx-0"
//           />
//           <h1 className="mt-6 text-4xl font-bold text-gray-900">
//             Login to Explore A <br /> World Of Savings
//           </h1>
//           <p className="mt-4 text-gray-500">
//             Your exclusive travel and lifestyle benefits are within your reach.
//           </p>

//           {error && (
//             <div className="mt-4 rounded-md bg-red-100 p-3 text-red-700">
//               {error}
//             </div>
//           )}

//           <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="email" className="sr-only">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                   <svg
//                     className="h-5 w-5 text-gray-400"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 20 20"
//                     fill="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
//                       clipRule="evenodd"
//                     />
//                   </svg>
//                 </div>
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white focus:bg-[#E9F0FF] md:focus:bg-white"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//             </div>

         

//             {!useSSO && (
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <div className="relative">
//                   <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                     <svg
//                       className="h-5 w-5 text-gray-400"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                       aria-hidden="true"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     autoComplete="current-password"
//                     required={!useSSO}
//                     className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white focus:bg-[#E9F0FF] md:focus:bg-white"
//                     placeholder="Enter your Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>
//             )}

//             {/* <div className="flex items-center">
//               <input
//                 id="useSSO"
//                 name="useSSO"
//                 type="checkbox"
//                 checked={useSSO}
//                 onChange={(e) => setUseSSO(e.target.checked)}
//                 className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//               />
//               <label htmlFor="useSSO" className="ml-2 block text-sm text-gray-900">
//                 Use Single Sign-On (No password required)
//               </label>
//             </div> */}

//             <div>
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="group relative flex w-full justify-center rounded-full border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {isLoading ? "Signing In..." : "Sign In"}
//               </button>
//             </div>
//           </form>

//           <div className="mt-6 space-y-4 text-center">
//             <button
//               onClick={handleForgotPassword}
//               className="text-blue-600 hover:text-blue-800 text-sm"
//             >
//               Forgot your password?
//             </button>
            
//             {/* <p className="text-gray-600">
//               Don't have an account?{" "}
//               <Link
//                 href="/register"
//                 className="text-blue-600 hover:text-blue-800"
//               >
//                 Sign up here
//               </Link>
//             </p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Script from "next/script";
import { useFacebookPixel } from "@/redux/hooks/use-facebook-pixel";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contractNumber, setContractNumber] = useState("");
  const [useSSO, setUseSSO] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { trackCompleteRegistration, trackEvent, trackLead } = useFacebookPixel(); // Initialize Pixel hook

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Track login attempt
    trackLead();

    try {
      const response = await fetch('https://backend.approvedexperiences.com/api/auth/arrivia-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          contractNumber,
          useSSO
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Login failed');
      }

      // console.log("Login result:", result);
      
      if (result.data.token) {
        // Track successful login
        trackCompleteRegistration({
          content_name: 'User Login',
          status: 'success',
          method: useSSO ? 'SSO' : 'Email'
        });

        // Store token locally if needed
        localStorage.setItem('arrivia_token', result.data.token);
        
        // Redirect to Arrivia platform with token
        const redirectUrl = `https://members.approvedexperiences.com/vacationclub/logincheck.aspx?Token=${result.data.token}&RedirectURL=%2Frentals%2F`;
        window.location.href = redirectUrl;
      } else {
        setError("Login failed: No token received");
        // Track failed login attempt
        trackEvent('Lead', {
          content_category: 'Login',
          content_name: 'Login Failed - No Token'
        });
      }
    } catch (err: any) {
      // console.error("Login error:", err);
      setError(err.message || "Login failed. Please check your credentials.");
      
      // Track failed login attempt with error details
      trackEvent('Lead', {
        content_category: 'Login',
        content_name: 'Login Failed',
        error_message: err.message || 'Unknown error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Track forgot password click
    trackEvent('Lead', {
      content_category: 'Login',
      content_name: 'Forgot Password Click'
    });

    // Redirect to Arrivia's forgot password page
    const forgotPasswordUrl = `https://www.traveler.approvedexperiences.com/ForgotPassword.aspx`;
    window.location.href = forgotPasswordUrl;
  };

  // Track when user focuses on email field (engagement)
  const handleEmailFocus = () => {
    trackEvent('ViewContent', {
      content_category: 'Login Form',
      content_name: 'Email Field Focus'
    });
  };

  // Track when user focuses on password field (engagement)
  const handlePasswordFocus = () => {
    trackEvent('ViewContent', {
      content_category: 'Login Form',
      content_name: 'Password Field Focus'
    });
  };

  return (
    <div className="relative flex min-h-dvh flex-col md:flex-row">
      <Script
        id="ire-sdk"
        src="https://utt.impactcdn.com/A6477190-e994-4812-b281-2b613f0e188b1.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window.ire !== "undefined") {
            window.ire("identify", {
              customerId: "",
              customerEmail: "",
              customProfileId: "",
            });
          }
        }}
      />
      
      {/* Background image for mobile, hidden on md+ */}
      <div className="fixed inset-0 md:hidden">
        <Image
          src="/loginGirl.jpg"
          alt="background"
          fill
          className="object-cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-transparent" />
      </div>

      {/* Image for desktop, hidden on mobile */}
      <div className="hidden md:block md:w-1/2 md:sticky md:top-0 md:h-screen">
        <Image
          src="/loginGirl.jpg"
          alt="Woman enjoying travel"
          fill
          className="object-cover"
        />
      </div>

      {/* Form section */}
      <div className="relative z-10 flex w-full flex-1 items-center justify-center px-6 py-12 md:w-1/2 md:px-12">
        <div className="w-full max-w-md text-center md:text-left">
          <Link
            href="/traveler"
            className="flex items-center justify-center md:justify-start text-[#525253] hover:text-gray-700"
            onClick={() => {
              trackEvent('ViewContent', {
                content_category: 'Navigation',
                content_name: 'Back to Home from Login'
              });
            }}
          >
            &larr; Back home
          </Link>
          
          <Image
            src="/ApprovedOriginal.png"
            alt="Approved Experiences Logo"
            width={200}
            height={90}
            className="mx-auto md:mx-0"
          />
          
          <h1 className="mt-6 text-4xl font-bold text-gray-900">
            Login to Explore A <br /> World Of Savings
          </h1>
          
          <p className="mt-4 text-gray-500">
            Your exclusive travel and lifestyle benefits are within your reach.
          </p>

          {error && (
            <div className="mt-4 rounded-md bg-red-100 p-3 text-red-700">
              {error}
            </div>
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white focus:bg-[#E9F0FF] md:focus:bg-white"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={handleEmailFocus}
                />
              </div>
            </div>

            {!useSSO && (
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required={!useSSO}
                    className="relative block w-full appearance-none rounded-full border border-gray-300 px-3 py-2 pl-10 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm bg-white focus:bg-[#E9F0FF] md:focus:bg-white"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={handlePasswordFocus}
                  />
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative flex w-full justify-center rounded-full border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Signing In..." : "Sign In"}
              </button>
            </div>
          </form>

          <div className="mt-6 space-y-4 text-center">
            <button
              onClick={handleForgotPassword}
              className="text-blue-600 hover:text-blue-800 text-sm"
            >
              Forgot your password?
            </button>
            
            {/* Uncomment if you have registration */}
            {/* <p className="text-gray-600">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800"
                onClick={() => {
                  trackEvent('Lead', {
                    content_category: 'Navigation',
                    content_name: 'Register Link Click from Login'
                  });
                }}
              >
                Sign up here
              </Link>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}