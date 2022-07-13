import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewStories } from "../../store/stories.js";
import GetUser from "../GetUser/index.js";
import DotsIcon from "./DropdownMenu/DotsIcon.js";
import ReactTimeAgo from "react-time-ago";
import "./Stories.css";


function Stories() {
  const dispatch = useDispatch();

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  return (
    <>
      <div id="stories-container">
        {stories?.map((story) => (
          <ul key={story.id}>
            <div className="story-user-and-date-div">
              <div id="story-user"><GetUser userId={story.user_id}/></div>
              <ReactTimeAgo date={story.created_at} locale="en-US"/>
            </div>
            <div className="each-story-div">
              <div className="story-title-and-story-div">
                <a style={{textDecoration: 'none'}} href={`/stories/${story.id - 1}`}>
                  <div className="story-title">{story.title}</div>
                  <div className="story-story">{story.story}</div>
                </a>
                <div className="story-icons-div">
                  <DotsIcon id="story-more-options" story={story} />
                </div>
              </div>
              <a href={`/stories/${story.id - 1}`}>
                <img src={story.img} alt="story-img" className="story-img" />
              </a>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Stories;
