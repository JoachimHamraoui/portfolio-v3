'use client';

import { AuroraText } from "@/components/magicui/aurora-text";
import LightMouse from "../../../public/scrolldown-lightmode.json";
import DarkMouse from "../../../public/scrolldown-darkmode.json";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import the client-only Lottie component
const LottieClientOnly = dynamic(() => import('../clients/LottieClientOnly'), {
  ssr: false,
});

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="relative w-[1240px] h-screen flex flex-col justify-center mx-auto">
      <h1 className="text-8xl font-bold mb-4">
        Hi, I&lsquo;m{" "}
        <AuroraText colors={["#f035d7", "#7928CA", "#ff9d0a"]}>
          Joachim
        </AuroraText>
      </h1>
      <p className="text-xl">
        Fullstack Web Developer in Brussels — <br />
        Turning Ideas into User-Focused Digital Products
      </p>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6">
        <LottieClientOnly animationData={isDark ? DarkMouse : LightMouse} loop={true} />
      </div>
    </div>
  );
};
