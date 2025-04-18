'use client';

import "./globals.css";

import Footer from "@/app/components/Footer";
import { Montserrat } from "next/font/google";
import NavBar from "@/app/components/NavBar";
import { motion } from "framer-motion";

const montserrat = Montserrat({
  weight: "400",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
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
