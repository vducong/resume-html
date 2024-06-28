import { SectionProps } from "../types";
import { Job } from "./Job";

export function Section({ title, job }: SectionProps) {
  return (
    <section className="sectionMain">
      <TitleFormatted title={title} />
      <div className="sectionContent">
        {job.map((job, idx) => (
          <Job
            key={`${idx}${job.companyName}`}
            job={job}
          />
        ))}
      </div>
    </section>
  );
}

function TitleFormatted({ title }: { readonly title: string }) {
  const words = title.split(" ");
  return (
    <div className="sectionTitle">
      {words.map((word, idx) => (
        <span key={`${idx}${word}`}>
          <span style={{ fontSize: "1.25em" }}>{word.charAt(0)}</span>
          {word.slice(1)}{" "}
        </span>
      ))}
    </div>
  );
}
