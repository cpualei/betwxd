import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { updateComment } from "../../../store/comments";
import { ValidationError } from "../../../utils/validationErrors";
import "./EditComment.css"

function EditComment({ setShowEditModal, story, comment }) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState(comment.content);
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

    let updatedComment;

    try {
      updatedComment = await dispatch(updateComment(payload, comment.id));
    } catch (error) {
      if (error instanceof ValidationError) setErrors(errors.error);
      else setErrors(error.toString().slice(7));
    }

    if (updatedComment) {
      setErrors([]);
        // return history.push(`/`);
        // window.location.reload(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
      <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div className="">
          {/* <div>{sessionUser.username}</div> */}
          <div className="edit-comment-box-div">
          <textarea
            className="edit-comment-box"
            type="textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}

          />
          </div>
        </div>
        <div className="edit-comment-btns-div">
        <button type="button" onClick={() => setShowEditModal(false)}>Cancel</button>
        <button id="update-comment-btn" type="submit">Update</button>
        </div>
      </form>
    </>
  );
}

export default EditComment;
