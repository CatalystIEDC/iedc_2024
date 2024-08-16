"use client";
import { useEffect } from "react";
import EventsSection from "./src/sections/home/EventsSection";
import HeroSection from "./src/sections/home/HeroSection";
import IdeaSubmission from "./src/sections/home/IdeaSubmission";
import Legacy from "./src/sections/home/Legacy";
import TeamSection from "./src/sections/home/TeamSection";
import AboutSection from "./src/sections/home/AboutSection";
import ContentWrapper from "./src/sections/ContentWrapper";
import NewsLetter from "./src/components/NewsLetter";
import ParallaxText from "./src/components/ParallaxText";
import Lenis from "lenis";
export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on("scroll", (e: any) => {
    //   console.log(e);
    // });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className="flex w-screen flex-col items-center justify-between">
      <HeroSection />
      <Legacy />
      <IdeaSubmission />
      <EventsSection />
      <ParallaxText baseVelocity={5}>Catalyst IEDC</ParallaxText>
      <TeamSection />

      <NewsLetter />
      <AboutSection />
    </main>
  );
}
