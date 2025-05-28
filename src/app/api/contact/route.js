import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();
  const transporter = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS,
    },
  });

  await transporter.sendMail({
    from: '"Contact Form" <no-reply@example.com>',
    to: "ammonburgi@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}