import "./VideoPlayer.scss";

export default function VideoPlayer({ posterUrl }) {
  return (
    <section className="section player">
      <video poster={posterUrl} className="player__main" controls />
    </section>
  );
}
