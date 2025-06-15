"use client";
import { fadeUpVariant, containerVariant } from "@/lib/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    date: "2016 - 2018",
    title: "Multimedia",
    description: (
      <>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-4">Multimedia</h2>
        <p className="text-primary text-lg">
          Learned basic Web Development skills such as HTML, CSS, Animations and
          JavaScript. During two years, I had to opportunity to start from the
          ground up with
        </p>
        <br></br>
        <p className="text-primary text-lg">
          I acquired my secondary education diploma at Don Bosco Institute in
          Halle.
        </p>
      </>
    ),
  },
  {
    id: 2,
    date: "2019",
    title: "Interactieve Multimedia",
    description: (
      <>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-4">
          Interactieve Multimedia Technieken
        </h2>
        <p className="text-primary text-lg">
          After my first diploma, I realised an extra year to develop my skills
          enough would be the best decision before diving into higher education.
          I took this extra year at Don Bosco Insitute in Halle.
        </p>
        <br></br>
        <p className="text-primary text-lg">
          While there, I&apos;ve had the opportunity to dive deeper in Web
          Development with jQuery and PHP.
        </p>
      </>
    ),
  },
  {
    id: 3,
    date: "2019",
    title: "Webmaster",
    description: (
      <>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-4">Webmaster</h2>
        <p className="text-primary text-lg">
          For my extra year at Don Bosco, I needed to go through an internship
          in the field of Web Development. I had the opportunity to work as a
          Webmaster for Colruyt Group as an internn and a student.
        </p>
        <br></br>
        <p className="text-primary text-lg">
          This gave me a better view how Development and Engineering works in
          big companies such as Colruyt Group.
        </p>
      </>
    ),
  },
  {
    id: 4,
    date: "2019 -2024",
    title: "Bachelor's Degree",
    description: (
      <>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-4">
          Bachelor&apos;s Degree
        </h2>
        <p className="text-primary text-lg">
          I completed my studies at Erasmushogeschool in Brussels. During these
          5 years, I have been able to learn Front-End development technologies
          such as JavaScript, React, NextJS and VueJS. During my last two years,
          I dove some more into Back-End development with NodejS, PHP/Laravel
          and Kotlin. Mixing these two with some Docker, Databases and Git: I
          have received a thorough understanding of the entire development
          process.
        </p>
        <br></br>
        <h3 className="text-2xl font-bold text-primary my-4">Bibliomania</h3>
        <p className="text-primary text-lg">
          For my Bachelor thesis, I decided to delve some more into Mobile
          Development to create an app to enhance the reading habits of
          teenagers using the school system. This thesis and my extra efforts
          throughout the last two years have been a great learning experience.
        </p>
        <br></br>
        <p className="text-primary text-lg">
          I have now gratuaded with honors and I am ready to take on new
          challenges.
        </p>
      </>
    ),
  },
  {
    id: 5,
    date: "2024",
    title: "Fullstack Drupal Developer",
    description: (
      <>
        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-primary mb-4">
          Fullstack Drupal Developer
        </h2>
        <p className="text-primary text-lg">
          During my last year of studying, I had an internship as Drupal
          Developer at Plant a Flag, in Brussels. Durying my three month long
          internship, I had the opportunity to learn about the Content Managing
          System Drupal where I had to use my already established skills in PHP
          to find my way in a new development environment.
        </p>

        <h3 className="text-2xl font-bold text-primary my-4">Brand App</h3>
        <p className="text-primary text-lg">
          Plant a Flag creates a design sheet for their clients, so colours, fonts and other things are easily accessible. My task for Plant a Flag was to recreat this concept but as an internal Web Application for them to use. During this process, I have had to use my creativity to come up with idead on how to connect all the dots and how to make it accessible for the team&apos;s designers.
        </p>
      </>
    ),
  },
];

export const Experiences = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
    id="experiences"
      ref={ref}
      className="w-full mx-auto flex flex-col overflow-clip my-24 relative scroll-mt-24"
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
        variants={containerVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="w-full flex flex-col"
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex flex-col md:flex-row gap-4 mt-12">
            <div className="w-full md:w-1/4 xl:w-1/3">
              <motion.h2
                variants={fadeUpVariant}
                className="text-xl md:text-2xl xl:text-4xl text-primary font-bold -mb-4 md:mb-0"
              >
                {item.date}
              </motion.h2>
            </div>
            <motion.div variants={fadeUpVariant} className="w-5/6 md:w-3/4 xl:w-2/3">
              {item.description}
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
