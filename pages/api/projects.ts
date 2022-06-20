import { NextApiRequest, NextApiResponse } from "next";
import projects from "../../data/projects";
import { Project } from "../../types";

export default function handler(req: NextApiRequest, res: NextApiResponse<Project[]>) {
  res.status(200).json(projects);
}
