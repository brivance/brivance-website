'use client';

import "./globals.css";

import { Montserrat, Scope_One } from "next/font/google";

import Footer from "@/app/components/Footer";
import NavBar from "@/app/components/NavBar";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  weight: "400",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const scopeOne = Scope_One({
  weight: "400",
  subsets: ["latin"],
  fallback: ["Courier New", "monospace"],
  variable: "--font-code-one",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${scopeOne.className} antialiased ${montserrat.className}`}
      >
        <NavBar />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
        <Footer />
      </body>
    </html>
  );
}
