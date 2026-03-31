"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

interface BannerProps {
  isVisible: boolean
  onClose: () => void
}

const Banner = ({ isVisible, onClose }: BannerProps) => {
  const router = useRouter()
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    const code = "TRAVELER200"
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!isVisible) return null

  const handleClose = () => {
    onClose()
  }

  const handleCopy = () => {
    const code = "TRAVELER200"
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })  
    router.push("/traveler/pricing?promo=TRAVELER200")
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 pointer-events-none">
      {/* Invisible backdrop for closing */}
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="relative w-full max-w-xl p-6 sm:p-10 shadow-2xl overflow-hidden z-10 pointer-events-auto">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              backgroundImage: 'url("/banner.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 sm:top-5 font-bold right-3 sm:right-5 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#141B34] transition-colors z-10"
        >
          ✕
        </button>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Limited Time Badge */}
          <div className="inline-block bg-[#0739A7] text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-lg font-semibold mb-4">
            Limited-Time
          </div>

          {/* Heading */}
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Take an Extra $200
            <br />
            Off Any Membership
          </h1>

          {/* Subtitle */}
          <p className="text-white text-opacity-90 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto px-2">
            Unlock exclusive wholesale travel savings for less — this bonus discount is available for a short time only.
          </p>

          {/* Promo Code Box */}
          <div className="bg-[#F7FAFF] rounded-2xl sm:rounded-full px-3 sm:px-5 py-3 sm:py-2 flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-10 shadow-lg gap-2 sm:gap-0">
            <div className="flex items-center w-full">
              <div className="flex items-center justify-center gap-2 sm:gap-3 flex-1">
                <span className="text-[#2563EB] text-xl sm:text-2xl md:text-[32px] text-center font-normal tracking-wide">TRAVELER200</span>
                <Image src="/copy.png" alt="Copy Icon" width={16} height={16} className="cursor-pointer sm:w-5 sm:h-5" onClick={copyCode} />
              </div>
              <button
                onClick={copyCode}
                className="text-green-500 text-xs sm:text-sm font-semibold cursor-pointer px-2 sm:px-2 py-1 rounded hover:bg-gray-100 transition-colors ml-2 sm:ml-4 whitespace-nowrap"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
            <span onClick={handleClose} className="text-white cursor-pointer text-opacity-80 text-xs sm:text-sm text-center">Don't want to save $200</span>
            <button
              onClick={handleCopy}
              className="bg-[#001F63] cursor-pointer text-white border border-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold hover:bg-white hover:text-[#2563EB] transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Claim My $200 Savings
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
