// Example of React's "props" in a child component, when it is created as sub-class of React.Component.
import React from "react";

export default class ComponentDetail extends React.Component {
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={this.props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {this.props.author}
          </a>
          <div className="metadata">
            <span className="date">{this.props.timeAgo}</span>
          </div>
          <div className="text">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
