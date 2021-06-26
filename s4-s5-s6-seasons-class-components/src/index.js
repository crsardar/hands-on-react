import React from "react";
import ReactDOM from "react-dom";

import SeasonDetails from "./SeasonDetails";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initializing state
    this.state = { lat: null, errorMsg: null };
  }
  /**
   * Without constructor, we can simply initiate state as follows
   class App extends React.Component {
    ...

    state = { lat: null, errorMessage: '' };
    // Yes, "this." is NOT required here

    ...
   }
   * Babble will create a constructor & this will be plase inside constructor.
   */

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  getRenderContent() {
    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDetails lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errorMsg) {
      return <div>Error : {this.state.errorMsg}</div>;
    } else {
      return <Spinner message="Please allow to read your location" />;
    }
  }

  render() {
    return <div className="border red">{this.getRenderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
