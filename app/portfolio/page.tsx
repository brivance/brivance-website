"use client";

import { DescriptionFour, DescriptionOne, DescriptionThree, DescriptionTwo, DesktopComponentFour, DesktopComponentOne, DesktopComponentThree, DesktopComponentTwo, HoverVideoPreview, MobileComponentOne, MobileComponentThree, MobileComponentTwo } from "./constants";

import { PortfolioSection } from "./PortfolioSection";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col w-full min-h-screen items-center text-lg">
      {/* <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[#D1C5F3] z-0" /> */}
      <HoverVideoPreview
        videoSrc="/portfolio/sam-vance/laptop-demo.mov"
        imageSrc="/portfolio/sam-vance/laptop-demo-thumbnail.png"
        className="absolute top-0 left-0 w-full"
      />
      <PortfolioSection
        title="B2B E-Commerce Website"
        desktopSrc={DesktopComponentOne}
        mobileSrc={MobileComponentOne}
        description={DescriptionOne}
      />
      <PortfolioSection
        title="Professional Engineer Portfolio"
        desktopSrc={DesktopComponentTwo}
        mobileSrc={MobileComponentTwo}
        description={DescriptionTwo}
        link="/portfolio/professional-engineer"
      />
      <PortfolioSection
        title="Original Game Retail Site"
        desktopSrc={DesktopComponentThree}
        mobileSrc={MobileComponentThree}
        description={DescriptionThree}
        link="/portfolio/professional-engineer"
      />
      <PortfolioSection
        title="AI Immigration Drafting Platform"
        desktopSrc={DesktopComponentFour}
        description={DescriptionFour}
        link="/portfolio/professional-engineer"
      />
    </div>

  );
}