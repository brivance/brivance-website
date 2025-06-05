import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { useState } from "react";

export default function BriannaVanceWebsite() {

  const [activeTab, setActiveTab] = useState("Figma Designs");

  const tabs = ["Figma Designs", "Old Website"];

  const renderContent = () => {
    switch (activeTab) {
      case "Figma Designs":
        return (
          <div className="flex flex-col gap-5 items-center">
            <div className="mb-10">
              Here is a design I made for this very page, before implementing it. How do you think I did?
            </div>
            <Image src="/projects/brianna-website/brianna-vance-proj-design.png" className="shadow-lg border border-gray-300" width={500} height={175} alt="Project Page Design" />
          </div>
        );
      case "Old Website":
        return (
          <div className="flex flex-col gap-5 items-center">
            <div className="mb-10">
              Did you know this isn&apos;t the first website I&apos;ve build for myself? When I first started building websites,
              I used plain HTML & CSS. It was a pain!! Check out my old website here:
            </div>
            <a
              href="https://brivance.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-end items-center hover:bg-blue-hover -mt-[2.25%] mx-auto mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
              <div>Check Out My Old Website</div>
              <ArrowOutward className="h-4 w-4" />
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center w-3xl mx-auto">
      <div className="mx-auto text-dark-blue font-medium text-5xl pb-7">
        My Website!!
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        Designing this website has been a lot of fun. I hope you&apos;ve enjoyed it so far!
      </div>
      <div className="mx-auto px-[1%] py-[0.5%] flex justify-start bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: Next.js, React, TypeScript, TailwindCSS, Framer Motion
      </div>
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