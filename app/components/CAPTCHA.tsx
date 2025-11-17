"use client";

import { forwardRef, useImperativeHandle, useRef } from "react";

import ReCAPTCHA from "react-google-recaptcha";

export type CaptchaRef = {
  execute: () => Promise<string | null>;
};

type CaptchaProps = {
  siteKey?: string; // optional override
};

/**
 * A reusable invisible Google reCAPTCHA component.
 * Usage:
 *   const captchaRef = useRef<CaptchaRef>(null);
 *   const token = await captchaRef.current?.execute();
 */
const CAPTCHA = forwardRef<CaptchaRef, CaptchaProps>(({ siteKey }, ref) => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  useImperativeHandle(ref, () => ({
    async execute() {
      if (!recaptchaRef.current) return null;
      const token = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      return token;
    },
  }));

  return (
    <ReCAPTCHA
      ref={recaptchaRef}
      sitekey={siteKey ?? process.env.NEXT_PUBLIC_RECAPTCHA_KEY!}
      size="invisible"
    />
  );
});

CAPTCHA.displayName = "CAPTCHA";
export default CAPTCHA;
