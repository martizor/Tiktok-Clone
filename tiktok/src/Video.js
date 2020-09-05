import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    //If the video is playing
    //stop it..

    //otherwise if its not playing
    //play it..
  };
  return (
    <div className="video">
      <video
        className="video_player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      >
        <source src={url} type="video/mp4" />
      </video>
      <VideoFooter channel={channel} description={description} song={song} />

      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      {/* Video Footer */}
      {/* Video Siderbar */}
    </div>
  );
}

export default Video;
