import {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
import { GradientBlur, Header, Main, ProjectList, Section } from "../components";
import { Project, Skill } from "../types";
import { loadSkills, loadProjects } from "../utils";
import { Tooltip } from "@chakra-ui/react";

type HomepageProps = {
  skills: Skill[];
  projects: Project[];
};

const Home = ({ skills, projects }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Header />
      <Main>
        {/* Hero  */}
        <GradientBlur />
        <Section className="relative">
          <div className="min-h-[450px] flex flex-col col-span-12 justify-center">
            <h1 className="text-4xl md:text-5xl trancking-[-.75px] md:tracking-[-1.5px] font-semibold text-white mb-8 relative">
              A self taught front end web developer
            </h1>

            <hr className="horizontal-rule" />
            <p className="text-lg text-slate-500 max-w-[512px] relative">
              A developer with strong passion in developing responsive web apps and creating
              reusable user interfaces.
            </p>
          </div>
        </Section>

        {/* About  */}
        <Section className="section">
          <h4 className=" section-heading">About</h4>
          <div className="flex flex-col gap-6 col-span-12 md:col-span-9 mb-16">
            <p className="text-slate-500 text-lg">
              Sean is a self-taught front end developer specializing in React. He has a strong
              passion on developing responsive web applications and user interfaces that offer the
              best experience for users.
            </p>
            <p className="text-slate-500 text-lg">
              He is currently seeking any entry level position for a front end developer role to
              share his knowledge and help contribute to an existing codebase. At the same time, he
              also wants to learn best practices from senior devs.
            </p>
          </div>
          <div className="hidden md:block col-span-3"></div>
          <hr className="horizontal-rule col-span-12" />
        </Section>

        {/* Skills  */}
        <Section className="section hidden md:block">
          <h4 className="section-heading">Skills</h4>

          <div className="grid grid-cols-12 gap-x-8 gap-y-8 col-span-12">
            {skills.map((skill) => {
              return (
                <Tooltip
                  key={skill.id}
                  placement="right"
                  openDelay={200}
                  gutter={12}
                  fontSize="md"
                  label={skill.title}
                >
                  <div className="relative h-12 w-12 col-span-6 sm:col-span-4 md:col-span-3 flex">
                    <Image src={skill.src} alt={skill.title} layout="fill" objectFit="contain" />
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </Section>

        {/* Projects  */}
        <Section className="section">
          <h4 className="section-heading">Projects</h4>
          <ProjectList projects={projects} />
        </Section>
      </Main>
    </>
  );
};

export default Home;

export const getServerSideProps: GetStaticProps<HomepageProps> = async () => {
  const skills = await loadSkills();
  const projects = await loadProjects();

  return {
    props: {
      skills,
      projects,
    },
  };
};
