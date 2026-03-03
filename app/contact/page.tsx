"use client";

import CAPTCHA, { CaptchaRef } from "@/components/CAPTCHA";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { UpItem, makeContainer, textInAfterPanelTransition, textInAfterRightPanel } from "@/components/FramerMotion";
import { useRef, useState } from "react";

import Link from "next/link";
import { Lumanosimo } from "next/font/google";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const lumanosimo = Lumanosimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lumanosimo", // sets a CSS variable
});


export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const captchaRef = useRef<CaptchaRef>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget; // ✅ store reference before any await

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const token = await captchaRef.current?.execute();

    if (!data.name || !data.email || !data.message) {
      setStatus("error");
      toast.error("Please fill out all fields.");
      console.error("Form validation failed: Missing fields", { data });
      return;
    }

    if (!token) {
      setStatus("error");
      toast.error("Captcha verification failed. Please try again.");
      return;
    }

    data.token = token;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      toast.success("Message sent successfully!");
      form.reset();
    } else {
      setStatus("error");
      toast.error("Something went wrong. Please try again later.");
    }
  }

  return (
    <motion.div className="flex flex-col items-center min-h-screen pt-20" variants={makeContainer()}
      initial="hidden"
      animate="show">
      <motion.div className={`text-6xl mb-10`}><UpItem>GET IN TOUCH</UpItem></motion.div>
      <div className="relative h-[400px] bg-[#A9C7E2]/70 py-10">
        <div className="grid grid-cols-2 gap-10 w-3/4 mx-auto">
          <div className={`flex flex-col gap-2 text-2xl`}>
            <div className={`${lumanosimo.className} mb-4`}><UpItem>Leave a message and I&apos;ll get back to you as soon as possible.</UpItem></div>
            <div className={`${lumanosimo.className} mb-4 w-9/10`}><UpItem>If you are interested in pricing, please fill out <a href="/get-started" className="text-red-900">this form</a>.</UpItem></div>
            <UpItem>
              <div className={`flex gap-5 mt-10`}>
                <Link href="https://www.linkedin.com/in/brivance" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-20 h-20 transition-colors" />
                </Link>
                <Link href="https://www.github.com/brivance" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="w-20 h-20 transition-colors" />
                </Link>
              </div>
            </UpItem>

          </div>


          <div className="flex flex-col gap-8 justify-center text-xl">
            {/* <span className="text-2xl font-bold">Please fill out the form with any inquiries or questions.</span> */}

            <form onSubmit={handleSubmit} className="flex flex-col gap-10 text-xl">
              <UpItem className="border-b p-2 rounded focus:outline-none focus:ring-0">
                <input
                  name="name"
                  placeholder="First and Last Name"
                  required
                />
              </UpItem>
              <UpItem className="border-b p-2 rounded focus:outline-none focus:ring-0">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </UpItem>
              <UpItem className="border-b p-2 rounded min-h-[100px] focus:outline-none focus:ring-0">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                />
              </UpItem>

              {/* {status === "error" && (
              <p className="text-red-600 text-center">Something went wrong. Try again later.</p>
            )} */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="text-xl -bottom-10 right-0 text-start px-4 absolute w-1/3 bg-whitish text-black py-4 transition-transform duration-150 ease-out
    hover:scale-105 active:scale-95 mt-8 cursor-pointer"
                {...textInAfterRightPanel}
                transition={textInAfterPanelTransition}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>


          </div>
        </div>
        <CAPTCHA ref={captchaRef} />
      </div>

    </motion.div >
  );
}
