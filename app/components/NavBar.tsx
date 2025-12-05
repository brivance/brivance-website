'use client';

import { FC, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

const NavBar: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className={`bg-yellow flex items-center justify-between px-12 py-6 sticky top-0 z-50 md:text-xl font-light`}>
        <Image
          src="/logo-web-studio.png"
          alt="Brivance Logo"
          width={150}
          height={150}
        />
        <div className="hidden md:flex">
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
        <div className="md:hidden">
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
              <div className="absolute right-6 mt-2 w-40 bg-dark-brown rounded-lg shadow-lg z-50">
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
    </>
  )
};

export default NavBar;
