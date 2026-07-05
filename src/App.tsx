import "./style/App.css";
import { PagePreview } from "./component/PagePreview";
import { PageSizeControls } from "./component/PageSizeControls";
import { Header } from "./component/Header";
import { Intro } from "./component/Intro";
import { Section } from "./component/Section";
import masterData from "../docs/master-data.json";
import { SectionContent as JobSectionContent } from "./component/job/SectionContent";
import { SectionContent as EduSectionContent } from "./component/edu/SectionContent";

export default function App() {
  return (
    <>
      <PageSizeControls />
      <PagePreview>
        <div className="App">
          <Header {...masterData.contact} />
          <Intro intro={masterData.intro} />

          {/* Experience */}
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
      </PagePreview>
    </>
  );
}
