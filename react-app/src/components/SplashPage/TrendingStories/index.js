import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import GetUser from "../../GetUser";
import GetImg from "../../GetImg";
import trending from "../../../icons/trending.png";
import moment from "moment";
import "./TrendingStories.css";

function TrendingStories() {
  const trendingStories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const reversedTrending = trendingStories?.reverse();
  const sixStoriesOnly = reversedTrending?.slice(0, 6);

  return (
    <div className="trending-stories-container">
      <div className="trending-stories-header">
        <img className="trending-icon" src={trending} alt="trending" />
        <div className="trending-on-medium-text">TRENDING ON MEDIUM</div>
      </div>
      <div className="trending-ul-div">
        {sixStoriesOnly?.map((story, idx) => (
          <ul className="trending-ul" key={story?.id}>
            <div className="trending-numbers">0{idx + 1}</div>
            <div className="trending-img-user-container">
            <div className="trending-img-user-div">
              <div className="trending-img-div">
                <GetImg userId={story?.user_id} />
              </div>
              <div className="trending-user-div">
                <NavLink
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/users/${story?.user_id}`}
                >
                  <GetUser id="trending-user" userId={story?.user_id} />
                </NavLink>
              </div>
            </div>
              <NavLink
                style={{ textDecoration: "none", color: "rgba(41, 41, 41, 1)" }}
                to={`/stories/${story?.id}`}
              >
                <div id="trending-story-title">{story?.title}</div>
              </NavLink>
              <div>
                <p id="story-date">
                  {moment(story?.created_at).format("MMM Do")}
                </p>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default TrendingStories;
