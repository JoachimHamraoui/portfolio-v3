// import { Navigation } from "@/components/navigation/Navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/showcase/Showcase";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/techstack/TechStack";
import { Experiences } from "@/components/Experiences/Experiences";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <SmoothCursor
        cursor={<div className="w-6 h-6 rounded-full backdrop-invert"></div>}
      />
      {/* <Navigation /> */}
      <Hero />
      <Showcase />
      <TechStack />
      <About />
      <Experiences />
      <Footer />
    </div>
  );
}
