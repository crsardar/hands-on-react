import React from "react";

export default class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.calSpans);
  }

  calSpans = () => {
    const imgHeight = this.imageRef.current.clientHeight;
    const spans = Math.ceil(imgHeight / 10);
    this.setState({ spans }); // ECS 2015 stye of setState
  };

  render() {
    const { urls, alt_description } = this.props.image;

    return (
      <img
        ref={this.imageRef}
        src={urls.regular}
        alt={alt_description}
        style={{ gridRowEnd: "span " + this.state.spans }}
        // style={{ gridRowEnd: `span ${this.state.spans}` }} // this will also work
      />
    );
  }
}
