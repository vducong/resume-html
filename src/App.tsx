import "./App.css";
import { masterData } from "./masterData";
import {
  JobProps,
  JobWorkExp,
  SectionProps,
  WorkProps,
  ProjectProps,
  ContactProps,
} from "./types";

function App() {
  return (
    <div className="App">
      <Header {...masterData.contact} />
      <Intro intro={masterData.intro} />
      {masterData.exp.map((section) => (
        <Section
          key={section.title}
          {...section}
        />
      ))}
    </div>
  );
}

function Intro({ intro }: { intro: string }) {
  return <section className="intro">{intro}</section>;
}

function Header({ fullName, phone, email, linkedIn, github }: ContactProps) {
  return (
    <section className="headerMain">
      <div className="headerTitle">{fullName}</div>
      <div className="headerContact">
        <span>{phone}</span>
        {" | "}
        <a href={`mailto:${email}`}>{email}</a>
        {linkedIn && (
          <>
            {" | "}
            <a href={linkedIn.href}>{linkedIn.text}</a>
          </>
        )}
        {github && (
          <>
            {" | "}
            <a href={github.href}>{github.text}</a>
          </>
        )}
      </div>
    </section>
  );
}

function Section({ title, job }: SectionProps) {
  return (
    <section className="sectionMain">
      <TitleFormatted title={title} />
      <div className="sectionContent">
        {job.map((job, idx) => (
          <SingleJob
            key={`${idx}${job.companyName}`}
            job={job}
          />
        ))}
      </div>
    </section>
  );
}

function TitleFormatted({ title }: { title: string }) {
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

function SingleJob({ job }: { job: JobProps }) {
  return (
    <div className="singleJob">
      <JobHeadingSection job={job} />
      <JobWorkExpSection works={job.works} />
    </div>
  );
}

function JobHeadingSection({ job }: { job: JobProps }) {
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

function JobWorkExpSection({ works }: { works: JobWorkExp[] }) {
  return (
    <ul className="jobWorkExpSection">
      {works.map((work, idx) => {
        return "name" in work ? (
          <li key={work.name}>
            <ProjectWorkExp project={work} />
          </li>
        ) : (
          <li key={`swe${idx}${work.work.length}`}>
            <SingleWorkExp work={work} />
          </li>
        );
      })}
    </ul>
  );
}

function ProjectWorkExp({ project }: { project: ProjectProps }) {
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
            <SingleWorkExp work={work} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function SingleWorkExp({ work }: { work: WorkProps }) {
  return <div className="work">{work.work}</div>;
}

export default App;
