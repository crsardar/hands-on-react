import React from "react";

export default class ImageList extends React.Component {
  render() {
    return this.props.imageList.map(({ urls, id, alt_description }) => {
      return <img src={urls.regular} key={id} alt={alt_description} />;
    });
    /*
    // Equivalent to 
    return this.props.imageList.map((image) => {
      return (
        <img
          src={image.urls.regular}
          key={image.id}
          alt={image.alt_description}
        />
      );
    });
    */
  }
}
