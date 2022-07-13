import React, { useState } from 'react';
import { AuthFormsModal } from '../../../context/AuthFormsModal';
import LoginForm from './LoginForm';
import "../SignUp&Login.css"

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a id="sign-in-link" onClick={() => setShowModal(true)}>Sign in</a>
      {showModal && (
        <AuthFormsModal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </AuthFormsModal>
      )}
    </>
  );
}

export default LoginFormModal;
