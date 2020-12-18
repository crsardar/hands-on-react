import React from "react";

import VideoItem from "./VideoItem";

// ECS 2015 style
const VideoList = ({ videos, onItemSelected }) => {
  const videosJSX = videos.map((video) => {
    return (
      <VideoItem
        video={video}
        onItemSelected={onItemSelected}
        key={video.id.videoId}
      />
    );
  });

  return <div className="ui relaxed deivided list">{videosJSX}</div>;
};

export default VideoList;
