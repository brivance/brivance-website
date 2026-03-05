"use client";

import { DescriptionFour, DescriptionOne, DescriptionThree, DescriptionTwo, DesktopComponentFour, DesktopComponentOne, DesktopComponentThree, DesktopComponentTwo, HoverVideoPreview, MobileComponentOne, MobileComponentThree, MobileComponentTwo } from "./constants";

import { PortfolioSection } from "./PortfolioSection";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col w-full min-h-screen items-center text-lg">
      <HoverVideoPreview
        videoSrc="/portfolio/sam-vance/laptop-demo.mov"
        imageSrc="/portfolio/sam-vance/laptop-demo-thumbnail.png"
        className="absolute top-0 left-0 w-full h-0"
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
        link="https://www.samvance.me"
      />
      <PortfolioSection
        title="Original Game Retail Site"
        desktopSrc={DesktopComponentThree}
        mobileSrc={MobileComponentThree}
        description={DescriptionThree}
        link="https://www.bayonetbattalion.com"
      />
      <PortfolioSection
        title="AI Immigration Drafting Platform"
        desktopSrc={DesktopComponentFour}
        description={DescriptionFour}
      />
    </div>

  );
}