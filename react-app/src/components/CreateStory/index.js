import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStory } from "../../store/stories.js";
// import { ValidationError } from "../../utils/validationErrors";
// import logo from "../../icons/logo.png"
import "./CreateStory.css";

function CreateStory() {
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [img, setImg] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (title.length > 100) errors.push("Title must not exceed 100 characters");
    if (story.length > 5000)
      errors.push("Story must not exceed 5000 characters");

    setErrors(errors);
  }, [title, story]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      title,
      story,
      img,
    };

    let data = await dispatch(createStory(payload));

    // if (newStory) {
    //   setErrors([]);
    // }

    if (data) {
      setErrors(data);
    } else {
      // received a valid request
      setErrors([]);
      return history.push(`/stories`);
    }
  };

  return (
    <div className="story-form-container">
      {/* <div>
          <img className="form-logo" src={logo} alt="logo" />
        </div> */}
      {/* <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
            ))}
          </ul> */}
      <form onSubmit={handleSubmit}>
        <div className="story-form-top-div">
          <div className="story-form-top-div-left">
            <p className="draft-in-user">Draft in {sessionUser.username}</p>
          </div>
          <div className="story-form-top-div-right">
            <button
              className="publish-btn"
              type="submit"
              // disabled={title.length < 1 && story.length < 1}
            >
              Publish
            </button>
          </div>
        </div>
        {/* <div> */}
        <div className="story-form">
          <input
            className="story-form-inputs"
            id="story-form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
            // required
          ></input>
          {/* </div> */}
          {/* <div> */}
          <textarea
            className="story-form-inputs"
            id="story-form-story"
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder={"Tell your story..."}
            // required
          ></textarea>
          {/* </div>
        <div> */}
          <input
            className="story-form-img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder={"Image URL goes here..."}
            // required
          ></input>
        </div>
        {/* </div> */}
        <div></div>
      </form>
    </div>
  );
}

export default CreateStory;
