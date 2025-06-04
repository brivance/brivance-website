"use client";

import CaptchaRecognition from "./descriptions/CaptchaRecognition";
import ChordGenerator from "./descriptions/ChordGenerator";
import MaternalHealthComplications from "./descriptions/MaternalHealthComplications";

export default function Projects() {

  return (
    <>
      <div className="flex flex-col gap-6 w-96 justify-center mx-auto mt-14 text-lg mb-[10%]">
        <div className="flex flex-col w-full">
          <div className="font-bold w-full flex justify-center bg-secondary-pink border border-secondary-pink rounded-sm items-center py-1">
            Machine Learning / AI
          </div>
          <ul className="flex flex-col gap-4 my-4">
            <li>chord generator</li>
            <li>maternal health complications</li>
            <li>CAPTCHA recognition</li>
          </ul>
        </div>
        <div className="flex flex-col w-full">
          <div className="font-bold w-full flex justify-center bg-secondary-pink border border-secondary-pink rounded-sm items-center py-1">
            Web Design and Creation
          </div>
          <ul className="flex flex-col gap-4 my-4">
            <li>photography website</li>
            <li>old brianna vance website</li>
            <li>greencard ai</li>
          </ul>
        </div>
      </div>
      <ChordGenerator />
      <MaternalHealthComplications />
      <CaptchaRecognition />
    </>
  );
}
