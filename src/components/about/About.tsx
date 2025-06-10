"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariant } from "@/lib/motionVariants";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const birthDate = new Date(1999, 0, 29); // Month is 0-indexed: 0 = January
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  const finalAge = hasHadBirthdayThisYear ? age : age - 1;

  return (
    <div id="about" className="w-[1240px] mx-auto flex flex-col mt-24 scroll-mt-24">
      <motion.h2
        className="text-4xl font-bold mb-6"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        About myself
      </motion.h2>
      <div ref={ref} className="w-[1240px] flex flex-col">
      <motion.p
        className="text-2xl text-primary w-2/3"
        variants={fadeUpVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        I&apos;m a {finalAge} year old{" "}
        <span className="font-semibold">Fullstack Web Developer</span> based in{" "}
        <span className="font-semibold">Brussels, Belgium</span>. <br /> I recently
        graduated with a
        Bachelor&apos;s Degree at Erasmushogeschool Brussel.
        <br /> I&apos;m fluent in French, Dutch and English.
        <br />
        <br />
        Eager to learn more about Web & App Development. I also read, game and
        do graphic design in my free time.
      </motion.p>
    </div>
    </div>
  );
};
