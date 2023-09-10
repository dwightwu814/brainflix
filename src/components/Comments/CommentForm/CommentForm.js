import "./CommentForm.scss";
import ProfilePhoto from "../../../assets/images/user-profile-photo.jpg";
import Button from "../../utils/Button/Button";
import AddCommentIcon from "../../../assets/images/icons/add_comment.svg";

export default function CommentForm() {
  return (
    <section className="comment__form">
      <img
        className="comment__form--profile"
        src={ProfilePhoto}
        alt="profile"
      />
      <form className="comment__form--wrapper">
        <div className="comment__form--form">
          <span className="comment__form--text">Join the conversation</span>
          <textarea
            className="comment__form--input"
            type="text"
            placeholder="Add a new comment"
          />
        </div>
        <div className="comment__form--submit">
          <Button text="Comment" icon={AddCommentIcon} />
        </div>
      </form>
    </section>
  );
}
