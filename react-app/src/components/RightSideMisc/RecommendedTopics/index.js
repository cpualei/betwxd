import React from "react";
import "./RecommendedTopics.css";

function RecommendedTopics() {
  return (
    <div className="recommended-container">
      <p id="recommended">Recommended topics</p>
      <div className="recommended-more-links-div">
        <a
          className="recommended-links"
          href="https://www.linkedin.com/in/caitlin-buen-lucas/"
        >
          Linkedin
        </a>
        <a
          className="recommended-links"
          href="https://github.com/cpualei/"
        >
          Github
        </a>
        <a
          className="recommended-links"
          href="https://medium.com/"
        >
          Medium
        </a>
      </div>
    </div>
  );
}

export default RecommendedTopics;
