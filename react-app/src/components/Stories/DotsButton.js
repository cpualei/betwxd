import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeStory } from "../../store/stories";
import "./DotsButton.css";

function DotsButton({ storyId }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

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
      <div>
        <button className="dots-icon-btn" onClick={openMenu}>
          <img
            className="dots-icon"
            src="https://img.icons8.com/external-flat-icons-inmotus-design/344/external-dots-internet-messenger-flat-icons-inmotus-design.png"
          />
        </button>
        {showMenu && (
          <>
            <ul className="dots-dropdown">
              <p id="edit-story-btn">Edit story</p>
              <p id="delete-story-btn" onClick={() => dispatch(removeStory(storyId))}>Delete story</p>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default DotsButton;
