"use client";
import { fadeUpVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";

const items = [
  {
    id: 1,
    date: "2016 - 2018",
    title: "Multimedia",
    description: "Completed secondary education at Don Bosco Halle with an Honor at Graduation",
  },
  {
    id: 2,
    date: "2019",
    title: "Interactieve Multimedia",
    description: "Extra degree for expertise with PHP & jQuery.",
  },
  {
    id: 3,
    date: "2019",
    title: "Webmaster",
    description: "Worked as a student & intern Webmaster for Colruyt Group",
  },
  {
    id: 4,
    date: "2019 - 2024",
    title: "Bachelor's Degree",
    description: "Acquired a Bachelor's Degree in Multimedia & Creative Technologies at Erasmushogeschool Brussel",
  },
  {
    id: 5,
    date: "2024",
    title: "Drupal Developer",
    description: "Internship at Plant a Flag as a Drupal Developer",
  },
];

export const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="w-[1240px] mx-auto flex flex-col overflow-clip my-24 relative"
    >
      <motion.h2
        className="text-4xl font-bold mb-6"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Experiences & Studies
      </motion.h2>

      <motion.div
        className="flex flex-wrap gap-4"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Timeline defaultValue={5} orientation="horizontal">
          {items.map((item) => (
            <TimelineItem
              key={item.id}
              step={item.id}
              className="group-data-[orientation=horizontal]/timeline:mt-0"
            >
              <TimelineHeader>
                <TimelineSeparator className="group-data-[orientation=horizontal]/timeline:top-8" />
                <TimelineDate className="mb-10">{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineIndicator className="group-data-[orientation=horizontal]/timeline:top-8" />
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </motion.div>
    </div>
  );
};
