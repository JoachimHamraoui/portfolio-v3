"use client";

import { ScrollProgress } from "../magicui/scroll-progress";
import { ModeToggle } from "@/components/ModeToggle";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import DarkLogo from "../../../public/logo-dark-mode.png";
import LightLogo from "../../../public/logo-light-mode.png";

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
      <ul className="w-[1240px] mx-auto flex gap-8 items-center">
        <Image src={isDark ? DarkLogo : LightLogo} alt="Logo" width={28} />
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </ul>
    </nav>
  );
};
