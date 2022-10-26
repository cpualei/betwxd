import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUsername } from "../../../../store/profiles";

function EditUsername({ sessionUser }) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(sessionUser.username);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      username,
    };

    const data = await dispatch(updateUsername(payload, sessionUser.id));
    
    if (data) {
      setErrors([data]);
    } else {
      setErrors([]);
    }
  };

  const toggle = () => {
    if (save) setEdit(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="about-you-sections">
        <div>
          <p className="about-you-subheadings">Name</p>
          <textarea
            className="edit-profile-editable-fields"
            onChange={(e) => setUsername(e.target.value)}
            disabled={!edit}
            defaultValue={sessionUser.username}
          />
          <p id="section-description">
            Your name appears on your Profile page, as your byline, and in your
            responses. It is a required field.
          </p>
        </div>
        {edit === false ? (
          <button
            className="edit-profile-edit-cancel-btn"
            onClick={(e) => setEdit(true)}
          >
            Edit
          </button>
        ) : (
          <div>
            <button
              className="edit-profile-save-btn"
              type="submit"
              onClick={(e) => {
                setSave(true);
                toggle();
              }}
            >
              Save
            </button>
            <button
              className="edit-profile-edit-cancel-btn"
              onClick={(e) => setEdit(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
}

export default EditUsername;
