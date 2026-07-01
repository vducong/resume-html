import { JobProps } from "../../types";
import { Job } from "./Job";

export function SectionContent({ jobs }: { readonly jobs: JobProps[] }) {
  return (
    <div className="sectionContent">
      {jobs.map((job, idx) => (
        <Job key={`${idx}${job.companyName}`} job={job} />
      ))}
    </div>
  );
}
