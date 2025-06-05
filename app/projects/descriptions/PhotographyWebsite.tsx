import { ArrowOutward } from "@public/icons/ArrowOutward";
import Image from "next/image";
import { useState } from "react";

export default function PhotographyWebsite() {

  const [activeTab, setActiveTab] = useState("Mockups");

  const tabs = ["Mockups"];

  const renderContent = () => {
    switch (activeTab) {
      case "Mockups":
        return (
          <div className="flex gap-5 items-center">
            <div className="flex flex-col gap-5">
              <div>
                When I first created mockups for this site, I didn&apos;t use Figma (I had no idea what I was doing). But anyways, here are a few designs I created.
              </div>
              <div className="flex gap-6">
                <Image src="/projects/photography-site/landing-page-design.png" width={275} height={175} alt="Landing page mockup" />
                <Image src="/projects/photography-site/pricing-design.png" width={400} height={100} alt="Pricing mockup" />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center w-3xl mx-auto">
      <div className="mx-auto text-dark-blue font-medium text-5xl pb-7">
        Photography Website
      </div>
      <div className="text-lg mx-auto flex text-center mb-[4%]">
        For design practice, I am creating a fake photography website.
      </div>
      <div className="ml-[15%] px-[1%] pt-[0.5%] pb-[2%] flex justify-start w-1/2 bg-secondary-pink rounded-sm border border-secondary-pink">
        Tools: Next.js, TypeScript, React, TailwindCSS
      </div>
      <a
        href="https://amandawhitephoto.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-end items-center hover:bg-blue-hover -mt-[2%] ml-auto mr-[15%] mb-[5%] gap-2 text-center text-xl px-[1%] py-[0.25%] bg-blue text-white border-blue rounded-sm">
        <div>Check out my photography website</div>
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