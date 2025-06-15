"use client";

import { AuroraText } from "@/components/magicui/aurora-text";
import LightMouse from "../../../public/scrolldown-lightmode.json";
import DarkMouse from "../../../public/scrolldown-darkmode.json";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import { useCursor } from "@/context/CursorContext";
import Link from "next/link";
import { Button } from "../ui/button";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// Dynamically import the client-only Lottie component
const LottieClientOnly = dynamic(() => import("../clients/LottieClientOnly"), {
  ssr: false,
});

export const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  const { setHovered } = useCursor();

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
    <div className="relative w-full h-screen flex flex-col justify-center mx-auto">
      <h1 className="text-6xl xl:text-8xl font-bold mb-4">
        Hi, I&apos;m{" "}
        <motion.span
          ref={ref}
          variants={fadeUpVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="inline-block" // ✅ important
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AuroraText colors={["#f7ba2c", "#ea5459"]}>Joachim</AuroraText>
        </motion.span>
      </h1>
      <p className="text-sm md:text-lg">
        Fullstack Web Developer in Brussels — <br />
        Turning Ideas into User-Focused Digital Products
      </p>
      <div className="mt-6 flex gap-4 flex-wrap">
        <Link
          href="https://www.linkedin.com/in/joachim-hamraoui-6950b6173/"
          target="_blank"
        >
          <Button>
            <FaLinkedin />{" "}
            <span className="md:inline hidden">Check out my Linkedin</span>
            <span className="inline md:hidden">Linkedin</span>
          </Button>
        </Link>
        <Link href="https://github.com/JoachimHamraoui" target="_blank">
          <Button variant="outline">
            <FaGithub />
            <span className="md:inline hidden">Check out my Github</span>
            <span className="inline md:hidden">Github</span>
          </Button>
        </Link>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-4 md:w-6">
        <LottieClientOnly
          animationData={isDark ? DarkMouse : LightMouse}
          loop={true}
        />
      </div>
    </div>
  );
};
