import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../../../store/comments";
import dots from '../../../icons/dots.png'
import './DotsIconComments.css'

function DotsIconComments({ commentId }) {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  // const storyId = story.id; // prop for Edit and Delete features

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <>
      {/* <div> */}
        <button className="dots-icon-btn">
          <img
            className="dots-icon"
            onClick={openMenu}
            src={dots}
            alt="dots"
          />
        </button>
        {showMenu && (
          <>
            <ul className="comments-dropdown">
                <a href={`/edit-comment/${commentId}`}>
                  <p id="edit-comment-btn">Edit comment</p>
                </a>
                <a href="/">
                  <p
                    id="delete-comment-btn"
                    onClick={() => dispatch(removeComment(commentId))}
                    >Delete comment
                  </p>
                </a>

            </ul>
          </>
        )}
      {/* </div> */}
    </>
  );
}

export default DotsIconComments;
