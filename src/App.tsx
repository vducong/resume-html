import "./style/App.css";
import { Header } from "./component/Header";
import { Intro } from "./component/Intro";
import { Section } from "./component/Section";
import { masterData } from "./masterData";

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

export default App;
