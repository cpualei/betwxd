import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment/EditComment";
import GetUser from "../GetUser";
import { viewComments } from "../../store/comments";
import ReactTimeAgo from "react-time-ago";
import "./Comments.css";

function Comments({ setShowModal, story }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const comments = useSelector((state) => {
    return Object?.values(state?.comments);
  });

  const storyComments = comments?.filter((comment) => {
    return comment?.story_id === story?.id;
  });

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);

  return (
    <>
      <div>
        {!sessionUser ? (
          <p>Please log in to leave a comment.</p>
        ) : (
          <CreateComment setShowModal={setShowModal} story={story} />
        )}
        {storyComments.length ? (
          storyComments.map((comment) => (
            <ul className="comments-ul" key={comment.id}>
              <GetUser userId={comment.user_id} />
              <ReactTimeAgo id="comments-date" date={comment.created_at} />
              {/* {sessionUser && */}
                <EditComment story={story} comment={comment} />
               {/* } */}
            </ul>
          ))
        ) : (
          <p>There are no comments for this story!</p>
        )}
      </div>
    </>
  );
}

export default Comments;
