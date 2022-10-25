import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import EditUsername from "./EditUsername";
import EditBio from "./EditBio";
import EditProfilePhoto from "./EditProfilePhoto";
import viewUsers from "../../../store/users";

function AboutYou() {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state?.session?.user);

  // useEffect(() => {
  //   dispatch(viewUsers())
  // }, [dispatch])

  return (
    <>
      <div className="about-you-div">
        <h2 id="about-you-header">About you</h2>
        <EditUsername sessionUser={sessionUser} />
        <EditBio sessionUser={sessionUser} />
        <EditProfilePhoto sessionUser={sessionUser} />
      </div>
    </>
  );
}

export default AboutYou;
