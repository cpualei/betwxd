import React from "react";

function EditUsername({ sessionUser }) {
    return (
        <div className="about-you-sections">
        <div>
          <p className="about-you-subheadings">Name</p>
          <p type="text" className="edit-profile-editable-fields">
            {sessionUser.username}
          </p>
          <p id="section-description">
            Your name appears on your Profile page, as your byline, and in
            your responses. It is a required field.
          </p>
        </div>
        {/* <div className="edit-profile-edit-btn">Edit</div> */}
      </div>
    )
}

export default EditUsername;
