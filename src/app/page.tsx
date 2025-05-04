import { Navigation } from "@/components/navigation/Navigation";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Hero } from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <SmoothCursor cursor={<div className="w-6 h-6 rounded-full backdrop-invert"></div>} />
      <Navigation />
      <Hero />
    </div>
  );
}
