import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import GetImg from "../GetImg/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "../Stories/DropdownMenu/DotsIcon";
import RightSideMisc from "../RightSideMisc/index.js";
import moment from "moment";
import "../Stories/Stories.css";
import "./YourStories.css";

function YourStories() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state?.session?.user);

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const yourStories = stories.filter(
    (story) => sessionUser?.id === story?.user_id
  );

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <div className="stories-container">
      <div className="your-stories-div">
        <div className="your-stories-heading-div">
          <h1 id="your-stories-heading">Your stories</h1>
        </div>
        <div>
        {!yourStories?.length ? (
          <p>You have no stories. Create one now!</p>
        ) : (
          yourStories?.map((story) => (
            <ul className="stories-ul" key={story?.id}>
              <div className="story-user-and-date-div">
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${story?.user_id}`}
                >
                  <div className="story-user">
                    <div className="user-profile-photo">
                      <GetImg userId={story?.user_id} />
                    </div>
                    <div className="user-username">
                      <GetUser userId={story?.user_id} />
                    </div>
                  </div>
                </NavLink>
                <p id="story-date">
                  · {moment(story?.created_at).format("MMM Do")}
                </p>
              </div>
              <div className="each-story-div">
                <div className="story-title-and-story-div">
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/stories/${story?.id}`}
                  >
                    <div className="story-title">{story?.title}</div>
                    <div className="story-story">{story?.story}</div>
                  </NavLink>
                  <div className="story-icons-div">
                    <DotsIcon id="story-more-options" story={story} />
                  </div>
                </div>
                <NavLink to={`/stories/${story?.id}`}>
                  <img
                    onError={invalidImg}
                    src={story?.img}
                    alt="story-img"
                    className="story-img"
                  />
                </NavLink>
              </div>
            </ul>
          ))
        )}
        </div>
      </div>
      <div className="right-side-misc-div">
        <RightSideMisc />
      </div>
    </div>
  );
}

export default YourStories;
