import EventsSection from "./src/sections/home/EventsSection";
import HeroSection from "./src/sections/home/HeroSection";
import IdeaSubmission from "./src/sections/home/IdeaSubmission";
import Legacy from "./src/sections/home/Legacy";
import TeamSection from "./src/sections/home/TeamSection";
import AboutSection from './src/sections/home/AboutSection'
import ContentWrapper from "./src/sections/ContentWrapper"
import NewsLetter from "./src/components/NewsLetter";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-between">
 
      <HeroSection/>
      <Legacy/>
      <IdeaSubmission/>
      <TeamSection/>
      <EventsSection/>
      {/* <NewsLetter/> */}
      <AboutSection/>
      
    </main>
  );
}
