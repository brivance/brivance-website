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
  {
    kind: "video",
    src: "https://cdn.briannavance.com/brianna-vance-website/portfolio/sam-vance/laptop-demo.mov",
    poster: "/portfolio/sam-vance/laptop-demo-thumbnail.png",
    type: "video/mp4"
  },
  {
    kind: "image",
    src: "/landing-page/washdudes-demo.png",
    alt: "Wash Dudes",
    width: 900,
    height: 700,
    priority: true
  },
  {
    kind: "video",
    src: "https://cdn.briannavance.com/brianna-vance-website/landing-page/bb-demo.mp4",
    poster: "/portfolio/bayonet-battalion/bb-laptop-demo-thumbnail.png",
    type: "video/mp4"
  },
  {
    kind: "video",
    src: "https://cdn.briannavance.com/brianna-vance-website/portfolio/greencardai/portfolio-demo.mov",
    poster: "/portfolio/greencardai/portfolio-demo-thumbnail.png",
    type: "video/mp4"
  },
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
    <section className="relative w-full min-h-[500px] md:min-h-screen">
      <motion.div className={`relative ${afacad.className} bg-[#E8CCBC] w-full h-[150px] md:h-[230px] flex flex-col justify-center mt-14 text-3xl md:text-6xl`} variants={makeContainer()}
        initial="hidden"
        animate="show">
        <motion.div className="flex flex-col gap-1 text-center justify-center" variants={makeContainer()}>
          <UpItem>
            <div>YOUR NEXT WEBSITE</div>
          </UpItem>
          <UpItem>
            <div>STARTS HERE.</div>
          </UpItem>
        </motion.div>
        <motion.button
          onClick={() => window.location.href = "/get-started"}
          className={`${lumanosimo.className} absolute right-0 -bottom-[3vw] w-2/5 md:w-7/20 h-[40px] md:h-[80px] bg-whitish flex items-center overflow-hidden transition-transform duration-150 ease-out hover:scale-105 active:scale-100 cursor-pointer`}
          {...panelInRight}
          transition={panelInRightTransition}
        >
          <motion.div
            {...textInAfterRightPanel}
            transition={textInAfterPanelTransition}
            className="pl-[2vw] text-lg md:text-3xl"
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
    <section className="relative w-full min-h-[550px] md:min-h-screen">
      <motion.div className="absolute flex -top-[3vw] text-xl md:text-5xl w-1/2 bg-[#F8F8F8] text-end justify-end h-[80px] md:h-[160px] z-3 pr-5"
        {...panelInFromLeftInView}
      >
        <motion.div className={`${lumanosimo.className} flex justify-end mt-2 md:mt-4 md:mr-4 md:leading-15`}
          {...textInFromLeftAfterPanelInView}
        >
          About<br />Me
        </motion.div>
      </motion.div>

      <div className="flex flex-row items-center justify-center gap-4 md:gap-16 px-4 top-[6vw] bg-[#E8CCBC] w-full z-2 md:pb-10">
        <motion.div
          className="hidden md:block z-3"
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
            className="object-cover bg-[#D1B4B4] w-[150px] sm:w-[325px] h-full"
          />
        </motion.div>
        <StaggerInView
          className="pt-20 md:mt-12 pb-10 w-3/5 md:w-1/2 text-lg md:text-[25px] top-[4vw] flex flex-col gap-4 md:gap-8"
          amount={0.25}
        >
          {lines.map((t) => (
            <UpItem key={t}>{t}</UpItem>
          ))}
        </StaggerInView>
        <motion.div
          className="z-3 h-80 md:hidden"
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
            className="object-cover bg-[#D1B4B4] w-[150px] sm:w-[325px] h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}

function Inquire() {
  return (
    <section className="relative w-full pb-24 pt-10 md:pt-0">
      <StaggerInView className="mx-[5%] md:mx-[10vw] flex items-center justify-center md:justify-end flex-wrap gap-4 md:gap-12" amount={0.45}>
        <UpItem className={`${lumanosimo.className} md:text-4xl text-xl whitespace-nowrap`}>
          READY TO GET STARTED?
        </UpItem>

        <UpItem>
          <Link
            className="bg-[#F8F8F8] px-5 py-2 text-lg md:px-10 md:py-3 md:text-2xl inline-block whitespace-nowrap transition-transform duration-150 ease-out hover:scale-105 active:scale-95"
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