import "./NextVideosGallery.scss";
import { Link } from "react-router-dom";

function NextVideoItem({ video }) {
  return (
    <section className="gallery__item">
      <Link to={`/video/${video.id}`}>
        <img
          className="gallery__item--thumbnail"
          src={video.image}
          alt={video.title}
        />
      </Link>
      <div className="gallery__item--info">
        <Link to={`/video/${video.id}`} className="gallery__item--title">
          {video.title}
        </Link>
        <div className="gallery__item--channel">{video.channel}</div>
      </div>
    </section>
  );
}

export default function NextVideosGallery({ videos }) {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Next Videos</h2>
      <section className="gallery__main">
        {videos.map((video) => {
          return <NextVideoItem key={video.id} video={video} />;
        })}
      </section>
    </section>
  );
}
