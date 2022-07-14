import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { createComment } from "../../../store/comments";
import { ValidationError } from "../../../utils/validationErrors";
import "./CreateComment.css";

function CreateComment({ setShowModal, story }) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (content.length > 2000)
      errors.push("Comment must not exceed 2000 characters");

    setErrors(errors);
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      story_id: story.id,
      content,
    };

    // let newComment = await dispatch(createComment(payload));

    const data = await dispatch(createComment(payload));
    if (data) {
      setErrors(data);
    } else {  // received a valid request
      setErrors([]);
      setContent("");
    }
    // if (newComment) {
    //   newComment.json();
    //   setOnSubmit(true);
    //     return history.push(`/`);
    //     window.location.reload(false);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
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
          <button className="comment-btns" id="cancel-btn" type="button" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button className="comment-btns" id="respond-btn" type="submit">Respond</button>
        </div>
        </div>
      </form>
    </>
  );
}

export default CreateComment;
