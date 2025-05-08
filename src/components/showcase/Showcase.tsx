"use client";
import { FaGithub } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

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
          <motion.div
            key={project.id}
            variants={fadeUpVariant}
            className="w-full flex flex-col mb-6"
          >
            <motion.div
              variants={fadeUpVariant}
              className="w-full bg-background rounded-xl overflow-hidden border border-border relative group"
            >
              <Image
                src={project.keyImage}
                alt={project.name}
                width={500}
                height={500}
                className="w-full h-auto"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex items-end justify-start gap-2">
               {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="border border-foreground rounded-full p-2 text-foreground hover:bg-foreground hover:text-background duration-300 ease-in-out">
                  <FaGithub size={20} />
                </a>
               )} 
                {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="border border-foreground rounded-full p-2 text-foreground hover:bg-foreground hover:text-background duration-300 ease-in-out">
                  <RxGlobe size={20} />
                </a>
               )}
              </div>
            </motion.div>

            <motion.h3
              variants={fadeUpVariant}
              className="text-2xl font-bold mt-2"
            >
              {project.name}
            </motion.h3>
            <motion.p variants={fadeUpVariant} className="text-sm">
              {project.description}
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex flex-wrap gap-2 mt-2"
            >
              {project.techstack.map((tech) => (
                <Badge color="--color-1" key={tech}>
                  {tech}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
