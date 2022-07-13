import React, { useState } from 'react';
import { AuthFormsModal } from '../../../context/AuthFormsModal';
import SignUpForm from '../SignUpModal/SignUpForm';
import "../SignUpModal/SignUpForm.css"

function SignUpFormModal2() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="start-reading-btn" onClick={() => setShowModal(true)}>Start reading</button>
      {showModal && (
        <AuthFormsModal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal}/>
        </AuthFormsModal>
      )}
    </>
  );
}

export default SignUpFormModal2;
