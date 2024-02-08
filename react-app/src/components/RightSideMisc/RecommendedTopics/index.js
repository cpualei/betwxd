import React from "react";
import "./RecommendedTopics.css";

function RecommendedTopics() {
  return (
    <div className="recommended-container">
      <p id="recommended">Recommended topics</p>
      <div className="recommended-links-div">
        <a
          className="recommended-links"
          href="https://caitlinbuenlucas.com/"
          target="_blank"
        >
          My Portfolio
        </a>
        <a
          className="recommended-links"
          href="https://www.linkedin.com/in/caitlin-buen-lucas/"
          target="_blank"
        >
          Linkedin
        </a>
        <a
          className="recommended-links"
          href="https://github.com/cpualei/"
          target="_blank"
        >
          Github
        </a>
        <a
          className="recommended-links"
          href="https://medium.com/"
          target="_blank"
        >
          Medium
        </a>
        <a
          className="recommended-links"
          href="https://splitzyapp-fd4923ca97e0.herokuapp.com/login"
          target="_blank"
        >
          splitzy
        </a>
        <a
          className="recommended-links"
          href="https://cabindogs.herokuapp.com/"
          target="_blank"
        >
          CabinDogs
        </a>
      </div>
    </div>
  );
}

export default RecommendedTopics;
