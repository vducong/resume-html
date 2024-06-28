import { JobProps } from "../types";
import { JobHeadingSection } from "./JobHeadingSection";
import { JobWorkExpSection } from "./work-exp/JobWorkExpSection";

export function Job({ job }: { readonly job: JobProps }) {
  return (
    <div className="singleJob">
      <JobHeadingSection job={job} />
      <JobWorkExpSection works={job.works} />
    </div>
  );
}
