"use client";

import { UpItem, makeContainer, panelInFromLeftInView, panelInRight, panelInRightTransition, textInAfterPanelTransition, textInFromLeftAfterPanelInView } from "@/components/FramerMotion";
import { useMemo, useState } from "react";

import GetStartedForm from "./GetStartedForm";
import { Lumanosimo } from "next/font/google";
import { motion } from "framer-motion";

const lumanosimo = Lumanosimo({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lumanosimo",
});

export default function GetStarted() {
  const [step, setStep] = useState(0);

  const steps = useMemo(
    () => [
      { title: "Project type" },
      { title: "Pages" },
      { title: "Business" },
      { title: "Features" },
      { title: "Content readiness" },
      { title: "Contact" },
      { title: "Review" },
    ],
    []
  );
  return (
    <div className="relative w-full min-h-screen flex flex-col mt-4 mb-20">
      <motion.div className="flex flex-col text-center bg-[#94C6AC]/60 pt-8 pb-12 md:py-16" variants={makeContainer()}
        initial="hidden"
        animate="show">
        <UpItem>
          <h1 className="text-5xl md:text-6xl">GET A QUOTE</h1>
        </UpItem>
        <UpItem>
          <p className="md:w-full w-4/5 mx-auto mt-2 text-neutral-600 text-xl md:text-2xl">
            Answer a few quick questions and I’ll email you a price range.
          </p>
        </UpItem>
      </motion.div>
      <motion.div
        className={`${lumanosimo.className} -mt-8 bg-whitish max-w-7/10 md:w-1/3 text-end py-2 md:py-4 px-2 md:px-8 text-lg md:text-2xl`}
        {...panelInFromLeftInView}
      >
        <motion.div
          {...textInFromLeftAfterPanelInView}
          transition={textInAfterPanelTransition}
        >
          {step !== steps.length - 2 && step !== steps.length - 1 ? `Question ${step + 1} of ${steps.length - 2}:` : ""} {steps[step].title}
        </motion.div>
      </motion.div>
      <div className="relative md:w-full w-4/5 max-w-xl mx-auto">
        <GetStartedForm step={step} setStep={setStep} steps={steps} />
      </div>
    </div>
  );
}