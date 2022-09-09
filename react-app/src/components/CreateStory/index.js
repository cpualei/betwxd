import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStory } from "../../store/stories.js";
import uploadImg from "../../icons/uploadImg.png";
import "./CreateStory.css";

function CreateStory() {
  const dispatch = useDispatch();
  const history = useHistory();
  const hiddenFileInput = useRef(null);

  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [img, setImg] = useState("");
  const [imgLoading, setImgLoading] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];

    if (title.length > 100) errors.push("Title must not exceed 100 characters");
    else if (title.length < 1)
      errors.push("Please provide a title for your story.");
    if (story.length > 5000)
      errors.push("Story must not exceed 5000 characters");
    else if (story.length < 1)
      errors.push("Please provide a story to publish.");
    if (!img) errors.push("Please provide an image for your story.");

    setErrors(errors);
  }, [title, story, img]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user_id", sessionUser.id);
    formData.append("title", title);
    formData.append("story", story);
    formData.append("img", img);

    // aws uploads can be a bit slow—displaying
    // some sort of loading message is a good idea
    setImgLoading(true);

    let data = await dispatch(createStory(formData));

    if (data) {
      setErrors([data]);
    } else {
      // received a valid request
      setErrors([]);
      return history.push(`/`);
    }
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  const handleClick = (e) => {
    hiddenFileInput.current?.click();
  };

  return (
    <div className="story-form-container">
      <form onSubmit={handleSubmit}>
        <div className="story-form-top-div">
          <div className="story-form-top-div-left">
            <p className="draft-in-user">Draft in {sessionUser.username}</p>
            <p className="new-story-edit-story-text">Creating...</p>
          </div>
          <div className="story-form-top-div-right">
            <button
              className="publish-btn"
              type="submit"
              // disabled={errors.length > 0}
            >
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
          <div className="upload-and-story-cntner">
            <div className="create-story-upload-and-story-div">
              <img
                src={uploadImg}
                className="upload-btn"
                onClick={handleClick}
                alt="img"
              />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={updateImage}
                // onChange={(e) => setImg(e.target.files[0])}
                // onChange={(e) => setImg(e.target.value)}
                ref={hiddenFileInput}
                required
              ></input>
              {/* <img id="img-preview"  src={img} alt={img} /> */}
              {/* <input type="file" accept="image/*" onChange={updateImage}/> */}
            </div>
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
          </div>
          <div className="form-btm-text-and-errors-div">
            {!errors.includes("Please provide an image for your story.") &&
            img ? (
              <p
                className="form-btm-text-and-errors"
                id="img-upload-successful"
              >
                Image upload successful!
              </p>
            ) : null}
            <ul
              className="story-errors"
              style={{ listStyleType: "none", padding: "0px" }}
            >
              {errors?.map((error, idx) => (
                <li
                  className="form-btm-text-and-errors"
                  id="story-errors-li"
                  key={idx}
                >
                  {error}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateStory;
