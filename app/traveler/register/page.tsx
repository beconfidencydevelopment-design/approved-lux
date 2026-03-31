"use client";
import { useAuthApi } from "@/redux/hooks/useApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const { register } = useAuthApi();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ");
    setIsLoading(true);
    setError("");

    try {
      // Remove .unwrap() here since it's already handled in the hook
      const result = await register({ email, password, firstName, lastName });
      // console.log("first", result);
      if (result.success) {
        // Redirect to dashboard or home page after successful login
        router.push("/traveler/login");
      } else {
        setError(result.error || "Register failed");
      }
    } catch (err: any) {
      // Handle the error that was thrown from the hook
      if (err.data) {
        setError(err.data.error || "An unexpected error occurred");
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="relative md:flex  rounded-xl overflow-hidden ">
        {/* Background image for mobile, hidden on md+ */}
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/4xsize.png"
            alt="background"
            fill
            className="object-cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent" />
        </div>

        {/* Image for desktop, hidden on mobile */}
        <div className="hidden w-1/2 md:block">
          <Image
            src="/4xsize.png"
            alt="Woman enjoying travel"
            width={800}
            height={1200}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form section */}
        <div className="relative z-10 flex w-full  justify-center p-6 md:w-1/2 md:p-12">
          <div className="w-full max-w-md text-center md:text-left">
            <Link
              href="/traveler"
              className="flex items-center justify-center md:justify-start text-[#525253] hover:text-gray-700"
            >
              &larr; Back home
            </Link>
            <Image
              src="/logo.jpg"
              alt="Approved Experiences Logo"
              width={200}
              height={90}
              className="mx-auto md:mx-0"
            />
            <h1 className="mt-6 text-4xl font-bold text-gray-900">
              Create Account To Explore A <br /> World Of Savings
            </h1>
            <p className="mt-4 text-gray-500">
              Your exclusive travel and lifestyle benefits are within your
              reach.
            </p>

            {error && (
              <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <div>
                  <label htmlFor="firstName" className="sr-only">
                    Enter your name
                  </label>
                  <div className="relative rounded-full border border-gray-300 bg-white focus-within:bg-[#E9F0FF] md:bg-transparent">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                      id="enteryourname"
                      name="enteryourname"
                      type="text"
                      autoComplete="given-name"
                      required
                      className="appearance-none rounded-full relative block w-full pl-10 px-3 py-2 border-none bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:z-10 sm:text-sm"
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              {/* <div>
              <div>
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <div className="relative rounded-full border border-gray-300 bg-white focus-within:bg-[#E9F0FF] md:bg-transparent">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                    id="lastName"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    required
                    className="appearance-none rounded-full relative block w-full pl-10 px-3 py-2 border-none bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:z-10 sm:text-sm"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
            </div> */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative rounded-full border border-gray-300 bg-white focus-within:bg-[#E9F0FF] md:bg-transparent">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-full relative block w-full pl-10 px-3 py-2 border-none bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:z-10 sm:text-sm"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative rounded-full border border-gray-300 bg-white focus-within:bg-[#E9F0FF] md:bg-transparent">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-full relative block w-full pl-10 px-3 py-2 border-none bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:z-10 sm:text-sm"
                    placeholder="Enter your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Confirm Password
                </label>
                <div className="relative rounded-full border border-gray-300 bg-white focus-within:bg-[#E9F0FF] md:bg-transparent">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
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
                    id="confirmpassword"
                    name="confirmpassword"
                    type="password"
                    autoComplete="new-password"
                    required
                    className="appearance-none rounded-full relative block w-full pl-10 px-3 py-2 border-none bg-transparent placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-0 focus:z-10 sm:text-sm"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isLoading || password !== confirmPassword}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </form>

            <div className="mt-6 flex items-center">
              <div className="flex-grow h-px bg-[#757575]" />
              <span className="mx-4 text-gray-500">Or Sign Up with</span>
              <div className="flex-grow h-px bg-[#757575]" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-[#A3A3A3] rounded-full  bg-transparent md:bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign up with Google</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.902,35.688,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center py-2 px-4 border border-[#A3A3A3] rounded-full bg-transparent md:bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Sign up with Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#039be5"
                      d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.261,2.735-7.261,7.403v3.498h-4.918v4.995h4.918v12.272C21.534,41.332,22.748,41.5,24,41.5c0.91,0,1.805-0.06,2.658-0.168L26.572,29.036z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-6">
              <p className="text-[#757575]">
                Already have an account?{" "}
                <Link
                  href="/traveler/login"
                  className="text-[#2563EB] hover:text-blue-800"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
