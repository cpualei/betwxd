import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import Comments from './Comments';
import "./Comments.css"

function CommentsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="edit-bill-btn" onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Comments setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CommentsModal;
