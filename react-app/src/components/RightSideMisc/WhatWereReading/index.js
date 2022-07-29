import React from "react";
import { useSelector } from "react-redux";
import GetImg from "../../GetImg";
import GetUser from "../../GetUser";
import greendot from "../../../icons/greendot.png";
import "./WhatWereReading.css";

function WhatWereReading() {

  const stories = useSelector((state) => {
    return Object.values(state.stories);
  });

  console.log(stories)

  const storyOne = stories[2];
  const storyTwo = stories[0];
  const storyThree = stories[3];

  const threeStories = [storyOne, storyTwo, storyThree]
  console.log(threeStories)
//   const threeStories = [ ...storyOne, ...storyTwo, ...storyThree ]

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
              <GetImg userId={story?.user_id} />
            </div>
            <div className="profile-photo-and-username-div">
              <GetUser userId={story?.user_id} />
            </div>
          </div>
          <p id="what-were-reading-story-titles">{story?.title}</p>
        </div>
      ))}
    </div>
  );
}

export default WhatWereReading;
