// "use client";
import { useGetMembershipPlansQuery } from "@/redux/services/api";
import Link from "next/link";
import { useState } from "react";
import membershipPlans from "@/data/membershipData";
import { useFacebookPixel } from "@/redux/hooks/use-facebook-pixel"; // Import Pixel hook

export default function PricingSection({ data }: any) {
  const [activePlan, setActivePlan] = useState("Platinum");
  const { trackEvent, trackAddToCart, trackMembershipSelected } = useFacebookPixel(); // Initialize Pixel hook

  const plans = membershipPlans || [];

  const activePlanData = plans.find((plan: any) => plan.name === activePlan);

  // Track plan selection on mobile tabs
  const handlePlanTabClick = (planName: string) => {
    setActivePlan(planName);
    
    const plan = plans.find((p: any) => p.name === planName);
    if (plan) {
      trackEvent('ViewContent', {
        content_name: `${planName} Plan Details`,
        content_category: 'Plan Selection',
        content_ids: [plan.id],
        value: plan.discountedPrice,
        currency: 'USD'
      });
    }
  };

  // Track "Get Started" button clicks
  const handleGetStartedClick = (plan: any) => {
    // Track AddToCart event (standard for starting checkout)
    trackAddToCart(plan.discountedPrice);
    
    // Track custom membership selection event
    trackMembershipSelected(plan.name, plan.discountedPrice);
    
    // Track lead event for plan selection
    trackEvent('Lead', {
      content_category: 'Plan Selection',
      content_name: `Selected ${plan.name} Plan`,
      content_ids: [plan.id],
      value: plan.discountedPrice,
      currency: 'USD'
    });
  };

  // Track "View Detailed Comparison" link click
  const handleViewComparisonClick = () => {
    trackEvent('ViewContent', {
      content_category: 'Navigation',
      content_name: 'View Detailed Comparison Click'
    });
  };

  return (
    <section className="py-16 md:py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 text-balance">
          Pricing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3149FA] to-[#8E98FE]">
            Plans
          </span>
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-[#525253] text-lg text-pretty">
          Pick the package that best suits your needs, ranging from friends & family benefit sharing to heavily discounted private jet empty leg access.
        </p>

        {/* Mobile Tabs */}
        <div className="mt-8 md:hidden">
          <div className="flex items-center gap-2 sm:gap-4">
            {plans.map((plan: any) => (
              <button
                key={plan.id}
                onClick={() => handlePlanTabClick(plan.name)}
                className={`flex-1 text-center py-2.5 text-sm font-semibold rounded-[8px] transition-colors ${
                  activePlan === plan.name
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {activePlanData && (
            <div className="mt-8 text-left">
              <div
                className={`p-8 rounded-3xl flex flex-col ${
                  activePlanData.name === "Platinum"
                    ? "bg-blue-600 text-white  shadow-blue-200"
                    : "bg-gray-100 border border-gray-200"
                }`}
              >
                <h3 className="text-2xl font-bold">{activePlanData.name}</h3>
                <p
                  className={
                    activePlanData.name === "Platinum"
                      ? "text-blue-200 mt-1"
                      : "text-gray-500 mt-1"
                  }
                >
                  {activePlanData.name === "Platinum"
                    ? "Premium luxury travel experience with the best value."
                    : "Unlock benefits that include"}
                </p>
                <div className="my-6">
                  <span
                    className={`text-5xl font-semibold ${
                      activePlanData.name !== "Platinum" && "text-gray-900"
                    }`}
                  >
                    ${activePlanData.discountedPrice}
                  </span>
                  <span
                    className={`text-xl font-bold ml-2 ${
                      activePlanData.name === "Platinum"
                        ? "text-blue-300 line-through"
                        : "text-gray-400 line-through"
                    }`}
                  >
                    ${activePlanData.regularPrice}
                  </span>
                  <span
                    className={
                      activePlanData.name === "Platinum"
                        ? "text-blue-200"
                        : "text-gray-500"
                    }
                  >
                    / year
                  </span>
                </div>
                <Link
                  href={`/traveler/checkout/?planId=${activePlanData.id}`}
                  onClick={() => handleGetStartedClick(activePlanData)}
                  className={`w-full text-center font-semibold py-3 rounded-full transition ${
                    activePlanData.name === "Platinum"
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "border border-gray-300 text-gray-800 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
                  }`}
                >
                  Get Started
                </Link>
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-semibold">Unlock benefits that include</p>
                  <ul
                    className={`space-y-3 ${
                      activePlanData.name === "Platinum"
                        ? "text-blue-200"
                        : "text-gray-600"
                    }`}
                  >
                    {activePlanData.tierFeatures
                      .filter((feat: any) => !feat.isExclusive)
                      .map((feat: any) => (
                        <li key={feat.id} className="flex items-center">
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          {feat.feature.name}
                        </li>
                      ))}
                    {activePlanData.tierFeatures
                      .filter((feat: any) => feat.isExclusive)
                      .map((feat: any) => (
                        <li
                          key={feat.id}
                          className="flex items-center font-medium"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 mr-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feat.feature.name}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Grid */}
        <div className="mt-12 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {plans.map((item: any) => {
            const nonExclusiveFeatures = item.tierFeatures.filter(
              (feat: any) => !feat.isExclusive
            );
            const exclusiveFeatures = item.tierFeatures.filter(
              (feat: any) => feat.isExclusive
            );

            return item.name !== "Platinum" ? (
              <div
                key={item.id}
                className="bg-[#F7FAFF] p-8 rounded-3xl border border-[#E9F0FF] flex flex-col"
              >
                <h3 className="text-xl font-bold text-[#0E0E0F]">
                  {item?.name}
                </h3>
                <p className="text-gray-500 mt-1">
                  Unlock benefits that include
                </p>
                <div className="my-6">
                  <span className="text-[32px] font-bold text-[#001F63]">
                    ${item?.discountedPrice}
                  </span>
                  <span className="text-xl font-bold text-[#001F63] line-through ml-2">
                    ${item?.regularPrice}
                  </span>
                  <span className="text-gray-500">/ year</span>
                </div>
                <Link
                  href={`/traveler/checkout/?planId=${item.id}`}
                  onClick={() => handleGetStartedClick(item)}
                  className="w-full text-center border border-[#001F63] text-[#001F63] font-semibold py-3 rounded-full hover:bg-blue-600 hover:border-blue-600 hover:text-white transition"
                >
                  Get Started
                </Link>
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-semibold text-gray-900">
                    Unlock benefits that include
                  </p>
                  <ul className="space-y-2 text-[#525253]">
                    {nonExclusiveFeatures.map((feat: any) => (
                      <li key={feat.id} className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={21}
                          fill="none"
                        >
                          <path
                            fill="#2563EB"
                            d="M10 1.08a8.958 8.958 0 0 1 8.958 8.958A8.958 8.958 0 0 1 10 18.996a8.958 8.958 0 0 1-8.958-8.958A8.958 8.958 0 0 1 10 1.08Zm0 1.25a7.708 7.708 0 1 0 0 15.416A7.708 7.708 0 1 0 10 2.33Zm2.873 4.786a.625.625 0 1 1 .92.844l-4.582 5a.626.626 0 0 1-.903.02l-2.083-2.084a.625.625 0 0 1 .883-.883l1.622 1.622 4.143-4.519Z"
                          />
                        </svg>
                        <p className="text-[16px]">{feat?.feature?.name}</p>
                      </li>
                    ))}
                    {exclusiveFeatures.map((feat: any) => (
                      <li
                        key={feat.id}
                        className="flex items-center text-[#525253] font-semibold  gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={21}
                          fill="none"
                        >
                          <path
                            fill="#2563EB"
                            d="M10 1.08a8.958 8.958 0 0 1 8.958 8.958A8.958 8.958 0 0 1 10 18.996a8.958 8.958 0 0 1-8.958-8.958A8.958 8.958 0 0 1 10 1.08Zm0 1.25a7.708 7.708 0 1 0 0 15.416A7.708 7.708 0 1 0 10 2.33Zm0 3.75c.345 0 .625.28.625.625v2.708h2.708a.625.625 0 1 1 0 1.25h-2.708v2.708a.625.625 0 1 1-1.25 0v-2.708H6.667a.625.625 0 1 1 0-1.25h2.708V6.705c0-.345.28-.625.625-.625Z"
                          />
                        </svg>
                        <p className="text-[16px]"> {feat?.feature?.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div
                key={item.id}
                className="bg-[#2563EB] text-[#F4F4F4] p-8 rounded-3xl  shadow-blue-200 flex flex-col transform md:scale-105"
              >
                <h3 className="text-xl text-[#F4F4F4] font-bold">
                  {item?.name}
                </h3>
                <p className="text-[#F4F4F4] mt-1">
                  Premium luxury travel experience with the best value.
                </p>
                <div className="my-6">
                  <span className="text-[32px] font-bold">
                    ${item?.discountedPrice}
                  </span>
                  <span className="text-xl font-bold text-[#F7FAFF] line-through ml-2">
                    ${item?.regularPrice}
                  </span>
                  <span className="text-[#F4F4F4]">/ year</span>
                </div>
                <Link
                  href={`/traveler/checkout/?planId=${item.id}`}
                  onClick={() => handleGetStartedClick(item)}
                  className="w-full text-center bg-white text-[#2563EB] text-[18px] font-semibold py-3 rounded-full hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
                <div className="mt-8 space-y-4 flex-grow">
                  <p className="font-semibold text-white">
                    Unlock benefits that include
                  </p>
                  <ul className="space-y-3 text-blue-200">
                    {nonExclusiveFeatures.map((feat: any) => (
                      <li
                        key={feat.id}
                        className="flex items-center gap-2 text-[#F4F4F4]"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={21}
                          fill="none"
                        >
                          <path
                            fill="#fff"
                            d="M10 1.08a8.958 8.958 0 0 1 8.958 8.958A8.958 8.958 0 0 1 10 18.996a8.958 8.958 0 0 1-8.958-8.958A8.958 8.958 0 0 1 10 1.08Zm0 1.25a7.708 7.708 0 1 0 0 15.416A7.708 7.708 0 1 0 10 2.33Zm2.873 4.786a.625.625 0 1 1 .92.844l-4.582 5a.626.626 0 0 1-.903.02l-2.083-2.084a.625.625 0 0 1 .883-.883l1.622 1.622 4.143-4.519Z"
                          />
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}
                    {exclusiveFeatures.map((feat: any) => (
                      <li
                        key={feat.id}
                        className="flex items-center font-semibold text-white gap-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={21}
                          fill="none"
                        >
                          <path
                            fill="#fff"
                            d="M10 1.08a8.958 8.958 0 0 1 8.958 8.958A8.958 8.958 0 0 1 10 18.996a8.958 8.958 0 0 1-8.958-8.958A8.958 8.958 0 0 1 10 1.08Zm0 1.25a7.708 7.708 0 1 0 0 15.416A7.708 7.708 0 1 0 10 2.33Zm0 3.75c.345 0 .625.28.625.625v2.708h2.708a.625.625 0 1 1 0 1.25h-2.708v2.708a.625.625 0 1 1-1.25 0v-2.708H6.667a.625.625 0 1 1 0-1.25h2.708V6.705c0-.345.28-.625.625-.625Z"
                          />
                        </svg>
                        {feat?.feature?.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          href="/traveler/pricing"
          onClick={handleViewComparisonClick}
          className="mt-15 inline-block bg-[#2563EB] text-[#F7FAFF] font-medium px-8 py-4 rounded-full hover:bg-blue-700 transition"
        >
          View Detailed Comparison
        </Link>
      </div>
    </section>
  );
}