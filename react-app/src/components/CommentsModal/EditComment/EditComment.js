import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment, removeComment } from "../../../store/comments";
import { ValidationError } from "../../../utils/validationErrors";
import "./EditComment.css";

function EditComment({ story, comment }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState(comment.content);
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false);
  // const [disable, setDisabled] = useState(false);
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
    }
  };

  const toggle = () => {
    if (update) setEdit(false);
  };

  // const disableBtn = () => {
  //   if (errors.length > 0) setDisabled(true);
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
          <div className="all-comments-div">
            <div className="edit-comment-box-div">
              <textarea
                className="comment-content"
                value={content}
                disabled={!edit}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            {sessionUser.id === comment.user_id ? (
              <div className="edit-comment-btns-div">
                <button
                  id="comments-delete-btn"
                  onClick={(e) => dispatch(removeComment(comment.id))}
                >
                  Delete response
                </button>
                {edit == false ? (
                  <button id="comment-edit-btn" onClick={(e) => {setEdit(true)}}>
                    Edit response
                  </button>
                ) : (
                  <button
                    id="comment-update-btn"
                    type="submit"
                    onClick={(e) => {
                      setUpdate(true);
                      toggle();
                    }}
                    // onChange={(e) => {disableBtn()}}
                  >
                    Update response
                  </button>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </>
  );
}

export default EditComment;
