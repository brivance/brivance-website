"use client";

import { Afacad, Lumanosimo } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { WebsiteCarousel } from "./components/WebsiteCarousel";
import { item, panelInFromLeftInView, panelInRight, panelInRightTransition, StaggerInView, textInAfterRightPanel, textInAfterPanelTransition, textInFromLeftAfterPanelInView, UpItem, makeContainer } from "./components/FramerMotion";

const lumanosimo = Lumanosimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lumanosimo",
});

const afacad = Afacad({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-afacad",
});

const carouselItems = [
  { kind: "video", src: "https://cdn.briannavance.com/brianna-vance-website/landing-page/sam-vance-demo.mov", type: "video/mp4" },
  { kind: "image", src: "/landing-page/washdudes-demo.png", alt: "Wash Dudes", width: 900, height: 700, priority: true },
  { kind: "video", src: "https://cdn.briannavance.com/brianna-vance-website/landing-page/bb-demo.mp4", type: "video/mp4" },
] as const;

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Inquire />
    </>
  );
}

function Hero() {
  return (
    <section className="relative w-full min-h-screen">
      <motion.div className={`relative ${afacad.className} bg-[#E8CCBC] w-full h-[210px] flex flex-col justify-center mt-14 text-6xl`} variants={makeContainer()}
        initial="hidden"
        animate="show">
        <motion.div className="absolute top-[3vw] left-[20vw] flex flex-col gap-1 text-center" variants={makeContainer()}>
          <UpItem>
            <div>YOUR NEXT WEBSITE</div>
          </UpItem>
          <UpItem>
            <div>STARTS HERE.</div>
          </UpItem>
        </motion.div>
        <motion.button
          onClick={() => window.location.href = "/get-started"}
          className={`${lumanosimo.className} absolute right-0 -bottom-[3vw] w-9/20 h-[80px] bg-whitish flex items-center overflow-hidden transition-transform duration-150 ease-out hover:scale-105 active:scale-100 cursor-pointer`}
          {...panelInRight}
          transition={panelInRightTransition}
        >
          <motion.div
            {...textInAfterRightPanel}
            transition={textInAfterPanelTransition}
            className="pl-[2vw] text-3xl"
          >
            Get a quote
          </motion.div>
        </motion.button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        className="relative"
      >
        <div className="absolute left-0 top-[5vw] w-[150%]">
          <WebsiteCarousel items={[...carouselItems]} intervalMs={9000} introDelay={0.6} />
        </div>
      </motion.div>
    </section>
  );
}

function Projects() {
  const lines = [
    "I am just a girl from Idaho, trying to make a living doing what I love.",
    "I have a degree in Computer Science with a minor in Mathematics.",
    "Some of my hobbies include rock climbing, playing the piano, and making ice cream.",
    "Currently in Michigan, I’m trying to survive the coldest winter of my life. 🥶",
    "I’ve worked full-time for companies as a web developer, but my heart lies in freelancing.",
    "As my client, you are the priority.",
  ];

  return (
    <section className="relative w-full min-h-screen">
      <motion.div className="absolute flex -top-[3vw] text-5xl w-1/2 bg-[#F8F8F8] text-end justify-end h-[160px] z-3 pr-5"
        {...panelInFromLeftInView}
      >
        <motion.div className={`${lumanosimo.className} flex justify-end mt-4 mr-4 leading-15`}
          {...textInFromLeftAfterPanelInView}
        >
          About<br />Me
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-20 left-[14vw] z-3"
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src="/brianna-vance.png"
          alt=""
          width={325}
          height={325}
          className="object-cover bg-[#D1B4B4]"
        />
      </motion.div>

      <div className="absolute top-[6vw] bg-[#E8CCBC] h-[600px] w-full z-2">
        <StaggerInView
          className="absolute left-[43vw] w-1/2 text-[25px] top-[4vw] flex flex-col gap-8"
          amount={0.25}
        >
          {lines.map((t) => (
            <UpItem key={t}>{t}</UpItem>
          ))}
        </StaggerInView>
      </div>
    </section>
  );
}

function Inquire() {
  return (
    <section className="relative w-full pb-24">
      <StaggerInView className="mx-[10vw] flex flex-wrap items-center justify-end gap-12" amount={0.45}>
        <UpItem className={`${lumanosimo.className} text-4xl`}>
          READY TO GET STARTED?
        </UpItem>

        <UpItem>
          <Link
            className="bg-[#F8F8F8] px-10 py-3 text-2xl inline-block whitespace-nowrap transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
            href="/get-started"
            scroll={true}
          >
            Start here
          </Link>
        </UpItem>
      </StaggerInView>
    </section>
  );
}