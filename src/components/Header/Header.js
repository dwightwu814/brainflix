import React from "react";
import "./Header.scss";
import ViewsIcon from "../../assets/images/icons/views.svg";
import LikesIcon from "../../assets/images/icons/likes.svg";
import timestampToTimeString from "../../helperFunctions/timestampToTimeString";

export default function Header({ video }) {
  if (!video) return null;
  return (
    <section className="header">
      <h1 className="header__title">{video.title}</h1>
      <section className="header__menu">
        <section className="header__menu--item">
          <div className="header__author">{`By ${video.channel}`}</div>
          <div className="header__date">
            {timestampToTimeString(video.timestamp)}
          </div>
        </section>
        <section className="header__menu--item">
          <div className="header__stats">
            <img src={ViewsIcon} alt="views" />
            {video.views}
          </div>
          <div className="header__stats">
            <img src={LikesIcon} alt="likes" />
            {video.likes}
          </div>
        </section>
      </section>
      <p className="header__description">{video.description}</p>
    </section>
  );
}
