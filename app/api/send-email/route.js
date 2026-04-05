// app/api/send-email/route.js
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email, message, name } = await request.json()

    // Validate inputs
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 }
      )
    }

    // Send email to USER
    const { data, error } = await resend.emails.send({
      from: 'AdEss Construction <onboarding@resend.dev>', // Use your verified domain or resend's test domain
      to: [email], // User's email
      subject: 'Thank you for contacting AdEss',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Reaching Out!</h2>
          <p>Hi ${name || 'there'},</p>
          <p>We received your message and will get back to you shortly.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #666;">Your Message:</h3>
            <p style="color: #333;">${message}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            Best regards,<br/>
            The AdEss Team
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    // OPTIONAL: Send notification to YOUR company email
    await resend.emails.send({
      from: 'AdEss Contact Form <onboarding@resend.dev>',
      to: ['oyimsjesse4@gmail.com'], // Your business email
      subject: `New Contact Form Submission from ${name || email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name || 'Anonymous'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ success: true, data }, { status: 200 })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}