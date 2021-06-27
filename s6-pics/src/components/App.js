import React from "react";

import unsplash from "../api/unsplash";

import SeachBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initializing state with constructor
    this.state = { images: [] };

    // Alternate way to bind methos to a class
    // this.doSearch = this.doSearch.bind(this);
  }

  doSearch = async (term) => {
    // console.log("App : doSearch : term = " + term);

    var result = await unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });

    console.log(result);
    this.setState({ images: result.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SeachBar searchMethod={this.doSearch} />
        <ImageList imageList={this.state.images} />
      </div>
    );
  }
}

export default App;
