export const config = {
  api: {
    bodyParser: false,
  },
};

import nodemailer from "nodemailer";
import multiparty from "multiparty";

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    console.log("Request method:", req.method);
    console.log("Content-Type:", req.headers["content-type"]);

    let formData = {};

    // Check if it's multipart/form-data
    if (req.headers["content-type"]?.includes("multipart/form-data")) {
      // Handle multipart form data with multiparty (better for Vercel)
      // const multiparty = require("multiparty");
      const form = new multiparty.Form({
        maxFilesSize: 5 * 1024 * 1024, // 5MB
      });

      // Parse form data
      const [fields, files] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve([fields, files]);
        });
      });

      // Debug: Log raw fields and files
      console.log("Raw fields received:", fields);
      console.log("Raw files received:", Object.keys(files));

      formData = {
        name: Array.isArray(fields.name) ? fields.name[0] : fields.name,
        email: Array.isArray(fields.email) ? fields.email[0] : fields.email,
        mobile: Array.isArray(fields.mobile) ? fields.mobile[0] : fields.mobile,
        position: Array.isArray(fields.position)
          ? fields.position[0]
          : fields.position,
        experience: Array.isArray(fields.about)
          ? fields.about[0]
          : fields.about, // Frontend sends 'about' field
        message: Array.isArray(fields.message)
          ? fields.message[0]
          : fields.message,
        resume: files.resume?.[0] || files.resume,
      };

      console.log("Parsed formData:", formData);
    } else {
      // Handle JSON data
      formData = req.body;
    }

    const { name, email, mobile, position, experience, message, resume } =
      formData;

    // Debug logging
    console.log("Received form data:", {
      name,
      email,
      mobile,
      position,
      experience,
      hasResume: !!resume,
    });

    // Validate required fields
    console.log(
      "Validating fields - name:",
      !!name,
      "email:",
      !!email,
      "mobile:",
      !!mobile,
      "position:",
      !!position
    );

    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!mobile) missingFields.push("mobile");
    if (!position) missingFields.push("position");

    console.log("Missing fields:", missingFields);

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missingFields.join(", ")}`,
      });
    }

    // Basic email validation
    console.log("Validating email:", email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    console.log("Email validation result:", isValidEmail);
    if (!isValidEmail) {
      console.log("❌ Email validation failed");
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    // Basic phone validation (Indian format)
    console.log("Validating phone:", mobile);
    const phoneRegex = /^[6-9]\d{9}$/;
    const isValidPhone = phoneRegex.test(mobile);
    console.log("Phone validation result:", isValidPhone);
    if (!isValidPhone) {
      console.log("❌ Phone validation failed");
      return res.status(400).json({
        success: false,
        message: "Please provide a valid 10-digit mobile number",
      });
    }

    // Validate file if present
    if (resume) {
      console.log("Validating resume file:");
      console.log("File mimetype:", resume.mimetype);
      console.log("File size:", resume.size);

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "text/plain",
      ];

      if (!allowedTypes.includes(resume.mimetype)) {
        console.log("❌ Invalid file type");
        return res.status(400).json({
          success: false,
          message:
            "Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed.",
        });
      }

      if (resume.size > 5 * 1024 * 1024) {
        // 5MB
        console.log("❌ File too large");
        return res.status(400).json({
          success: false,
          message: "File too large. Maximum size is 5MB.",
        });
      }
      console.log("✅ File validation passed");
    } else {
      console.log("No resume file provided");
    }

    // Validate environment variables
    console.log("Checking environment variables:");
    console.log("EMAIL_USER exists:", !!process.env.EMAIL_USER);
    console.log("EMAIL_APP_PASSWORD exists:", !!process.env.EMAIL_APP_PASSWORD);
    console.log(
      "RECIPIENT_EMAIL:",
      process.env.RECIPIENT_EMAIL || "aurotechsolutionspvtltd@gmail.com"
    );

    if (!process.env.EMAIL_USER || !process.env.EMAIL_APP_PASSWORD) {
      console.error("❌ Missing email environment variables");
      return res.status(500).json({
        success: false,
        message: "Server configuration error. Please contact administrator.",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || "aurotechsolutionspvtltd@gmail.com",
      subject: `Career Application: ${position}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ec4899, #8b5cf6); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { background: white; padding: 10px; border-radius: 4px; border-left: 4px solid #ec4899; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>👔 New Career Application</h2>
              <p>You have received a new career application from your website.</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Mobile:</div>
                <div class="value"><a href="tel:+91${mobile}">+91 ${mobile}</a></div>
              </div>
              <div class="field">
                <div class="label">💼 Position Applied:</div>
                <div class="value">${position}</div>
              </div>
              ${
                experience
                  ? `
              <div class="field">
                <div class="label">📝 Experience/About:</div>
                <div class="value">${experience.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
              ${
                message
                  ? `
              <div class="field">
                <div class="label">💬 Additional Message:</div>
                <div class="value">${message.replace(/\n/g, "<br>")}</div>
              </div>
              `
                  : ""
              }
              ${
                resume
                  ? `
              <div class="field">
                <div class="label">📄 Resume:</div>
                <div class="value">Attached file: ${
                  resume.originalFilename || resume.newFilename
                }</div>
              </div>
              `
                  : ""
              }
            </div>
            <div class="footer">
              <p>This application was submitted from the careers page on your website.</p>
              <p>Auro Tech Solutions - Professional Web Development</p>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    // Add attachment if resume exists
    if (resume) {
      mailOptions.attachments = [
        {
          filename: resume.originalFilename,
          path: resume.path,
        },
      ];
    }

    // Send email
    console.log("Attempting to send email...");
    try {
      await transporter.sendMail(mailOptions);
      console.log(
        `✅ Career application email sent successfully from ${name} (${email}) for position: ${position}`
      );
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError);
      return res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }

    console.log("✅ All validations passed, returning success response");
    res.status(200).json({
      success: true,
      message:
        "Thank you for your application! We will review it and get back to you soon.",
    });
  } catch (error) {
    console.error("❌ Career application error:", error);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error submitting your application. Please try again later.",
    });
  }
}
