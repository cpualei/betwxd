import React, { useState } from 'react';
import { AuthFormsModal } from '../../../context/AuthFormsModal';
import SignUpForm from './SignUpForm';
import "../SignUp&Login.css"

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="get-started-link" onClick={() => setShowModal(true)}>Get started</button>
      {showModal && (
        <AuthFormsModal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal}/>
        </AuthFormsModal>
      )}
    </>
  );
}

export default SignUpFormModal;
