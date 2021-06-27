import React from "react";

import "./ImageList.css";
import ImageCard from "./ImageCard";

export default class ImageList extends React.Component {
  render() {
    const imgJSX = this.props.imageList.map((image) => {
      return <ImageCard image={image} key={image.id} />;
    });

    return <div className="image-list">{imgJSX}</div>;

    /*
    // Equivalent to 
    const imgJSX = this.props.imageList.map(({ urls, id, alt_description }) => {
      return <img src={urls.regular} key={id} alt={alt_description} />;
    });

    return <div className="image-list">{imgJSX}</div>;
    */
  }
}
