import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "../Stories/DropdownMenu/DotsIcon";
import ReactTimeAgo from "react-time-ago";
import "../Stories/Stories.css";

function YourStories() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state?.session?.user);

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const yourStories = stories.filter(
    (story) => sessionUser.id === story.user_id
  );

  console.log("THESE ARE YOUR STORIES", yourStories);

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <>
      <div id="stories-container">
        {!yourStories.length ? <p>You have no stories. Create one now!</p> :
        yourStories?.map((story) => (
          <ul className="stories-ul" key={story?.id}>
            <div className="story-user-and-date-div">
              <div id="story-user">
                <GetUser userId={story?.user_id} />
              </div>
              <ReactTimeAgo date={story?.created_at} locale="en-US" />
              {/* <div>{date}</div> */}
            </div>
            <div className="each-story-div">
              <div className="story-title-and-story-div">
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/stories/${story.id}`}
                >
                  <div className="story-title">{story?.title}</div>
                  <div className="story-story">{story?.story}</div>
                </NavLink>
                <div className="story-icons-div">
                  <DotsIcon id="story-more-options" story={story} />
                </div>
              </div>
              <NavLink to={`/stories/${story.id}`}>
                <img
                  onError={invalidImg}
                  src={story?.img}
                  alt="story-img"
                  className="story-img"
                />
              </NavLink>
            </div>
          </ul>
        ))}

      </div>
    </>
  );
}

export default YourStories;
