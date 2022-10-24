import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateBio } from "../../../../store/profiles";

function EditBio({ sessionUser }) {
  const dispatch = useDispatch();

  const [bio, setBio] = useState(sessionUser.bio);
  const [edit, setEdit] = useState(false);
  const [save, setSave] = useState(false);
  const [errors, setErrors] = useState([]);

  //   useEffect(() => {

  //   }, [bio])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      bio,
    };

    const data = dispatch(updateBio(payload));

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
          <p className="about-you-subheadings">Short bio</p>
          <textarea
            className="edit-profile-editable-fields"
            value={sessionUser.bio}
            onChange={(e) => setBio(e.target.value)}
            // disable={!edit}
          />
          <p id="section-description">
            Your short bio appears on your Profile and next to your stories. Max
            200 characters.
          </p>
        </div>
        {edit == false ? (
          <button
            className="edit-profile-edit-cancel-btn"
            onClick={(e) => {
              setEdit(true);
            }}
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

export default EditBio;
