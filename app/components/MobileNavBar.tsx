"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "home", link: "/" },
  { name: "projects", link: "/projects" },
  { name: "education", link: "/education" },
  { name: "experience", link: "/experience" },
];

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex md:hidden items-center justify-between bg-pink-white px-6 py-4 sticky top-0 z-10">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={120} height={30} />
      </Link>

      <button
        onClick={() => setOpen((prev) => !prev)}
        className="focus:outline-none"
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-8 h-8 text-blue"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full bg-pink-white shadow-md z-20">
          <ul className="flex flex-col items-start p-4 gap-4">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className="block text-lg text-blue font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
