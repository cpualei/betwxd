import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./EditUserProfiles.css";

function EditUserProfiles() {
  const sessionUser = useSelector((state) => state?.session?.user);

  return (
    <div className="edit-profile-container">
      <div className="settings-div">
        <h2 id="settings-header">Other links</h2>
        <NavLink className="settings-links" to="https://caitlinbuenlucas.com/">
          My portfolio
        </NavLink>
        <NavLink className="settings-links" to="https://github.com/cpualei">
          Github profile
        </NavLink>
        <NavLink
          className="settings-links"
          to="https://splitzy-app.herokuapp.com/"
        >
          splitzy
        </NavLink>
        <NavLink
          className="settings-links"
          to="https://cabindogs.herokuapp.com/"
        >
          CabinDogs
        </NavLink>
        <NavLink className="settings-links" to="https://medium.com/">
          {" "}
          Medium
        </NavLink>
      </div>
      <div className="about-you-div">
        <h2 id="about-you-header">About you</h2>
        <div className="about-you-sections">
          <p className="about-you-subheadings">Name</p>
          <p className="edit-profile-editable-fields">{sessionUser.username}</p>
          <p id="section-description">
            Your name appears on your Profile page, as your byline, and in your
            responses. It is a required field.
          </p>
        </div>
        <div className="about-you-sections">
          <p className="about-you-subheadings">Short bio</p>
          <p className="edit-profile-editable-fields">{sessionUser.bio}</p>
          <p id="section-description">
            Your short bio appears on your Profile and next to your stories. Max
            200 characters.
          </p>
        </div>
        <div className="about-you-sections">
              <p className="about-you-subheadings">Photo</p>
          <div className="about-you-photo-section">
            <div>
              <p id="section-description">
                Your photo appears on your Profile page and with your stories
                across Medium.
                <br />
                <br />
                Recommended size: Square, at least 1000 pixels per side. File
                type: JPG, PNG or GIF.
              </p>
            </div>
            <div>
              <img
                id="edit-profile-profile-photo"
                src={sessionUser?.profile_photo}
                alt="profile-photo"
                //   onError={invalidImg}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUserProfiles;
