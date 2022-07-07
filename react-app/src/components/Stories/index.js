import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewStories } from "../../store/stories.js";
import "./Stores.css";

function Stories() {
  const dispatch = useDispatch();

  const stories = useSelector((state) => {
    return Object.values(state.stories);
  });

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  return (
    <>
      <p>This is the feed of stories</p>
      {stories.map((story) => (
        <ul key={story.id}>
        <div className="story-user-and-date-div">
          <div>{story.user_id}</div>
          <div>{story.created_at}</div>
          </div>
          <div className="each-story-div">
            <div className="story-title-and-story-div">
              <div className="story-title">{story.title}</div>
              <div className="story-story">{story.story}</div>
            </div>
            <img src={story.img} className="story-img" />
          </div>
        </ul>
      ))}
    </>
  );
}

export default Stories;
