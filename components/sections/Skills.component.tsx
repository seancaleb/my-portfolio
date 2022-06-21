import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { Skill } from "../../types";
import Section from "../Section.component";

const Skills = ({ skills }: { skills: Skill[] }) => {
  return (
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
  );
};

export default Skills;
