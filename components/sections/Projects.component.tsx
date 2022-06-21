import { Project } from "../../types";
import ProjectList from "../ProjectList.component";
import Section from "../Section.component";

const Projects = ({ projects }: { projects: Project[] }) => {
  return (
    <Section className="section">
      <h4 className="section-heading">Projects</h4>
      <ProjectList projects={projects} />
    </Section>
  );
};

export default Projects;
