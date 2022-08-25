import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Comments from "./Comments";
import ClapButton from "./ClapButton";
import chat from "./chat.png";
import "./Comments.css";

function ClapAndComments({ story }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ClapButton story={story} />
      <p id="separator">|</p>
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
