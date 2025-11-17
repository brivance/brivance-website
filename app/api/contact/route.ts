import { NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyCaptchaToken } from "../../../lib/verifyCaptchaToken";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message, token } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const captchaOk = await verifyCaptchaToken(token);
    if (!captchaOk) {
      return NextResponse.json(
        { success: false, error: "Captcha failed" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: `Website Contact <${process.env.FROM_EMAIL!}>`,
      to: process.env.TO_EMAIL!,
      subject: `New message from ${name}`,
      replyTo: email,
      text: `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
              `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
