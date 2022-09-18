import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment";
import GetImg from "../../GetImg";
import GetUser from "../../GetUser";
import { viewComments } from "../../../store/comments";
import ReactTimeAgo from "react-time-ago";
import "./Comments.css";

function Comments({ setShowModal, story, storyComments }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);

  return (
    <>
      <div>
        {!sessionUser ? (
          <p id="please-login-text">If you'd like to leave a comment please log in to your account or sign up for one now!</p>
        ) : (
          <CreateComment setShowModal={setShowModal} story={story} />
        )}
        {storyComments.length ? (
          storyComments.map((comment) => (
            <ul className="comments-ul" key={comment.id}>
              <div className="comments-profile-photo-username-container">
              <div className="comments-profile-photo">
              <GetImg userId={comment.user_id} />
              </div>
              <div className="comments-username">
              <GetUser userId={comment.user_id} />
              </div>
              </div>
              <ReactTimeAgo id="comments-date" date={comment.created_at} />
                <EditComment story={story} comment={comment} />
            </ul>
          ))
        ) : (
          <p id="no-comments-text">There are no comments for this story!</p>
        )}
      </div>
    </>
  );
}

export default Comments;
