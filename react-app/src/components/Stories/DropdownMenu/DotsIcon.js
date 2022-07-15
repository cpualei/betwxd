import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeStory } from "../../../store/stories";
import EditStory from "../../EditStory";
import { Link } from "react-router-dom";
import dots from "../../../icons/dots.png";
import "./DotsButton.css";

function DotsIcon({ story }) {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);

  const storyId = story?.id; // prop for Edit and Delete features

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
      <button className="dots-icon-btn" onClick={openMenu}>
        <img className="dots-icon" onClick={openMenu} src={dots} alt="dots" />
      </button>
      {showMenu && (
        <>
          <ul className="dots-dropdown">
            <>
              <Link
                to={`/edit-story/${storyId}`}
                id="edit-story-btn"
                style={{ textDecoration: "none" }}
              >
                Edit story
              </Link>
              {/* <a
                onClick={(e) => <EditStory />}
                id="edit-story-btn"
                style={{ textDecoration: "none" }}
              /> */}

              <Link
                href="/stories"
                id="delete-story-btn"
                style={{ textDecoration: "none" }}
                onClick={() => dispatch(removeStory(storyId))}
              >
                Delete story
              </Link>
            </>
          </ul>
        </>
      )}
    </>
  );
}

export default DotsIcon;
