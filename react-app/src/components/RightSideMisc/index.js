import React from "react";
import SearchBar from "../SearchBar";
import WhatWereReading from "./WhatWereReading";
import RecommendedTopics from "./RecommendedTopics";
import "./RightSideMisc.css";

function RightSideMisc() {
  return (
    <div className="stories-misc-container">
      <div className="stories-misc-div">
        <SearchBar />
      </div>
      <div className="what-were-reading-recommended-container">
        <WhatWereReading />
        <RecommendedTopics />
      </div>
    </div>
  );
}

export default RightSideMisc;
