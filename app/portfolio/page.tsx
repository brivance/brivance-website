"use client";

import { useEffect } from "react";
import { DescriptionFour, DescriptionOne, DescriptionThree, DescriptionTwo, DesktopComponentFour, DesktopComponentOne, DesktopComponentThree, DesktopComponentTwo, HoverVideoPreview, MobileComponentOne, MobileComponentThree, MobileComponentTwo } from "./constants";

import { PortfolioSection } from "./PortfolioSection";

export default function Portfolio() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ block: "start" });
    };

    const frame = requestAnimationFrame(scrollToHash);
    const timeouts = [0, 100, 300, 600].map((delay) =>
      window.setTimeout(scrollToHash, delay)
    );

    window.addEventListener("hashchange", scrollToHash);

    return () => {
      cancelAnimationFrame(frame);
      timeouts.forEach(window.clearTimeout);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

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
        link="https://www.washdudes.net"
        id="washdudes"
      />
      <PortfolioSection
        title="Professional Engineer Portfolio"
        desktopSrc={DesktopComponentTwo}
        mobileSrc={MobileComponentTwo}
        description={DescriptionTwo}
        link="https://www.samvance.me"
        id="samvance"
      />
      <PortfolioSection
        title="Original Game Retail Site"
        desktopSrc={DesktopComponentThree}
        mobileSrc={MobileComponentThree}
        description={DescriptionThree}
        link="https://www.bayonetbattalion.com"
        id="bayonetbattalion"
      />
      <PortfolioSection
        title="AI Immigration Drafting Platform"
        desktopSrc={DesktopComponentFour}
        description={DescriptionFour}
        id="greencardai"
      />
    </div>

  );
}
