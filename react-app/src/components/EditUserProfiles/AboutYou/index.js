import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditUsername from "./EditUsername";
import EditBio from "./EditBio";
import EditProfilePhoto from "./EditProfilePhoto";

function AboutYou() {
  const sessionUser = useSelector((state) => state?.session?.user);

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
