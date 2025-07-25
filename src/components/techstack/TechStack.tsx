"use client";


import { fadeUpVariant, containerVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Image from "next/image";

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const techstack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.JS",
    "Next.JS",
    "Git",
    "PHP",
    "Laravel",
    "Node.JS",
    "MySQL",
    "Postgresql",
    "MongoDB",
    "Supabase",
    "Docker",
    "HTML5",
    "CSS",
    "Tailwindcss",
    "Kotlin",
  ];

  return (
    <div ref={ref} id="skills" className="w-full mx-auto flex flex-col mt-24 scroll-mt-24">
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Skills
      </motion.h2>
      <motion.div variants={containerVariant} initial="hidden" animate={isInView ? "visible" : "hidden"} ref={ref} className="w-full my-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 gap-y-16 ">
        {techstack.map((item) => (
          <motion.div
            className="flex flex-col items-space-between justify-center"
            key={item}
            variants={fadeUpVariant}
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center">
                    <Image
                    src={`https://cdn.simpleicons.org/${item}`}
                    alt={item}
                    width={100}
                    height={100}
                    className=""
                  />
                  </div>
                </TooltipTrigger>
                <TooltipContent className="dark px-2 py-1 text-xs mb-2" showArrow={true}>
                  {item}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
