
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const EditCommentModalContext = React.createContext();
export const useModalContext = () => useContext(ModalContext)

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider value={value}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function EditCommentModal({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="edit-comment-modal">
      <div id="edit-comment-modal-background" onClick={onClose} />
      <div id="edit-comment-modal-content">
        {children}
      </div>
    </div>,
    modalNode
  );
}
