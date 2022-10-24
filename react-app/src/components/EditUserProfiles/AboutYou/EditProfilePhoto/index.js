import React from "react";

function EditProfilePhoto({ sessionUser }) {
    return (
        <div className="about-you-sections">
            <div>
              <p className="about-you-subheadings">Photo</p>
              <div className="about-you-photo-section">
                <div>
                  <p id="section-description">
                    Your photo appears on your Profile page and with your
                    stories across Medium.
                    <br />
                    <br />
                    Recommended size: Square, at least 1000 pixels per side.
                    File type: JPG, PNG or GIF.
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
            {/* <div className="edit-profile-edit-btn">Edit</div> */}
          </div>
    )
}

export default EditProfilePhoto;
