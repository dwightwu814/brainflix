import "./App.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Header from "./components/Header/Header";
import Comments from "./components/Comments/Comments";
import NextVideosGallery from "./components/NextVideosGallery/NextVideosGallery";
import axios from "axios";
import apiKey from "./data/api-key.js";

function App() {
  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);

  const urlRoot = "https://project-2-api.herokuapp.com/";

  // Get list of videos on load
  useEffect(() => {
    axios
      .get(`${urlRoot}videos?api_key=${apiKey}}`)
      .then((res) => {
        setVideos(res.data);
        setCurrentVideoId(res.data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Get current video on currentVideoId change
  useEffect(() => {
    if (!currentVideoId) return;
    axios
      .get(`${urlRoot}videos/${currentVideoId}?api_key=${apiKey}}`)
      .then((res) => {
        setCurrentVideo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentVideoId]);

  const nextVideos = videos.filter((video) => {
    return video.id !== currentVideoId;
  });

  return (
    <>
      <Navbar />
      <VideoPlayer posterUrl={currentVideo ? currentVideo.image : null} />
      <section className="section below">
        <section className="below__first">
          <Header video={currentVideo} />
          <Comments comments={currentVideo ? currentVideo.comments : []} />
        </section>
        <section className="below__second">
          <NextVideosGallery
            videos={nextVideos}
            handleClick={(id) => {
              setCurrentVideoId(id);
            }}
          />
        </section>
      </section>
    </>
  );
}

export default App;
