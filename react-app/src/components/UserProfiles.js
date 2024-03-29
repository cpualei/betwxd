import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import UsersStories from "./UsersStories";
import RecommendedTopics from "./RightSideMisc/RecommendedTopics";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://www.ipwatchdog.com/wp-content/uploads/2018/05/invalid-stamp.jpg";
  };

  if (!user) {
    return null;
  }

  return (
    <div className="user-page-container">
      <div className="users-stories-div">
        <UsersStories userId={userId} />
      </div>
      <div className="users-profile-div">
        <div className="users-profile-inner-div">
          <ProfileRightSideMisc />
          <div className="users-profile-info">
            {user?.profile_photo ? (
              <img
                id="profile-photo"
                src={user?.profile_photo}
                alt="profile-photo"
                onError={invalidImg}
              />
            ) : (
              <img
                src={`https://ui-avatars.com/api/?name=${user?.username}&rounded=true&background=a0a0a0`}
              />
            )}
            <p id="profile-username">{user?.username}</p>
            <p id="profile-bio">{user?.bio}</p>
            {sessionUser?.id === user?.id ? (
              <NavLink to={`/${sessionUser?.id}/settings`} id="profile-edit-link">
                Edit profile
              </NavLink>
            ) : null}
            <RecommendedTopics />
          </div>
        </div>
        <div className="users-profile-technologies-div">
          <p id="users-profile-technologies">
          Python &nbsp; Flask &nbsp; HTML5 &nbsp; CSS3 &nbsp; AWS &nbsp; React.js &nbsp;
          Redux &nbsp; PostgreSQL &nbsp; SQLAlchemy &nbsp; Git &nbsp; GitHub
          &nbsp; Heroku
          </p>
        </div>
      </div>
    </div>
  );
}
export default User;
