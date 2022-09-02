import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewUsers } from "../../store/users";
import "./GetUser.css"

function GetUser({ userId }) {
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => {
    return Object?.values(state?.users);
  });

  useEffect(() => {
    dispatch(viewUsers());
  }, [dispatch])

  return (
    <>
      {allUsers?.map((user) => (
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
