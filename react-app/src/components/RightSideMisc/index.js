import React from "react";
import SearchBar from "../SearchBar";
import greendot from "../../icons/greendot.png";
import "./RightSideMisc.css";

function RightSideMisc() {
  return (
    <div className="stories-misc-container">
      <div className="stories-misc-div">
        <SearchBar />
      </div>
      <div className="what-were-reading-today-div">
        <img id="green-dot" src={greendot} />
        <p id="what-were-reading-today">What We're Reading Today</p>
      </div>
    </div>
  );
}

export default RightSideMisc;
