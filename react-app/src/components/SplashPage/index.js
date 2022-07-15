import React from "react";
import Stories from "../Stories";
import SignUpFormModal2 from "../auth/SignUpModal2";
import { useSelector } from "react-redux";
import splashGif from "../../icons/splashGif.gif";
import "./SplashPage.css";

function Splash() {

  // const sessionUser = useSelector((state) => state.session.user);

  return (
    <div>
      {/* {sessionUser ? null : ( */}
        <div className="splash-container">
          <div className="splash-div">
            <div id="stay-curious">Stay curious.</div>
            <div id="discover-stories">
              Discover stories, thinking, and expertise
              <br />
              from writers on any topic.
            </div>
            <SignUpFormModal2 />
          </div>
          <div id="splash-img-div">
            <img src={splashGif} alt="splashGif" />
          </div>
        </div>
      {/* )} */}
      <Stories />
    </div>
  );
}

export default Splash;
