import { Marquee } from "../magicui/marquee";
import Image from "next/image";

export const TechStack = () => {
  const techstack = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue.js",
    "Vite",
    "Webpack",
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
    "Drupal",
    "Expo"
  ];

  const firstHalf = techstack.slice(0, techstack.length / 2);
  const secondHalf = techstack.slice(techstack.length / 2);

  return (
    <div className="w-full mt-24">
      <Marquee pauseOnHover>
        <div className="flex flex-row items-center gap-24 px-12">
          {firstHalf.map((item) => (
            <Image
              key={item}
              src={`https://cdn.simpleicons.org/${item}/grey`}
              alt={item}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Marquee>
      <Marquee pauseOnHover reverse className="mt-8">
        <div className="flex flex-row items-center gap-24 px-12">
          {secondHalf.map((item) => (
            <Image
              key={item}
              src={`https://cdn.simpleicons.org/${item}/grey`}
              alt={item}
              width={100}
              height={100}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
