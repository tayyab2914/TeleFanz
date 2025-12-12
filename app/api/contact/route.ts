import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()
    const { firstName, lastName, email, subject, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    // Check for SMTP configuration
    const smtpHost = process.env.SMTP_HOST
    const smtpPort = process.env.SMTP_PORT
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD
    const smtpFromEmail = process.env.SMTP_FROM_EMAIL
    const smtpToEmail = process.env.SMTP_TO_EMAIL

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword || !smtpFromEmail || !smtpToEmail) {
      console.error("Missing SMTP configuration")
      return NextResponse.json({ error: "Email service is not configured" }, { status: 500 })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: Number.parseInt(smtpPort),
      secure: Number.parseInt(smtpPort) === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Format date
    const submittedAt = new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    })

    // Create nicely formatted HTML email
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #0f0a19;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0f0a19; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(124, 58, 237, 0.05) 100%); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.2); overflow: hidden;">
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); padding: 30px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                New Contact Form Submission
              </h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 14px;">
                Telefanz Website
              </p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <!-- Sender Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 16px 0; color: #a78bfa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Sender Information
                    </h2>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: rgba(255, 255, 255, 0.5); font-size: 13px;">Name</span>
                          <p style="margin: 4px 0 0 0; color: #ffffff; font-size: 16px; font-weight: 500;">
                            ${firstName} ${lastName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 8px 0;">
                          <span style="color: rgba(255, 255, 255, 0.5); font-size: 13px;">Email Address</span>
                          <p style="margin: 4px 0 0 0;">
                            <a href="mailto:${email}" style="color: #a78bfa; font-size: 16px; text-decoration: none;">
                              ${email}
                            </a>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Subject Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 12px 0; color: #a78bfa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Subject
                    </h2>
                    <p style="margin: 0; color: #ffffff; font-size: 18px; font-weight: 500;">
                      ${subject}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Message Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08); margin-bottom: 24px;">
                <tr>
                  <td style="padding: 24px;">
                    <h2 style="margin: 0 0 12px 0; color: #a78bfa; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">
                      Message
                    </h2>
                    <p style="margin: 0; color: rgba(255, 255, 255, 0.9); font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
${message}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding: 10px 0 20px 0;">
                    <a href="mailto:${email}?subject=Re: ${subject}" style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-size: 15px; font-weight: 600;">
                      Reply to ${firstName}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: rgba(0, 0, 0, 0.2); padding: 24px 40px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.05);">
              <p style="margin: 0 0 8px 0; color: rgba(255, 255, 255, 0.4); font-size: 13px;">
                Submitted on ${submittedAt}
              </p>
              <p style="margin: 0; color: rgba(255, 255, 255, 0.3); font-size: 12px;">
                This email was sent from the Telefanz contact form.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `

    // Plain text fallback
    const textContent = `
New Contact Form Submission - Telefanz

SENDER INFORMATION
------------------
Name: ${firstName} ${lastName}
Email: ${email}

SUBJECT
-------
${subject}

MESSAGE
-------
${message}

------------------
Submitted on ${submittedAt}
This email was sent from the Telefanz contact form.
    `

    // Send email
    await transporter.sendMail({
      from: `"Telefanz Contact Form" <${smtpFromEmail}>`,
      to: smtpToEmail,
      replyTo: email,
      subject: `[Contact Form] ${subject}`,
      text: textContent,
      html: htmlContent,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
