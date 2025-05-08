"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import LightMouse from "../../../public/scrolldown-lightmode.json";
import DarkMouse from "../../../public/scrolldown-darkmode.json";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

// Dynamically import the client-only Lottie component
const LottieClientOnly = dynamic(() => import("../clients/LottieClientOnly"), {
  ssr: false,
});

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUpVariant = {
    hidden: { opacity: 0, x: 70 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className="relative w-[1240px] h-screen flex flex-col justify-center mx-auto">
      <h1 className="text-8xl font-bold mb-4">
        Hi, I&apos;m{" "}
        <motion.span
          ref={ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block" // ✅ important
        >
          <AuroraText colors={["#f035d7", "#7928CA", "#ff9d0a"]}>
            Joachim
          </AuroraText>
        </motion.span>
      </h1>
      <p className="text-xl">
        Fullstack Web Developer in Brussels — <br />
        Turning Ideas into User-Focused Digital Products
      </p>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6">
        <LottieClientOnly
          animationData={isDark ? DarkMouse : LightMouse}
          loop={true}
        />
      </div>
    </div>
  );
};
