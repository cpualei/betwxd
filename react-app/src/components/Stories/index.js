import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewStories } from "../../store/stories.js";
import GetUser from "../GetUser/index.js";
import DotsIcon from "./DropdownMenu/DotsIcon.js";
import ReactTimeAgo from "react-time-ago";
import "./Stories.css";


function Stories(id) {
  const dispatch = useDispatch();

  const stories = useSelector((state) => {
    return Object?.values(state?.stories);
  });

  const storiesFiltered = stories.filter(
    (story) => story?.id == id
  );
  console.log(storiesFiltered)

  // const story = storiesFiltered[0];
  // const storyCreated = new Date(story?.created_at);
  // const date = storyCreated.toDateString()
  // console.log(date)

  useEffect(() => {
    dispatch(viewStories());
  }, [dispatch]);

  const invalidImg = (e) => {
    e.currentTarget.src = "https://w7.pngwing.com/pngs/756/477/png-transparent-circle-close-cross-incorrect-invalid-x-delete-flat-actions-icon-thumbnail.png";
  };

  return (
    <>
      <div id="stories-container">
        {stories?.map((story) => (
          <ul className="stories-ul" key={story?.id}>
            <div className="story-user-and-date-div">
              <div id="story-user"><GetUser userId={story?.user_id}/></div>
              {/* <ReactTimeAgo date={story?.created_at} locale="en-US"/> */}
              {/* <div>{story.created_at}</div> */}
            </div>
            <div className="each-story-div">
              <div className="story-title-and-story-div">
                <a style={{textDecoration: 'none'}} href={`/stories/${story.id}`}>
                  <div className="story-title">{story?.title}</div>
                  <div className="story-story">{story?.story}</div>
                </a>
                <div className="story-icons-div">
                  <DotsIcon id="story-more-options" story={story} />
                </div>
              </div>
              <a href={`/stories/${story.id}`}>
                <img onError={invalidImg} src={story?.img} alt="story-img" className="story-img" />
              </a>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Stories;
