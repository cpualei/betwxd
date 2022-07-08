import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewStories } from "../../store/stories.js";
import ViewStory from "../ViewStory/index.js";
import DotsButton from "./DotsButton.js";
import "./Stories.css";

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
      <div id="stories-container">
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
                <div className="story-icons-div">
                  {/* <img
                    className="story-icons"
                    src="https://tinyurl.com/yuyx6hf9">
                </img> */}
                  {/* <img
                    className="story-icons"
                    src="https://img.icons8.com/external-flat-icons-inmotus-design/344/external-dots-internet-messenger-flat-icons-inmotus-design.png"
                  /> */}
                  <ViewStory storyId={story.title}/>
                  <DotsButton storyId={story.id}/>
                </div>
              </div>
              <img src={story.img} className="story-img" />
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Stories;
