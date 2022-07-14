import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateStory } from "../../store/stories.js";
import { ValidationError } from "../../utils/validationErrors.js";
import "./EditStory.css"

function EditStory() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    // const  = useSelector((state) => state.stories)

    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [img, setImg] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        const errors = [];

        if (title.length > 100) errors.push("Title must not exceed 100 characters");
        if (story.length > 5000) errors.push("Story must not exceed 5000 characters");

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

        let editStory;

        try {
          editStory = await dispatch(updateStory(id, payload));
        } catch (error) {
          if (error instanceof ValidationError) setErrors(errors.error);
          else setErrors(error.toString().slice(7));
        }

        if (editStory) {
          setErrors([]);
          return history.push(`/`);
        }
      };

    return (
      <div className="story-form-container">
      {/* <div>
          <img className="form-logo" src={logo} alt="logo" />
        </div> */}
      <div className="story-form-top-div">
        <div className="story-form-top-div-left">
          <p className="draft-in-user">Draft in {sessionUser.username}</p>
        </div>
        <div className="story-form-top-div-right">
          <button
            className="publish-btn"
            type="submit"
            disabled={title.length < 1 && story.length < 1}
          >
            Publish
          </button>
        </div>
      </div>
      <form className="story-form" onSubmit={handleSubmit}>
        {/* <div> */}
          <input
            className="story-form-inputs"
            id="story-form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={"Title"}
            required
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
            required
          ></textarea>
        {/* </div>
        <div> */}
          <input
            className="story-form-img"
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder={"Image URL goes here..."}
            required
          ></input>
        {/* </div> */}
        <div>
          {/* <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul> */}
        </div>
      </form>
    </div>
    );
}

export default EditStory;
