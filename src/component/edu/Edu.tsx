import { EduProps } from "../../types";

export function Edu({ edu }: { readonly edu: EduProps }) {
  return (
    <div className="singleEdu">
      <div>
        <div className="eduSchool">{edu.school}</div>
        <div className="eduDegree">{edu.degree}</div>
      </div>
      <div className="eduDuration">
        {edu.startMonth} - {edu.endMonth}
      </div>
    </div>
  );
}
