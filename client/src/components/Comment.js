import moment from "moment";
const Comment = ({ creator, description, createdat }) => {
  return (
    <div className="single-comment">
      <div>
        <span className="comment-creator">{creator} </span>
        <span className="comment-date">{moment(createdat).format("LLL")}</span>
      </div>
      <div className="comment-description">{description}</div>
    </div>
  );
};

export default Comment;
