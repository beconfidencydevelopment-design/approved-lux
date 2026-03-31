// ClientWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import StoreProvider from "@/app/reduxProvider";
import StripeProvider from "@/lib/StripeProvider";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only render client-dependent content after mount
  }, []);

  if (!mounted) return null; // prevent SSR mismatch

  return (
    <StoreProvider>
      <StripeProvider>{children}</StripeProvider>
    </StoreProvider>
  );
}
