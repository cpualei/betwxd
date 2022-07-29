import React from "react";
import { useSelector } from "react-redux";
import GetImg from "../../GetImg";
import GetUser from "../../GetUser";
import greendot from "../../../icons/greendot.png";
import "./WhatWereReading.css";
import { NavLink } from "react-router-dom";

function WhatWereReading() {
  const stories = useSelector((state) => {
    return Object.values(state.stories);
  });

  const storyOne = stories[2];
  const storyTwo = stories[0];
  const storyThree = stories[3];

  // const threeStories = [storyOne, storyTwo, storyThree];
  const threeStories = stories.splice(1, 3).reverse();

  return (
    <div className="what-were-reading-container">
      <div className="what-were-reading-today-div">
        <img id="green-dot" src={greendot} />
        <p id="what-were-reading-today">What We're Reading Today</p>
      </div>
      {threeStories?.map((story) => (
        <div className="what-were-reading-stories-container">
          <div className="profile-photo-and-username-container">
            <div className="profile-photo-and-username-div">
              <NavLink
                to={`/users/${story?.user_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <GetImg userId={story?.user_id} />
              </NavLink>
            </div>
            <div className="profile-photo-and-username-div">
              <NavLink
                to={`/users/${story?.user_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <GetUser userId={story?.user_id} />
              </NavLink>
            </div>
          </div>
          <NavLink
            to={`/stories/${story?.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <p id="what-were-reading-story-titles">{story?.title}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
}

export default WhatWereReading;
