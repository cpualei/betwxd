import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
import { updateComment, removeComment } from "../../../store/comments";
import { ValidationError } from "../../../utils/validationErrors";
import "./EditComment.css";

function EditComment({ setShowEditModal, story, comment }) {
  const dispatch = useDispatch();
  // const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState(comment.content);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false);
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

  const toggle = () => {
    if (update) setEdit(false)
  }

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
                className="comment-content"
                value={content}
                disabled={!edit}
                onChange={(e) => setContent(e.target.value)}
                />
          </div>
        </div>
                {sessionUser.id === comment.user_id ? (
        <div className="edit-comment-btns-div">
          <button id="comment-edit-btn" onClick={(e) => setEdit(true)}>
            Edit response
          </button>
          <button
            id="update-comment-btn"
            type="submit"
            onClick={(e) => {setUpdate(true); toggle()}}>
            Update
          </button>
          <div className="comments-delete-btn-div">
                    <button
                      id="comments-delete-btn"
                      onClick={(e) => dispatch(removeComment(comment.id))}
                    >
                      x
                    </button>
                  </div>
        </div>
          ) : null}
      </form>
    </>
  );
}

export default EditComment;
