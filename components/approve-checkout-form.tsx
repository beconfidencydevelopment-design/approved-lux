
"use client";
declare const ire: any;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useCreateMemberFromPaymentMutation,
  useCreateOrderMutation,
  useGetMemberProfileQuery,
} from "@/redux/services/api";
import { RootState } from "@/redux/store";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
  PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import { CheckCircle, Shield, Apple, CreditCard, Lock } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import sha1 from "sha1";
import { arriviaService } from "@/lib/arivia-api";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useFacebookPixel } from "@/redux/hooks/use-facebook-pixel"; // Import Pixel hook

type CheckoutFormProps = {
  plan: {
	 id: string;
	 name: string;
	 discountedPrice: number;
	 regularPrice: number;
	 tierId: number;
  };
};

const PLAN_TO_ARRIVIA_ACCOUNT_TYPE: Record<string, number> = {
  "1": 1,
  "2": 3,
  "3": 4,
};

const usStates = [
  { value: "alabama", label: "Alabama" },
  { value: "alaska", label: "Alaska" },
  { value: "arizona", label: "Arizona" },
  { value: "arkansas", label: "Arkansas" },
  { value: "california", label: "California" },
  { value: "colorado", label: "Colorado" },
  { value: "connecticut", label: "Connecticut" },
  { value: "delaware", label: "Delaware" },
  { value: "florida", label: "Florida" },
  { value: "georgia", label: "Georgia" },
  { value: "hawaii", label: "Hawaii" },
  { value: "idaho", label: "Idaho" },
  { value: "illinois", label: "Illinois" },
  { value: "indiana", label: "Indiana" },
  { value: "iowa", label: "Iowa" },
  { value: "kansas", label: "Kansas" },
  { value: "kentucky", label: "Kentucky" },
  { value: "louisiana", label: "Louisiana" },
  { value: "maine", label: "Maine" },
  { value: "maryland", label: "Maryland" },
  { value: "massachusetts", label: "Massachusetts" },
  { value: "michigan", label: "Michigan" },
  { value: "minnesota", label: "Minnesota" },
  { value: "mississippi", label: "Mississippi" },
  { value: "missouri", label: "Missouri" },
  { value: "montana", label: "Montana" },
  { value: "nebraska", label: "Nebraska" },
  { value: "nevada", label: "Nevada" },
  { value: "new-hampshire", label: "New Hampshire" },
  { value: "new-jersey", label: "New Jersey" },
  { value: "new-mexico", label: "New Mexico" },
  { value: "new-york", label: "New York" },
  { value: "north-carolina", label: "North Carolina" },
  { value: "north-dakota", label: "North Dakota" },
  { value: "ohio", label: "Ohio" },
  { value: "oklahoma", label: "Oklahoma" },
  { value: "oregon", label: "Oregon" },
  { value: "pennsylvania", label: "Pennsylvania" },
  { value: "rhode-island", label: "Rhode Island" },
  { value: "south-carolina", label: "South Carolina" },
  { value: "south-dakota", label: "South Dakota" },
  { value: "tennessee", label: "Tennessee" },
  { value: "texas", label: "Texas" },
  { value: "utah", label: "Utah" },
  { value: "vermont", label: "Vermont" },
  { value: "virginia", label: "Virginia" },
  { value: "washington", label: "Washington" },
  { value: "west-virginia", label: "West Virginia" },
  { value: "wisconsin", label: "Wisconsin" },
  { value: "wyoming", label: "Wyoming" },
];

