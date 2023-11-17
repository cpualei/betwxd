import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateStory } from "../../store/stories.js";
import uploadImg from "../../icons/uploadImg.png";
import "../CreateStory/CreateStory.css";

function EditStory() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const hiddenFileInput = useRef(null);

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
      errors.push("Title must not exceed 100 characters");
    else if (title?.length < 1)
      errors.push("Please provide a title for your story.");
    if (story?.length > 5000)
      errors.push("Story must not exceed 5000 characters");
    else if (story?.length < 1)
      errors.push("Please provide a story to publish.");
    if (!storyContent?.img?.match(validateImgUrl))
      errors.push(
        "Please provide a valid image that ends in PNG, JPG, or JPEG format."
      );

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
    // setImgLoading(true);

    let data = await dispatch(updateStory(id, formData));

    if (data) {
      setErrors([data]);
    } else {
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
            <p className="new-story-edit-story-text">Editing...</p>
          </div>
          <div className="story-form-top-div-right">
            <button className="publish-btn" type="submit">
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
            <div className="upload-and-story-div">
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
                ref={hiddenFileInput}
              />
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
            <div className="preview-img">
              {!errors.includes("Please provide an image for your story.") &&
                img && <img src={img} alt="preview-img" id="preview-img" />}
            </div>
          </div>
          <div className="form-btm-text-and-errors-div">
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

export default EditStory;
