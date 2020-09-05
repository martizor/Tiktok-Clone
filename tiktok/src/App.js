import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";
import Video from "./Video";
import Mina from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/mina.mp4";
import Momo from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/momo.mp4";
import Sana from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/sana.mp4";
import chae from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/chae.mp4";
import jihyo from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/jihyo.mp4";
import jeongyeon from "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/jeongyeon.mp4";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }
    fetchPosts();
  }, []);

  function video_detect(url) {
    if (
      url === "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/mina.mp4"
    ) {
      return Mina;
    } else if (
      url === "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/momo.mp4"
    ) {
      return Momo;
    } else if (
      url === "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/sana.mp4"
    ) {
      return Sana;
    } else if (
      url === "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/chae.mp4"
    ) {
      return chae;
    } else if (
      url === "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/jihyo.mp4"
    ) {
      return jihyo;
    } else if (
      url ===
      "/Users/Martin/Code/Tiktok-Clone/tiktok/src/Data_Videos/jeongyeon.mp4"
    ) {
      return jeongyeon;
    }
  }

  console.log(videos);
  return (
    //BEM CONVENTION!!
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={video_detect(url)}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
      </div>
      {/* app container */}
    </div>
  );
}

export default App;
