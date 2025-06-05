import { AnimatePresence, motion } from "framer-motion";

import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { TrendingFlat } from "@public/icons/TrendingFlat";
import { useState } from "react";

const galleryDesignItems = [
  {
    src: "/projects/greencard/questionnaire-design.png",
    alt: "Questionnaire Form",
    caption: "Questionnaire for clients with LLM feedback",
  },
  {
    src: "/projects/greencard/editor-design.png",
    alt: "Editor Page",
    caption: "Text editor page for creating recommendation letters for clients",
  },
  {
    src: "/projects/greencard/client-table-design.png",
    alt: "Dashboard",
    caption: "A dashboard for users",
  },
];

const galleryPagesItems = [
  {
    src: "/projects/greencard/greencard-questionnaire-form.png",
    alt: "Questionnaire Form",
    caption: "The questionnaire form- clients can upload their resume to speed up the process.",
  },
  {
    src: "/projects/greencard/greencard-form-feedback.png",
    alt: "Questionnaire Form Feedback",
    caption: "When the client hits 'next', their responses are sent to an LLM for feedback. They can choose to ignore the suggestions.",
  },
  {
    src: "/projects/greencard/greencard-letters.png",
    alt: "Recommendation Letter Drafting",
    caption: "Users can draft recommendation letters with the help of AI. They can also view more information about their clients in different tabs as they draft.",
  },
  {
    src: "/projects/greencard/greencard-dashboard.png",
    alt: "Client Dashboard",
    caption: "Users can invite or delete clients. Inviting them will send an email with a link to a questionnaire to fill out. If they click on a client that is ready, they can start drafting their recommendation letters.",
  },
  {
    src: [
      "/projects/greencard/greencard-register.png",
      "/projects/greencard/greencard-login.png"
    ],
    alt: "Register and Login Forms",
    caption: "Register and login forms have Zod validation to ensure smooth error handling on the frontend.",
  },
];

export default function GreenCardAI() {
  const [activeTab, setActiveTab] = useState("Figma Designs");
  const tabs = ["Figma Designs", "Implementation", "Demo"];
  const [[designIndex, designDirection], setDesignIndex] = useState([0, 0]);
  const [[pagesIndex, pagesDirection], setPagesIndex] = useState([0, 0]);
  const { src: designSrc, alt: designAlt, caption: designCaption } = galleryDesignItems[designIndex];
  const { src: pagesSrc, alt: pagesAlt, caption: pagesCaption } = galleryPagesItems[pagesIndex];

  const designTotal = galleryDesignItems.length;
  const pagesTotal = galleryPagesItems.length;

  const designPaginate = (dir: number) => {
    setDesignIndex(([prevIndex]) => {
      const newIndex = (prevIndex + dir + designTotal) % designTotal;
      return [newIndex, dir];
    });
  };

  const pagesPaginate = (dir: number) => {
    setPagesIndex(([prevIndex]) => {
      const newIndex = (prevIndex + dir + pagesTotal) % pagesTotal;
      return [newIndex, dir];
    });
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Figma Designs":
        return (
          <div className="flex flex-col gap-6 items-center mt-10">
            <div className="relative w-[700px] h-auto flex flex-col items-center gap-2">
              <div className="flex justify-center gap-[3%] w-full">
                <button
                  onClick={() => designPaginate(-1)}
                  className="flex items-center gap-1 text-sm text-gray-400 px-2 h-6 bg-gray-100 rounded-sm hover:bg-gray-200"
                >
                  <TrendingFlat className="h-4 w-4 scale-x-[-1]" />
                  <div>Prev</div>
                </button>
                <button
                  onClick={() => designPaginate(1)}
                  className="flex items-center gap-1 text-sm text-gray-400 px-2 h-6 bg-gray-100 rounded-sm hover:bg-gray-200"
                >
                  <div>Next</div>
                  <TrendingFlat className="h-4 w-4" />
                </button>
              </div>
              <div className="flex justify-center relative w-full h-auto mt-4">
                <AnimatePresence custom={designDirection} mode="wait">
                  <motion.div
                    key={designIndex}
                    custom={designDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    className="absolute w-full"
                  >
                    <Image
                      src={designSrc}
                      alt={designAlt}
                      width={1000}
                      height={400}
                      className="shadow-lg border border-gray-300"
                    />
                    <div className="text-center mt-4">{designCaption}</div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      case "Implementation":
        return (
          <div className="flex flex-col gap-6 items-center mt-10">
            <div className="relative w-[700px] h-auto flex flex-col items-center gap-2">
              <div className="flex justify-center gap-[3%] w-full">
                <button
                  onClick={() => pagesPaginate(-1)}
                  className="flex items-center gap-1 text-sm text-gray-400 px-2 h-6 bg-gray-100 rounded-sm hover:bg-gray-200"
                >
                  <TrendingFlat className="h-4 w-4 scale-x-[-1]" />
                  <div>Prev</div>
                </button>
                <button
                  onClick={() => pagesPaginate(1)}
                  className="flex items-center gap-1 text-sm text-gray-400 px-2 h-6 bg-gray-100 rounded-sm hover:bg-gray-200"
                >
                  <div>Next</div>
                  <TrendingFlat className="h-4 w-4" />
                </button>
              </div>
              <div className="flex justify-center relative w-full h-auto mt-4">
                <AnimatePresence custom={pagesDirection} mode="wait">
                  <motion.div
                    key={pagesIndex}
                    custom={pagesDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                    className="absolute w-full"
                  >
                    <Image
                      src={Array.isArray(pagesSrc) ? pagesSrc[0] : pagesSrc}
                      alt={pagesAlt}
                      width={1000}
                      height={400}
                      className="shadow-lg border border-gray-300"
                    />
                    {Array.isArray(pagesSrc) && (
                      <Image
                        src={pagesSrc[1]}
                        alt={pagesAlt}
                        width={1000}
                        height={400}
                        className="shadow-lg border border-gray-300"
                      />
                    )}
                    <div className="text-center mt-4">{pagesCaption}</div>

                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        );
      case "Demo":
        return (
          <div className="w-full">
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/T4zGveEOdfE"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-md"
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center w-3xl mx-auto">
      <div className="mx-auto text-dark-blue font-medium text-5xl pb-7">
        GreenCard AI
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        GreenCard is a business that automates NIW petitions for immigration lawyers.
        Aside from the landing page, I designed and implemented the frontend for GreenCard.
      </div>
      <div className="ml-[7%] px-[1%] py-[0.5%] flex justify-start w-5/7 bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: Next.js, React, TypeScript, JWT for authentication, Tailwind, Zod Validation, Zustand, LocalStorage, Edge Middleware
      </div>
      <a
        href="https://www.greencardai.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end items-center hover:bg-blue-hover -mt-[2.25%] ml-auto mr-[7%] mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
        <div>Check Out GreenCard AI</div>
        <ArrowOutward className="h-4 w-4" />
      </a>
      <div>
        <div className="flex justify-center gap-4 mt-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 text-lg mb-[4%] py-2 border-b-2 font-medium transition-all duration-500 ${activeTab === tab
                ? "bg-light-blue border border-light-blue rounded-md text-blue"
                : "border-transparent hover:text-blue hover:font-extrabold cursor-pointer"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="min-h-[700px] px-8 mt-4 text-center mb-[20%]">{renderContent()}</div>
      </div>
    </div>
  );
}