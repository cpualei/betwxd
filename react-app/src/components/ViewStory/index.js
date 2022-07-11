import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import Stories from "../Stories"
import CommentsModal from "../CommentsModal/index.js";
import "./ViewStory.css"

function ViewStory() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const stories = useSelector((state) => {
      return Object.values(state.stories);
    });

    const story = stories[id]

    useEffect(() => {
      dispatch(viewStories(id));
    }, [dispatch, id]);

    return (
      <>
        <div className="viewstory-container">
          <div id="viewstory-user"><GetUser userId={story?.user_id}/></div>
          <div id="viewstory-date">{story?.created_at}</div>
          <div id="viewstory-title">{story?.title}</div>
          <div><img id="viewstory-img" src={story?.img} alt="story-img"/></div>
          <div id="viewstory-story">{story?.story}</div>
          {/* <div id="viewstory-comments-icon"><CommentsModal story={story}/></div> */}
          <div id="viewstory-comments-floating-icon-div">
            <div id="viewstory-comments-floating-icon">
              <CommentsModal story={story}/>
              </div>
          </div>
          <div className="viewstory-stories"><Stories /></div>
        </div>

      </>
    );
  }

  export default ViewStory;
