"use client";
import { FaGithub } from "react-icons/fa";
import { RxGlobe } from "react-icons/rx";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { containerVariant, fadeUpVariant } from "@/lib/motionVariants";

interface ProjectCardProps {
  name: string;
  description: string;
  keyImage: string;
  github?: string;
  live?: string;
  techstack: string[];
}

export const ProjectCard = ({
  name,
  description,
  keyImage,
  github,
  live,
  techstack,
}: ProjectCardProps) => {
  return (
    <motion.div
      variants={containerVariant}
      className="w-full flex flex-col mb-6"
    >
      <motion.div
        variants={fadeUpVariant}
        className="w-full bg-background rounded-xl overflow-hidden border border-border relative group"
      >
        <Image
          src={keyImage}
          alt={name}
          width={500}
          height={500}
          className="w-full h-auto"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out p-4 flex items-end justify-start gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#fefefe] rounded-full p-2 text-[#fefefe] hover:bg-[#fefefe] hover:text-[#121212] duration-300 ease-in-out"
            >
              <FaGithub size={20} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#fefefe] rounded-full p-2 text-[#fefefe] hover:bg-[#fefefe] hover:text-[#121212] duration-300 ease-in-out"
            >
              <RxGlobe size={20} />
            </a>
          )}
        </div>
      </motion.div>

      <motion.h3 variants={fadeUpVariant} className="text-2xl font-bold mt-2">
        {name}
      </motion.h3>
      <motion.p variants={fadeUpVariant} className="text-sm">
        {description}
      </motion.p>
      <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-2 mt-2">
        {techstack.map((tech) => (
          <Badge color="--color-1" key={tech}>
            {tech}
          </Badge>
        ))}
      </motion.div>
    </motion.div>
  );
};
