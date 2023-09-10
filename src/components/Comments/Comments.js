import "./Comments.scss";
import CommentForm from "./CommentForm/CommentForm";
import timestampToTimeString from "../../helperFunctions/timestampToTimeString";

function OneComment({ comment }) {
  const timeString = timestampToTimeString(comment.timestamp);
  return (
    <section className="comments__display">
      <div className="comments__display--photo"></div>
      <section className="comments__display--rest">
        <div className="comments__display--top">
          <div className="comments__display--name">{comment.name}</div>
          <div className="comments__display--date">{timeString}</div>
        </div>
        <p className="comments__display--text">{comment.comment}</p>
      </section>
    </section>
  );
}

export default function Comments({ comments }) {
  return (
    <section className="comments">
      <h2 className="comments__title">3 Comments</h2>
      <CommentForm />
      {comments.map((comment) => {
        return <OneComment key={comment.id} comment={comment} />;
      })}
    </section>
  );
}
