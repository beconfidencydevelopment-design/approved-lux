import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    const {
      firstName,
      lastName,
      email,
      address,
      state,
      city,
      zip,
      phone,
      planName,
      planPrice,
      createAccount,
    } = formData;

    /* ---------------- CSV READ ---------------- */
    const csvFilePath = path.join(process.cwd(), 'data', 'form-submissions.csv');
    let csvContent = '';

    if (fs.existsSync(csvFilePath)) {
      csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    } else {
      csvContent =
        `Timestamp,First Name,Last Name,Email,Phone,Address,City,State,ZIP,Plan Name,Plan Price,Create Account\n` +
        `${new Date().toISOString()},"${firstName}","${lastName}","${email}","${phone}","${address}","${city}","${state}","${zip}","${planName}","${planPrice}","${createAccount ? 'Yes' : 'No'}"`;
    }

    const csvBase64 = Buffer.from(csvContent).toString('base64');

    /* ---------------- ADMIN EMAIL ---------------- */
    const resend = new Resend("re_4TPsAvkg_J2uwjFugTaFHfxpoCNcUZpVt");

    await resend.emails.send({
      from: 'Approved Lux <system@notifications.approved-jets.com>',
      to: ['aaron@approvedexperiences.com', 'support@approvedexperiences.com'],
      subject: `New Approve Membership Registration - ${planName}`,
      html: `
        <h2>New Membership Registration</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}, ${city}, ${state} ${zip}</p>
        <p><strong>Plan:</strong> ${planName}</p>
        <p><strong>Price:</strong> $${planPrice}</p>
        <p><strong>Create Account:</strong> ${createAccount ? 'Yes' : 'No'}</p>
      `,
      attachments: [
        {
          filename: `all-registrations-${new Date().toISOString().split('T')[0]}.csv`,
          content: csvBase64,
          contentType: 'text/csv',
        },
      ],
    });

    /* ---------------- USER EMAIL ---------------- */
    await resend.emails.send({
      from: 'Approved Lux <system@notifications.approved-jets.com>',
      to: email,
      subject: `Thank You for Your Registration - ${planName}`,
      html: `
        <h2>Thank You for Registering!</h2>
        <p>Dear ${firstName},</p>
        <p>Thank you for registering for the <strong>${planName}</strong> membership plan.</p>
        <ul>
          <li>Plan: ${planName}</li>
          <li>Price: $${planPrice}</li>
        </ul>
        <p>Best regards,<br/>Approve Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
