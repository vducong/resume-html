export type MasterDataProps = {
  contact: ContactProps;
  intro: string;
  exp: SectionProps[];
};

export type ContactProps = {
  fullName: string;
  phone?: string;
  email: string;
  linkedIn?: {
    href: string;
    text: string;
  };
  github?: {
    href: string;
    text: string;
  };
};

export type SectionProps = {
  title: string;
  job: JobProps[];
};

export type JobProps = {
  jobTitle: string;
  companyName?: string;
  companyUrl?: string;
  companyDesc?: string;
  startMonth: string;
  endMonth: string;
  works: JobWorkExp[];
};

export type JobWorkExp = ProjectProps | WorkProps;

export type ProjectProps = {
  name: string;
  desc?: string;
  url?: string;
  works: WorkProps[];
};

export type WorkProps = {
  work: string;
};
