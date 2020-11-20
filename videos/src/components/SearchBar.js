import React from "react";

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchMethod(this.state.searchTerm);
  };

  onInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search Videos</label>
            <input
              type="text"
              placeholder="Type here to seach for videos"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
