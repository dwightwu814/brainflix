import "./Comments.scss";
import CommentForm from "./CommentForm/CommentForm";
import timestampToTimeString from "../../helperFunctions/timestampToTimeString";

function OneComment({ comment }) {
  const timeString = timestampToTimeString(comment.timestamp);
  return (
    <section className="comment">
      <div className="comment__photo"></div>
      <section className="comment__rest">
        <div className="comment__top">
          <div className="comment__name">{comment.name}</div>
          <div className="comment__date">{timeString}</div>
        </div>
        <p className="comment__text">{comment.comment}</p>
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
