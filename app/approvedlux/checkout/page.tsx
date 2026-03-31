
'use client'
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { approvePricingData } from "@/data/approvePricingData"
import { useSearchParams } from "next/navigation"
import ApproveCheckoutForm from "@/components/approve-checkout-form"

export default function ApproveCheckoutPage() {
  const searchParams = useSearchParams()
  const planId = searchParams.get('planId')
  
  const plan = approvePricingData.find((p) => String(p.id) === String(planId))
  
  if (!planId || !plan) return (
    <div className="bg-white">
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <p>Please select a plan first</p>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
  
  const checkoutPlan = {
    id: String(plan.id),
    name: plan.name,
    discountedPrice: plan.discountedPrice,
    regularPrice: plan.regularPrice,
    tierId: plan.id, // Assuming tierId is the same as id; adjust if needed
  }
  
  return (
    <div className="bg-white">
      <Header />
      <main>
        <ApproveCheckoutForm plan={checkoutPlan}/>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}