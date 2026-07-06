import "./style/App.css";

import masterDataJson from "../docs/master-data.json";
import { SectionContent as EduSectionContent } from "./component/edu/SectionContent";
import { Header } from "./component/Header";
import { Intro } from "./component/Intro";
import { SectionContent as JobSectionContent } from "./component/job/SectionContent";
import { PagePreview } from "./component/PagePreview";
import { PageSizeControls } from "./component/PageSizeControls";
import { Section } from "./component/Section";
import { SectionContent as SkillSectionContent } from "./component/skill/SectionContent";
import type { MasterDataProps } from "./types";

const masterData = masterDataJson as MasterDataProps;

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

          {/* Skills */}
          {masterData.skills?.length > 0 && (
            <Section title="Skills" content={<SkillSectionContent skills={masterData.skills} />} />
          )}
        </div>
      </PagePreview>
    </>
  );
}
