import { useState } from "react";

import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Router from "./components/Router";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

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

/*
See Name is Optional, it can be made like this -
export default () => {
  return <div>A Functional Component</div>;
}
*/
const App = () => {
  const [selectedItem, setSelectedItem] = useState(options[0]);

  return (
    <div>
      <Header />
      <Router compPath="/">
        <Accordion items={items} />
      </Router>
      <Router compPath="/search">
        <Search />
      </Router>
      <Router compPath="/dropdown">
        <div>
          <Dropdown
            title={"Please select a Color"}
            options={options}
            selected={selectedItem}
            onOptionChange={(option) => setSelectedItem(option)}
          />
          <div style={{ color: `${selectedItem.value}` }}>Selected Color!</div>
        </div>
      </Router>
      <Router compPath="/translate">
        <Translate />
      </Router>
    </div>
  );

  /*
  Now this button click will give error
  TODO - Fix it
  return (
    <div>
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
  */
};
export default App;
