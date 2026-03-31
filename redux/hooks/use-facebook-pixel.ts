'use client';

import { event, customEvent } from '@/lib/facebook-pixel';
import { useCallback, useMemo } from 'react';

export const useFacebookPixel = () => {
  const trackEvent = useCallback((eventName: string, parameters = {}) => {
    event(eventName, parameters);
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters = {}) => {
    customEvent(eventName, parameters);
  }, []);

  // Pre-defined events
  const trackPurchase = useCallback((value: number, currency = 'USD') => {
    trackEvent('Purchase', { value, currency });
  }, [trackEvent]);

  const trackInitiateCheckout = useCallback((parameters = {}) => {
  trackEvent('InitiateCheckout', parameters);
}, [trackEvent]);

  const trackLead = useCallback(() => {
    trackEvent('Lead');
  }, [trackEvent]);

  const trackCompleteRegistration = useCallback((parameters = {}) => {
    trackEvent('CompleteRegistration', parameters);
  }, [trackEvent]);

  const trackMembershipSelected = useCallback((plan: string, price: number) => {
    trackCustomEvent('MembershipSelected', { plan, price });
  }, [trackCustomEvent]);

  const trackAddToCart = useCallback((value: number) => {
    trackEvent('AddToCart', { value });
  }, [trackEvent]);

  return useMemo(
    () => ({
      trackEvent,
      trackCustomEvent,
      trackPurchase,
      trackLead,
      trackCompleteRegistration,
      trackMembershipSelected,
      trackAddToCart,
      trackInitiateCheckout,
    }),
    [
      trackEvent,
      trackCustomEvent,
      trackPurchase,
      trackLead,
      trackCompleteRegistration,
      trackMembershipSelected,
      trackAddToCart,
      trackInitiateCheckout,
    ]
  );
};