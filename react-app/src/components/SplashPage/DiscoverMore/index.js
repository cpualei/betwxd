import React from "react";
import "./DiscoverMore.css";

function DiscoverMore() {
  return (
    <div className="discover-more-container">
      <p id="discover-more">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      <div className="discover-more-links-div">
        <a
          className="discover-more-links"
          href="https://caitlinbuenlucas.com/"
          target="_blank"
        >
          My Portfolio
        </a>
        <a
          className="discover-more-links"
          href="https://www.linkedin.com/in/caitlin-buen-lucas/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="discover-more-links"
          href="https://github.com/cpualei/"
          target="_blank"
        >
          Github
        </a>
        <a
          className="discover-more-links"
          href="https://medium.com/"
          target="_blank"
        >
          Medium
        </a>
      </div>
    </div>
  );
}

export default DiscoverMore;
