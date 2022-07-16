import React, { useState, useEffect } from "react";
import "./GetUser.css"

function GetUser({ userId }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData?.users);
    }
    fetchData();
  }, []);

  return (
    <>
      {users?.map((user) => (
        <ul id="username-ul" key={user?.id}>
          {user?.id === userId ? (
            <p id="username">{user?.username}</p>
          ) : null}
        </ul>
      ))}
    </>
  );
}

export default GetUser;
