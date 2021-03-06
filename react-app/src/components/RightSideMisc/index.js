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
          Javascript Python React.js Redux Flask SQLAlchemy Sequelize
        </p>
      </div>
    </div>
  );
}

export default RightSideMisc;
