'use client';

import { FC, useState } from 'react';

import Link from 'next/link';
import { Lumanosimo } from 'next/font/google';

const lumanosimo = Lumanosimo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-lumanosimo',      // sets a CSS variable
});

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`${lumanosimo.className} bg-[#E5DDCB] sticky top-0 z-50 w-full px-6 md:px-12 py-6 md:text-xl font-light`}
    >
      <nav className="flex items-center justify-between">
        <div className="hidden md:flex md:justify-between w-full">
          <Link href="/" className="text-5xl"> BRIANNA VANCE WEB STUDIO </Link>
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
        </div>
        <div className="md:hidden flex justify-between w-full gap-7">
          <Link href="/" className="flex flex-col items-start cursor-pointer" scroll={true}>
            <div className="text-[22px] leading-8"> BRIANNA VANCE</div>
            <div className="text-[22px] leading-8">WEB STUDIO </div>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="w-6 h-[2.5px] bg-black mb-1"></div>
            <div className="w-6 h-[2.5px] bg-black mb-1"></div>
            <div className="w-6 h-[2.5px] bg-black"></div>
          </button>
          {open && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              />
              <div className="absolute top-20 right-6 mt-2 w-40 bg-dark-brown rounded-lg shadow-lg z-50 bg-[#E5DDCB]">
                <ul className="flex flex-col items-start p-4 gap-4">
                  <li key="/">
                    <Link
                      href="/"
                      className="block text-lg font-medium hover:scale-110 transition-transform duration-200"
                      onClick={() => setOpen(false)}
                    >
                      home
                    </Link>
                  </li>
                  <li key="/portfolio">
                    <Link
                      href="/portfolio"
                      className="block text-lg font-medium hover:scale-110 transition-transform duration-200"
                      onClick={() => setOpen(false)}
                    >
                      portfolio
                    </Link>
                  </li>
                  <li key="/contact">
                    <Link
                      href="/contact"
                      className="block text-lg font-medium hover:scale-110 transition-transform duration-200"
                      onClick={() => setOpen(false)}
                    >
                      contact
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  )
};

export default NavBar;
