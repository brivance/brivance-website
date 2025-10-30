'use client';

import { FC } from "react";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: "400",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const Footer: FC = () => {
  return (
    <footer>
      <div className={`${montserrat.className} mt-20 w-full bg-[#466174] rounded-t-md text-white py-2 md:py-8 text-center`}>
        <p><a
          href="mailto:brievance3@gmail.com"
          className="underline text-blue-200 hover:text-blue-100"
        >
          Contact me
        </a> with any questions or inquiries.</p>
      </div>
    </footer>
  );
};

export default Footer;
