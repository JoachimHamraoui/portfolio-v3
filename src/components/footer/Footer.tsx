"use client";

import DarkLogo from "../../../public/logo-dark-mode.png";
import LightLogo from "../../../public/logo-light-mode.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";

export const Footer = () => {
  const year = new Date().getFullYear();

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
    // <div className="w-full flex flex-col items-center justify-center py-8">
    //     <p className="text-primary text-center">
    //         &copy; {year} All rights reserved
    //     </p>
    // </div>

    <footer className="w-full bg-background rounded-lg shadow-sm dark:bg-background m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Image src={isDark ? DarkLogo : LightLogo} alt="Logo" width={28} />
        
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-primary sm:mb-0">
            <li>
              <Link
                href="https://github.com/JoachimHamraoui"
                className="hover:underline me-4 md:me-6"
                target=""
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/joachim-hamraoui-6950b6173/"
                className="hover:underline me-4 md:me-6"
                target=""
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="mailto:info@joachimhamraoui.com"
                className="hover:underline me-4 md:me-6"
              >
                info@joachimhamraoui.com
              </Link>
            </li>
            <li>
              <Link href="phone:0489123348" className="hover:underline">
                0489 12 33 48
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          Joachim Hamraoui &copy; {year} All rights reserved
        </span>
      </div>
    </footer>
  );
};
