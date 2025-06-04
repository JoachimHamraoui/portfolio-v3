
import { Navigation } from "@/components/navigation/Navigation";
import { Hero } from "@/components/hero/Hero";
import { Showcase } from "@/components/showcase/Showcase";
import { About } from "@/components/about/About";
import { TechStack } from "@/components/techstack/TechStack";
import { Experiences } from "@/components/Experiences/Experiences";
// import { Footer } from "@/components/footer/Footer";
import { CursorProvider } from "@/context/CursorContext";
import { SmoothCursor } from "@/components/cursor/SmoothCursor";
export default function Home() {
  return (
    <CursorProvider>
      <div className="w-full flex flex-col items-center cursor-none">
        <SmoothCursor
          cursor={
            <div className="w-6 h-6 rounded-full backdrop-invert bg-black/10 dark:bg-white/10" />
          }
        />
        <Navigation />
        <Hero />
        <Showcase />
        <TechStack />
        <About />
        <Experiences />
        {/* <Footer /> */}
      </div>
    </CursorProvider>

  );
}
