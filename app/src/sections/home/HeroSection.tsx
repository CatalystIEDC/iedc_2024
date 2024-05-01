import React from "react";
import { spaceGrotesk } from "../../utils/fonts";
import EventBanner from "../../components/EventBanner";
import Image from "next/image";
import HeroSectionElement from "@/public/elements/HeroSectionElement.svg";
import HeroSectionGradient from "@/public/elements/HeroSectionGradient.svg";
const HeroSection = () => {
  const currentEvent = {
    name: "Hackathon",
    details:
      "✦✦Catalyst IEDC is conducting a 3-day long Hackathon from 10th to 12th of September. Register now! ✦✦",
  };

  return (
    <div
      className={` ${spaceGrotesk.className} bg-[#0B0B0B] relative w-screen h-screen overflow-hidden`}
    >
      {/* <EventBanner event={currentEvent} /> */}
      <div className="flex flex-col gap-[22px] items-center justify-center  mx-auto mt-60">
        <span className="text-[#ffffff] text-4xl font-extralight ">Catalyst Mar Baselios IEDC</span>
        <span className="text-white text-[83px] tracking-[-4.15px] text-center leading-[70px] w-4/5">Where aspiring entrepreneurs become empowered innovators</span>
        <span className="text-[#FFFFFF94] text-4xl font-extralight">Explore the world of innovation and entrepreneurship.</span>
      </div>
      <Image
        src={HeroSectionElement}
        alt="SVG Element"
        width={400}
        height={400}
        className="absolute right-0 bottom-0 animate-pulse"
      />
      {/* <Image src={HeroSectionGradient} alt='SVG Element' width={2000} height={1000} className='absolute left-1/2  blur-[1000px] -translate-x-1/2 bottom-0'/> */}
    </div>
  );
};

export default HeroSection;
