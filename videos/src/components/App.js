import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoItem from "./VideoDetail";

import youtube from "../api/youtube";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.searchVideos("buildings");
  }

  searchVideos = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // console.log(response.data.items);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchMethod={this.searchVideos} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoItem video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onItemSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
