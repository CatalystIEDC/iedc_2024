import EventsSection from "./src/sections/home/EventsSection";
import HeroSection from "./src/sections/home/HeroSection";
import IdeaSubmission from "./src/sections/home/IdeaSubmission";
import Legacy from "./src/sections/home/Legacy";
import TeamSection from "./src/sections/home/TeamSection";
import AboutSection from './src/sections/home/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection/>
      <Legacy/>
      <IdeaSubmission/>
      <TeamSection/>
      <EventsSection/>
      <AboutSection/>
    </main>
  );
}
