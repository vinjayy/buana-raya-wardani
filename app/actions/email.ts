"use server"

import { z } from "zod"
import nodemailer from "nodemailer"
import { redirect } from "next/navigation"

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export async function sendEmail(formData: FormData): Promise<void> {
  // Extract form data
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") || "Not provided",
    subject: formData.get("subject"),
    message: formData.get("message"),
  }

  // Validate form data
  const validatedFields = formSchema.safeParse({
    name: rawFormData.name,
    email: rawFormData.email,
    phone: rawFormData.phone,
    subject: rawFormData.subject,
    message: rawFormData.message,
  })

  // Return early if form validation fails
  if (!validatedFields.success) {
    console.error("Form validation failed:", validatedFields.error.flatten().fieldErrors)
    // Instead of returning an error object, we'll redirect with an error parameter
    redirect("/?error=validation")
  }

  try {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: validatedFields.data.email,
      subject: `Contact Form: ${validatedFields.data.subject}`,
      text: `
        Name: ${validatedFields.data.name}
        Email: ${validatedFields.data.email}
        Phone: ${validatedFields.data.phone}
        Subject: ${validatedFields.data.subject}
        
        Message:
        ${validatedFields.data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2e7d32;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedFields.data.name}</p>
          <p><strong>Email:</strong> ${validatedFields.data.email}</p>
          <p><strong>Phone:</strong> ${validatedFields.data.phone}</p>
          <p><strong>Subject:</strong> ${validatedFields.data.subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #2e7d32;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${validatedFields.data.message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #666;">
            This email was sent from the contact form on PT Buana Raya Wardani website.
          </p>
        </div>
      `,
    }

    // Send the email
    await transporter.sendMail(mailOptions)

    // Redirect to the same page with a success parameter
    redirect("/?success=true")
  } catch (error) {
    console.error("Failed to send email:", error)
    // Instead of returning an error object, we'll redirect with an error parameter
    redirect("/?error=sending")
  }
}
