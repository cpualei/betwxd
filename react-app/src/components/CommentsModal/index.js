import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Comments from './Comments';
import chat from './chat.png';
import "./Comments.css"

function CommentsModal({ story }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <img id="chat-icon" src={chat} alt="chat" onClick={() => setShowModal(true)}/>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Comments setShowModal={setShowModal} story={story}/>
        </Modal>
      )}
    </>
  );
}

export default CommentsModal;
