import { buildResumeSections } from "../buildResumeSections";
import type { MasterDataProps } from "../types";
import { SectionContent as EduSectionContent } from "./edu/SectionContent";
import { SectionContent as JobSectionContent } from "./job/SectionContent";
import { Section } from "./Section";
import { SectionContent as SkillSectionContent } from "./skill/SectionContent";

export function ResumeSections({ data }: { readonly data: MasterDataProps }) {
  const sections = buildResumeSections(data);

  return sections.map((section) => {
    switch (section.kind) {
      case "exp":
        return (
          <Section
            key={`exp-${section.title}`}
            title={section.title}
            content={<JobSectionContent jobs={section.jobs} />}
          />
        );
      case "edu":
        return (
          <Section
            key={`edu-${section.title}`}
            title={section.title}
            content={<EduSectionContent schools={section.schools} />}
          />
        );
      case "skills":
        return (
          <Section
            key={`skills-${section.title}`}
            title={section.title}
            content={<SkillSectionContent skills={section.skills} />}
          />
        );
    }
  });
}
