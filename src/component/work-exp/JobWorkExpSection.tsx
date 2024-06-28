import { JobWorkExp } from "../../types";
import { ProjectWorkExp } from "./ProjectWorkExp";
import { WorkExp } from "./WorkExp";

export function JobWorkExpSection({ works }: { readonly works: JobWorkExp[] }) {
  return (
    <ul className="jobWorkExpSection">
      {works.map((work, idx) => {
        return "name" in work ? (
          <li key={work.name}>
            <ProjectWorkExp project={work} />
          </li>
        ) : (
          <li key={`swe${idx}${work.work.length}`}>
            <WorkExp work={work} />
          </li>
        );
      })}
    </ul>
  );
}