export default function ApproveCheckoutForm({ plan }: CheckoutFormProps) {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [createAccount, setCreateAccount] = useState(true);
  const [stateValue, setStateValue] = useState("california");
  const [cityValue, setCityValue] = useState("");
  const [cardFields, setCardFields] = useState({
	 cardNumber: { isFocused: false, isComplete: false, isEmpty: true },
	 cardExpiry: { isFocused: false, isComplete: false, isEmpty: true },
	 cardCvc: { isFocused: false, isComplete: false, isEmpty: true },
  });
  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  const [canUseAppleGooglePay, setCanUseAppleGooglePay] = useState(false);
  const [isProcessingPayPal, setIsProcessingPayPal] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  // Promo code state variables
  const [promoCode, setPromoCode] = useState<string | null>(null);
  const [discount, setDiscount] = useState<number>(0);
  const [promoApplied, setPromoApplied] = useState<boolean>(false);
  const [promoError, setPromoError] = useState<string | null>(null);

  // Calculate final amount after discount
  const finalAmount = plan.discountedPrice - discount;

  // Initialize Facebook Pixel hook
  const { trackPurchase, trackEvent, trackAddToCart, trackInitiateCheckout } = useFacebookPixel();

  const token = useSelector((state: RootState) => state.auth.token);
  const tokenRef = useRef(token);
  tokenRef.current = token;
  const stripe = useStripe();
  const elements = useElements();

  const [createOrder] = useCreateOrderMutation();
  const [createMemberFromPayment] = useCreateMemberFromPaymentMutation();

  const { data: profile, refetch } = useGetMemberProfileQuery(undefined, {
	 skip: !token,
  });

  // Track checkout initiation when component mounts
  useEffect(() => {
	 trackInitiateCheckout({
		value: finalAmount,
		currency: 'USD',
		content_name: plan.name,
		content_ids: [plan.id],
		content_type: 'product'
	 });

	 // Track view content for checkout page
	 trackEvent('ViewContent', {
		content_name: 'Checkout Page',
		content_category: 'Purchase Funnel',
		content_ids: [plan.id],
		value: finalAmount,
		currency: 'USD'
	 });
  }, [plan, finalAmount, trackInitiateCheckout, trackEvent]);

  // Track payment method selection
  useEffect(() => {
	 if (paymentMethod) {
		trackEvent('AddPaymentInfo', {
		  value: finalAmount,
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  payment_method: paymentMethod
		});
	 }
  }, [paymentMethod, plan, finalAmount, trackEvent]);

  // Fixed IRE Identification
  useEffect(() => {
	 if (!tokenRef.current) return;

	 let isMounted = true;

	 refetch().then((res) => {
		if (!isMounted) return;
		const profileData = res?.data;

		if (typeof ire !== "undefined" && profileData?.email) {
		  try {
			 const customerEmailSHA1 = sha1(profileData.email);

			 ire("identify", {
				customerId: '',
				customerEmail: customerEmailSHA1,
				customProfileId: tokenRef.current || profileData.id,
				firstName: profileData.firstName,
				lastName: profileData.lastName,
			 });

			 console.log("IRE identify called successfully");
		  } catch (error) {
			 console.error("IRE identify error:", error);
		  }
		} else {
		  console.warn(
			 "IRE identify skipped - missing profile email or IRE not loaded"
		  );
		}
	 });

	 return () => {
		isMounted = false;
	 };
  }, [refetch]);

  // Check IRE initialization
  useEffect(() => {
	 const checkIRE = setInterval(() => {
		if (typeof ire !== "undefined" && ire.invoke) {
		  console.log("✅ IRE is properly loaded and initialized");
		  clearInterval(checkIRE);
		}
	 }, 1000);

	 return () => clearInterval(checkIRE);
  }, []);

  // Initialize Payment Request for Apple Pay/Google Pay
  useEffect(() => {
	 if (!stripe) return;

	 const pr = stripe.paymentRequest({
		country: "US",
		currency: "usd",
		total: {
		  label: plan.name,
		  amount: Math.round(plan.discountedPrice * 100),
		},
		requestPayerName: true,
		requestPayerEmail: true,
		requestShipping: true,
		shippingOptions: [
		  {
			 id: "free-shipping",
			 label: "Free shipping",
			 detail: "Arrives in 5-7 days",
			 amount: 0,
		  },
		],
	 });

	 pr.canMakePayment().then((result) => {
		if (result) {
		  setPaymentRequest(pr);
		  setCanUseAppleGooglePay(true);
		}
	 });

	 pr.on("paymentmethod", async (ev) => {
		setIsProcessingPayment(true);
		setPaymentError(null);
		
		// Track wallet payment attempt
		trackEvent('AddPaymentInfo', {
		  value: plan.discountedPrice,
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  payment_method: 'wallet'
		});

		try {
		  const res = await fetch(
			 "https://backend.approvedexperiences.com/api/payments/create-intent",
			 {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ planId: plan.id }),
			 }
		  );
		  
		  if (!res.ok) {
			 throw new Error(`HTTP error! status: ${res.status}`);
		  }
		  
		  const { clientSecret } = await res.json();

		  const { error: confirmError } = await stripe.confirmCardPayment(
			 clientSecret,
			 {
				payment_method: ev.paymentMethod.id,
			 },
			 { handleActions: false }
		  );

		  if (confirmError) {
			 ev.complete("fail");
			 setIsProcessingPayment(false);
			 setPaymentError(confirmError?.message || "Payment failed");
			 
			 // Track failed payment
			 trackEvent('AddPaymentInfo', {
				value: plan.discountedPrice,
				currency: 'USD',
				content_name: plan.name,
				content_ids: [plan.id],
				payment_method: 'wallet',
				status: 'failed'
			 });
			 
			 alert(`Payment failed: ${confirmError?.message}`);
			 return;
		  }

		  ev.complete("success");
		  await handleSuccessfulPayment(ev.paymentMethod, "Apple Pay/Google Pay");
		} catch (error) {
		  console.error("Wallet payment error:", error);
		  setIsProcessingPayment(false);
		  setPaymentError("Payment failed. Please try again.");
		  
		  // Track failed payment
		  trackEvent('AddPaymentInfo', {
			 value: plan.discountedPrice,
			 currency: 'USD',
			 content_name: plan.name,
			 content_ids: [plan.id],
			 payment_method: 'wallet',
			 status: 'failed'
		  });
		  
		  ev.complete("fail");
		  alert("Payment failed. Please try again.");
		}
	 });
  }, [stripe, plan, trackEvent]);

  // Cross-browser IRE conversion tracking
  const trackIREConversionCrossBrowser = async (conversionData: any): Promise<boolean> => {
	 const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	 
	 return new Promise((resolve) => {
		if (typeof ire === 'undefined') {
		  console.warn('IRE not available for conversion tracking');
		  resolve(false);
		  return;
		}

		const attemptTracking = (attempt: number) => {
		  try {
			 ire('trackConversion', 61026, {
				orderId: conversionData.orderId,
				customProfileId: conversionData.customProfileId,
				customerId: '',
				customerEmail: conversionData.customerEmail,
				customerStatus: conversionData.customerStatus,
				currencyCode: "USD",
				orderPromoCode: promoCode || "",
				orderDiscount: 0,
				items: conversionData.items,
			 }, {
				verifySiteDefinitionMatch: true,
				callback: function (response: any) {
				  console.log(`✅ IRE conversion successful (attempt ${attempt})`, response);
				  resolve(true);
				}
			 });

			 // Safari-specific fallback
			 if (isSafari) {
				setTimeout(() => {
				  console.log('🔄 Safari fallback - assuming IRE tracking success');
				  resolve(true);
				}, 1500);
			 }

		  } catch (error) {
			 console.error(`❌ IRE conversion attempt ${attempt} failed:`, error);
			 
			 if (attempt < 3) {
				setTimeout(() => attemptTracking(attempt + 1), 800 * attempt);
			 } else {
				resolve(false);
			 }
		  }
		};

		attemptTracking(1);
	 });
  };

  const createArriviaMember = async (userData: any, addressData: any) => {
	 try {
		const arriviaMemberData = {
		  email: userData.email,
		  password: userData.password || "TempPassword123!",
		  FirstName: userData.firstName,
		  LastName: userData.lastName,
		  Address: addressData.address,
		  City: addressData.city,
		  State: addressData.state,
		  TwoLetterCountryCode: "US",
		  Phone: addressData.phone,
		  ContractNumber: `AC-${Date.now()}`,
		  UserAccountTypeID: PLAN_TO_ARRIVIA_ACCOUNT_TYPE[plan.id] || 1,
		  PostalCode: addressData.zip,
		  LanguageId: 1,
		};

		const result = await arriviaService.createMember(arriviaMemberData);
		return result;
	 } catch (error: any) {
		console.error("Error creating Arrivia member:", error);
		throw new Error(`Arrivia account creation failed: ${error.message}`);
	 }
  };

  const clearCardFields = () => {
	 setCardFields({
		cardNumber: { isFocused: false, isComplete: false, isEmpty: true },
		cardExpiry: { isFocused: false, isComplete: false, isEmpty: true },
		cardCvc: { isFocused: false, isComplete: false, isEmpty: true },
	 });
  };

  const clearFormFields = () => {
	 const firstNameInput = document.getElementById("firstName") as HTMLInputElement;
	 const lastNameInput = document.getElementById("lastName") as HTMLInputElement;
	 const emailInput = document.getElementById("email") as HTMLInputElement;
	 const addressInput = document.getElementById("address") as HTMLInputElement;
	 const zipInput = document.getElementById("zip") as HTMLInputElement;
	 const phoneInput = document.getElementById("phone") as HTMLInputElement;

	 if (firstNameInput) firstNameInput.value = "";
	 if (lastNameInput) lastNameInput.value = "";
	 if (emailInput) emailInput.value = "";
	 if (addressInput) addressInput.value = "";
	 if (zipInput) zipInput.value = "";
	 if (phoneInput) phoneInput.value = "";

	 setStateValue("california");
	 setCityValue("san-diego");
	 setPaymentMethod("credit-card");
	 setCreateAccount(true);
  };

  const clearAllForms = () => {
	 clearCardFields();
	 setTimeout(() => {
		clearFormFields();
	 }, 100);
  };

  const redirectToThankYou = ({
	 paymentType,
	 email,
	 transactionId,
	 amount,
  }: {
	 paymentType: string;
	 email: string;
	 transactionId?: string;
	 amount: number;
  }) => {
	 const params = new URLSearchParams({
		paymentType,
		email,
		transactionId: transactionId ?? "",
		amount: amount.toFixed(2),
	 });
	 router.push(`/thank-you?${params.toString()}`);
  };

  const handleSuccessfulPayment = async (
	 paymentMethod: any,
	 paymentType: string,
	 paypalOrderId?: string
  ) => {
	 const total = finalAmount;
	 const email =
		paymentMethod.billing_details?.email ||
		paymentMethod.payer?.email_address ||
		(document.getElementById("email") as HTMLInputElement)?.value.trim();

	 // Save to CSV - do this early to ensure data is captured
	 await saveToCSV(paymentMethod.id || paypalOrderId || `txn_${Date.now()}`, paymentType);

	 // Track successful purchase with Meta Pixel
	 trackPurchase(total, 'USD');
	 trackEvent('Purchase', {
		value: total,
		currency: 'USD',
		content_name: plan.name,
		content_ids: [plan.id],
		content_type: 'product',
		payment_method: paymentType.toLowerCase().replace(' ', '_')
	 });

	 // Track complete registration if account is created
	 if (createAccount) {
		trackEvent('CompleteRegistration', {
		  content_name: 'Membership Registration',
		  status: 'completed',
		  value: total,
		  currency: 'USD'
		});
	 }

	 // Cross-browser IRE conversion tracking
	 if (email) {
		const conversionData = {
		  orderId: paymentMethod.id || paypalOrderId || `txn_${Date.now()}`,
		  customProfileId: token || email,
		  customerId: '',
		  customerEmail: sha1(email),
		  customerStatus: token ? "Returning" : "New",
		  items: [
			 {
				subTotal: finalAmount,
				category: "Membership",
				sku: `PLAN-${plan.id}`,
				quantity: 1,
				name: plan.name,
			 },
		  ],
		};

		// Don't await this to avoid blocking the payment flow
		trackIREConversionCrossBrowser(conversionData).then(success => {
		  if (!success) {
			 console.warn('IRE conversion tracking failed, but payment succeeded');
		  }
		});
	 } else {
		console.warn('No email available for IRE conversion tracking');
	 }

	 const addressData = {
		address:
		  (document.getElementById("address") as HTMLInputElement)?.value.trim() ||
		  paymentMethod.billing_details?.address?.line1 ||
		  paymentMethod.purchase_units?.[0]?.shipping?.address?.address_line_1 ||
		  "",
		state:
		  stateValue ||
		  paymentMethod.billing_details?.address?.state ||
		  paymentMethod.purchase_units?.[0]?.shipping?.address?.admin_area_1 ||
		  "",
		city:
		  cityValue ||
		  paymentMethod.billing_details?.address?.city ||
		  paymentMethod.purchase_units?.[0]?.shipping?.address?.admin_area_2 ||
		  "",
		zip:
		  (document.getElementById("zip") as HTMLInputElement)?.value.trim() ||
		  paymentMethod.billing_details?.address?.postal_code ||
		  paymentMethod.purchase_units?.[0]?.shipping?.address?.postal_code ||
		  "",
		phone:
		  (document.getElementById("phone") as HTMLInputElement)?.value.trim() ||
		  paymentMethod.billing_details?.phone ||
		  "",
	 };

	 const firstName =
		paymentMethod.billing_details?.name?.split(" ")[0] ||
		paymentMethod.payer?.name?.given_name ||
		(document.getElementById("firstName") as HTMLInputElement)?.value.trim() ||
		profile?.data?.firstName;
	 const lastName =
		paymentMethod.billing_details?.name?.split(" ")[1] ||
		paymentMethod.payer?.name?.surname ||
		(document.getElementById("lastName") as HTMLInputElement)?.value.trim() ||
		profile?.data?.lastName;

	 try {
		if (createAccount) {
		  const memberPayload = {
			 userData: {
				email: profile?.data?.email ?? email,
				password: "TempPassword123!",
				firstName: firstName,
				lastName: lastName,
			 },
			 membershipTierId: plan.id,
			 paymentData: {
				stripeCustomerId: paymentMethod.id || `paypal_${paypalOrderId}`,
				promoCode: promoCode || "",
				discount: discount,
				totalAmount: total,
				items: [
				  {
					 name: plan.name,
					 category: "Membership",
					 sku: `PLAN-${plan.id}`,
					 quantity: 1,
					 unitPrice: finalAmount,
					 subTotal: finalAmount,
				  },
				],
			 },
			 addressData: addressData,
		  };

		  await createMemberFromPayment(memberPayload).unwrap();

		  // Send registration email
		  await sendRegistrationEmail();

		  clearCardFields();
		  clearAllForms();
		  redirectToThankYou({
			 paymentType,
			 email: memberPayload.userData.email,
			 transactionId: paymentMethod.id || paypalOrderId,
			 amount: total,
		  });
		} else {
		  const orderPayload = {
			 ...(token && profile?.data?.id ? { userId: profile.data.id } : {}),
			 customerEmail: profile?.data?.email ?? email,
			 customerFirstName: firstName,
			 customerLastName: lastName,
			 customerStatus: token ? "Returning" : "New",
			 currencyCode: "USD",
			 orderPromoCode: promoCode || "",
			 orderDiscount: discount,
			 totalAmount: total,
			 items: [
				{
				  name: plan.name,
				  category: "Membership",
				  sku: `PLAN-${plan.id}`,
				  quantity: 1,
				  unitPrice: finalAmount,
				  subTotal: finalAmount,
				},
			 ],
		  };

		  await createOrder(orderPayload).unwrap();

		  if (createAccount) {
			 try {
				const arriviaResult = await createArriviaMember(
				  {
					 email: orderPayload.customerEmail,
					 firstName: orderPayload.customerFirstName,
					 lastName: orderPayload.customerLastName,
					 password: "TempPassword123!",
				  },
				  addressData
				);
				console.log("✅ Arrivia member created successfully:", arriviaResult);
			 } catch (arriviaError) {
				console.error("❌ Arrivia member creation failed:", arriviaError);
			 }
		  }

		  // Send registration email
		  await sendRegistrationEmail();

		  clearCardFields();
		  clearAllForms();
		  redirectToThankYou({
			 paymentType,
			 email: orderPayload.customerEmail,
			 transactionId: paymentMethod.id || paypalOrderId,
			 amount: total,
		  });
		}
	 } catch (err) {
		console.error("Error creating order/member:", err);
		alert("Payment succeeded but order creation failed.");
	 } finally {
		// Always reset processing states
		setIsProcessingPayment(false);
		setIsProcessingPayPal(false);
		setPaymentError(null);
	 }
  };

  const handlePayPalPayment = async () => {
	 if (!validateForm()) return;

	 setIsProcessingPayPal(true);
	 setIsProcessingPayment(true);
	 setPaymentError(null);

	 // Track PayPal payment attempt
	 trackEvent('AddPaymentInfo', {
		value: plan.discountedPrice,
		currency: 'USD',
		content_name: plan.name,
		content_ids: [plan.id],
		payment_method: 'paypal'
	 });

	 try {
		const createOrderResponse = await fetch(
		  "/api/payments/paypal/create-order",
		  {
			 method: "POST",
			 headers: {
				"Content-Type": "application/json",
			 },
			 body: JSON.stringify({
				planId: plan.id,
				planName: plan.name,
				amount: plan.discountedPrice,
				userData: {
				  email: (document.getElementById("email") as HTMLInputElement)?.value.trim(),
				  firstName: (document.getElementById("firstName") as HTMLInputElement)?.value.trim(),
				  lastName: (document.getElementById("lastName") as HTMLInputElement)?.value.trim(),
				},
				shippingData: {
				  address: (document.getElementById("address") as HTMLInputElement)?.value.trim(),
				  state: stateValue,
				  city: cityValue,
				  zip: (document.getElementById("zip") as HTMLInputElement)?.value.trim(),
				  phone: (document.getElementById("phone") as HTMLInputElement)?.value.trim(),
				},
				createAccount: createAccount,
			 }),
		  }
		);

		if (!createOrderResponse.ok) {
		  throw new Error("Failed to create PayPal order");
		}

		const { orderID } = await createOrderResponse.json();

		window.location.href = `https://www.paypal.com/checkoutnow?token=${orderID}`;
	 } catch (error) {
		console.error("PayPal order creation error:", error);
		setPaymentError("Failed to initiate PayPal payment. Please try again.");
		
		// Track failed payment
		trackEvent('AddPaymentInfo', {
		  value: plan.discountedPrice,
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  payment_method: 'paypal',
		  status: 'failed'
		});
		
		alert("Failed to initiate PayPal payment. Please try again.");
		setIsProcessingPayPal(false);
		setIsProcessingPayment(false);
	 }
  };

  // Function to handle PayPal return and capture payment
  const handlePayPalReturn = async () => {
	 const urlParams = new URLSearchParams(window.location.search);
	 const token = urlParams.get("token");
	 const payerID = urlParams.get("PayerID");

	 if (token && payerID) {
		setIsProcessingPayPal(true);
		setIsProcessingPayment(true);
		setPaymentError(null);

		try {
		  let captureResponse;

		  if (createAccount) {
			 captureResponse = await fetch(
				"/api/payments/paypal/capture-and-create-member",
				{
				  method: "POST",
				  headers: {
					 "Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					 orderID: token,
					 payerID: payerID,
					 planId: plan.id,
					 userData: {
						email: (document.getElementById("email") as HTMLInputElement)?.value.trim(),
						firstName: (document.getElementById("firstName") as HTMLInputElement)?.value.trim(),
						lastName: (document.getElementById("lastName") as HTMLInputElement)?.value.trim(),
						password: "TempPassword123!",
					 },
					 shippingData: {
						address: (document.getElementById("address") as HTMLInputElement)?.value.trim(),
						state: stateValue,
						city: cityValue,
						zip: (document.getElementById("zip") as HTMLInputElement)?.value.trim(),
						phone: (document.getElementById("phone") as HTMLInputElement)?.value.trim(),
					 },
				  }),
				}
			 );
		  } else {
			 captureResponse = await fetch("/api/payments/paypal/capture-order", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({
				  orderID: token,
				  payerID: payerID,
				}),
			 });
		  }

		  if (!captureResponse.ok) {
			 throw new Error("Failed to capture PayPal payment");
		  }

		  const captureData = await captureResponse.json();

		  await handleSuccessfulPayment(captureData, "PayPal", token);

		  window.history.replaceState({}, document.title, window.location.pathname);
		} catch (error) {
		  console.error("PayPal capture error:", error);
		  setPaymentError("Failed to capture PayPal payment. Please try again.");
		  alert("Failed to capture PayPal payment. Please try again.");
		  setIsProcessingPayPal(false);
		  setIsProcessingPayment(false);
		}
	 }
  };

  // Check for PayPal return on component mount
  useEffect(() => {
	 const urlParams = new URLSearchParams(window.location.search);
	 const token = urlParams.get("token");
	 const payerID = urlParams.get("PayerID");

	 if (token && payerID && paymentMethod === "paypal") {
		handlePayPalReturn();
	 }
  }, []);

  const validateForm = () => {
	 const firstName = (document.getElementById("firstName") as HTMLInputElement)?.value.trim();
	 const lastName = (document.getElementById("lastName") as HTMLInputElement)?.value.trim();
	 const email = (document.getElementById("email") as HTMLInputElement)?.value.trim();
	 const address = (document.getElementById("address") as HTMLInputElement)?.value.trim();
	 const state = stateValue;
	 const city = cityValue;
	 const zip = (document.getElementById("zip") as HTMLInputElement)?.value.trim();
	 const phone = (document.getElementById("phone") as HTMLInputElement)?.value.trim();

	 if (!firstName || !lastName || !email || !address || !state || !city || !zip || !phone) {
		alert("Please fill all required fields.");
		return false;
	 }
	 return true;
  };

 
  // Save form data to CSV - CALLED FIRST
  const saveToCSV = async (transactionId: string = '', paymentMethod: string = '') => {
	 try {
		const formData = {
		  firstName: (document.getElementById("firstName") as HTMLInputElement)?.value.trim(),
		  lastName: (document.getElementById("lastName") as HTMLInputElement)?.value.trim(),
		  email: (document.getElementById("email") as HTMLInputElement)?.value.trim(),
		  address: (document.getElementById("address") as HTMLInputElement)?.value.trim(),
		  state: stateValue,
		  city: cityValue,
		  zip: (document.getElementById("zip") as HTMLInputElement)?.value.trim(),
		  phone: (document.getElementById("phone") as HTMLInputElement)?.value.trim(),
		  planName: plan.name,
		  planPrice: finalAmount, // Use final amount after discount
		  paymentMethod: paymentMethod,
		  transactionId: transactionId,
		  createAccount: createAccount,
		};

		console.log('💾 Saving to CSV first...');

		const response = await fetch('/api/save-to-csv', {
		  method: 'POST',
		  headers: {
			 'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formData),
		});

		if (!response.ok) {
		  const errorData = await response.json();
		  console.error('❌ Failed to save to CSV:', errorData.error);
		  return false;
		} else {
		  const result = await response.json();
		  console.log('✅ Data saved to CSV successfully. Total entries:', result.totalEntries);
		  return true;
		}
	 } catch (error) {
		console.error('❌ Error saving to CSV:', error);
		return false;
	 }
  };

  // Send email with updated CSV - CALLED AFTER CSV IS SAVED
  const sendRegistrationEmail = async () => {
	 try {
		const formData = {
		  firstName: (document.getElementById("firstName") as HTMLInputElement)?.value.trim(),
		  lastName: (document.getElementById("lastName") as HTMLInputElement)?.value.trim(),
		  email: (document.getElementById("email") as HTMLInputElement)?.value.trim(),
		  address: (document.getElementById("address") as HTMLInputElement)?.value.trim(),
		  state: stateValue,
		  city: cityValue,
		  zip: (document.getElementById("zip") as HTMLInputElement)?.value.trim(),
		  phone: (document.getElementById("phone") as HTMLInputElement)?.value.trim(),
		  planName: plan.name,
		  planPrice: plan.discountedPrice,
		  createAccount: createAccount,
		};

		console.log('📧 Sending email with updated CSV...');

		const response = await fetch('/api/send-registration-email', {
		  method: 'POST',
		  headers: {
			 'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(formData),
		});

		if (!response.ok) {
		  const errorData = await response.json();
		  console.error('❌ Failed to send registration email:', errorData.error);
		  return false;
		} else {
		  console.log('✅ Registration email sent successfully');
		  return true;
		}
	 } catch (error) {
		console.error('❌ Error sending registration email:', error);
		return false;
	 }
  };

  const handleSubmit = async () => {
	 if (isProcessingPayment) {
		console.log("Payment already in progress, please wait...");
		return;
	 }

	 if (!validateForm()) return;

	 // Save to CSV and send email immediately when pay button is clicked
	//  await saveToCSV('', paymentMethod);
	//  await sendRegistrationEmail();

	 // Continue with payment processing (removed CSV saving from here)
	 if (paymentMethod === "paypal") {
		await handlePayPalPayment();
		return;
	 }

	 if (!stripe || !elements) {
		console.error("Stripe not loaded");
		setPaymentError("Payment system not ready. Please try again.");
		return;
	 }

	 setIsProcessingPayment(true);
	 setPaymentError(null);

	 // Track credit card payment attempt
	 if (paymentMethod === "credit-card") {
		trackEvent('AddPaymentInfo', {
		  value: plan.discountedPrice,
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  payment_method: 'credit_card'
		});
	 }

	 try {
		console.log("Creating payment intent...");
		const res = await fetch(
		  "https://backend.approvedexperiences.com/api/payments/create-intent",
		  {
			 method: "POST",
			 headers: { "Content-Type": "application/json" },
			 body: JSON.stringify({ planId: plan.id }),
		  }
		);

		if (!res.ok) {
		  throw new Error(`HTTP error! status: ${res.status}`);
		}

		const { clientSecret } = await res.json();
		console.log("Client secret received");

		const cardNumberElement = elements.getElement(CardNumberElement);
		if (!cardNumberElement) {
		  throw new Error("Card elements not properly loaded");
		}

		const result = await stripe.confirmCardPayment(clientSecret, {
		  payment_method: {
			 card: cardNumberElement,
			 billing_details: {
				name: `${(document.getElementById("firstName") as HTMLInputElement)?.value.trim()} ${(document.getElementById("lastName") as HTMLInputElement)?.value.trim()}`,
				email: (document.getElementById("email") as HTMLInputElement)?.value.trim(),
				phone: (document.getElementById("phone") as HTMLInputElement)?.value.trim(),
				address: {
				  line1: (document.getElementById("address") as HTMLInputElement)?.value.trim(),
				  city: cityValue,
				  state: stateValue,
				  postal_code: (document.getElementById("zip") as HTMLInputElement)?.value.trim(),
				},
			 },
		  },
		});

		console.log("Payment result:", result);

		if (result.error) {
		  console.error("❌ Payment failed:", result.error.message);
		  setPaymentError(result.error.message || "Payment failed. Please try again.");
		  
		  // Track failed payment
		  trackEvent('AddPaymentInfo', {
			 value: plan.discountedPrice,
			 currency: 'USD',
			 content_name: plan.name,
			 content_ids: [plan.id],
			 payment_method: 'credit_card',
			 status: 'failed'
		  });
		  
		  alert(result.error.message);
		  setIsProcessingPayment(false);
		  return;
		}

		if (result.paymentIntent?.status === "succeeded") {
		  console.log("✅ Payment succeeded, processing...");
		  await handleSuccessfulPayment(result.paymentIntent, "Credit Card");
		} else {
		  console.warn("Unexpected payment status:", result.paymentIntent?.status);
		  setPaymentError("Payment completed with unexpected status. Please contact support.");
		  setIsProcessingPayment(false);
		}
	 } catch (error) {
		console.error("Payment processing error:", error);
		setPaymentError("An error occurred during payment processing.");
		
		// Track failed payment
		trackEvent('AddPaymentInfo', {
		  value: plan.discountedPrice,
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  payment_method: 'credit_card',
		  status: 'failed'
		});
		
		alert("An error occurred during payment processing.");
		setIsProcessingPayment(false);
	 }
  };

  const isPaymentButtonDisabled = () => {
	 if (isProcessingPayment) return true;
	 if (paymentMethod === "credit-card" && (!stripe || !elements)) return true;
	 if (paymentMethod === "paypal" && isProcessingPayPal) return true;
	 if (paymentMethod === "wallet") return true;
	 return false;
  };

  const getButtonText = () => {
	 if (isProcessingPayment) {
		return "Processing Payment...";
	 }
	 if (isProcessingPayPal) {
		return "Processing PayPal...";
	 }
	 if (paymentMethod === "wallet") {
		return "Select Payment Method Above";
	 }
	 if (paymentMethod === "paypal") {
		return `Pay with PayPal $${finalAmount}`;
	 }
	 return `Pay $${finalAmount}`;
  };

  // Track form field interactions
  const handleFormFieldFocus = (fieldName: string) => {
	 trackEvent('ViewContent', {
		content_category: 'Checkout Form',
		content_name: `${fieldName} Field Focus`,
		content_ids: [plan.id]
	 });
  };

  // Track create account checkbox change
  const handleCreateAccountChange = (checked: boolean) => {
	 setCreateAccount(checked);
	 trackEvent(checked ? 'Lead' : 'ViewContent', {
		content_category: 'Checkout',
		content_name: checked ? 'Create Account Selected' : 'Create Account Deselected',
		content_ids: [plan.id]
	 });
  };

  // Handle promo code application
  const handleApplyPromo = () => {
	 if (!promoCode || promoCode.trim() === '') {
		setPromoError('Please enter a promo code');
		return;
	 }

	 if (promoCode.trim().toUpperCase() === 'TRAVELER200') {
		setDiscount(200);
		setPromoApplied(true);
		setPromoError(null);
		
		// Track promo code application
		trackEvent('AddPaymentInfo', {
		  value: plan.discountedPrice - 200, // Use the discounted amount directly here
		  currency: 'USD',
		  content_name: plan.name,
		  content_ids: [plan.id],
		  promo_code: promoCode.trim()
		});
	 } else {
		setPromoError('Promo code is not valid');
		setDiscount(0);
		setPromoApplied(false);
	 }
  };

  // Reset promo when code changes
  const handlePromoCodeChange = (value: string) => {
	 setPromoCode(value);
	 if (promoApplied && value.trim().toUpperCase() !== 'TRAVELER200') {
		setDiscount(0);
		setPromoApplied(false);
		setPromoError(null);
	 }
  };

  // Read promo code from URL params on mount
  useEffect(() => {
	 const urlParams = new URLSearchParams(window.location.search);
	 const promoFromUrl = urlParams.get("promo");
	 if (promoFromUrl) {
		setPromoCode(promoFromUrl);
		// Auto-apply if it's the valid code
		if (promoFromUrl.toUpperCase() === 'TRAVELER200') {
		  setDiscount(200);
		  setPromoApplied(true);
		}
	 }
  }, []);

  return (
	 <section className="py-16 px-4 max-w-7xl mx-auto">
		
	 
		{/* Error Display */}
		{paymentError && (
		  <div className="fixed top-4 right-4 bg-red-100 border border-red-400 text-red-800 px-4 py-2 rounded text-sm z-50">
			 ❌ {paymentError}
		  </div>
		)}

		<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
		  {/* Left column */}
		  <div className="lg:col-span-3 space-y-8">
			 <Card className="bg-[#F7FAFF] border border-[#E9F0FF]">
				<CardHeader>
				  <CardTitle className="text-2xl font-bold tracking-tight text-[#0E0E0F]">
					 Shipping information
				  </CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
				  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					 <FloatingInputWrapper
						label="First Name*"
						id="firstName"
						defaultValue={profile?.data?.firstName ?? ""}
						onFocus={() => handleFormFieldFocus('First Name')}
					 />

					 <FloatingInputWrapper
						label="Last Name*"
						id="lastName"
						defaultValue={profile?.data?.lastName ?? ""}
						onFocus={() => handleFormFieldFocus('Last Name')}
					 />
				  </div>
				  <FloatingInputWrapper
					 label="Email Address*"
					 id="email"
					 defaultValue={profile?.data?.email ?? ""}
					 type="email"
					 onFocus={() => handleFormFieldFocus('Email')}
				  />

				  <FloatingInputWrapper
					 label="Street Address*"
					 id="address"
					 defaultValue={profile?.data?.address ?? ""}
					 onFocus={() => handleFormFieldFocus('Address')}
				  />

				  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					 <div className="relative">
						<label
						  htmlFor="state"
						  className="absolute left-3 -top-2.5 text-xs text-gray-500 bg-white px-1"
						>
						  State/Province*
						</label>

						<Select value={stateValue} onValueChange={setStateValue}>
						  <SelectTrigger
							 id="state"
							 className="w-full h-11 rounded-md border border-gray-300 mt-1 px-3 bg-white focus:outline-none focus:ring-0 focus:border-gray-300"
							 onFocus={() => handleFormFieldFocus('State')}
						  >
							 <SelectValue placeholder="Select a state" />
						  </SelectTrigger>
						  <SelectContent>
							 {usStates.map((state) => (
								<SelectItem key={state.value} value={state.value}>
								  {state.label}
								</SelectItem>
							 ))}
						  </SelectContent>
						</Select>
					 </div>

					 <FloatingInputWrapper
						label="City*"
						id="city"
						defaultValue={cityValue}
						onChange={(e) => setCityValue(e.target.value)}
						onFocus={() => handleFormFieldFocus('City')}
					 />
				  </div>
				  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					 <FloatingInputWrapper
						label="Zip/Postal Code*"
						id="zip"
						defaultValue=""
						onFocus={() => handleFormFieldFocus('Zip Code')}
					 />

					 <FloatingInputWrapper
						label="Phone*"
						id="phone"
						defaultValue=""
						onFocus={() => handleFormFieldFocus('Phone')}
					 />
				  </div>
				  <div className="flex items-center space-x-3 pt-2">
					 <Checkbox
						id="create-account"
						checked={!tokenRef.current ? createAccount : false}
						onCheckedChange={handleCreateAccountChange}
						disabled={!!tokenRef.current}
						className="data-[state=checked]:bg-[#1660CF] data-[state=checked]:border-[#1660CF] rounded border border-gray-300 w-5 h-5 shrink-0"
					 />
					 <Label htmlFor="create-account" className="text-sm font-normal">
						Create an account for later use
					 </Label>
				  </div>
				</CardContent>
			 </Card>

			 <Card className="bg-[#F7FAFF] border border-[#E9F0FF]">
				<CardHeader>
				  <CardTitle className="text-2xl font-bold tracking-tight">
					 Payment Method
				  </CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
				  {/* Apple Pay / Google Pay Option */}
				  {canUseAppleGooglePay && paymentRequest && (
					 <div className="border-2 border-blue-500 rounded-lg p-4">
						<div className="flex items-center">
						  <input
							 type="radio"
							 id="wallet-payment"
							 name="payment"
							 value="wallet"
							 checked={paymentMethod === "wallet"}
							 onChange={() => setPaymentMethod("wallet")}
							 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						  />
						  <Label
							 htmlFor="wallet-payment"
							 className="ml-3 font-medium"
						  >
							 Pay with Wallet
						  </Label>
						  <div className="ml-auto flex items-center space-x-3">
							 <img 
								src="/apple-pay.svg" 
								alt="Apple Pay" 
								className="h-12 w-auto"
							 />
							 <img 
								src="/google-pay.svg" 
								alt="Google Pay" 
								className="h-12 w-auto"
							 />
						  </div>
						</div>
						{paymentMethod === "wallet" && (
						  <div className="mt-4 pl-7">
							 <div className="max-w-xs">
								<PaymentRequestButtonElement
								  options={{
									 paymentRequest,
									 style: {
										paymentRequestButton: {
										  theme: "dark",
										  height: "48px",
										},
									 },
								  }}
								/>
							 </div>
							 <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
								<Lock className="w-3 h-3" />
								Securely pay with Apple Pay or Google Pay
							 </p>
						  </div>
						)}
					 </div>
				  )}

				  {/* PayPal Option */}
				  <div
					 className={`rounded-lg p-4 bg-white border-2 ${
						paymentMethod === "paypal"
						  ? "border-[#3149FA]"
						  : "border-[#A3A3A3]"
					 }`}
				  >
					 <div className="flex items-center">
						<input
						  type="radio"
						  id="paypal"
						  name="payment"
						  value="paypal"
						  checked={paymentMethod === "paypal"}
						  onChange={() => setPaymentMethod("paypal")}
						  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						/>
						<Label htmlFor="paypal" className="ml-3 font-medium">
						  PayPal
						</Label>
						<img
						  src="/paypal-logo.png"
						  alt="PayPal"
						  className="h-6 ml-auto"
						/>
					 </div>
					 {paymentMethod === "paypal" && (
						<div className="mt-4 pl-7">
						  <p className="text-sm text-gray-500 mb-4">
							 You will be redirected to the PayPal website to complete
							 your payment securely.
						  </p>
						  <div className="bg-yellow-50 border border-yellow-200 rounded-md p-3">
							 <p className="text-sm text-yellow-800">
								<strong>Note:</strong> Please return to this page after
								completing your PayPal payment to finalize your account
								creation.
							 </p>
						  </div>
						</div>
					 )}
				  </div>

				  {/* Credit Card Option */}
				  <div
					 className={`border-2 rounded-lg p-4 bg-white ${
						paymentMethod === "credit-card"
						  ? "border-[#3149FA]"
						  : "border-[#A3A3A3]"
					 }`}
				  >
					 <div className="flex items-center justify-between">
						<div className="flex items-center">
						  <input
							 type="radio"
							 id="credit-card"
							 name="payment"
							 value="credit-card"
							 checked={paymentMethod === "credit-card"}
							 onChange={() => setPaymentMethod("credit-card")}
							 className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
						  />
						  <Label htmlFor="credit-card" className="ml-3 font-medium">
							 Pay with Credit Card
						  </Label>
						</div>
						<div className="flex items-center space-x-1 max-w-[180px] flex-wrap justify-end">
						  <img
							 src="/visa.jpg"
							 alt="Visa"
							 className="h-5 w-8 object-contain"
						  />
						  <img
							 src="/discover.png"
							 alt="Discover"
							 className="h-5 w-8 object-contain"
						  />
						  <img
							 src="/maestro.png"
							 alt="Maestro"
							 className="h-5 w-8 object-contain"
						  />
						  <img
							 src="/mastercard.png"
							 alt="Mastercard"
							 className="h-5 w-8 object-contain"
						  />
						  <img
							 src="/american-express.png"
							 alt="American Express"
							 className="h-5 w-8 object-contain"
						  />
						</div>
					 </div>
					 {paymentMethod === "credit-card" && (
						<div className="space-y-4 mt-4 pl-7">
						  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							 <StripeInputWrapper
								label="Card number"
								isComplete={cardFields.cardNumber.isComplete}
							 >
								<CardNumberElement
								  options={{
									 style: {
										base: {
										  color: "#333",
										  "::placeholder": { color: "#fff" },
										  padding: "0px",
										},
									 },
								  }}
								  onFocus={() => {
									 setCardFields((prev) => ({
										...prev,
										cardNumber: {
										  ...prev.cardNumber,
										  isFocused: true,
										},
									 }));
									 handleFormFieldFocus('Card Number');
								  }}
								  onBlur={() =>
									 setCardFields((prev) => ({
										...prev,
										cardNumber: {
										  ...prev.cardNumber,
										  isFocused: false,
										},
									 }))
								  }
								  onChange={(e) =>
									 setCardFields((prev) => ({
										...prev,
										cardNumber: {
										  ...prev.cardNumber,
										  isComplete: e.complete,
										  isEmpty: e.empty,
										},
									 }))
								  }
								/>
							 </StripeInputWrapper>
							 <StripeInputWrapper
								label="Expiration Date"
								isComplete={cardFields.cardExpiry.isComplete}
							 >
								<CardExpiryElement
								  options={{
									 style: {
										base: {
										  color: "#333",
										  "::placeholder": { color: "transparent" },
										},
									 },
								  }}
								  onFocus={() => {
									 setCardFields((prev) => ({
										...prev,
										cardExpiry: {
										  ...prev.cardExpiry,
										  isFocused: true,
										},
									 }));
									 handleFormFieldFocus('Expiration Date');
								  }}
								  onBlur={() =>
									 setCardFields((prev) => ({
										...prev,
										cardExpiry: {
										  ...prev.cardExpiry,
										  isFocused: false,
										},
									 }))
								  }
								  onChange={(e) =>
									 setCardFields((prev) => ({
										...prev,
										cardExpiry: {
										  ...prev.cardExpiry,
										  isComplete: e.complete,
										  isEmpty: e.empty,
										},
									 }))
								  }
								/>
							 </StripeInputWrapper>
						  </div>
						  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
							 <StripeInputWrapper
								label="Card Security Code"
								isComplete={cardFields.cardCvc.isComplete}
							 >
								<CardCvcElement
								  options={{
									 style: {
										base: {
										  color: "#333",
										  "::placeholder": { color: "transparent" },
										},
									 },
								  }}
								  onFocus={() => {
									 setCardFields((prev) => ({
										...prev,
										cardCvc: { ...prev.cardCvc, isFocused: true },
									 }));
									 handleFormFieldFocus('Security Code');
								  }}
								  onBlur={() =>
									 setCardFields((prev) => ({
										...prev,
										cardCvc: { ...prev.cardCvc, isFocused: false },
									 }))
								  }
								  onChange={(e) =>
									 setCardFields((prev) => ({
										...prev,
										cardCvc: {
										  ...prev.cardCvc,
										  isComplete: e.complete,
										  isEmpty: e.empty,
										},
									 }))
								  }
								/>
							 </StripeInputWrapper>
							 <div className="text-right">
								<Button
								  variant="link"
								  className="text-blue-600 p-0 h-auto"
								>
								  What is this?
								</Button>
							 </div>
						  </div>
						</div>
					 )}
				  </div>
				  <div className="flex items-center space-x-2 text-sm text-gray-600">
					<Lock className="w-5 h-5 text-[#2563EB]" />
					 <span>
						We protect your payment information using encryption to
						provide bank-level security.
					 </span>
				  </div>
				</CardContent>
			 </Card>
		  </div>

		  {/* Right column */}
		  <div className="lg:col-span-2">
			 <Card className="sticky top-24 bg-[#F7FAFF]  border border-[#E9F0FF]">
				<CardHeader>
				  <CardTitle className="text-2xl font-bold tracking-tight">
					 Billing Summary
				  </CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
				  <div className="space-y-4">
					 <div className="flex justify-between">
						<span> {plan.name} Membership  </span>
						<span className="font-semibold">${plan.discountedPrice}  <del>${plan.regularPrice}</del></span>
					 </div>
					 {discount > 0 && (
						<div className="flex justify-between text-green-600">
						  <span>Discount (TRAVELER200)</span>
						  <span>-${discount}</span>
						</div>
					 )}
				  </div>
				  <hr />
				  <div className="flex justify-between text-lg font-bold">
					 <span>Total due today</span>
					 <span>${finalAmount}</span>
				  </div>
				  <div className="text-xs italic">
					 <em>
						By clicking Pay, you agree to our Terms & Conditions and
						authorize Approved Experiences to charge your card.
					 </em>
				  </div>

				  <div className="text-xs italic">
					 <em>
						Memberships automatically renew every 30 days. To cancel before your next billing cycle, please email support@approvedexperiences.com
					 </em>
				  </div>

				  {/* <div className="space-y-2">
					 <div className="flex gap-2">
						<div className="relative flex-1">
						  <input
							 type="text"
							 value={promoCode || ''}
							 onChange={(e) => handlePromoCodeChange(e.target.value)}
							 id="promoCode"
							 className="peer border-[#A3A3A3] dark:border-[#A3A3A3] bg-transparent border rounded-md outline-none px-4 py-3 w-full h-12 dark:text-[#d2e5f5] focus:border-[#A3A3A3] transition-colors duration-300"
						  />
						  <span
							 className={`${promoCode ? "-top-3 left-2 scale-[0.9] dark:bg-black bg-white px-[4px]" : "left-5 top-3"} absolute dark:peer-focus:bg-darkBgColor peer-focus:-top-3 peer-focus:bg-white dark:text-[#757575] peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-[#3B9DF8] text-[#757575] peer-focus:px-1 transition-all duration-300`}
						  >
							 Promo Code
						  </span>
						</div>
						<Button
						  type="button"
						  onClick={handleApplyPromo}
						  disabled={!promoCode || promoCode.trim() === '' || promoApplied}
						  className="px-6 py-3 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
						>
						  {promoApplied ? 'Applied' : 'Apply'}
						</Button>
					 </div>
					 {promoError && (
						<p className="text-red-500 text-sm">{promoError}</p>
					 )}
					 {promoApplied && (
						<p className="text-green-600 text-sm">✓ Promo code applied successfully!</p>
					 )}
				  </div> */}

				  <Button
					 onClick={handleSubmit}
					 className="w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
					 disabled={isPaymentButtonDisabled()}
				  >
					 {getButtonText()}
				  </Button>
				  {paymentMethod === "wallet" && (
					 <p className="text-sm text-gray-500 text-center">
						Use the Apple Pay or Google Pay button above to complete your
						payment
					 </p>
				  )}
				  {paymentMethod === "paypal" && (
					 <p className="text-sm text-gray-500 text-center">
						You'll be redirected to PayPal to complete your payment
					 </p>
				  )}
				</CardContent>
			 </Card>
		  </div>
		</div>
	 </section>
  );
}

const StripeInputWrapper = ({
  label,
  isComplete,
  children,
}: {
  label: string;
  isComplete: boolean;
  children: React.ReactNode;
}) => {
  return (
	 <div className="relative">
		<label
		  className={`absolute left-3 transition-all duration-200 -top-2.5 text-xs text-gray-500 bg-white px-1`}
		>
		  {label}
		</label>
		<div className={`flex items-center border rounded-md px-3 h-12 bg-white`}>
		  <div className="w-full border-[#fff]">{children}</div>
		  {isComplete && <CheckCircle className="w-5 h-5 text-green-500" />}
		</div>
	 </div>
  );
};

const FloatingInputWrapper = ({
  label,
  id,
  defaultValue = "",
  type = "text",
  onChange,
  onFocus,
}: {
  label: string;
  id: string;
  defaultValue?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
}) => {
  return (
	 <div className="relative">
		<label
		  htmlFor={id}
		  className="absolute left-3 -top-2.5 text-xs text-gray-500 bg-white px-1"
		>
		  {label}
		</label>

		<input
		  id={id}
		  type={type}
		  defaultValue={defaultValue}
		  onChange={onChange}
		  onFocus={onFocus}
		  className="
			 w-full
			 rounded-md
			 h-11
			 px-3
			 border
			 border-gray-300
			 bg-white
			 focus:outline-none
			 focus:ring-0
			 focus:border-gray-300
		  "
		/>
	 </div>
  );
};