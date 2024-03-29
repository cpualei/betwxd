import React from "react";
import SearchBar from "../SearchBar";
import WhatWereReading from "./WhatWereReading";
import RecommendedTopics from "./RecommendedTopics";
import UsersList from "../UsersList";
import TechnologiesUsed from "./TechnologiesUsed";
import "./RightSideMisc.css";

function RightSideMisc() {
  return (
    <div className="misc-outer-container">
      <div className="misc-top-container">
        <div className="misc-search-div">
          <SearchBar />
        </div>
        <div className="misc-readings-topics-users-div">
          <WhatWereReading />
          <RecommendedTopics />
          <UsersList />
        </div>
      </div>
      <div className="misc-bottom-container">
        <TechnologiesUsed />
      </div>
    </div>
  );
}

export default RightSideMisc;
