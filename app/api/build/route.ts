import { z } from 'zod'

const buildRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  budget: z.string().optional(),
  useCase: z.string().min(1),
  notes: z.string().optional(),
  selectedComponents: z.record(z.string(), z.string()),
  totalPrice: z.number(),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const result = buildRequestSchema.safeParse(body)

    if (!result.success) {
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: result.error.flatten() }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const { name, email, phone, budget, useCase, notes, selectedComponents, totalPrice } = result.data

    // Log the build request (replace with email delivery when Resend is configured)
    console.log('New Build-a-PC Request:', {
      customer: { name, email, phone },
      build: { useCase, budget, totalPrice, selectedComponents, notes },
      timestamp: new Date().toISOString(),
    })

    // TODO: Send email to owner with build summary using Resend:
    // await resend.emails.send({
    //   from: 'builds@thetechhub.com',
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `New PC Build Request from ${name}`,
    //   html: buildEmailTemplate({ name, email, phone, useCase, selectedComponents, totalPrice, notes }),
    // })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
