import React from "react";

import { connect } from "react-redux";

import {
  actionStreamDetails,
  actionStreamEdit,
} from "../../actions/StreamsActions";

import Stream from "./Stream";

import history from "../../history";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.getStreamDetails(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.actionStreamEdit(this.props.match.params.id, formValues);
  };

  onSucceed = () => {
    history.push("/");
  };

  onFailed = () => {
    console.log("Failed to edit stream details");
  };

  renderStream(stream) {
    if (stream != null) {
      return (
        <Stream
          label1="Title"
          label2="Description"
          onSubmit={this.onSubmit}
          initialValues={stream}
          onSucceed={this.onSucceed}
          onFailed={this.onFailed}
        />
      );
    }
    return null;
  }
  render() {
    return (
      <div>
        <h3>Edit Stream</h3>
        {this.renderStream(this.props.currentStream)}
      </div>
    );
  }
}
const mapStateToProps = ({ streams }) => {
  const currentStream =
    streams != null && streams.length > 0 ? streams[0] : null;

  return {
    currentStream,
  };
};

export default connect(mapStateToProps, {
  actionStreamEdit,
  getStreamDetails: actionStreamDetails,
})(StreamEdit);
