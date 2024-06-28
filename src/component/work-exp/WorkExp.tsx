import { WorkProps } from "../../types";

export function WorkExp({ work }: { readonly work: WorkProps }) {
  return <div className="work">{work.work}</div>;
}
