import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { useState } from "react";

export default function GreenCardAI() {

  const [activeTab, setActiveTab] = useState("Figma Designs");

  const tabs = ["Figma Designs", "Implementation", "Demo"];

  const renderContent = () => {
    switch (activeTab) {
      case "Figma Designs":
        return (
          <div className="flex flex-col gap-5 items-center">
            <div className="mb-10">
              Before diving in, I created a few figma designs for some major parts of the app.
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-1">
                <Image src="/projects/greencard/questionnaire-design.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Questionnaire Form" />
                <div>Questionnaire for clients with LLM feedback</div>
              </div>
              <div className="flex flex-col gap-1">
                <Image src="/projects/greencard/editor-design.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Questionnaire Form" />
                <div>Text editor page for creating recommendation letters for clients</div>
              </div>
              <div className="flex flex-col gap-1">
                <Image src="/projects/greencard/client-table-design.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Questionnaire Form" />
                <div>A dashboard for users</div>
              </div>
            </div>
          </div>
        );
      case "Implementation":
        return (
          <div className="flex flex-col gap-5 items-center">
            <div className="mb-10">
              These are pages I created for GreenCard AI. See how they compare to the mockups! (Keep in mind, this is all dummy data.)
            </div>
            <div className="flex flex-col gap-18 items-center justify-center">
              <div className="flex flex-col gap-2">
                <Image src="/projects/greencard/greencard-questionnaire-form.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Questionnaire Form" />
                <div>The questionnaire form- clients can upload their resume to speed up the process.</div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src="/projects/greencard/greencard-form-feedback.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Questionnaire Form Feedback" />
                <div>When the client hits &quot;next&quot;, their responses are sent to an LLM for feedback. They can choose to ignore the suggestions.</div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src="/projects/greencard/greencard-letters.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Recommendation Letter Drafting" />
                <div>Users can draft recommendation letters with the help of AI. They can also view more information about their clients in different tabs as they draft.</div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src="/projects/greencard/greencard-dashboard.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Client Dashboard" />
                <div>Users can invite or delete clients. Inviting them will send an email with a link to a questionnaire
                  to fill out. If they click on a client that is ready, they can start drafting their recommendation letters. </div>
              </div>
              <div className="flex flex-col gap-2">
                <Image src="/projects/greencard/greencard-register.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Recommendation Letter Drafting" />
                <Image src="/projects/greencard/greencard-login.png" className="shadow-lg border border-gray-300" width={700} height={175} alt="Recommendation Letter Drafting" />
                <div>Register and login forms have Zod validation to ensure smooth error handling on the frontend.</div>
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
        <div className="min-h-[300px] px-8 mt-4 text-center mb-[20%]">{renderContent()}</div>
      </div>
    </div>
  );
}