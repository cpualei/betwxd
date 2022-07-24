import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { viewStories } from "../../../store/stories";
import GetUser from "../../GetUser";
import ReactTimeAgo from "react-time-ago";
import trending from "../../../icons/trending.png";
import "./TrendingStories.css";

function TrendingStories() {
  const trendingStories = useSelector((state) => {
    return Object.values(state.stories);
  });

  const reversedTrending = trendingStories.reverse();

  const invalidImg = (e) => {
    e.currentTarget.src = "https://thumbs.dreamstime.com/b/invalid-red-rubber-stamp-over-white-background-88003326.jpg";
  };

  return (
    <div className="trending-stories-container">
      <div className="trending-stories-header">
        <img className="trending-icon" src={trending} alt="trending" />
        <div className="trending-on-medium-text">TRENDING ON MEDIUM</div>
      </div>
      <div className="trending-ul-div">
        {reversedTrending.map((story) => (
          <ul className="trending-ul" key={story?.id}>
            <div className="trending-img-user-container">
              <div className="trending-img-div">
                <img id="trending-imgs" onError={invalidImg} src={story.img} />
              </div>
              <div className="trending-user-div">
                <GetUser id="trending-user" userId={story?.user_id} />
              </div>
            </div>
            <NavLink
              style={{ textDecoration: "none", color: "rgba(41, 41, 41, 1)" }}
              to={`/stories/${story.id}`}
            >
              <div id="trending-story-title">{story.title}</div>
            </NavLink>
            <div>
              <ReactTimeAgo date={story?.created_at} locale="en-US" />
            </div>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default TrendingStories;
