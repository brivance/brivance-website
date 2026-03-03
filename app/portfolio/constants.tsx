"use client";

import { ReactNode, useRef, useState } from "react";

import Image from "next/image";

type HoverVideoPreviewProps = {
  videoSrc: string;
  imageSrc: string;
  alt?: string;
  className?: string;
  videoClassName?: string;
};

export const MobileComponentOne: ReactNode = <Image
  src="/portfolio/wash-dudes/mobile-demo.jpeg"
  className="absolute top-0 left-0 w-full scroll-anim-once"
  style={
    {
      "--scroll-amt": "-65%",
      "--dur": "10s",
    } as React.CSSProperties
  }
  width={1000}
  height={1000}
  alt="Mobile Portfolio"
/>;

export const DesktopComponentOne: ReactNode = <Image
  src="/portfolio/wash-dudes/laptop-demo.jpeg"
  className="absolute top-0 left-0 w-full scroll-anim-once"
  style={
    {
      "--scroll-amt": "-42%",
      "--dur": "10s",
    } as React.CSSProperties
  }
  width={1000}
  height={1000}
  alt="Desktop Portfolio"
/>;

export const DescriptionOne = [
  "Designed and launched a modern, mobile-first website for a local service business",
  "Built structured customer intake forms to connect customers to sales people",
  "Implemented an approval-based purchasing system to prevent incorrect orders",
  "Reduced customer confusion and manual follow-up by gating checkout behind review",
  "Created a streamlined workflow to help the business manage and qualify incoming customers"
]

export const MobileComponentTwo: ReactNode =
  <HoverVideoPreview
    videoSrc="/portfolio/sam-vance/mobile-demo.mov"
    imageSrc="/portfolio/sam-vance/mobile-demo-thumbnail.png"
    className="absolute top-0 left-0 w-full h-full"
  />;

export const DesktopComponentTwo: ReactNode =
  <HoverVideoPreview
    videoSrc="https://cdn.briannavance.com/brianna-vance-website/portfolio/sam-vance/laptop-demo.mov"
    imageSrc="/portfolio/sam-vance/laptop-demo-thumbnail.png"
    className="absolute top-0 left-0 w-full h-full"
  />;

export const DescriptionTwo = [
  "Designed and developed a custom website to showcase a diverse portfolio of engineering projects",
  "Translated technical experience into a structured, narrative-driven web presentation",
  "Implemented responsive laptop and mobile mockup previews",
  "Optimized layout and animation for performance and clarity",
]

export const DesktopComponentThree: ReactNode =
  <HoverVideoPreview
    videoSrc="https://cdn.briannavance.com/brianna-vance-website/portfolio/bayonet-battalion/bb-laptop-demo.mov"
    imageSrc="/portfolio/bayonet-battalion/bb-laptop-demo-thumbnail.png"
    className="absolute top-0 left-0 w-full h-full"
  />;

export const MobileComponentThree: ReactNode =
  <HoverVideoPreview
    videoSrc="https://cdn.briannavance.com/brianna-vance-website/portfolio/bayonet-battalion/bb-mobile-demo.mov"
    imageSrc="/portfolio/bayonet-battalion/bb-mobile-demo-thumbnail.png"
    className="absolute top-0 left-0 w-full h-full"
  />;

export const DescriptionThree = [
  "Designed and developed a custom e-commerce website for an original card game",
  "Implemented product pages, checkout flow, and order fulfillment integration",
  "Integrated secure payment processing (Stripe)",
  "Built responsive UI optimized for desktop and mobile",
  "Structured site content to clearly explain gameplay and drive conversions"
];

export const DesktopComponentFour: ReactNode =
  <HoverVideoPreview
    videoSrc="https://cdn.briannavance.com/brianna-vance-website/portfolio/greencardai/portfolio-demo.mov"
    imageSrc="/portfolio/greencardai/portfolio-demo-thumbnail.png"
    className="absolute inset-0 h-full w-full"
    videoClassName="absolute inset-0 h-full w-full object-contain py-2 bg-black"
  />;

export function HoverVideoPreview({
  videoSrc,
  imageSrc,
  alt = "",
  className = "",
  videoClassName = "absolute inset-0 h-full w-full object-cover",
}: HoverVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const onEnter = async () => {
    setHovered(true);

    const v = videoRef.current;
    if (!v) return;

    // restart every hover
    v.currentTime = 0;

    // play on hover (muted allows programmatic play)
    try {
      await v.play();
    } catch {
      // If browser blocks play for any reason, keep image visible.
      setHovered(false);
    }
  };

  const onLeave = () => {
    setHovered(false);

    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.currentTime = 0; // reset so next hover starts from beginning
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Video (always mounted, behind) */}
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="metadata"
        className={videoClassName}
      />

      {/* Image overlay (on top when not hovered) */}
      <div
        className={`absolute inset-0 transition-opacity duration-150 ${hovered ? "opacity-0" : "opacity-100"
          }`}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
    </div>
  );
}

export const DescriptionFour = [
  "Built an AI-assisted immigration drafting platform for EB2-NIW cases",
  "Designed structured intake system to extract applicant and recommender data",
  "Implemented research-assisted drafting with citation-linked outputs",
  "Developed editor interface supporting source highlighting and bidirectional traceability",
  "Reduced expert drafting time per case through workflow automation",
]