"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/lib/projects";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"


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
          <motion.div key={project.id} variants={fadeUpVariant} className="w-full flex flex-col mb-6">
            <motion.div
              variants={fadeUpVariant}
              className="w-full bg-background rounded-xl overflow-hidden border border-border"
            >
              <Image
                src={project.keyImage}
                alt={project.name}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.h3 variants={fadeUpVariant} className="text-2xl font-bold mt-2">
              {project.name}
            </motion.h3>
            <motion.p variants={fadeUpVariant} className="text-sm">
              {project.description}
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mt-2">
              {project.techstack.map((tech) => (
                <Badge color="--color-1" key={tech}>{tech}</Badge>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
