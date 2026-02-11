export interface Project {
  id: number;
  name: string;
  description: string;
  github: string;
  live: string;
  techstack: string[];
  keyImage: string;
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Invois",
    description: "Invoice app to generate Invoice PDF's.",
    github: "https://github.com/JoachimHamraoui/invois",
    live: "https://invois-cyan.vercel.app/",
    techstack: ["NextJS", "TailwindCSS", "PostgreSQL", "Typescript"],
    keyImage: "/showcase/invois.png",
  },
  {
    id: 1,
    name: "DSHBRD.",
    description: "A dashboard to manage your projects on your portfolio.",
    github: "https://github.com/JoachimHamraoui/showcase-dashboard",
    live: "https://showcase-dashboard-roan.vercel.app/",
    techstack: ["NextJS", "Drizzle ORM", "PostgreSQL", "Typescript"],
    keyImage: "/showcase/dshbrd.png",
  },
  {
    id: 2,
    name: "Bibliomania (Bachelor)",
    description: "App to enhance reading in secondary schools.",
    github: "https://github.com/JoachimHamraoui/bibliomania",
    live: "",
    techstack: ["NodeJS", "Docker", "React Native", "PostgreSQL", "Expo"],
    keyImage: "/showcase/bibliomania.png",
  },
  {
    id: 3,
    name: "Medialab Loan",
    description: "A way for students to loan items in Medialab.",
    github:
      "https://github.com/JoachimHamraoui/dev4-course-project-bilal-jojo-dev",
    live: "",
    techstack: ["Kotlin", "Spring", "VueJS", "MVC"],
    keyImage: "/showcase/Medialab.png",
  },
  {
    id: 4,
    name: "Planning App",
    description: "Planning system for a schoolsystem with admin dashboard.",
    github:
      "https://github.com/JoachimHamraoui/back-end-course-project-JoachimHamraoui",
    live: "",
    techstack: ["PHP", "Laravel Sail", "Docker", "MySQL"],
    keyImage: "/showcase/Planning.png",
  },
  {
    id: 5,
    name: "Manga API",
    description: "Docker, NodeJS, API",
    github:
      "https://github.com/JoachimHamraoui/portfolio-starter-JoachimHamraoui",
    live: "",
    techstack: ["NodeJS", "Docker", "React", "PostgreSQL"],
    keyImage: "/showcase/manga-app.png",
  },
];
