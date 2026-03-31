'use client';

import { usePathname} from 'next/navigation';
import { useEffect } from 'react';
import { initFacebookPixel, pageview } from '@/lib/facebook-pixel';

export default function FacebookPixel() {
  const pathname = usePathname();


  useEffect(() => {
    initFacebookPixel();
  }, []);

  useEffect(() => {
    // Track page view when route changes
    pageview();
  }, [pathname]);

  return (
    <>
      {/* Fallback noscript */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=699599202780632&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}