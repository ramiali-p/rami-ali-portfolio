import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json()

  try {
    const result =await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'ramiali3728@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })
    console.log('resend email: ', result)
    return NextResponse.json({ success: true })
  } catch (error) {
    console.log('Resend error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}