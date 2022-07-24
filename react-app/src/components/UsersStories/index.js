import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "../Stories/DropdownMenu/DotsIcon";
import moment from "moment";
import "../Stories/Stories.css";

function UsersStories({ userId }) {
  const dispatch = useDispatch();

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const usersStories = stories?.filter(
    (story) => Number(userId) === story?.user_id
  );
  console.log(usersStories)

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
        {!usersStories.length ? (
          <p>You have no stories. Create one now!</p>
        ) : (
          usersStories?.map((story) => (
            <ul className="stories-ul" key={story?.id}>
              <div className="story-user-and-date-div">
                {/* <div id="story-user">
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/users/${story?.user_id}`}
                  >
                    <GetUser userId={story?.user_id} />
                  </NavLink>
                </div> */}
                <p id="story-date">
                  {moment(story?.created_at).format("MMM Do")}
                </p>
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
          ))
        )}
      </div>
    </>
  );
}

export default UsersStories;
