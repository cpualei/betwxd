import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import GetImg from "./GetImg";
import { viewUsers } from "../store/users";
import "./UsersList.css";

function UsersList() {
  const dispatch = useDispatch();

  const users = useSelector((state) => {
    return Object.values(state.users);
  });

  useEffect(() => {
    dispatch(viewUsers());
  }, [dispatch]);

  const userComponents = users?.map((user) => {
    return (
      <li key={user?.id}>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to={`/users/${user?.id}`}
          >
          <div className="list-of-users-container">
            <div className="list-of-users-prof-photos">
              <GetImg userId={user?.id} />
            </div>
            <div className="list-of-users-usernames">{user?.username}</div>
          </div>
          <div className="list-of-users-bios">{user?.bio}</div>
        </NavLink>
      </li>
    );
  });

  return (
    <>
      <p id="checkout-their-stories-text">Check out their stories</p>
      <ul className="list-of-users-ul">{userComponents}</ul>
    </>
  );
}

export default UsersList;
