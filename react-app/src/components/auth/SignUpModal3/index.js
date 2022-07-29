import React, { useState } from 'react';
import { AuthFormsModal } from '../../../context/AuthFormsModal';
import SignUpForm from '../SignUpModal/SignUpForm';
import "../SignUp&Login.css"

function SignUpFormModal3() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="create-one-link" onClick={() => setShowModal(true)}>Create one</button>
      {showModal && (
        <AuthFormsModal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal}/>
        </AuthFormsModal>
      )}
    </>
  );
}

export default SignUpFormModal3;
