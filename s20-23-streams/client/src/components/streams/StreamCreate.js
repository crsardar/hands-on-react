import React from "react";

import { connect } from "react-redux";

import { actionStremCreate } from "../../actions/StreamsActions";

import Stream from "./Stream";

import history from "../../history";

class StreamCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createStrem(formValues);
  };
  
  onSucceed = () => {
    history.push("/");
  };

  onFailed = () => {
    console.log("Failed to create");
  };

  render() {
    return (
      <div>
        <h3>Create A Stream</h3>
        <Stream
          onSubmit={this.onSubmit}
          label1="Enter Title"
          label2="Enter Description"
          onSucceed={this.onSucceed}
          onFailed={this.onFailed}
        />
      </div>
    );
  }
}

export default connect(null, { createStrem: actionStremCreate })(StreamCreate);
