
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const EditCommentModalContext = React.createContext();
export const useModalContext = () => useContext(EditCommentModalContext)

export function EditCommentModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <EditCommentModalContext.Provider value={value}>
        {children}
      </EditCommentModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function EditCommentModal({ onClose, children }) {
  const modalNode = useContext(EditCommentModalContext);
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
