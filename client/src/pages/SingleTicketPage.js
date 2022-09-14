import Wrapper from "../assests/wrappers/SingleTicketPage";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import SingleDev from "../components/SingleDev";
import Comment from "../components/Comment.js";
import moment from "moment";

const SingleTicketPage = () => {
  let { id } = useParams();
  const {
    singleTicket,
    fetchSingleTicket,
    fetchUsersOnTicket,
    devOnTicket,
    user,
    commentsOnTicket,
    getCommentsOnTicket,
    handleChange,
    addComment,
    commentDescription,
    fetchDevWithTicket,
    ticketDevOptions,
    addDevToTicket,
    addToTicket,
  } = useAppContext();

  const onSubmit = (e) => {
    addComment(id);
  };

  const devSubmit = (e) => {
    addToTicket(id, addDevToTicket);
  };

  const handleCommentInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    handleChange({ name, value });
  };

  useEffect(() => {
    fetchSingleTicket(id);
    fetchUsersOnTicket(id);
    getCommentsOnTicket(id);
    fetchDevWithTicket(id);
  }, []);

  return (
    <Wrapper className="full-page">
      <div className="container">
        <div className="ticket-dev-container">
          <div className="ticket-container">
            <div className="info-container">
              Title:{" "}
              <span className="text-ticket">{singleTicket[0]?.title}</span>
            </div>
            <div className="info-container">
              Description:{" "}
              <span className="text-ticket">
                {singleTicket[0]?.description}
              </span>
            </div>
            <div className="info-container">
              Date:{" "}
              <span className="text-ticket">
                {moment(singleTicket[0]?.createdat).format("LLL")}
              </span>
            </div>
            <div className="info-container">
              Severity:{" "}
              <span className="text-ticket">{singleTicket[0]?.severity}</span>
            </div>
            <div className="info-container">
              Status:{" "}
              <span className="text-ticket">{singleTicket[0]?.status}</span>
            </div>
            <div className="info-container">
              Type: <span className="text-ticket">{singleTicket[0]?.type}</span>
            </div>
          </div>
          {/* Adding developer START */}
          <div className="dev-container">
            <h2 className="dev-title">Manage Developers</h2>
            <div className="dev-info">
              <div className="dev-names">
                <h3>Developers On the Ticket</h3>
                {devOnTicket.map((dev, index) => {
                  return <SingleDev key={index} value={dev} />;
                })}
              </div>
              <div className="add-dev">
                <h3>Add Developers</h3>
                {/* TESING */}
                <form className="form-row-devs" onSubmit={devSubmit}>
                  <select
                    name="addDevToTicket"
                    value={addDevToTicket}
                    onChange={handleCommentInput}
                    className="form-select-devs"
                  >
                    <option>Select Developer</option>
                    {ticketDevOptions.map((dev) => {
                      return (
                        <option
                          className="option-input-devs"
                          value={dev.user_id}
                          key={dev.user_id}
                        >
                          {dev.user_name}
                        </option>
                      );
                    })}
                  </select>
                  <button className="devs-btn" type="submit">
                    Add
                  </button>
                </form>
                {/* TESTING END */}
              </div>
            </div>
          </div>
        </div>
        {/* Adding developer END */}
        <form className="comment-container" onSubmit={onSubmit}>
          <div className="comment-title">
            {commentsOnTicket?.length || 0} Comments:{" "}
          </div>
          <div className="form-row">
            <label htmlFor={user[0]?.user_name[0]} className="form-label">
              {user[0]?.user_name[0]}
            </label>
            <input
              type="text"
              name="commentDescription"
              value={commentDescription}
              placeholder="Comment"
              onChange={handleCommentInput}
              className="form-input"
            />
            <button className="comment-btn" type="submit">
              Comment
            </button>
          </div>
          <div className="comment">
            {commentsOnTicket
              .map((comment) => {
                return <Comment key={comment.id} {...comment} />;
              })
              .reverse()}
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default SingleTicketPage;
