import type { ProjectProps } from "../../types";
import { WorkingItem } from "./WorkingItem";

export function Project({ project }: { readonly project: ProjectProps }) {
  return (
    <div className="project">
      <div className="projectTitle">
        {project.url ? <a href={project.url}>{project.name}</a> : <span>{project.name}</span>}
        {project.desc && (
          <span>
            {": "}
            {project.desc}
          </span>
        )}
      </div>
      <ul className="projectWorkExp">
        {project.works.map((work, idx) => (
          <li key={`item-${idx}-${project.name}-${work.work.length}`}>
            <WorkingItem item={work} />
          </li>
        ))}
      </ul>
    </div>
  );
}
