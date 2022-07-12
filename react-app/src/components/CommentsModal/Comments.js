import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment/EditComment";
import GetUser from "../GetUser";
import DotsIconComments from "./DropdownMenu/DotsIconComments";
import { viewComments, removeComment } from "../../store/comments";
import "./Comments.css";

function Comments({ setShowModal, setShowEditModal, story }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)

  const comments = useSelector((state) => {
    return Object?.values(state?.comments);
  });

  const storyComments = comments?.filter((comment) => {
    return comment?.story_id === story?.id;
  });

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);

  const handleDelete = async (e) => {
    e.preventDefault();

    // let deletedComment = await dispatch(removeComment(comment.id))
  }

  return (
    <>
      <div className="entire-comments-container">
        <CreateComment setShowModal={setShowModal} story={story}/>
        {storyComments
          ? storyComments.map((comment) => (
              <ul key={comment.id}>
                <GetUser userId={comment.user_id} />
                  <div>{comment.created_at}</div>
                <div className="comments-content-btns-container">
                <div className="comments-content-div">
                  <div className="comment-content">{comment.content}</div>
                </div>
                <div>
                  {sessionUser.id === comment.user_id ? (
                    <EditComment story={story} comment={comment}/>
                  ): null }
                </div>
                <div className="comments-delete-btn-div">
                  <button
                    id="comments-delete-btn"
                    onClick={(e) => dispatch(removeComment(comment.id))}
                  >
                    x
                  </button>
                </div>
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
