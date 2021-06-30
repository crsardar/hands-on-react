import React from "react";
import "./SeasonDisplay.css";

export default class SeasonDetails extends React.Component {
  seasons = {
    summer: { text: "It's Summer! Let's hit the beach!", image: "sun" },
    winter: { text: "It's so cold! Where is the fire!", image: "snowflake" },
  };

  getSeason(lat) {
    const month = new Date().getMonth();
    if (month > 2 && month < 9) {
      return lat > 0 ? "summer" : "winter";
    } else {
      return lat > 0 ? "winter" : "summer";
    }
  }

  render() {
    // the name "text", "icon" have to be exactly same as in "his.seasons", else value is "undefined"
    const season = this.getSeason(this.props.lat);
    const { text, image } = this.seasons[season];

    return (
      <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${image} icon`} />
        <h1>{text}</h1>
        <i className={`icon-right massive ${image} icon`} />
      </div>
    );
  }
}
