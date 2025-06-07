"use client";

import { useEffect, useRef, useState } from "react";

import BriannaVanceWebsite from "./descriptions/BriannaVanceWebsite";
import CaptchaRecognition from "./descriptions/CaptchaRecognition";
import ChordGenerator from "./descriptions/ChordGenerator";
import GreencardAI from "./descriptions/GreencardAI";
import MaternalHealthComplications from "./descriptions/MaternalHealthComplications";
import PhotographyWebsite from "./descriptions/PhotographyWebsite";

export default function Projects() {
  const tocRef = useRef<HTMLDivElement>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {

        setShowSidebar(!entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const tocElement = tocRef.current;

    if (tocElement) {
      observer.observe(tocElement);
    }

    return () => {
      if (tocElement) {
        observer.unobserve(tocElement);
      }
    };
  }, []);

  return (
    <>
      <div ref={tocRef} className="flex flex-col gap-6 md:w-96 justify-center px-2 mx-auto mt-14 text-lg mb-[10%]">
        <div className="flex flex-col w-full">
          <div className="font-bold w-full flex justify-center bg-secondary-pink border border-secondary-pink rounded-sm items-center py-1">
            Machine Learning / AI
          </div>
          <ul className="flex flex-col gap-4 my-4">
            <li><a href="#chord-generator" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">chord generator</a></li>
            <li><a href="#maternal-health" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">maternal health complications</a></li>
            <li><a href="#captcha-recognition" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">CAPTCHA recognition</a></li>
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <div className="font-bold w-full flex justify-center bg-secondary-pink border border-secondary-pink rounded-sm items-center py-1">
            Web Design and Creation
          </div>
          <ul className="flex flex-col gap-4 my-4">
            <li><a href="#greencard-ai" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">greencard ai</a></li>
            <li><a href="#photography-website" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">photography website</a></li>
            <li><a href="#brianna-vance-website" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">brianna vance website</a></li>
          </ul>
        </div>
      </div>
      {showSidebar && (
        <div className="hidden lg:flex fixed right-10 top-1/4 flex-col gap-14 z-50 text-right fade-in">
          <a href="#chord-generator" className="hover:text-blue text-blue-hover">chord generator</a>
          <a href="#maternal-health" className="hover:text-blue text-blue-hover">maternal health</a>
          <a href="#captcha-recognition" className="hover:text-blue text-blue-hover">captcha</a>
          <a href="#greencard-ai" className="hover:text-blue text-blue-hover">greencard ai</a>
          <a href="#photography-website" className="hover:text-blue text-blue-hover">photography site</a>
          <a href="#brianna-vance-website" className="hover:text-blue text-blue-hover">my website</a>
        </div>
      )}
      <div id="chord-generator" className="scroll-mt-24">
        <ChordGenerator />
      </div>
      <div id="maternal-health" className="scroll-mt-24">
        <MaternalHealthComplications />
      </div>
      <div id="captcha-recognition" className="scroll-mt-24">
        <CaptchaRecognition />
      </div>
      <div id="greencard-ai" className="scroll-mt-24">
        <GreencardAI />
      </div>
      <div id="photography-website" className="scroll-mt-24">
        <PhotographyWebsite />
      </div>
      <div id="brianna-vance-website" className="scroll-mt-24">
        <BriannaVanceWebsite />
      </div>
    </>
  );
}
