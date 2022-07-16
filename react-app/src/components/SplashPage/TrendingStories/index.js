import React from "react";
import { useSelector } from "react-redux";
import { viewStories } from "../../../store/stories";
import GetUser from "../../GetUser";
import ReactTimeAgo from "react-time-ago";
import trending from "../../../icons/trending.png";
import "./TrendingStories.css"

function TrendingStories() {
  const trendingStories = useSelector((state) => {
    return Object.values(state.stories);
  });

  return (
    <>
      <div className="trending-stories-container">
        {/* <div className="trending-imgs"> */}
          <img className="trending-imgs" src={trending} alt="trending" />
        {/* </div> */}
        <div className="trending-on-medium-text">TRENDING ON MEDIUM</div>
      </div>
      {trendingStories.map((story) => (
        <ul key={story?.id}>
          <div>
            <GetUser userId={story?.user_id} />
          </div>
          <div>{story.title}</div>
          <div>
            <ReactTimeAgo date={story?.created_at} locale="en-US" />
          </div>
        </ul>
      ))}
    </>
  );
}

export default TrendingStories;
