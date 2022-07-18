import React from "react";
import "./DiscoverMore.css";

function DiscoverMore() {
  return (
    <div className="discover-more-container">
      <p id="discover-more">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="discover-more-links-div">
        <a
          className="discover-more-links"
          href="https://www.linkedin.com/in/caitlin-buen-lucas/"
        >
          Linkedin
        </a>
        <a
          className="discover-more-links"
          href="https://github.com/cpualei/"
        >
          Github
        </a>
        <a
          className="discover-more-links"
          href="https://medium.com/"
        >
          Medium
        </a>
      </div>
    </div>
  );
}

export default DiscoverMore;
