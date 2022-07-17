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
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    const validComment = /.*\S.*/

    if (content.length > 2000)
      errors.push("*Comment must not exceed 2000 characters");
    if (!content.match(validComment))
      errors.push("*Comment length must be greater than 1 character.");

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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul style={{padding: "0px"}}>
          {errors.map((error, idx) => (
            <p key={idx}>{error}</p>
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
                required
              />
            </div>

            {sessionUser && sessionUser.id === comment.user_id ? (
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
                    disabled={errors.length > 0}
                    onClick={(e) => {
                      setUpdate(true);
                      toggle();
                    }}
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
