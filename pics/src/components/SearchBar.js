import React from "react";

class SearchBar extends React.Component {
  // Initialization of State withour constructor
  state = { searchTerm: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    // console.log("SearchBar : onFormSubmit : " + this.state.searchTerm);

    this.props.searchMethod(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              placeholder="Type here to seach image"
              value={this.state.searchTerm}
              onChange={(event) =>
                this.setState({ searchTerm: event.target.value })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
