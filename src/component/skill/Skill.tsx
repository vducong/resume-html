import type { SkillProps } from "../../types";

export function Skill({ skill }: { readonly skill: SkillProps }) {
  return (
    <div className="skill">
      <div className="skillName">{skill.name}</div>
      {skill.proficiency && <div className="skillProficiency">{skill.proficiency}</div>}
    </div>
  );
}
