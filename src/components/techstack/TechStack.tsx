"use client";

import Image from "next/image";

import { fadeUpVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
    <div className="w-[1240px] mx-auto flex flex-col mt-24">
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Skills
      </motion.h2>
      <div
        ref={ref}
        className="w-full my-12 grid grid-cols-6 gap-4 gap-y-16"
      >
        {techstack.map((item) => (
          <motion.div
            className="flex items-center justify-space-between"
            key={item}
            variants={fadeUpVariant}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Image
              src={`https://cdn.simpleicons.org/${item}`}
              alt={item}
              width={100}
              height={100}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
