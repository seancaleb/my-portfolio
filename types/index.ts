export type Skill = {
  id: string;
  title: string;
  src: string;
};

type Image = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string | undefined;
  mainSrc: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  alt: string;
  link: string;
  image: Image;
  githubLink: string;
};
