import React, { useState } from 'react';
import { SignUpModal } from '../../../context/SignUpModal';
import SignUpForm from './SignUpForm';
import "./SignUpForm.css"

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="get-started-link" onClick={() => setShowModal(true)}>Get started</button>
      {showModal && (
        <SignUpModal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal}/>
        </SignUpModal>
      )}
    </>
  );
}

export default SignUpFormModal;
