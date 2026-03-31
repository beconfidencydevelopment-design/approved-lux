import { NextRequest, NextResponse } from 'next/server';
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
      paymentMethod,
      transactionId,
      createAccount
    } = formData;

    // Define CSV file path
    const dataDir = path.join(process.cwd(), "data");
    const csvFilePath = path.join(dataDir, "form-submissions.csv");
    console.log("🚀 ~ POST ~ csvFilePath:", csvFilePath)

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
      console.log('✅ Created data directory');
    }

    // CSV Headers
    const headers = 'Timestamp,First Name,Last Name,Email,Phone,Address,City,State,ZIP,Plan Name,Plan Price,Payment Method,Transaction ID,Create Account\n';

    // Create new row with proper escaping
    const timestamp = new Date().toISOString();
    const newRow = `${timestamp},"${firstName}","${lastName}","${email}","${phone}","${address}","${city}","${state}","${zip}","${planName}","${planPrice}","${paymentMethod}","${transactionId}","${createAccount ? 'Yes' : 'No'}"\n`;

    // Check if file exists
    if (!fs.existsSync(csvFilePath)) {
      // Create new file with headers and first row
      fs.writeFileSync(csvFilePath, headers + newRow, 'utf-8');
      console.log('✅ Created new CSV file with headers and first entry');
    } else {
      // Append to existing file
      fs.appendFileSync(csvFilePath, newRow, 'utf-8');
      console.log('✅ Appended new entry to existing CSV file');
    }

    // Read and log the file to verify
    const currentContent = fs.readFileSync(csvFilePath, 'utf-8');
    const lineCount = currentContent.split('\n').filter(line => line.trim()).length;
    console.log(`CSV now contains ${lineCount - 1} data rows (excluding header)`);

    return NextResponse.json({ 
      success: true, 
      message: 'Data saved to CSV successfully',
      totalEntries: lineCount - 1
    });
  } catch (error: any) {
    console.error('Error saving to CSV:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to save to CSV' },
      { status: 500 }
    );
  }
}