import React, { useState } from 'react';
import { EditCommentModal } from '../../context/EditCommentModal';
import EditComment from './EditComment';
import chat from './chat.png';
import "./Comments.css"

function EditCommentModal({ story }) {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowEditModal(true)}>Edit</button>
      {/* <img id="chat-icon" src={chat} alt="chat" onClick={() => setShowModal(true)}/> */}
      {showEditModal && (
        <EditCommentModal onClose={() => setShowEditModal(false)}>
          <EditComment setShowEditModal={setShowEditModal} story={story}/>
        </EditCommentModal>
      )}
    </>
  );
}

export default EditCommentModal;
