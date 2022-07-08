import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewStories } from "../../store/stories.js";

function ViewStory() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const stories = useSelector((state) => {
      return Object.values(state.stories);
    });

    console.log(stories[id])
    const story = stories[id]
    console.log("STORY", story)


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
      </>
    );
  }

  export default ViewStory;
