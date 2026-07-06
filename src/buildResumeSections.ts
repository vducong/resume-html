import type { EduProps, JobProps, MasterDataProps, SkillProps } from "./types";

export type ResumeSection =
  | { kind: "exp"; position: number; title: string; jobs: JobProps[] }
  | { kind: "edu"; position: number; title: string; schools: EduProps[] }
  | { kind: "skills"; position: number; title: string; skills: SkillProps[] };

export function buildResumeSections(data: MasterDataProps): ResumeSection[] {
  const sections: ResumeSection[] = [
    ...data.exp.map((section) => ({
      kind: "exp" as const,
      position: section.position,
      title: section.title,
      jobs: section.jobs,
    })),
    {
      kind: "edu",
      position: data.edu.position,
      title: data.edu.title,
      schools: data.edu.schools,
    },
  ];

  if (data.skills && data.skills.skills.length > 0) {
    sections.push({
      kind: "skills",
      position: data.skills.position,
      title: data.skills.title,
      skills: data.skills.skills,
    });
  }

  return sections.sort((a, b) => a.position - b.position);
}
