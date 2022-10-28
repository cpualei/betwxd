import React from "react";
import SearchBar from "../SearchBar";
import WhatWereReading from "./WhatWereReading";
import RecommendedTopics from "./RecommendedTopics";
import UsersList from "../UsersList";
import "./RightSideMisc.css";

function RightSideMisc() {
  return (
    <div className="stories-misc-container">
      <div className="stories-misc-outter-div">
        <div className="stories-misc-div">
          <SearchBar />
        </div>
        <div className="what-were-reading-recommended-container">
          <WhatWereReading />
          <RecommendedTopics />
          <UsersList />
        </div>
      </div>
      <div className="technologies-div">
        <p id="technologies-used">
          Python &nbsp; Flask &nbsp; HTML5 &nbsp; CSS3 &nbsp; AWS &nbsp; React.js &nbsp;
          Redux &nbsp; PostgreSQL &nbsp; SQLAlchemy &nbsp; Git &nbsp; GitHub
          &nbsp; Heroku
        </p>
      </div>
    </div>
  );
}

export default RightSideMisc;
