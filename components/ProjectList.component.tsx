import { Project } from "../types";
import { motion } from "framer-motion";
import { transition } from "../data/framer";
import BlurImage from "./BlurImage.component";

type ProjectListProps = {
  projects: Project[];
};

type ProjectItemProps = {
  project: Project;
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="col-span-12 grid grid-cols-12 gap-x-0 gap-y-8 sm:gap-4 lg:gap-6">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      {...animation}
      className="col-span-12 sm:col-span-6 bg-[#131B2B] shadow-md rounded-lg overflow-clip"
    >
      <div className="relative h-64 w-full">
        <BlurImage
          src={project.image.mainSrc}
          alt={project.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
        />
      </div>

      <div className="pt-5 px-4 sm:px-5 mb-7">
        <h2 className="text-xl text-white font-medium mb-2">{project.title}</h2>
        <p className="text-slate-500 mb-6">{project.description}</p>

        <div className="flex gap-2">
          <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary">
            Live demo
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn btn-neutral">
            Github
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectList;

const animation = {
  initial: {
    y: 30,
    scale: 0.99,
    opacity: 0,
  },
  whileInView: { y: 0, opacity: 1, scale: 1 },
  transition,
  viewport: {
    once: true,
    amount: 0.6,
  },
};
