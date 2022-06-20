import { Project, Skill } from "../types";

const { URL } = process.env;

export const loadSkills = async (): Promise<Skill[]> =>
  await (await fetch(URL + "api/skills")).json();

export const loadProjects = async (): Promise<Project[]> =>
  await (await fetch(URL + "api/projects")).json();
