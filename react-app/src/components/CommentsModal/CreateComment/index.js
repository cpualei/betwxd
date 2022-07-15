import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createComment } from "../../../store/comments";
import "./CreateComment.css";

function CreateComment({ setShowModal, story }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (content.length > 2000)
      errors.push("*Comment must not exceed 2000 characters");

    setErrors(errors);
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      story_id: story.id,
      content,
    };

    const data = await dispatch(createComment(payload));
    if (data) {
      // received invalid request
      setErrors(data);
    } else {
      // received a valid request
      setErrors([]);
      setContent("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul style={{textDecoration: "none"}}>
        {errors.map((error, idx) => (
          <p key={idx}>{error}</p>
        ))}
        </ul>
        <div className="comment-content-container">
          <div>{sessionUser.username}</div>
          <div className="comment-textarea-div">
            <textarea
              className="comment-textarea"
              type="textarea"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={"What are your thoughts?"}
              required
            />
          </div>
          <div className="comment-btns-div">
            <button
              className="comment-btns"
              id="cancel-btn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button className="comment-btns" id="respond-btn" type="submit">
              Respond
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateComment;
