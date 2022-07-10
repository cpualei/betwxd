import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { createComment } from "../../../store/comments";
import { ValidationError } from "../../../utils/validationErrors";
import "./CreateComment.css"

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

    let newComment;

    try {
      newComment = await dispatch(createComment(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrors(errors.error);
      else setErrors(error.toString().slice(7));
    }

    if (newComment) {
      setErrors([]);
        // return history.push(`/`);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="comment-content-container">
          <div>{sessionUser.username}</div>
          <div className="comment-textarea-div">
          <textarea
            className="comment-textarea"
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder={"What are your thoughts?"}
          />
          </div>
        </div>
        <div className="comment-btns-div">
        <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
        <button type="submit" disabled={content.length < 1}>Respond</button>
        </div>
      </form>
    </>
  );
}

export default CreateComment;