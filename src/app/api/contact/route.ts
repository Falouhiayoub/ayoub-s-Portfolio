import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, contact, subject, message, honeypot } = body;

    // Honeypot spam protection
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Transmission ignored" });
    }

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ error: "Identification name is required." }, { status: 400 });
    }

    if (!contact || typeof contact !== "string" || contact.trim().length === 0) {
      return NextResponse.json({ error: "Contact vector (Email or Phone) is required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ error: "Transmission payload (Message) is required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "falouhiayoub9@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "A.F.O.S Terminal <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured in environment variables.");
      return NextResponse.json(
        {
          error: "API key is not configured in server environment. Please check your .env file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const trimmedName = name.trim();
    const trimmedContact = contact.trim();
    const trimmedSubject = subject?.trim() || "General Inquiry / Project Transmission";
    const trimmedMessage = message.trim();
    const timestamp = new Date().toUTCString();

    // Determine if contact is an email for reply-to header
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedContact);

    // Cyber-styled HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              background-color: #030712;
              color: #f3f4f6;
              font-family: 'Courier New', Courier, monospace, -apple-system, sans-serif;
              padding: 24px;
              margin: 0;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #0b0f19;
              border: 1px solid #1f293d;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            .header {
              background: linear-gradient(135deg, #111827 0%, #1e1b4b 100%);
              border-bottom: 1px solid #3730a3;
              padding: 20px 24px;
            }
            .badge {
              display: inline-block;
              background: #4338ca;
              color: #e0e7ff;
              font-size: 10px;
              font-weight: 700;
              padding: 4px 8px;
              border-radius: 4px;
              letter-spacing: 1px;
              text-transform: uppercase;
            }
            .title {
              font-size: 18px;
              font-weight: 800;
              color: #ffffff;
              margin: 8px 0 0 0;
              letter-spacing: 0.5px;
            }
            .content {
              padding: 24px;
            }
            .field-group {
              margin-bottom: 18px;
              background: #111827;
              padding: 12px 16px;
              border-radius: 8px;
              border-left: 3px solid #6366f1;
            }
            .field-label {
              font-size: 11px;
              color: #9ca3af;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 4px;
            }
            .field-value {
              font-size: 14px;
              color: #ffffff;
              font-weight: 600;
            }
            .message-box {
              background: #030712;
              border: 1px solid #1f2937;
              border-radius: 8px;
              padding: 16px;
              margin-top: 20px;
            }
            .message-text {
              white-space: pre-wrap;
              color: #e5e7eb;
              font-size: 13px;
              line-height: 1.6;
            }
            .footer {
              padding: 16px 24px;
              background-color: #030712;
              border-top: 1px solid #1f2937;
              font-size: 10px;
              color: #6b7280;
              display: flex;
              justify-content: space-between;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <span class="badge">A.F.O.S TRANSMISSION RECEIVED</span>
              <h1 class="title">New Inbound Protocol Signal</h1>
            </div>
            <div class="content">
              <div class="field-group">
                <div class="field-label">Sender Identity</div>
                <div class="field-value">${trimmedName}</div>
              </div>
              
              <div class="field-group">
                <div class="field-label">Contact Vector (Email / Phone)</div>
                <div class="field-value">${trimmedContact}</div>
              </div>

              <div class="field-group">
                <div class="field-label">Inquiry Subject</div>
                <div class="field-value">${trimmedSubject}</div>
              </div>

              <div class="message-box">
                <div class="field-label">Transmitted Payload</div>
                <div class="message-text">${trimmedMessage}</div>
              </div>
            </div>
            <div class="footer">
              <div>AFOS Kernel v2.6 // Timestamp: ${timestamp}</div>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailOptions: {
      from: string;
      to: string | string[];
      subject: string;
      html: string;
      replyTo?: string;
    } = {
      from: fromEmail,
      to: [receiverEmail],
      subject: `[AFOS Signal] ${trimmedSubject} - From: ${trimmedName}`,
      html: htmlContent,
    };

    if (isEmail) {
      emailOptions.replyTo = trimmedContact;
    }

    const data = await resend.emails.send(emailOptions);

    if (data.error) {
      console.error("Resend API error:", data.error);
      return NextResponse.json(
        { error: data.error.message || "Failed to transmit message via email provider." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Transmission successfully routed to kernel.",
      id: data.data?.id,
    });
  } catch (err: any) {
    console.error("Server API exception:", err);
    return NextResponse.json(
      { error: err?.message || "Internal transmission subsystem error." },
      { status: 500 }
    );
  }
}
