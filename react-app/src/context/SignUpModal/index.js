import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './SignUpModal.css';

const SignUpModalContext = React.createContext();
export const useModalContext = () => useContext(SignUpModalContext)

export function SignUpModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <SignUpModalContext.Provider value={value}>
        {children}
      </SignUpModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function SignUpModal({ onClose, children }) {
  const modalNode = useContext(SignUpModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="signup-modal">
      <div id="signup-modal-background" onClick={onClose} />
      <div id="signup-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}
