import "./App.css";
import { masterData } from "./masterData";
import {
  JobProps,
  JobWorkExp,
  SectionProps,
  WorkProps,
  ProjectProps,
} from "./types";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      {masterData.map((section) => (
        <Section
          key={section.title}
          {...section}
        />
      ))}
    </div>
  );
}

function Intro() {
  return (
    <section className="intro">
      A full-stack software engineer with field experience in web development.
      Confident with numerical thinking and an analytic mindset to aim at
      effective problem-solving.
      <br />I love traveling. Travel allows me to perceive the world in a more
      vivid way. One of my dreams is to take my wife on a global journey where
      we may see new cultures, hear fascinating tales, and shoot innumerable
      photographs to remember the experience.
    </section>
  );
}

function Header() {
  return (
    <section className="headerMain">
      <div className="headerTitle">Đức Công, Vũ</div>
      <div className="headerContact">
        <span>+84 399 691 216</span>
        {" | "}
        <a href="mailto:vducong@gmail.com">vducong@gmail.com</a>
        {" | "}
        <a href="https://www.linkedin.com/in/duc-cong-vu">
          linkedin.com/in/duc-cong-vu
        </a>
        {" | "}
        <a href="https://www.github.com/vducong">github.com/vducong</a>
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
        <span>{project.desc}</span>
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
