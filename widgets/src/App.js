import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

// See Name is Optional
export default () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      // Now this button click will give error
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <div>
          <Dropdown
            title={"Please select a Color"}
            options={options}
            selected={selectedItem}
            onOptionChange={(option) => setSelectedItem(option)}
          />
          <div style={{ color: `${selectedItem.value}` }}>Selected Color!</div>
        </div>
      ) : null}
    </div>
  );
};
