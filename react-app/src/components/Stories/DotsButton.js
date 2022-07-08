import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./DotsButton.css"

function DotsButton() {
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
            <ul className="profile-dropdown">
              <li>{}</li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default DotsButton;
