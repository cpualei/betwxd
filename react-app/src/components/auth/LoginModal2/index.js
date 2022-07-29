import React, { useState } from 'react';
import { AuthFormsModal } from '../../../context/AuthFormsModal';
import LoginForm from '../LoginModal/LoginForm';
import "../SignUp&Login.css"

function LoginFormModal2() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <a id="sign-up-log-in-links" onClick={() => setShowModal(true)}>Sign in</a>
      {showModal && (
        <AuthFormsModal onClose={() => setShowModal(false)}>
          <LoginForm setShowModal={setShowModal}/>
        </AuthFormsModal>
      )}
    </>
  );
}

export default LoginFormModal2;
