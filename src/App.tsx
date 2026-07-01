import "./style/App.css";
import { Header } from "./component/Header";
import { Intro } from "./component/Intro";
import { Section } from "./component/Section";
import { masterData } from "./masterData";
import { SectionContent as JobSectionContent } from "./component/job/SectionContent";
import { SectionContent as EduSectionContent } from "./component/edu/SectionContent";

export default function App() {
  return (
    <div className="App">
      <Header {...masterData.contact} />
      <Intro intro={masterData.intro} />

      {/* Professional Experience */}
      {masterData.exp.map((section) => (
        <Section
          key={section.title}
          title={section.title}
          content={<JobSectionContent jobs={section.jobs} />}
        />
      ))}

      {/* Education */}
      <Section
        title={masterData.edu.title}
        content={<EduSectionContent schools={masterData.edu.schools} />}
      />
    </div>
  );
}
