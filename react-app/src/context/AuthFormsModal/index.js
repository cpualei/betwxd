import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SignUpModal.css';

const AuthFormsModalContext = React.createContext();
export const useModalContext = () => useContext(AuthFormsModalContext)

export function AuthFormsModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <AuthFormsModalContext.Provider value={value}>
        {children}
      </AuthFormsModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function AuthFormsModal({ onClose, children }) {
  const modalNode = useContext(AuthFormsModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="auth-forms-modal">
      <div id="auth-forms-modal-background" onClick={onClose} />
      <div id="auth-forms-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}
