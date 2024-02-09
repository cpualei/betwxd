import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import Comments from "./Comments";
import ClapButton from "./ClapButton";
import { viewComments } from "../../store/comments";
import chat from "./chat.png";
import "./Comments/Comments.css";

function ClapAndComments({ story, sessionUser }) {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const comments = useSelector((state) => Object.values(state.comments));

  const storyComments = comments.filter((comment) => comment.story_id === story.id);
  const numberOfComments = storyComments.length;

  useEffect(() => {
    dispatch(viewComments());
  }, [dispatch]);

  return (
    <>
      {sessionUser ? (
        <>
          <ClapButton story={story} />
          <p id="separator">|</p>
        </>
      ) : null}
      <img
        id="chat-icon"
        src={chat}
        alt="chat"
        onClick={() => setShowModal(true)}
      />
      <p id="comment-count">{numberOfComments}</p>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Comments setShowModal={setShowModal} story={story} storyComments={storyComments} />
        </Modal>
      )}
    </>
  );
}

export default ClapAndComments;
