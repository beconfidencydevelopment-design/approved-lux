"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { type ReactNode, useMemo } from "react";

export default function StripeProvider({ children }: { children: ReactNode }) {
  const stripePromise = useMemo(() => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    return key ? loadStripe(key) : null;
  }, []);

  if (!stripePromise) {
    return <>{children}</>;
  }

  return (
    <Elements stripe={stripePromise} options={{ appearance: { theme: "stripe" } }}>
      {children}
    </Elements>
  );
}
