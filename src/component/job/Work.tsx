import type { WorkProps } from "../../types";
import { Project } from "./Project";
import { WorkingItem } from "./WorkingItem";

export function Work({ works }: { readonly works: WorkProps[] }) {
  return (
    <ul className="work">
      {works.map((work, idx) => {
        return "name" in work ? (
          <li key={work.name}>
            <Project project={work} />
          </li>
        ) : (
          <li key={`swe${idx}${work.work.length}`}>
            <WorkingItem item={work} />
          </li>
        );
      })}
    </ul>
  );
}
