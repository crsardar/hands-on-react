import React from "react";
import { connect } from "react-redux";

import { getStreamsListAction } from "../../actions/StreamsActions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  render() {
    const streamsJSX = this.props.streams.map((stream) => {
      return (
        <div key={stream.id} style={{ marginTop: "10px" }}>
          <h3>{stream.title}</h3>
          <p>{stream.description}</p>
          <hr />
        </div>
      );
    });

    return <div>{streamsJSX}</div>;
  }
}

const mapStateToProps = ({ currentUser, streams }) => {
  return { currentUser, streams };
};

export default connect(mapStateToProps, { getStreams: getStreamsListAction })(
  StreamList
);
