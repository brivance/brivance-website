"use client";

import { ReactNode, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

import Image from "next/image";
import { Lumanosimo } from "next/font/google";

const lumanosimo = Lumanosimo({
  subsets: ["latin"],
  weight: ["400"],
});

const easeOut = [0.22, 1, 0.36, 1] as const;

export function PortfolioSection({
  title,
  desktopSrc,
  mobileSrc,
  description,
  link,
}: {
  title: string;
  desktopSrc: ReactNode;
  mobileSrc?: ReactNode;
  description: string[] | ReactNode;
  link?: string | null;
}) {
  const reduceMotion = useReducedMotion();

  const container = useMemo(
    () => ({
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: reduceMotion
          ? { duration: 0 }
          : { staggerChildren: 0.12, delayChildren: 0.06 },
      },
    }),
    [reduceMotion]
  );

  const item = useMemo(
    () => ({
      hidden: reduceMotion
        ? { opacity: 1, y: 0 }
        : { opacity: 0, y: 18 },
      show: reduceMotion
        ? { opacity: 1, y: 0 }
        : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.7, ease: easeOut },
        },
    }),
    [reduceMotion]
  );

  const deviceHover = reduceMotion
    ? {}
    : {
      whileHover: { y: -6, scale: 1.01 },
      transition: { duration: 0.25, ease: easeOut },
    };

  return (
    <motion.section
      className="z-10 w-full"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
    >
      {/* Header */}
      <div className={`${lumanosimo.className} flex flex-col justify-end pt-20 w-5/7 mx-auto gap-6 mb-4`}>
        <motion.h1 variants={item} className="text-4xl font-bold text-end">
          {title}
        </motion.h1>

        {link && (
          <motion.a
            variants={item}
            href={link}
            className="bg-whitish py-2 px-8 w-fit text-2xl self-end -mb-14 select-none"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2, scale: 1.02, boxShadow: "0px 18px 40px rgba(0,0,0,0.12)" }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeOut }}
          >
            VISIT
          </motion.a>
        )}
      </div>

      {/* Devices row */}
      <div className="mt-10 flex items-end gap-10 w-5/7 mx-auto justify-center">
        {/* Laptop */}
        <motion.div
          variants={item}
          className="relative w-[800px] h-[400px]"
          {...deviceHover}
        >
          <div className="scroll-mask absolute top-[8%] left-[9.5%] w-[82%] h-[100%] overflow-hidden rounded-lg">
            {desktopSrc}
          </div>

          <Image
            src="/portfolio/laptop-frame.png"
            alt="Laptop Frame"
            width={800}
            height={400}
            className="relative pointer-events-none"
          />

          {/* soft sheen */}
          {!reduceMotion && (
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-[24px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: easeOut }}
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0.00), rgba(255,255,255,0.14), rgba(255,255,255,0.00))",
                maskImage:
                  "radial-gradient(120% 90% at 30% 20%, black 0%, transparent 60%)",
                WebkitMaskImage:
                  "radial-gradient(120% 90% at 30% 20%, black 0%, transparent 60%)",
              }}
            />
          )}
        </motion.div>

        {/* Phone */}
        {mobileSrc && (
          <motion.div
            variants={item}
            className="relative w-[220px] h-[320px] pb-5"
            {...deviceHover}
          >
            <div className="scroll-mask absolute top-[6%] left-[13%] w-[74%] h-[119%] overflow-hidden rounded-xl">
              {mobileSrc}
            </div>

            <Image
              src="/portfolio/iphone-frame.png"
              alt="iPhone Frame"
              width={220}
              height={400}
              className="relative pointer-events-none"
            />
          </motion.div>
        )}
      </div>

      {/* Description band */}
      <div className="bg-[#D1C5F3]/50">
        <motion.div
          variants={item}
          className="text-xl mt-40 mb-50 flex items-start p-10 rounded-lg w-5/7 mx-auto"
        >
          <div className="flex flex-col text-start gap-2 text-2xl">
            {Array.isArray(description) ? (
              description.map((desc, index) => (
                <motion.p
                  key={index}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.45, ease: easeOut, delay: reduceMotion ? 0 : index * 0.04 }}
                >
                  ❀ {desc}
                </motion.p>
              ))
            ) : (
              description
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}