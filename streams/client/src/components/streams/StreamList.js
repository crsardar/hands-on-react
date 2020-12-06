import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { actionStreamsList } from "../../actions/StreamsActions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderAdmin(stream) {
    if (
      this.props.currentUser &&
      stream.userId === this.props.currentUser.userId
    ) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
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
          {this.renderAdmin(stream)}
        </div>
      );
    });

    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{streamsJSX}</div>
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
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
