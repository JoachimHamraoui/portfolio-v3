import { Navigation } from "@/components/navigation/Navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/showcase/Showcase";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/techstack/TechStack";
import { Experiences } from "@/components/Experiences/Experiences";
export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <Navigation />
      <Hero />
      <Showcase />
      <TechStack />
      <About />
      <Experiences />
    </div>
  );
}
