import "./NextVideosGallery.scss";

function NextVideoItem({ video, handleClick }) {
  return (
    <section className="gallery__item">
      <img
        className="gallery__item--thumbnail"
        src={video.image}
        alt={video.title}
        onClick={() => handleClick(video.id)}
      />
      <div className="gallery__item--info">
        <div
          className="gallery__item--title"
          onClick={() => handleClick(video.id)}
        >
          {video.title}
        </div>
        <div className="gallery__item--channel">{video.channel}</div>
      </div>
    </section>
  );
}

export default function NextVideosGallery({ videos, handleClick }) {
  return (
    <section className="gallery">
      <h2 className="gallery__title">Next Videos</h2>
      <section className="gallery__main">
        {videos.map((video) => {
          return (
            <NextVideoItem
              key={video.id}
              video={video}
              handleClick={handleClick}
            />
          );
        })}
      </section>
    </section>
  );
}
