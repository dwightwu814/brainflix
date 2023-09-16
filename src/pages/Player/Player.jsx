import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Header from "../../components/Header/Header";
import Comments from "../../components/Comments/Comments";
import NextVideosGallery from "../../components/NextVideosGallery/NextVideosGallery";
import apiKey from "../../data/api-key.js";
import axios from "axios";
import "./Player.scss";

const urlRoot = "https://project-2-api.herokuapp.com/";

const getVideosList = async (handleResult) => {
  try {
    const response = await axios.get(`${urlRoot}videos?api_key=${apiKey}`);
    handleResult(response.data);
  } catch (error) {
    console.error(error);
  }
};

const getVideo = async (videoId, handleResult) => {
  try {
    const response = await axios.get(
      `${urlRoot}videos/${videoId}?api_key=${apiKey}}`
    );
    handleResult(response.data);
  } catch (error) {
    console.error(error);
  }
};

const postComment = async (videoId, userName, comment, handleNewComments) => {
  const postBody = {
    name: userName,
    comment: comment,
  };
  try {
    await axios.post(
      `${urlRoot}videos/${videoId}/comments?api_key=${apiKey}}`,
      postBody
    );
    getVideo(videoId, (data) => {
      handleNewComments(data.comments);
    });
  } catch (error) {
    console.error(error);
  }
};

function PlayerPage() {
  const { videoId, userName } = useParams();

  const [videos, setVideos] = useState([]);
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [comments, setComments] = useState([]);

  // Get list of videos on load
  useEffect(() => {
    getVideosList((videosList) => setVideos(videosList));
  }, []);

  // The current video ID is either in the URL param,
  // or the first video in the list
  useEffect(() => {
    if (videoId) {
      setCurrentVideoId(videoId);
    } else if (videos.length > 0) {
      setCurrentVideoId(videos[0].id);
    }
  }, [videos, videoId]);

  // Update comments on currentVideo change
  useEffect(() => {
    if (!currentVideo) return;
    setComments(currentVideo.comments);
  }, [currentVideo]);

  // Get current video on currentVideoId change
  useEffect(() => {
    if (!currentVideoId) return;
    getVideo(currentVideoId, (video) => setCurrentVideo(video));
  }, [currentVideoId]);

  return (
    <>
      <Navbar userName={userName} />
      <VideoPlayer posterUrl={currentVideo ? currentVideo.image : null} />
      <section className="section player-page">
        <section className="player-page__first">
          <Header video={currentVideo} />
          <Comments
            comments={comments}
            onCommentSubmit={(comment) => {
              postComment(
                currentVideoId,
                userName || "Anonymous",
                comment,
                (newComments) => {
                  setComments(newComments);
                }
              );
            }}
          />
        </section>
        <section className="player-page__second">
          <NextVideosGallery
            videos={videos.filter((video) => {
              return video.id !== currentVideoId;
            })}
            userName={userName}
          />
        </section>
      </section>
    </>
  );
}

export default PlayerPage;
