import type { JobProps } from "../../types";
import { Heading } from "./Heading";
import { Work } from "./Work";

export function Job({ job }: { readonly job: JobProps }) {
  return (
    <div className="singleJob">
      <Heading job={job} />
      <Work works={job.works} />
    </div>
  );
}
