import { NextApiRequest, NextApiResponse } from "next";
import skills from "../../data/skills";
import { Skill } from "../../types";

export default function handler(req: NextApiRequest, res: NextApiResponse<Skill[]>) {
  res.status(200).json(skills);
}
