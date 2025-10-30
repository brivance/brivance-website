"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget; // ✅ store reference before any await

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

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
    <div className="flex flex-col items-center min-h-screen bg-yellow px-4 pt-28">
      <div className="bg-white/40 backdrop-blur-md p-10 rounded-lg shadow-lg text-center mb-16 w-5/7">
        <span className="text-5xl font-semibold">Get in touch</span>
        <div className="flex justify-center mt-16">
          <div className="flex flex-col gap-5 text-start">
            <span className="text-2xl font-semibold">
              I would love to hear from you!
            </span>
            <span className="text-lg w-4/5">Please fill out the form with any inquiries or questions.</span>
            <div className="flex flex-row gap-3 mt-4">
              <Link href="https://www.linkedin.com/in/brivance" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-10 h-10 transition-colors" />
              </Link>
              <Link href="https://www.github.com/brivance" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-10 h-10 transition-colors" />
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto gap-4">
            <input
              name="name"
              placeholder="Your Name"
              required
              className="border p-2 rounded bg-white/70"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="border p-2 rounded bg-white/70"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="border p-2 rounded min-h-[200px] bg-white/70"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white py-2 rounded hover:bg-gray-800"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {/* {status === "error" && (
              <p className="text-red-600 text-center">Something went wrong. Try again later.</p>
            )} */}
          </form>
        </div>
      </div>
    </div>
  );
}
