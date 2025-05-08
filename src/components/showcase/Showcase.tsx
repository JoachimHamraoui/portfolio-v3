"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import { ProjectCard } from "../projectcard/ProjectCard"; // adjust path if needed

export const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 70 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

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
