import React from "react";
import { useSelector } from "react-redux";
import { viewStories } from "../../../store/stories";
import GetUser from "../../GetUser";
import ReactTimeAgo from "react-time-ago";
import trending from "../../../icons/trending.png";
import "./TrendingStories.css";

function TrendingStories() {
  const trendingStories = useSelector((state) => {
    return Object.values(state.stories);
  });

  const numbers = ["01", "02", "03", "04", "05", "06"];

  return (
    <div className="trending-stories-container">
      <div className="trending-stories-header">
        <img className="trending-icon" src={trending} alt="trending" />
        <div className="trending-on-medium-text">TRENDING ON MEDIUM</div>
      </div>
      <div className="trending-ul-div">
        {trendingStories.map((story) => (
          <ul className="trending-ul" key={story?.id}>
            <div>
              <GetUser userId={story?.user_id} />
            </div>
            <div>{story.title}</div>
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
