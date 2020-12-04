import React from "react";
import { connect } from "react-redux";

import { actionStreamsList } from "../../actions/StreamsActions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  render() {
    const streamsJSX = this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{streamsJSX}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ currentUser, streams }) => {
  return { currentUser, streams };
};

export default connect(mapStateToProps, { getStreams: actionStreamsList })(
  StreamList
);
