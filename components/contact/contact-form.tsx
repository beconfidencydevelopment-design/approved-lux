"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactFormSchema = z.object({
  firstName: z.string().trim().min(2, "First name is required"),
  lastName: z.string().trim().min(2, "Last name is required"),
  email: z.string().trim().email("Enter a valid email address"),
  message: z
    .string()
    .trim()
    .min(10, "Please provide a bit more detail (min 10 chars)")
    .max(2000, "Message is too long"),
  consent: z.literal(true, {
    errorMap: () => ({ message: "Please agree before submitting" }),
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      consent: true,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitState("idle");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await response.json();
      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Failed to send message");
      }

      setSubmitState("success");
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        consent: true,
      });
    } catch (error: any) {
      setSubmitState("error");
      setSubmitError(error?.message || "Something went wrong");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2.5">
          <label
            htmlFor="firstName"
            className="block text-base font-normal text-[#0E0E0F]"
          >
            First Name
          </label>
          <input
            id="firstName"
            placeholder="John"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none focus:border-[#001F63]"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="text-xs text-red-600">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2.5">
          <label
            htmlFor="lastName"
            className="block text-base font-normal text-[#0E0E0F]"
          >
            Last Name
          </label>
          <input
            id="lastName"
            placeholder="Doe"
            className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none focus:border-[#001F63]"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="text-xs text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2.5">
        <label htmlFor="email" className="block text-base font-normal text-[#0E0E0F]">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="h-11 w-full rounded-xl border border-[#E5E7EB] bg-white px-3 text-sm outline-none focus:border-[#001F63]"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2.5">
        <label
          htmlFor="message"
          className="block text-base font-normal text-[#0E0E0F]"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Tell us about your trip, request, or plans..."
          rows={6}
          className="w-full resize-none rounded-xl border border-[#E5E7EB] bg-white px-3 py-3 text-sm outline-none focus:border-[#001F63]"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-[#001F63] px-6 py-3 text-sm font-semibold text-white hover:bg-[#00174B] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      <label className="flex items-start gap-2 text-sm text-[#6B7280]">
        <input
          type="checkbox"
          className="mt-1 accent-[#0A1F69]"
          {...register("consent")}
        />
        <span>
          By submitting this form, you agree to be contacted by Approved Lux
          regarding your request. You can unsubscribe at any time.
        </span>
      </label>
      {errors.consent && (
        <p className="-mt-2 text-xs text-red-600">{errors.consent.message}</p>
      )}

      {submitState === "success" && (
        <p className="text-sm font-medium text-green-700">
          Message sent successfully. We will contact you soon.
        </p>
      )}
      {submitState === "error" && (
        <p className="text-sm font-medium text-red-700">{submitError}</p>
      )}
    </form>
  );
}
