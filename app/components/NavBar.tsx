'use client';

import React, { FC, useState } from 'react';

import { Kalnia } from 'next/font/google';
import Link from 'next/link';

const kalnia = Kalnia({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // choose what you use
  variable: '--font-kalnia',      // sets a CSS variable
});

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`bg-yellow flex items-center justify-between px-12 py-6 sticky top-0 z-50 md:text-xl font-light`}>
        <div className={`text-2xl ${kalnia.className}`}><span>brianna vance</span></div>
        <div className="flex justify-end gap-8">
          <Link href="/">
            home
          </Link>
          <Link href="/portfolio">
            portfolio
          </Link>
          <Link href="/contact">
            contact
          </Link>
        </div>
      </nav>

      <nav className="flex md:hidden items-center justify-between bg-transparent px-6 py-4 sticky top-0 z-10">
        {open && (
          <div className="absolute top-full left-0 w-full bg-transparent shadow-md z-20">
            <ul className="flex flex-col items-start p-4 gap-4">
              <li key="/">
                <Link
                  href="/"
                  className="block text-lg text-blue font-medium"
                  onClick={() => setOpen(false)}
                >
                  home
                </Link>
              </li>
              <li key="/portfolio">
                <Link
                  href="/portfolio"
                  className="block text-lg text-blue font-medium"
                  onClick={() => setOpen(false)}
                >
                  portfolio
                </Link>
              </li>
              <li key="/portfolio">
                <Link
                  href="/portfolio"
                  className="block text-lg text-blue font-medium"
                  onClick={() => setOpen(false)}
                >
                  contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
};

export default NavBar;
