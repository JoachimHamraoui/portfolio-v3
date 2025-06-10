"use client";

import { ScrollProgress } from "../magicui/scroll-progress";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkLogo from "../../../public/logo-dark-mode.png";
import LightLogo from "../../../public/logo-light-mode.png";
import Link from "next/link";

export const Navigation = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [resolvedTheme]);

  return (
    <nav className="w-full py-8 fixed bg-background z-50">
      <ScrollProgress className="bottom-100 fixed" />
      <ul className="w-[1200px] mx-auto flex gap-12 items-center">
        <Image
          src={isDark ? DarkLogo : LightLogo}
          alt="Logo"
          width={28}
          className="mr-12"
        />
        <Link href="#showcase" className="text-md text-primary">
          Showcase
        </Link>
        <Link href="#skills" className="text-md text-primary">
          Tech
        </Link>
        <Link href="#about" className="text-md text-primary">
          About
        </Link>
        <Link href="#experiences" className="text-md text-primary">
          Experiences
        </Link>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </ul>
    </nav>
  );
};
