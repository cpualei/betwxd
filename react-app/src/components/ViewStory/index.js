import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewStories } from "../../store/stories.js";
import CommentsModal from "../CommentsModal/index.js";
import "./ViewStory.css"

function ViewStory() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const stories = useSelector((state) => {
      return Object.values(state.stories);
    });

    const story = stories[id]

    useEffect(() => {
      dispatch(viewStories(id));
    }, [dispatch, id]);

    return (
      <>
        <p>View story page</p>
        <div>{story?.title}</div>
        <div>{story?.story}</div>
        <div>{story?.created_at}</div>
        <div>{story?.img}</div>
        <CommentsModal story={story}/>
      </>
    );
  }

  export default ViewStory;
