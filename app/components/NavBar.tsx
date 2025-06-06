'use client';

import React, { FC, useEffect } from 'react';
import { motion, useMotionValue, useScroll, useTransform } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import MobileNavBar from './MobileNavBar';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  const translateY = useTransform(scrollYBoundedProgress, [0, 1], [0, -10]);
  const logoScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.6]);
  const navScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.9]);
  // const paddingX = 
  // const navColor = useTransform(scrollYBoundedProgress, [0, 1], ['#f7f3f3', '#eadfdf']);

  // const navOpacity = useTransform(scrollYBoundedProgress, [0, 1], [1, 0]);

  const homeTranslateY = useTransform(scrollYBoundedProgress, [0, 1], [0, -3]);
  const homeLogoTranslateY = useTransform(scrollYBoundedProgress, [0, 1], [0, -3]);
  const homeLogoScale = useTransform(scrollYBoundedProgress, [0, 1], [1, 0.5])
  const homeLogoHeight = useTransform(scrollYBoundedProgress, [0, 1], [150, 70]);


  const firstHalf = navItems.slice(0, 2);
  const secondHalf = navItems.slice(2);

  if (pathname === '/') {
    // Return a special NavBar just for the homepage
    return (
      <>
        <motion.nav
          key="homepage-nav"
          style={{
            height: homeLogoHeight,
          }}
          className={`hidden md:flex w-full sticky py-6 text-blue items-center bg-pink-white justify-center gap-14 rounded-b-md top-0 z-10 px-8`}
        >
          <motion.div
            style={{ y: homeTranslateY }}
            className={`flex list-none gap-10`}
          >
            <motion.ul className={`flex list-none gap-10`}>
              {firstHalf.map((item) => {
                return (
                  <li key={item.link} className="flex items-center">
                    <Link
                      href={item.link}
                      className={`
                  inline-block items-center no-underline hover:font-bold font-normal text-lg transition-transform duration-300 hover:scale-150
                `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
          <motion.div style={{ y: homeLogoTranslateY, scale: homeLogoScale }} className="origin-bottom-top">
            <Link href="/" className="text-2xl">
              <Image src="/full-logo.png" alt="Logo" className="min-w-48" width={500} height={100} />
            </Link>
          </motion.div>
          <motion.div
            style={{ y: homeTranslateY }}
            className={`flex list-none gap-10`}
          >
            <motion.ul className={`flex list-none gap-10`}>
              {secondHalf.map((item) => {
                return (
                  <li key={item.link} className="flex items-center">
                    <Link
                      href={item.link}
                      className={`
                  inline-block items-center no-underline hover:font-bold font-normal text-lg transition-transform duration-300 hover:scale-150
                `}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </motion.ul>
          </motion.div>
        </motion.nav>
        <MobileNavBar />
      </>
    );
  }

  return (
    <>
      <motion.nav
        key="default-nav"
        style={{ y: translateY }}
        className={`hidden md:flex w-full sticky text-blue bg-pink-white py-6 items-center rounded-b-md justify-between top-0 z-10 px-8`}
      >
        <motion.div style={{ scale: logoScale }} className="origin-left">
          <Link href="/" className="text-2xl">
            <Image src="/logo.png" alt="Logo" width={150} height={15} />
          </Link>
        </motion.div>
        <motion.div
          style={{ scale: navScale }}
          className={`flex list-none justify-end gap-10`}
        >
          <ul className={`flex list-none justify-end gap-10`}>
            {navItems.map((item) => {
              const isActive = pathname === item.link;

              return (
                <li key={item.link} className="flex items-center">
                  <Link
                    href={item.link}
                    className={`
                  inline-block items-center no-underline hover:font-bold
                  ${isActive ? 'font-bold text-2xl' : 'font-normal text-lg transition-transform duration-300 hover:scale-150'}
                `}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.nav>
      <MobileNavBar />
    </>
  );
};

export default NavBar;
