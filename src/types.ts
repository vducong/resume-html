export type MasterDataProps = {
  contact: ContactProps;
  intro: string;
  edu: {
    title: string;
    schools: EduProps[];
  };
  exp: ExpProps[];
  skills: SkillProps[];
};

export type ContactProps = {
  fullName: string;
  location?: string;
  phone?: string;
  email: string;
  linkedIn?: {
    href?: string;
    text: string;
  };
  github?: {
    href?: string;
    text: string;
  };
};

export type EduProps = {
  school: string;
  degree: string;
  location?: string;
  achievement?: string;
  startMonth: string;
  endMonth: string;
};

export type SkillProps = {
  name: string;
  proficiency?: string;
};

export type ExpProps = {
  title: string;
  jobs: JobProps[];
};

export type JobProps = {
  jobTitle: string;
  companyName: string;
  companyUrl?: string;
  companyLocation?: string;
  companyDesc?: string;
  startMonth: string;
  endMonth: string;
  works: WorkProps[];
};

export type WorkProps = ProjectProps | WorkingItemProps;

export type ProjectProps = {
  name: string;
  desc?: string;
  url?: string;
  works: WorkingItemProps[];
};

export type WorkingItemProps = {
  work: string;
};
