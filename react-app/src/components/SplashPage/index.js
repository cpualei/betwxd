import React from "react";
import Stories from "../Stories";
import SignUpFormModal2 from "../auth/SignUpModal2";
import splashGif from "../../icons/splashGif.gif";
import TrendingStories from "./TrendingStories";
import DiscoverMore from "./DiscoverMore";
import "./SplashPage.css";

function Splash() {
  return (
    <div>
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
      <TrendingStories />
      <div className="stories-discover-more-container">
        <div id="stories-div">
          <Stories />
        </div>
        <div id="discover-more-div">
          <DiscoverMore />
        </div>
      </div>
    </div>
  );
}

export default Splash;
