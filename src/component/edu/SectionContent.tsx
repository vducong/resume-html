import type { EduProps } from "../../types";
import { Edu } from "./Edu";

export function SectionContent({ schools }: { readonly schools: EduProps[] }) {
  return (
    <div className="sectionContent">
      {schools.map((item, idx) => (
        <Edu key={`${idx}${item.school}`} edu={item} />
      ))}
    </div>
  );
}
