'use client';

export const FB_PIXEL_ID = 699599202780632;

export const pageview = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

// Initialize Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return;

  const fbq = (window as any).fbq;
  if (fbq) return; // Already initialized

  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    'script',
    'https://connect.facebook.net/en_US/fbevents.js'
  );

  (window as any).fbq('init', FB_PIXEL_ID);
  (window as any).fbq('track', 'PageView');
};

// Track events
export const event = (name: string, parameters = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', name, parameters);
  }
};

export const customEvent = (name: string, parameters = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', name, parameters);
  }
};