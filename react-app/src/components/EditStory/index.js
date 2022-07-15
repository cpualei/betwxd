import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateStory } from "../../store/stories.js";
import "./EditStory.css";

function EditStory() {
  const { id } = useParams();
  console.log(id)
  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const stories = useSelector((state) => state.stories)[id]
  console.log(stories)

  // const oneStory = stories[id];
  // console.log(oneStory)
  // const storiesFiltered = stories.filter((story) => {
  //   return story.id === story
  // })

  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [img, setImg] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    const validateImgUrl = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i;

    if (title.length > 100)
      errors.push("*Title must not exceed 100 characters");
    else if (title.length < 1)
      errors.push("*Please provide a title for your story.");
    if (story.length > 5000)
      errors.push("*Story must not exceed 5000 characters");
    else if (story.length < 1)
      errors.push("*Please provide a story to publish.");
    if (!img.match(validateImgUrl)) {
      errors.push("*Please provide an image in PNG, JPG or JPEG format.");
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

    // try {
    //   editStory = await dispatch(updateStory(id, payload));
    // } catch (error) {
    //   if (error instanceof ValidationError) setErrors(errors.error);
    //   else setErrors(error.toString().slice(7));
    // }

    // if (editStory) {
    //   setErrors([]);
    //   history.push(`/stories/${id}`);
    // }

    if (data) {
      setErrors(data);
    } else {
      setErrors([]);
      return history.push(`/stories`);
    }
  };

  return (
    <div className="story-form-container">
      <form onSubmit={handleSubmit}>
        <div className="story-form-top-div">
          <div className="story-form-top-div-left">
            <p className="draft-in-user">Draft in {sessionUser.username}</p>
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
