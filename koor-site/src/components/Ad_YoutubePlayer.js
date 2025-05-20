import React from 'react';
import YouTube from 'react-youtube';

const Ad_YoutubePlayer = (vidHeight = 200, vidWidth = 355) => {
  const videoId = 'saXzXq3lXnM';

  const opts = {
    height: vidHeight,
    width: vidWidth,
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <>
      <YouTube videoId={videoId} opts={opts} />
    </>
  );
};

export default Ad_YoutubePlayer;