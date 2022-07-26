import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import Stories from "../Stories";
import CommentsModal from "../CommentsModal/index.js";
import { viewStories } from "../../store/stories.js";
import moment from "moment";
import "./ViewStory.css";

function ViewStory() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state?.session?.user?.id);

  const stories = useSelector((state) => state?.stories)

  const story = stories[id];

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
        </div>
        <div id="viewstory-date">{moment(story?.created_at).format("MMM Do")}</div>
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
