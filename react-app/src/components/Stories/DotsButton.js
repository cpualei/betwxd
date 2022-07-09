import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeStory } from "../../store/stories";
import EditStory from "../EditStory";
import CommentsModal from "../CommentsModal";
import dots from './dots.png'
import "./DotsButton.css";

function DotsButton({ story }) {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const storyId = story.id; // prop for Edit and Delete features

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
            src={dots}
            alt="dots"
          />
        </button>
        {showMenu && (
          <>
            <ul className="dots-dropdown">
              <>
                {/* <p id="edit-story-btn">
                  <EditStory storyObj={story} />
                </p> */}
                <a href={`/edit-story/${storyId}`}>
                  <p id="edit-story-btn">Edit story</p>
                </a>
                <a href="/stories">
                  <p
                    id="delete-story-btn"
                    onClick={() => dispatch(removeStory(storyId))}
                    >Delete story
                  </p>
                </a>
              </>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default DotsButton;
