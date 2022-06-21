import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";

type ProjectListProps = {
  projects: Project[];
};

type ProjectItemProps = {
  project: Project;
};

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="col-span-12 grid grid-cols-12 sm:gap-x-4 md:gap-x-8 gap-y-8 md:gap-y-12">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <div className="col-span-12 sm:col-span-6 bg-gray-900 shadow-2xl rounded-lg overflow-clip">
      <div className="relative h-64 w-full">
        <Image
          src={project.image.mainSrc}
          alt={project.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="left"
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
    </div>
  );
}

export default ProjectList;
