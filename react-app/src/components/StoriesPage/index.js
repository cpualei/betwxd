import React, { useEffect } from "react";
import Stories from "../Stories";
import { viewStories } from "../../store/stories";
import RightSideMisc from "../RightSideMisc";
import "./StoriesPage.css"

function StoriesPage() {

useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewStories()]);

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
