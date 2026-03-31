"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type PaymentSuccessProps = {
  open: boolean;
  paymentType?: string;
  email?: string;
  transactionId?: string;
  amount?: number;
  onClose?: () => void;
};

export default function PaymentSuccess({
  open,
  paymentType,
  email,
  transactionId,
  amount,
  onClose,
}: PaymentSuccessProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(open);

  const handleLogin = () => {
    router.push("/traveler/login");
  };

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#00000075] bg-opacity-50 flex items-center justify-center p-4 z-50">

      <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-[#2AD352] rounded-full p-3">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-green-500">
            Welcome to Approved Experiences
          </h2>
          <p className="mt-4 text-[#525253] text-base">
            You will receive a confirmation email within the next 12 hours with <br />
            your login credentials. Once received, please login {" "}
            <a href="/login" className="text-blue-600 font-semibold">
              here
            </a>
            . If you do <br /> not receive the confirmation email, please contact us at{" "}
            <br />
            <a
              href="mailto:support@approvedexperiences.com"
              className="text-[#525253] underline"
            >
              support@approvedexperiences.com
            </a>
            .
          </p>
        </div>

        <div className="px-26 pb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Payment Type</span>
              <span className="font-semibold text-gray-800">{paymentType || "Master Card"}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Email Address</span>
              <span className="font-semibold text-gray-800">{email || "example@gmail.com"}</span>
            </div>
          </div>
          <hr className="my-6" />
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Amount Paid</span>
              <span className="font-semibold text-gray-800">
                US${amount?.toFixed(2) || "449.98"}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Transaction id</span>
              <span className="font-semibold text-gray-800">{transactionId || "VCC9987441997"}</span>
            </div>
          </div>
        </div>

        <div className="px-26 pb-8 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleLogin}
            className="px-16 py-3 bg-[#2563EB] text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
          <button
            onClick={handleClose}
            className="px-16 py-3 border border-[#001F63] text-[#001F63] font-semibold rounded-full transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
