import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../GetUser/index.js";
import SearchBar from "../SearchBar/index.js";
import { viewStories } from "../../store/stories.js";
import DotsIcon from "./DropdownMenu/DotsIcon.js";
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
    <div className="stories-container">
      <div className="stories-div">
        {newerStoriesFirst?.map((story) => (
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
      {sessionUser ?
        <div className="stories-misc-div"><SearchBar /></div>
      : null }
    </div>
  );
}

export default Stories;
