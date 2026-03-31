// 'use client'
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import ScrollToTop from "@/components/scroll-to-top"
// import CheckoutForm from "@/components/checkout-form"
// import { useGetMembershipPlansQuery } from "@/redux/services/api"
// import { useParams } from "next/navigation"
// import { useSelector } from "react-redux"

// export default function CheckoutPage() {

//   const {planId} = useParams()
//   const { data, isLoading } = useGetMembershipPlansQuery(undefined)
//   const datame = data?.data;
//   // console.log("first", planId, datame);
//   if (isLoading) return <p>Loading...</p>

// const plan = datame?.find((p: any) => String(p.id) === String(planId))
// // const memberData = useSelector((state: any) => state.auth);
//   // // console.log("first plan:", plan,memberData);
//   if (!plan) return <p>Plan not found</p>
//   return (
//     <div className="bg-white">
//       <Header />
//       <main>
//         <CheckoutForm plan={plan}/>
//       </main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   )
// }


'use client'
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import CheckoutForm from "@/components/checkout-form"
import { useGetMembershipPlansQuery } from "@/redux/services/api"
import { useSearchParams } from "next/navigation"

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const planId = searchParams.get('planId')
  console.log("planIdddddddddddddd", planId);
  const { data, isLoading } = useGetMembershipPlansQuery(undefined)
  const datame = data?.data;
  
  if (isLoading) return (
    <div className="bg-white">
      <Header />
      <main className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )

  const plan = datame?.find((p: any) => String(p.id) === String(planId))
  
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
  
  return (
    <div className="bg-white">
      <Header />
      <main>
        <CheckoutForm plan={plan}/>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}