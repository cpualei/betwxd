import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { viewStories } from '../store/stories';
import UsersStories from './UsersStories';
import "./User.css"

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

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
  }, [viewStories()]);

  if (!user) {
    return null;
  }

  return (
    <div className="user-page-container">
      <div className="users-stories-div">
        <UsersStories userId={userId} />
      </div>
      <div className="users-profile-div">
      <p>
        <strong>{user.username}</strong>
      </p>
      </div>
    </div>
  );
}
export default User;
