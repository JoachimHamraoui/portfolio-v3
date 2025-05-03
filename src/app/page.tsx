import { ModeToggle } from "@/components/ModeToggle";
import { AuroraText } from "@/components/magicui/aurora-text";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { circle } from "framer-motion/client";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <SmoothCursor cursor={<div className="w-6 h-6 rounded-full border-2 border-white"></div>} />
      <div className="w-[1240px] h-screen flex flex-col justify-center">
        <h1 className="text-8xl font-bold mb-4">
          Hi, I&lsquo;m{" "}
          <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
            Joachim
          </AuroraText>
        </h1>
        <p className="text-xl">
          Fullstack Web Developer in Brussels — <br />
          Turning Ideas into User-Focused Digital Products
        </p>
      </div>
    </div>
  );
}
