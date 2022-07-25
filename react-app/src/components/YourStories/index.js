import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "../Stories/DropdownMenu/DotsIcon";
import moment from "moment";
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

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <div className="stories-container">
      <div className="stories-div">
        {!yourStories.length ? <p>You have no stories. Create one now!</p> :
        yourStories?.map((story) => (
          <ul className="stories-ul" key={story?.id}>
            <div className="story-user-and-date-div">
              <div id="story-user">
              <NavLink style={{ textDecoration: "none", color: "black" }} to={`/users/${story?.user_id}`}>
                <GetUser userId={story?.user_id} />
              </NavLink>
              </div>
              <p id="story-date">· {moment(story?.created_at).format("MMM Do")}</p>
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
    </div>
  );
}

export default YourStories;
