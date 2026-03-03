// app/api/get-started/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function requiredEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const TO_EMAIL = requiredEnv("TO_EMAIL");
    const FROM_EMAIL = requiredEnv("FROM_EMAIL"); // must be a verified sender/domain in Resend

    const body = await req.json();

    // Minimal server-side sanity checks
    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    if (name.length < 2)
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const lines = [
      `New quote request`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      ``,
      `What they need: ${body?.need ?? ""}`,
      `Page range: ${body?.pages ?? ""}`,
      `Business type: ${body?.business ?? ""}`,
      `Features: ${body?.features ?? ""}`,
      `Branding/content ready: ${body?.contentReady ?? ""}`,
      ``,
      `Notes:`,
      `${body?.notes ?? ""}`,
    ];

    const subject = `Quote request — ${name} (${email})`;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email, // so you can hit reply
      subject,
      text: lines.join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
