'use client';

import "./globals.css";

import { Afacad, Inconsolata } from 'next/font/google';

import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";

const afacad = Afacad({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-afacad',
});

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // choose what you use
  variable: '--font-inconsolata',      // sets a CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} text-black`}
      >
        <NavBar />
        <Toaster
          position="top-center"
          containerStyle={{ zIndex: 100000 }}
        />
        <div className={`${afacad.className} bg-[#E5DDCB] relative overflow-x-hidden`}>
          {children}
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
