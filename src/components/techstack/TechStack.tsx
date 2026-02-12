"use client";

import { fadeUpVariant, containerVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiNextdotjs,
  SiGit,
  SiPhp,
  SiLaravel,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiSupabase,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiKotlin,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const TechStack = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const techstack: { name: string; Icon: IconType }[] = [
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: SiReact },
    { name: "Vue.JS", Icon: SiVuedotjs },
    { name: "Next.JS", Icon: SiNextdotjs },
    { name: "Git", Icon: SiGit },
    { name: "PHP", Icon: SiPhp },
    { name: "Laravel", Icon: SiLaravel },
    { name: "Node.JS", Icon: SiNodedotjs },
    { name: "MySQL", Icon: SiMysql },
    { name: "Postgresql", Icon: SiPostgresql },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Supabase", Icon: SiSupabase },
    { name: "Docker", Icon: SiDocker },
    { name: "HTML5", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "Tailwindcss", Icon: SiTailwindcss },
    { name: "Kotlin", Icon: SiKotlin },
  ];

  return (
    <div
      ref={ref}
      id="skills"
      className="w-full mx-auto flex flex-col mt-24 scroll-mt-24"
    >
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Skills
      </motion.h2>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        ref={ref}
        className="w-full my-12 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 gap-y-16 "
      >
        {techstack.map(({ name, Icon }) => (
          <motion.div
            className="flex flex-col items-space-between justify-center"
            key={name}
            variants={fadeUpVariant}
          >
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-col items-center justify-center mx-2">
                    <Icon
                      aria-label={name}
                      title={name}
                      className="text-4xl md:text-7xl text-foreground"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="dark px-2 py-1 text-xs mb-2"
                  showArrow={true}
                >
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
