import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import Stories from "../Stories"
import CommentsModal from "../CommentsModal/index.js";
import ReactTimeAgo from "react-time-ago";
import "./ViewStory.css"


function ViewStory() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const stories = useSelector((state) => {
      return Object.values(state.stories);
    });

    const storiesFiltered = stories.filter(
      (story) => story?.id == id
    );

    const story = storiesFiltered[0];
    const storyCreated = new Date(story?.created_at);
    const date = storyCreated.toDateString()
    console.log(date)

    // const storyId = stories[id];
    // const createdAt = new Date(story?.created_at)
    // console.log(createdAt)
    // const date = createdAt.toDateString();

    // console.log(date)

    useEffect(() => {
      dispatch(viewStories(id));
    }, [dispatch, id]);

    const invalidImg = (e) => {
      e.currentTarget.src = "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
    };

    return (
      <>
        <div className="viewstory-container">
          <div id="viewstory-user"><GetUser userId={story?.user_id}/></div>
          {/* <div id="viewstory-date">{date}</div> */}
          <div id="viewstory-date">{date}</div>
          {/* <ReactTimeAgo date={date} locale="en-US"/> */}
          <div id="viewstory-title">{story?.title}</div>
          <img id="viewstory-img" onError={invalidImg} src={story?.img} alt="story-img"/>
          <div id="viewstory-story">{story?.story}</div>
          <div id="viewstory-comments-floating-icon-div">
            <div id="viewstory-comments-floating-icon">
              <CommentsModal story={story}/>
              </div>
          </div>
          <div className="viewstory-stories"><Stories date={date}/></div>
        </div>

      </>
    );
  }

  export default ViewStory;
