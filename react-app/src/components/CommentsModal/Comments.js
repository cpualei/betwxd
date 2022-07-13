import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment/EditComment";
import GetUser from "../GetUser";
import DotsIconComments from "./DropdownMenu/DotsIconComments";
import { viewComments } from "../../store/comments";
import "./Comments.css";

function Comments({ setShowModal, setShowEditModal, story }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const comments = useSelector((state) => {
    return Object?.values(state?.comments);
  });

  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(false);

  const storyComments = comments?.filter((comment) => {
    return comment?.story_id === story?.id;
  });

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);

  return (
    <>
      <div className="entire-comments-container">
        <CreateComment setShowModal={setShowModal} story={story} />
        {storyComments
          ? storyComments.map((comment) => (
              <ul className="comments-ul" key={comment.id}>
                <GetUser userId={comment.user_id} />
                <div>{comment.created_at}</div>
                <div className="comments-content-btns-container">
                  <div className="comments-content-div">
                    {/* {sessionUser.id === comment.user_id ? (
                      <textarea
                        className="comment-content"
                        value={comment.content}
                        // disabled={edit == false}
                        // onChange={(e) => setContent(e.target.value)}
                      />
                    ) : null} */}
                  </div>
                  {/* {(edit == true) ? (
                    <button
                      id="comment-edit-btn"
                      onClick={(e) => setUpdate(true)}
                    >
                      Update response
                    </button>
                  ) : ( */}
                    {/* <button
                      id="comment-edit-btn"
                      onClick={(e) => setEdit(true)}
                    >
                      Edit response
                    </button> */}
                  {/* )} */}
                  <div>
                    <EditComment story={story} comment={comment}/>
                </div>
                  {/* <div className="comments-delete-btn-div">
                    <button
                      id="comments-delete-btn"
                      onClick={(e) => dispatch(removeComment(comment.id))}
                    >
                      x
                    </button>
                  </div> */}
                </div>
                {/* <DotsIconComments commentId={comment.id} /> */}
              </ul>
            ))
          : null}
      </div>
    </>
  );
}

export default Comments;
