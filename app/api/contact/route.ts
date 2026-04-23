import { contactFormSchema } from '@/lib/validations'

/**
 * POST /api/contact
 * Handles contact form submissions
 *
 * Expected body: { name, email, phone, service, message }
 *
 * TODO: Set up email delivery using Resend or Nodemailer
 * 1. Install: npm install resend
 * 2. Add RESEND_API_KEY to .env.local
 * 3. Update this handler to send emails using Resend client
 *
 * Example with Resend:
 * import { Resend } from 'resend';
 * const resend = new Resend(process.env.RESEND_API_KEY);
 * await resend.emails.send({
 *   from: 'contact@thetechhub.com',
 *   to: process.env.CONTACT_EMAIL,
 *   subject: `New Contact Form Submission from ${name}`,
 *   html: `...`,
 * });
 */

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate form data
    const validationResult = contactFormSchema.safeParse(body)

    if (!validationResult.success) {
      return new Response(
        JSON.stringify({
          error: 'Validation failed',
          details: validationResult.error.flatten(),
        }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      )
    }

    const { name, email, phone, service, message } = validationResult.data

    // TODO: Replace this console log with actual email sending
    console.log('New contact form submission:', {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Integrate with Resend or Nodemailer here
    // For now, just log and return success
    // This is a placeholder that should be updated with actual email delivery

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Contact form received. We will be in touch soon!',
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    return new Response(
      JSON.stringify({
        error: 'Failed to process contact form',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    )
  }
}
