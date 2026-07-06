import type { SkillProps } from "../../types";
import { Skill } from "./Skill";

export function SectionContent({ skills }: { readonly skills: SkillProps[] }) {
  return (
    <div className="sectionContent">
      {skills.map((item, idx) => (
        <Skill key={`${idx}${item.name}`} skill={item} />
      ))}
    </div>
  );
}
