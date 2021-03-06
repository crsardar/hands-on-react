const { useState, useRef, useEffect } = require("react");

const Dropdown = ({ title, options, selected, onOptionChange }) => {
  const [isExpanded, setExpanded] = useState(false);
  const refDropdown = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      console.log(refDropdown);
      if (
        refDropdown &&
        refDropdown.current &&
        !refDropdown.current.contains(event.target)
      ) {
        setExpanded(false);
      }
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const optionsJSX = options.map((option) => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onOptionChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={refDropdown} className="ui form">
      <div className="field">
        <label className="label">{title}</label>
        <div
          onClick={() => setExpanded(!isExpanded)}
          className={`ui selection dropdown ${
            isExpanded ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isExpanded ? "visible transition" : ""}`}>
            {optionsJSX}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
