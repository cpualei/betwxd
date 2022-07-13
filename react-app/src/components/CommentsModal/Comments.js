import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateComment from "./CreateComment";
import EditComment from "./EditComment/EditComment";
import GetUser from "../GetUser";
import { viewComments } from "../../store/comments";
import "./Comments.css";

function Comments({ setShowModal, story }) {
  const dispatch = useDispatch();

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
        <CreateComment setShowModal={setShowModal} story={story} />
        {storyComments
          ? storyComments.map((comment) => (
              <ul className="comments-ul" key={comment.id}>
                <GetUser userId={comment.user_id} />
                <div>{comment.created_at}</div>
                <EditComment story={story} comment={comment} />
              </ul>
            ))
          : null}
      </div>
    </>
  );
}

export default Comments;
