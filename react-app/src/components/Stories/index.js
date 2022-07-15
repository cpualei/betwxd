import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewStories } from "../../store/stories.js";
import GetUser from "../GetUser/index.js";
import DotsIcon from "./DropdownMenu/DotsIcon.js";
import ReactTimeAgo from "react-time-ago";
import "./Stories.css";


function Stories() {
  const dispatch = useDispatch();

  const sessionUserId = useSelector((state) => state.session.user.id);

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });


  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src = "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <>
      <div id="stories-container">
        {stories?.map((story) => (
          <ul className="stories-ul" key={story?.id}>
            <div className="story-user-and-date-div">
              <div id="story-user"><GetUser userId={story?.user_id}/></div>
              {/* <ReactTimeAgo date={story?.created_at} locale="en-US"/> */}
              {/* <div>{date}</div> */}
            </div>
            <div className="each-story-div">
              <div className="story-title-and-story-div">
                <a style={{textDecoration: 'none'}} href={`/stories/${story.id}`}>
                  <div className="story-title">{story?.title}</div>
                  <div className="story-story">{story?.story}</div>
                </a>
                <div className="story-icons-div">
                  {sessionUserId === story.user_id ?
                  <DotsIcon id="story-more-options" story={story} />
                  : null}
                  </div>
              </div>
              <a href={`/stories/${story.id}`}>
                <img onError={invalidImg} src={story?.img} alt="story-img" className="story-img" />
              </a>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Stories;
