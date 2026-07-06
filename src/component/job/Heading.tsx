import type { JobProps } from "../../types";

export function Heading({ job }: { readonly job: JobProps }) {
  return (
    <div className="jobHeading">
      <div className="jobHeadingContent">
        <div className="jobTitle">{job.jobTitle}</div>
        <div className="jobDuration">
          {job.startMonth} - {job.endMonth}
        </div>
      </div>
      <div className="">
        {job.companyName && (
          <span className="jobCompanyName">
            {job.companyUrl ? <a href={job.companyUrl}>{job.companyName}</a> : job.companyName}
          </span>
        )}
        {job.companyLocation && (
          <span className="jobCompanyLocation"> ({job.companyLocation})</span>
        )}
        {job.companyDesc && <span className="jobCompanyDesc"> | {job.companyDesc}</span>}
      </div>
    </div>
  );
}
