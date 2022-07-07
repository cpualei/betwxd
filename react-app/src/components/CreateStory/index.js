import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStory } from "../../store/stories.js";
import { ValidationError } from "../../utils/validationErrors";

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

    let newStory;

    try {
      newStory = await dispatch(createStory(payload));
    } catch (error) {
      if (error instanceof ValidationError) setErrors(errors.error);
      else setErrors(error.toString().slice(7));
    }

    if (newStory) {
      setErrors([]);
      return history.push(`/`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={story}
            onChange={(e) => setStory(e.target.value)}
            placeholder={"Tell your story..."}
            required
          ></input>
        </div>
        <div>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder={"Image URL goes here..."}
            required
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default CreateStory;
