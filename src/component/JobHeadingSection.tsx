import { JobProps } from "../types";

export function JobHeadingSection({ job }: { readonly job: JobProps }) {
  return (
    <div className="jobHeadingSection">
      <div className="jobHeading">
        <div className="jobTitle">{job.jobTitle}</div>
        {job.companyName && (
          <>
            {job.companyUrl ? (
              <div className="jobCompanyName">
                <a href={job.companyUrl}>{job.companyName}</a>
              </div>
            ) : (
              <div>{job.companyName}</div>
            )}
          </>
        )}
        <div className="jobDuration">
          {job.startMonth} - {job.endMonth}
        </div>
      </div>
      {job.companyDesc && <div>{job.companyDesc}</div>}
    </div>
  );
}
