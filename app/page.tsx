"use client";

import Image from 'next/image';
import { Kalnia } from 'next/font/google';
import Link from 'next/link';

const kalnia = Kalnia({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // choose what you use
  variable: '--font-kalnia',      // sets a CSS variable
});

export default function Home() {
  return (
    <span>
      <div>
        <Hero />
        <Projects />
        <Inquire />
      </div>
    </span>
  );
}


function Hero() {
  return (
    <div className={`bg-yellow w-full min-h-screen pt-10`}>
      <div className="hidden md:flex">
        <div className="flex md:flex-row flex-col justify-between mx-auto w-5/7 min-h-[70vh] items-center gap-[10%]">
          <div className="flex flex-col justify-between min-h-[60vh]">
            <div className={`${kalnia.className} flex flex-col justify-start text-7xl md:text-[8rem] gap-0 tracking-tight leading-tight -mt-3`}>
              <span>BRIANNA</span>
              <span className="-mt-6">VANCE</span>
            </div>
            <Link
              className="px-6 py-2 bg-white w-fit text-xl cursor-pointer"
              href="/portfolio">
              view my work
            </Link>
          </div>
          <div>
            <div className="flex flex-col justify-end text-2xl text-end -ml-32 whitespace-nowrap mt-32">
              <span>web designer.</span>
              <span>software engineer.</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center overflow-visible">
            {/* background box */}
            <div className="absolute w-full h-full bg-purple -left-[6%] top-[3%]"></div>

            {/* image */}
            <Image
              src="/brianna-vance.jpeg"
              alt="Hero Image"
              width={250}
              height={250}
              priority
              className="relative z-10 bg-black min-w-[250px]"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden flex flex-col justify-center mb-10 text-2xl">
        <div className={`${kalnia.className} flex flex-col justify-start text-7xl md:text-[8rem] gap-0 tracking-tight leading-tight`}>
          <span>BRIANNA</span>
          <span className="-mt-4">VANCE</span>
        </div>
        <div className="flex justify-end mx-4 mt-4">
          <div className="flex flex-col justify-end text-xl whitespace-nowrap text-end mr-4">
            <span>web designer.</span>
            <span>software engineer.</span>
          </div>
          <div className="flex justify-end items-end relative overflow-visible">
            {/* background box */}
            <div className="absolute w-full h-full bg-purple -left-[6%] top-[3%]"></div>

            {/* image */}
            <Image
              src="/brianna-vance.jpeg"
              alt="Hero Image"
              width={150}
              height={150}
              priority
              className="relative z-10 bg-black"
            />
          </div>
        </div>
        <Link
          className="px-6 py-2 bg-white w-fit text-xl cursor-pointer mx-auto mt-20"
          href="/portfolio">
          view my work
        </Link>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="bg-white w-full pt-40">
      <div className="bg-white w-5/7 mx-auto text-2xl">
        previous custom designs
      </div>
      <div className="flex flex-col md:flex-row gap-10 md:gap-[5%] justify-between w-9/10 md:w-5/7 mx-auto mt-16 mb-54">
        <video
          className="md:w-1/2"
          // preload="metadata"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/web-design-example-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          className="md:w-1/2"
          // preload="metadata"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/baybat-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>

  );
}

function Inquire() {
  return (
    <div className="bg-light-purple w-full pt-60 pb-60">
      <div className="flex justify-center mx-auto text-2xl">
        exactly the way you want it.
      </div>
      <Link className="bg-white px-4 py-2 mx-auto mt-16 block text-xl w-fit" href="/contact">
        inquire today
      </Link>
    </div>
  );
}