import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UsersStories from "./UsersStories";
import ProfileRightSideMisc from "./ProfileRightSideMisc";
import "./UserProfiles.css";

function User() {
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [viewStories()]);

  if (!user) {
    return null;
  }

  return (
    <div className="user-page-container">
      <div className="users-stories-div">
        <UsersStories userId={userId} />
      </div>
      <div className="users-profile-div">
        <ProfileRightSideMisc />
        <div className="users-profile-info">
          <img
            id="profile-photo"
            src={user.profile_photo}
            alt="profile-photo"
          />
          <p id="profile-username">{user.username}</p>
          <p id="profile-bio">{user.bio}</p>
          {/* {sessionUser.id === user.id ? <p id="profile-edit-link">Edit profile</p> : null} */}
        </div>
      </div>
    </div>
  );
}
export default User;
