import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { viewStory } from "../../store/stories.js";

function ViewStory() {
    const { id } = useParams();
    const dispatch = useDispatch();

    // const stories = useSelector((state) => {
    //   return Object.values(state.stories);
    // });
    const stories = useSelector((state) => state.stories);
    console.log(stories)

    useEffect(() => {
      dispatch(viewStory(id));
    }, [dispatch, id]);

    return (
      <>
        <p>View story page</p>
        <div></div>
      </>
    );
  }

  export default ViewStory;
