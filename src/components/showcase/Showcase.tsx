"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import { fadeUpVariant, containerVariant } from "@/lib/motionVariants";
import { ProjectCard } from "../projectcard/ProjectCard"; // adjust path if needed

export const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-[1240px] mx-auto flex flex-col mt-12 space-y-6">
      <motion.h2
        className="text-4xl font-bold"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Showcase
      </motion.h2>

      <motion.div
        className="w-full grid grid-cols-3 gap-4"
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project) => (
          <ProjectCard
          key={project.id}
          {...project}
          variants={fadeUpVariant}
        />
        ))}
      </motion.div>
    </div>
  );
};
