import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Comments from "./Comments";
import ClapButton from "./ClapButton";
import chat from "./chat.png";
import "./Comments/Comments.css";

function ClapAndComments({ story, sessionUser }) {
  const [showModal, setShowModal] = useState(false);

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
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Comments setShowModal={setShowModal} story={story} />
        </Modal>
      )}
    </>
  );
}

export default ClapAndComments;
