import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "./DropdownMenu/DotsIcon.js";
import ReactTimeAgo from "react-time-ago";
import moment from "moment";
import "./Stories.css";

function Stories() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state?.session?.user);

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const newerStoriesFirst = stories?.reverse();

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewStories()]);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://thumbs.dreamstime.com/b/invalid-red-rubber-stamp-over-white-background-88003326.jpg";
  };

  return (
    <>
      <div id="stories-container">
        {newerStoriesFirst?.map((story) => (
          <ul className="stories-ul" key={story?.id}>
            <div className="story-user-and-date-div">
              <div id="story-user">
                <GetUser userId={story?.user_id} />
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
                  {sessionUser?.id === story?.user_id ? (
                    <DotsIcon id="story-more-options" story={story} />
                  ) : null}
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

export default Stories;
