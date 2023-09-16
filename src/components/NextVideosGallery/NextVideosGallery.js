import "./NextVideosGallery.scss";
import { Link } from "react-router-dom";

function NextVideoItem({ video, userName }) {
  console.log(userName);
  const link = userName
    ? `/video/${video.id}/${userName}`
    : `/video/${video.id}`;

  console.log(link);
  return (
    <section className="gallery__item">
      <Link to={link}>
        <img
          className="gallery__thumbnail"
          src={video.image}
          alt={video.title}
        />
      </Link>
      <div className="gallery__info">
        <Link to={link} className="gallery__name">
          {video.title}
        </Link>
        <div className="gallery__channel">{video.channel}</div>
      </div>
    </section>
  );
}

export default function NextVideosGallery({ videos, userName }) {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Next Videos</h2>
      <section className="gallery__main">
        {videos.map((video) => {
          return (
            <NextVideoItem key={video.id} video={video} userName={userName} />
          );
        })}
      </section>
    </section>
  );
}
