export async function verifyCaptchaToken(token: string) {
  if (!token) return false;

  try {
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });
    const data = await res.json();
    return data.success === true && data.score >= 0.5;
  } catch (err) {
    console.error("Captcha verification error:", err);
    return false;
  }
}
