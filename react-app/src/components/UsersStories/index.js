import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "../Stories/DropdownMenu/DotsIcon";
import moment from "moment";
import "../Stories/Stories.css";

function UsersStories({ userId }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state?.session?.user);

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const usersStories = stories?.filter(
    (story) => Number(userId) === story?.user_id
  );

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
      <div id="stories-container">
        {!usersStories.length ? (
          <p>This user has no stories to share.</p>
        ) : (
          usersStories?.map((story) => (
            <ul className="stories-ul" key={story?.id}>
              <div className="story-user-and-date-div">
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
                  {sessionUser?.id === story?.user_id ?
                  <div className="story-icons-div">
                    <DotsIcon id="story-more-options" story={story} />
                  </div>
                  : null}
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
  );
}

export default UsersStories;
