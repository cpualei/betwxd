import React from "react";
import SearchBar from "../SearchBar";
import "../RightSideMisc/RightSideMisc.css";

function ProfileRightSideMisc() {
  return (
    <div className="misc-outer-container">
      <div className="misc-search-div">
        <SearchBar />
      </div>
    </div>
  );
}

export default ProfileRightSideMisc;
