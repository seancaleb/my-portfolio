import { nanoid } from "nanoid";
import { Skill } from "../types";

const skills: Skill[] = [
  { id: nanoid(), title: "HTML5", src: "/skills/html5.svg" },
  { id: nanoid(), title: "CSS3", src: "/skills/css3.svg" },
  { id: nanoid(), title: "TypeScript", src: "/skills/typescript.svg" },
  { id: nanoid(), title: "JavaScript", src: "/skills/javascript.svg" },
  { id: nanoid(), title: "React", src: "/skills/react.svg" },
  { id: nanoid(), title: "Next.js", src: "/skills/nextjs.svg" },
  { id: nanoid(), title: "Redux", src: "/skills/redux.svg" },
  { id: nanoid(), title: "SASS", src: "/skills/sass.svg" },
  { id: nanoid(), title: "Tailwind CSS", src: "/skills/tailwind.svg" },
  { id: nanoid(), title: "Chakra UI", src: "/skills/chakra.svg" },
  { id: nanoid(), title: "Node.js", src: "/skills/node.svg" },
  { id: nanoid(), title: "MySQL", src: "/skills/mysql.svg" },
  { id: nanoid(), title: "Git", src: "/skills/git.svg" },
  { id: nanoid(), title: "Figma", src: "/skills/figma.svg" },
  { id: nanoid(), title: "Postman", src: "/skills/postman.svg" },
];

export default skills;
