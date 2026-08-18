import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// =========================================================
// SMTP TRANSPORTER
// =========================================================

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),

  // Gmail SMTP with port 587 uses STARTTLS
  secure: false,

  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// =========================================================
// HELPERS
// =========================================================

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseEmailList(value?: string) {
  if (!value) {
    return undefined;
  }

  const emails = value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return emails.length > 0 ? emails : undefined;
}

// =========================================================
// POST /api/contact
// =========================================================

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      projectType,
      message,
    } = body;

    // =====================================================
    // REQUIRED FIELD VALIDATION
    // =====================================================

    if (
      !name ||
      !email ||
      !projectType ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name, email, project type and message are required.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // NAME VALIDATION
    // =====================================================

    const cleanName = String(name).trim();

    if (cleanName.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name must be at least 2 characters.",
        },
        { status: 400 }
      );
    }

    if (cleanName.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Name cannot exceed 100 characters.",
        },
        { status: 400 }
      );
    }

    if (!/^[A-Za-z\s'-]+$/.test(cleanName)) {
  return NextResponse.json(
    {
      success: false,
      message:
        "Name can contain only letters, spaces, hyphens and apostrophes.",
    },
    { status: 400 }
  );
}

    // =====================================================
    // EMAIL VALIDATION
    // =====================================================

    const cleanEmail = String(email)
      .trim()
      .toLowerCase();

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // PHONE VALIDATION
    // Phone is optional
    // =====================================================

    let cleanPhone = "";

    if (phone && String(phone).trim()) {
      const digitsOnly = String(phone).replace(
        /\D/g,
        ""
      );

      let phoneNumber = digitsOnly;

      // Support +91 / 91 format
      if (
        digitsOnly.startsWith("91") &&
        digitsOnly.length === 12
      ) {
        phoneNumber = digitsOnly.slice(2);
      }

      const phoneRegex = /^[6-9]\d{9}$/;

      if (!phoneRegex.test(phoneNumber)) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Please enter a valid 10-digit mobile number.",
          },
          { status: 400 }
        );
      }

      cleanPhone = phoneNumber;
    }

    // =====================================================
    // PROJECT TYPE VALIDATION
    // =====================================================

    const allowedProjectTypes = [
      "Website Development",
      "E-commerce",
      "Custom Software",
      "AI Solutions",
      "API Integration",
      "Website Maintenance",
      "Other",
    ];

    const cleanProjectType =
      String(projectType).trim();

    if (
      !allowedProjectTypes.includes(
        cleanProjectType
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Please select a valid project type.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // MESSAGE VALIDATION
    // =====================================================

    const cleanMessage = String(message).trim();

    if (cleanMessage.length < 10) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message must be at least 10 characters.",
        },
        { status: 400 }
      );
    }

    if (cleanMessage.length > 1000) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Message cannot exceed 1000 characters.",
        },
        { status: 400 }
      );
    }

    // =====================================================
    // ENVIRONMENT CHECK
    // =====================================================

    if (
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.CONTACT_EMAIL
    ) {
      console.error(
        "SMTP environment variables are missing."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // =====================================================
    // CC / BCC
    // =====================================================

    const ccEmails = parseEmailList(
      process.env.CONTACT_CC
    );

    const bccEmails = parseEmailList(
      process.env.CONTACT_BCC
    );

    // =====================================================
    // EMAIL DATA
    // =====================================================

    const displayPhone = cleanPhone
      ? `+91 ${cleanPhone}`
      : "Not provided";

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(displayPhone);
    const safeProjectType =
      escapeHtml(cleanProjectType);
    const safeMessage =
      escapeHtml(cleanMessage);

    // =====================================================
    // 1. SEND ENQUIRY TO YOU
    // =====================================================

    await transporter.sendMail({
      from: `"Tomar Techworks Website" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      cc: ccEmails,

      bcc: bccEmails,

      // Very important:
      // Reply button will reply directly to client
      replyTo: cleanEmail,

      subject: `New Website Enquiry - ${cleanProjectType}`,

      html: `
        <!DOCTYPE html>

        <html>

        <head>
          <meta charset="UTF-8" />
          <title>New Website Enquiry</title>
        </head>

        <body
          style="
            margin:0;
            padding:30px;
            background:#f8fafc;
            font-family:Arial,Helvetica,sans-serif;
          "
        >

          <div
            style="
              max-width:650px;
              margin:auto;
              background:#ffffff;
              border:1px solid #e5e7eb;
              border-radius:16px;
              overflow:hidden;
            "
          >

            <!-- HEADER -->

            <div
              style="
                background:#0f172a;
                padding:25px 30px;
                color:#ffffff;
              "
            >

              <h2
                style="
                  margin:0;
                  font-size:22px;
                "
              >
                New Website Enquiry
              </h2>

              <p
                style="
                  margin:8px 0 0;
                  color:#cbd5e1;
                  font-size:14px;
                "
              >
                Tomar Techworks
              </p>

            </div>

            <!-- CONTENT -->

            <div style="padding:30px;">

              <h3
                style="
                  margin-top:0;
                  color:#0f172a;
                "
              >
                Contact Details
              </h3>

              <table
                style="
                  width:100%;
                  border-collapse:collapse;
                "
              >

                <tr>
                  <td
                    style="
                      padding:9px 0;
                      color:#64748b;
                      width:35%;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding:9px 0;
                      font-weight:600;
                      color:#0f172a;
                    "
                  >
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:9px 0;
                      color:#64748b;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding:9px 0;
                      font-weight:600;
                      color:#0f172a;
                    "
                  >
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:9px 0;
                      color:#64748b;
                    "
                  >
                    Phone
                  </td>

                  <td
                    style="
                      padding:9px 0;
                      font-weight:600;
                      color:#0f172a;
                    "
                  >
                    ${safePhone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding:9px 0;
                      color:#64748b;
                    "
                  >
                    Project
                  </td>

                  <td
                    style="
                      padding:9px 0;
                      font-weight:600;
                      color:#0f172a;
                    "
                  >
                    ${safeProjectType}
                  </td>
                </tr>

              </table>

              <hr
                style="
                  border:0;
                  border-top:1px solid #e5e7eb;
                  margin:25px 0;
                "
              />

              <h3
                style="
                  color:#0f172a;
                "
              >
                Project Details
              </h3>

              <div
                style="
                  background:#f8fafc;
                  border-radius:10px;
                  padding:18px;
                  color:#475569;
                  line-height:1.7;
                  white-space:pre-line;
                "
              >
                ${safeMessage}
              </div>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding:18px 30px;
                background:#f8fafc;
                border-top:1px solid #e5e7eb;
                color:#94a3b8;
                font-size:12px;
              "
            >
              This enquiry was submitted through the
              Tomar Techworks website.
            </div>

          </div>

        </body>

        </html>
      `,
    });

    // =====================================================
    // 2. SEND CONFIRMATION TO CLIENT
    // =====================================================

    await transporter.sendMail({
      from: `"Tomar Techworks" <${process.env.SMTP_USER}>`,

      to: cleanEmail,

      subject:
        "Thank you for contacting Tomar Techworks",

      html: `
        <!DOCTYPE html>

        <html>

        <head>
          <meta charset="UTF-8" />
          <title>
            Thank you for contacting Tomar Techworks
          </title>
        </head>

        <body
          style="
            margin:0;
            padding:30px;
            background:#f8fafc;
            font-family:Arial,Helvetica,sans-serif;
          "
        >

          <div
            style="
              max-width:650px;
              margin:auto;
              background:#ffffff;
              border:1px solid #e5e7eb;
              border-radius:16px;
              overflow:hidden;
            "
          >

            <!-- HEADER -->

            <div
              style="
                background:#0f172a;
                padding:30px;
                color:#ffffff;
              "
            >

              <h2
                style="
                  margin:0;
                  font-size:24px;
                "
              >
                Thank You!
              </h2>

              <p
                style="
                  margin:8px 0 0;
                  color:#cbd5e1;
                  font-size:14px;
                "
              >
                Tomar Techworks
              </p>

            </div>

            <!-- CONTENT -->

            <div style="padding:30px;">

              <p
                style="
                  margin-top:0;
                  color:#334155;
                  font-size:16px;
                  line-height:1.7;
                "
              >
                Hi ${safeName},
              </p>

              <p
                style="
                  color:#475569;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Thank you for contacting
                <strong>Tomar Techworks</strong>.
                We have received your enquiry
                successfully.
              </p>

              <p
                style="
                  color:#475569;
                  font-size:15px;
                  line-height:1.7;
                "
              >
                Our team will review your
                requirements and get back to you
                as soon as possible.
              </p>

              <!-- PROJECT -->

              <div
                style="
                  margin:25px 0;
                  padding:18px;
                  background:#f8fafc;
                  border-radius:10px;
                "
              >

                <p
                  style="
                    margin:0 0 6px;
                    color:#64748b;
                    font-size:13px;
                  "
                >
                  Project Type
                </p>

                <p
                  style="
                    margin:0;
                    color:#0f172a;
                    font-weight:600;
                  "
                >
                  ${safeProjectType}
                </p>

              </div>

              <p
                style="
                  color:#475569;
                  font-size:14px;
                  line-height:1.7;
                "
              >
                If you need to provide any additional
                information, you can simply reply to
                this email.
              </p>

              <p
                style="
                  margin-bottom:0;
                  color:#334155;
                  font-size:15px;
                "
              >
                Regards,
                <br />
                <strong>
                  Tomar Techworks
                </strong>
              </p>

            </div>

            <!-- FOOTER -->

            <div
              style="
                padding:18px 30px;
                background:#f8fafc;
                border-top:1px solid #e5e7eb;
                color:#94a3b8;
                font-size:12px;
                text-align:center;
              "
            >
              This is an automated confirmation
              email. Please do not forward sensitive
              information through email.
            </div>

          </div>

        </body>

        </html>
      `,
    });

    // =====================================================
    // SUCCESS RESPONSE
    // =====================================================

    return NextResponse.json({
      success: true,
      message:
        "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error(
      "Contact form email error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to send your enquiry right now. Please try again later.",
      },
      { status: 500 }
    );
  }
}