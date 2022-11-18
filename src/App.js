import { useState } from "react";
import { langDefault, langList } from "./config";
import { LanguageList, T } from "react-translator-component";
import "./App.css";

function App() {
  const [language, setLanguage] = useState(langDefault);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h6>{T("The existence of one is the existence of all.")}</h6>
          <p>{T("by")} Cypher</p>
        </div>
        <div className="App">
          <LanguageList Language={language} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {Object.keys(langList).map((key) => (
              <option key={key} value={key}>
                {langList[key].text}
              </option>
            ))}
          </select>
        </div>
      </header>
    </div>
  );
}

export default App;
