import React, { useState, useEffect } from "react";
import "./GetImg.css";

function GetImg({ userId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData?.users);
    }
    fetchData();
  }, []);

  const invalidImg = (e) => {
    e.currentTarget.src =
      "https://thumbs.dreamstime.com/b/invalid-red-rubber-stamp-over-white-background-88003326.jpg";
  };

  return (
    <>
      {users?.map((user) => (
        <ul id="user-photo-ul" key={user?.id}>
          {user?.id === userId ? (
            <>
              {user?.profile_photo ? (
                <img
                  className="user-photo"
                  src={user?.profile_photo}
                  alt="profile-photo"
                  onError={invalidImg}
                />
              ) : (
                <img
                  className="user-photo"
                  src={`https://ui-avatars.com/api/?name=${user.username}&rounded=true&background=a0a0a0`}
                />
              )}
            </>
          ) : null}
        </ul>
      ))}
    </>
  );
}

export default GetImg;
