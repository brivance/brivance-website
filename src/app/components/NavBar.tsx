'use client';

import React, { FC, useEffect } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

import { Encode_Sans_Expanded } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const encodedSans = Encode_Sans_Expanded({
  weight: "400",
  fallback: ["Helvetica", "Arial", "sans-serif"],
  variable: "--font-encoded-sans",
  subsets: ["latin"],
});

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: 'home', link: '/' },
  { name: 'projects', link: '/projects' },
  { name: 'education', link: '/education' },
  { name: 'experience', link: '/experience' },
];

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export function useUnboundedScroll(bounds: number) {
  const { scrollY } = useScroll();
  const scrollBounded = useMotionValue(0);
  const scrollYBoundedProgress = useTransform(scrollY, [0, bounds], [0, 1]);

  useEffect(() => {
    let previous = scrollY.get();

    return scrollY.on("change", (current) => {
      const diff = current - previous;
      previous = current;
      const newScrollBounded = scrollBounded.get() + diff;
      scrollBounded.set(clamp(newScrollBounded, 0, bounds));
    });
  }, [bounds, scrollY, scrollBounded]);

  return { scrollBounded, scrollYBoundedProgress, scrollY };
}

const NavBar: FC = () => {
  const { scrollYBoundedProgress } = useUnboundedScroll(150);


  const translateY = useTransform(scrollYBoundedProgress, [0, 1], [0, -20]);
  const logoScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.6]);
  const navOpacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);
  const navScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9]);
  return (
    <motion.nav
      style={{ y: translateY }}
      className={`${encodedSans.className} sticky text-white p-4 items-center bg-blackish rounded-b-md bg-opacity-90 flex justify-between top-0 z-10 px-10`}
    >
      <motion.div style={{ scale: logoScale }} className="origin-bottom-left">
        <Link href="/" className="text-2xl">
          <Image src="/logo.png" alt="Logo" width={150} height={25} />
        </Link>
      </motion.div>
      <motion.ul
        style={{ opacity: navOpacity, scale: navScale }}
        className={`${encodedSans.variable} flex list-none justify-end gap-10`}
      >
        <ul className={`${encodedSans.variable} flex list-none justify-end gap-10`}>
          {navItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="text-white no-underline text-lg font-normal">
                <strong>{item.name}</strong>
              </a>
            </li>
          ))}
        </ul>
      </motion.ul>
    </motion.nav>
  );
};

export default NavBar;
