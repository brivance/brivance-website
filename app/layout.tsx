'use client';

import "./globals.css";

import Footer from "./components/Footer";
import { Karla } from 'next/font/google';
import NavBar from "./components/NavBar";

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // choose what you use
  variable: '--font-karla',      // sets a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${karla.variable} bg-pink-white text-blue-500`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
