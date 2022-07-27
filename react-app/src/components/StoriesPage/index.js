import React from "react";
import Stories from "../Stories";
import RightSideMisc from "../RightSideMisc";
import "./StoriesPage.css"

function StoriesPage() {
    return (
        <div className="stories-page-container">
            <div className="stories-feed-div">
                <Stories />
            </div>
            <div className="right-side-misc-div">
                <RightSideMisc />
            </div>
        </div>
    )
}

export default StoriesPage;
