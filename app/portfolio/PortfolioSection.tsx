import { ReactNode, useMemo } from "react";
import { easeOut, motion, useReducedMotion } from "framer-motion";
import { panelInRight, panelInRightTransition, textInAfterPanelTransition, textInAfterRightPanel } from "@/components/FramerMotion";

import Image from "next/image";
import { Lumanosimo } from "next/font/google";

const lumanosimo = Lumanosimo({
  subsets: ["latin"],
  weight: ["400"],
});

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
      <div className={`${lumanosimo.className} pt-10 w-5/7 mx-auto gap-6 text-center`}>
        <motion.h1 variants={item} className={`text-2xl md:text-4xl font-bold`}>
          {title}
        </motion.h1>
      </div>
      <div className="flex items-end gap-6 w-full max-w-[1150px] mx-auto justify-center px-4">
        {/* Laptop — fluid width, locked aspect ratio */}
        <motion.div
          variants={item}
          className="relative w-full"
          style={{ aspectRatio: "2000 / 1500" }}
          {...deviceHover}
        >
          <div className="scroll-mask absolute top-[12%] left-[9%] w-[82%] h-[67%] overflow-hidden overflow-x-hidden rounded-lg">
            {desktopSrc}
          </div>
          <Image
            src="/portfolio/laptop-frame.png"
            alt="Laptop Frame"
            fill
            className="pointer-events-none object-contain"
          />
        </motion.div>

        {/* iPhone — scales proportionally alongside laptop */}
        {mobileSrc && (
          <motion.div
            variants={item}
            className="relative shrink-0 w-[22%] max-w-[220px] min-w-[80px] mb-[5%]"
            style={{ aspectRatio: "400 / 800" }}
            {...deviceHover}
          >
            <div className="scroll-mask absolute top-[7%] left-[13%] w-[74%] h-[86%] overflow-hidden overflow-x-hidden rounded-xl">
              {mobileSrc}
            </div>
            <Image
              src="/portfolio/iphone-frame.png"
              alt="iPhone Frame"
              fill
              className="pointer-events-none object-contain"
            />
          </motion.div>
        )}
      </div>
      <div className="bg-[#D1C5F3]/50 -mt-[20%] pt-[15%] mb-30 pb-2">
        <motion.div
          variants={item} className="text-xl flex items-start p-10 rounded-lg w-full md:w-5/7 mx-auto h-full">
          <div className="flex flex-col text-start gap-2 md:text-2xl">
            {Array.isArray(description) ? (
              description.map((desc, index) =>
                <motion.p
                  key={index}
                  initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.45, ease: easeOut, delay: reduceMotion ? 0 : index * 0.04 }}
                >❀ {desc}</motion.p>
              )
            ) : (
              description
            )}
          </div>
        </motion.div>
        {link && (
          <motion.a
            href={link}
            className={`${lumanosimo.className} absolute right-0 md:h-[80px] h-[60px] flex justify-start w-1/3 md:w-1/5 bg-whitish py-2 px-2 md:px-8 text-2xl md:text-3xl select-none items-center -mt-6`}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -2, scale: 1.02 }
            }
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
            {...panelInRight}
            transition={panelInRightTransition}
          >

            <motion.div
              {...textInAfterRightPanel}
              transition={textInAfterPanelTransition}
            >
              VISIT
            </motion.div>
          </motion.a>
        )}
      </div>

    </motion.section>
  );
}