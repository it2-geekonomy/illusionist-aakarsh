import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, eventType, eventLocation, message } = body;

    const emailPassword = process.env.EMAIL_PASS || '';
    if (!emailPassword) {
      console.error('EMAIL_PASSWORD environment variable is not set');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }
    const emailUser = process.env.EMAIL_USER || '';
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || '',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
      debug: false,
      logger: false,
    });

    // Email content
    const mailOptions = {
      from: 'axe@illusionistaxe.com',
      to: 'axe@illusionistaxe.com', // Send to the same email
      replyTo: email, // Reply-to set to the form submitter's email
      subject: `New Availability Request: ${eventType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f5c518; border-bottom: 2px solid #f5c518; padding-bottom: 10px;">
            New Availability Request & Corporate Proposal
          </h2>
          
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 15px;">Contact Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold; width: 150px;">Name:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Email:</td>
                <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Phone:</td>
                <td style="padding: 8px;">${phone}</td>
              </tr>
              ` : ''}
              ${company ? `
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Company:</td>
                <td style="padding: 8px;">${company}</td>
              </tr>
              ` : ''}
              ${eventType ? `
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Event Type:</td>
                <td style="padding: 8px;">${eventType}</td>
              </tr>
              ` : ''}
              ${eventLocation ? `
              <tr>
                <td style="padding: 8px; background-color: #f5f5f5; font-weight: bold;">Event Location:</td>
                <td style="padding: 8px;">${eventLocation}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${message ? `
          <div style="margin-top: 20px;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #f5c518; white-space: pre-wrap;">
              ${message}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Request Availability form on illusionistaxe.com</p>
            <p>Submitted at: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
New Availability Request & Corporate Proposal

Contact Information:
Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company: ${company}` : ''}
${eventType ? `Event Type: ${eventType}` : ''}
${eventLocation ? `Event Location: ${eventLocation}` : ''}

${message ? `Message:\n${message}` : ''}

---
This email was sent from the Request Availability form on illusionistaxe.com
Submitted at: ${new Date().toLocaleString()}
      `,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

