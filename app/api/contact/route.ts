import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const contactPayloadSchema = z.object({
  firstName: z.string().trim().min(2),
  lastName: z.string().trim().min(2),
  email: z.string().trim().email(),
  message: z.string().trim().min(10).max(2000),
  consent: z.literal(true),
});

const RESEND_API_KEY =
  process.env.RESEND_API_KEY || "re_4TPsAvkg_J2uwjFugTaFHfxpoCNcUZpVt";

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactPayloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          issues: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { firstName, lastName, email, message } = parsed.data;
    const resend = new Resend(RESEND_API_KEY);

    const now = new Date();
    const submittedAt = now.toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    await resend.emails.send({
      from: "Approved Lux <system@notifications.approved-jets.com>",
      to: ["support@approvedexperiences.com"],
      replyTo: email,
      subject: `New Contact Request - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827;">
          <h2 style="margin: 0 0 12px;">New Contact Form Submission</h2>
          <p style="margin: 0 0 18px; color: #4b5563;">
            A user submitted the Contact Us form on approvedexperiences.com.
          </p>
          <table cellpadding="0" cellspacing="0" style="width:100%; max-width:680px; border-collapse:collapse; border:1px solid #e5e7eb;">
            <tr>
              <td style="width:180px; padding:10px 12px; border-bottom:1px solid #e5e7eb; background:#f9fafb; font-weight:600;">Submitted At</td>
              <td style="padding:10px 12px; border-bottom:1px solid #e5e7eb;">${escapeHtml(submittedAt)}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px; border-bottom:1px solid #e5e7eb; background:#f9fafb; font-weight:600;">Name</td>
              <td style="padding:10px 12px; border-bottom:1px solid #e5e7eb;">${escapeHtml(firstName)} ${escapeHtml(lastName)}</td>
            </tr>
            <tr>
              <td style="padding:10px 12px; border-bottom:1px solid #e5e7eb; background:#f9fafb; font-weight:600;">Email</td>
              <td style="padding:10px 12px; border-bottom:1px solid #e5e7eb;">
                <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 12px; background:#f9fafb; font-weight:600; vertical-align:top;">Message</td>
              <td style="padding:10px 12px; white-space:pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Contact form send error:", error);
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to send message" },
      { status: 500 }
    );
  }
}
