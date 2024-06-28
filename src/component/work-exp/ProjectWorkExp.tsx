import { ProjectProps } from "../../types";
import { WorkExp } from "./WorkExp";

export function ProjectWorkExp({
  project,
}: {
  readonly project: ProjectProps;
}) {
  return (
    <div className="project">
      <div className="projectTitle">
        {project.url ? (
          <a href={project.url}>{project.name}</a>
        ) : (
          <span>{project.name}</span>
        )}
        {": "}
        {project.desc && <span>{project.desc}</span>}
      </div>
      <ul className="projectWorkExp">
        {project.works.map((work, idx) => (
          <li key={`swe${project.name}${idx}${work.work.length}`}>
            <WorkExp work={work} />
          </li>
        ))}
      </ul>
    </div>
  );
}
