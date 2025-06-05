"use client";

import BriannaVanceWebsite from "./descriptions/BriannaVanceWebsite";
import CaptchaRecognition from "./descriptions/CaptchaRecognition";
import ChordGenerator from "./descriptions/ChordGenerator";
import GreencardAI from "./descriptions/GreencardAI";
import MaternalHealthComplications from "./descriptions/MaternalHealthComplications";
import PhotographyWebsite from "./descriptions/PhotographyWebsite";

export default function Projects() {

  return (
    <>
      <div className="flex flex-col gap-6 w-96 justify-center mx-auto mt-14 text-lg mb-[10%]">
        <div className="flex flex-col w-full">
          <div className="font-bold w-full flex justify-center bg-secondary-pink border border-secondary-pink rounded-sm items-center py-1">
            Machine Learning / AI
          </div>
          <ul className="flex flex-col gap-4 my-4">
            <li><a href="#chord-generator" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">chord generator</a></li>
            <li><a href="#maternal-health-complications" className="hover:bg-white hover:border hover:border-gray-50 hover:rounded-md hover:shadow-sm p-2">maternal health complications</a></li>
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
      <div id="chord-generator" className="scroll-mt-24">
        <ChordGenerator />
      </div>
      <div id="maternal-health-complications" className="scroll-mt-24">
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
