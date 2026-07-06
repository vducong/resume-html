import "./style/App.css";

import masterDataJson from "../docs/master-data.json";
import { Header } from "./component/Header";
import { Intro } from "./component/Intro";
import { PagePreview } from "./component/PagePreview";
import { PageSizeControls } from "./component/PageSizeControls";
import { ResumeSections } from "./component/ResumeSections";
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
          <ResumeSections data={masterData} />
        </div>
      </PagePreview>
    </>
  );
}
