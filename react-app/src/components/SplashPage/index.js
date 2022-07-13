import React from "react";
import { NavLink } from "react-router-dom";
import Stories from "../Stories";
import SignUpFormModal2 from "../auth/SignUpModal2";
import "./SplashPage.css";

function Splash() {
  return (
    <div>
      <div className="splash-container">
        <div className="first-container">
          <div id="stay-curious">Stay curious.</div>
          <div id="discover-stories">
            Discover stories, thinking, and expertise
            <br />
            from writers on any topic.
          </div>
          <div>
            {/* <NavLink to="/sign-up">
              <button id="start-reading-btn">Start reading</button>
            </NavLink> */}
            <SignUpFormModal2 />
          </div>
        </div>
      </div>
      <Stories />
    </div>
  );
}

export default Splash;
