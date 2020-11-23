import axios from "axios";
import { useEffect, useState } from "react";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslatedText] = useState("");

  useEffect(() => {
    const translator = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: text,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(data.data.translations[0].translatedText);
    };

    translator();
  }, [language, text]);

  return (
    <div>
      <h5 className="ui header">{`${language.label} equivalent`}</h5>
      <div className="ui header">{translatedText}</div>
    </div>
  );
};
export default Convert;
