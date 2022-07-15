import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import Stories from "../Stories";
import CommentsModal from "../CommentsModal/index.js";
import { viewStories } from "../../store/stories.js";
// import ReactTimeAgo from "react-time-ago";
import "./ViewStory.css";

function ViewStory() {
  const { id } = useParams();
  console.log("THIS IS THE ID=====>", id)
  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state.session.user.id);

  const stories = useSelector((state) => state.stories)
  
  console.log("THIS IS THE STORIES", stories)

  const story = stories[id];
  console.log("THIS IS THE STORY>>>>>>>>>>", story)
  const createdAt = new Date(story?.created_at)
  const date = createdAt.toDateString();

  useEffect(() => {
    dispatch(viewStories(id));
  }, [dispatch, id]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <>
      <div className="viewstory-container">
        <div id="viewstory-user">
          <GetUser userId={story?.user_id} />
          {/* {sessionUserId === story?.user_id ? <DotsIcon /> : null} */}
        </div>
        <div id="viewstory-date">{date}</div>
        {/* <ReactTimeAgo date={story?.created_at} locale="en-US"/> */}
        <div id="viewstory-title">{story?.title}</div>
        <img
          id="viewstory-img"
          onError={invalidImg}
          src={story?.img}
          alt="story-img"
        />
        <div id="viewstory-story">{story?.story}</div>
        <div id="viewstory-comments-floating-icon-div">
          <div id="viewstory-comments-floating-icon">
            <CommentsModal story={story} />
          </div>
        </div>
        <div className="viewstory-stories">
          <Stories sessionUserId={sessionUserId} />
        </div>
      </div>
    </>
  );
}

export default ViewStory;
