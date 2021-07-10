import axios from "axios";

const { useState, useEffect } = require("react");

const Search = () => {
  const [term, setTerm] = useState("Programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [searchResults, setSearchResults] = useState([]);

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  useEffect(() => {
    console.log("useEffect");

    const taskId = setTimeout(() => setDebouncedTerm(term), 500);

    return () => {
      clearTimeout(taskId);
    };
  }, [term]);

  useEffect(() => {
    searchOnWikipedia(debouncedTerm);
  }, [debouncedTerm]);

  const searchOnWikipedia = async (term) => {
    console.log(`Searching on Wikipidia ${term}`);

    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });

    if (data.query) {
      setSearchResults(data.query.search);
    } else if (data.error) {
      console.log(data.error);
      setSearchResults([]);
    }
  };

  const renderedResults = searchResults.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input value={term} onChange={onInputChange} className="input" />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
