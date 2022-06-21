import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { About, GradientBlur, Hero, Main, Projects, Skills } from "../components";
import { Project, Skill } from "../types";
import { loadSkills, loadProjects } from "../utils";

type HomepageProps = {
  skills: Skill[];
  projects: Project[];
};

const Home = ({ skills, projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>Home — SNCLB</title>
      </Head>
      <>
        <Hero />
        <About />
        <Skills skills={skills} />
        <Projects projects={projects} />
      </>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
  const skills = await loadSkills();
  const projects = await loadProjects();

  return {
    props: {
      skills,
      projects,
    },
  };
};
