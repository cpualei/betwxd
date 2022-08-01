import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateStory } from "../../store/stories.js";
import "../CreateStory/CreateStory.css";

function EditStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const stories = useSelector((state) => state?.stories);
  const storyContent = stories[id];

  const [title, setTitle] = useState(storyContent?.title);
  const [story, setStory] = useState(storyContent?.story);
  const [img, setImg] = useState(storyContent?.img);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    const validateImgUrl = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

    if (title?.length > 100)
      errors.push("*Title must not exceed 100 characters");
    else if (title?.length < 1)
      errors.push("*Please provide a title for your story.");
    if (story?.length > 5000)
      errors.push("*Story must not exceed 5000 characters");
    else if (story?.length < 1)
      errors.push("*Please provide a story to publish.");
    if (!img?.match(validateImgUrl)) {
      errors.push("*Please provide an image that begins with http or https and ends in PNG, JPG or JPEG format.");
    }

    setErrors(errors);
  }, [title, story, img]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      title,
      story,
      img,
    };

    let data = await dispatch(updateStory(id, payload));

    if (data) {
      setErrors(data);
    } else {
      setErrors([]);
      return history.push(`/`);
    }
  };

  return (
    <div className="story-form-container">
      <form onSubmit={handleSubmit}>
        <div className="story-form-top-div">
          <div className="story-form-top-div-left">
            <p className="draft-in-user">Draft in {sessionUser.username}</p>
            <p className="new-story-edit-story-text">Editing...</p>
          </div>
          <div className="story-form-top-div-right">
            <button className="publish-btn" type="submit" disabled={errors.length > 0}>
              Publish
            </button>
          </div>
        </div>
        <div className="story-form">
          <input
            name="title"
            className="story-form-inputs"
            id="story-form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
            required
          ></input>
          <textarea
            name="story"
            className="story-form-inputs"
            id="story-form-story"
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder={"Tell your story..."}
            required
          ></textarea>
          <div style={{ textAlign: "center" }}>
            <input
              name="img"
              className="story-form-img"
              type="text"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder={"Image URL goes here..."}
              // onError={invalidImg}
              required
            ></input>
          </div>
          <div className="story-errors-div">
            <ul
              className="story-errors"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {errors.map((error, idx) => (
                <li key={idx}>{error}</li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditStory;
