import { useEffect, useState } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const languages = [
  {
    label: "Benali",
    value: "bn",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Vietnamese",
    value: "vi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1300);

    return () => clearTimeout(timerId);
  }, [text]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        title="Select a language"
        options={languages}
        selected={language}
        onOptionChange={setLanguage}
      />
      <Convert language={language} text={debouncedText} />
    </div>
  );
};
export default Translate;
