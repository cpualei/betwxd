import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import clapsBefore from "../../icons/clapsBefore.png";
import clapsAfter from "../../icons/clapsAfter.png";
import { createClap, removeClap } from "../../store/claps";
import "./Claps.css";
import { useDispatch } from "react-redux";

const ClapButton = () => {
  const dispatch = useDispatch();

  // const claps = useSelector((state) => state.claps);
  // console.log(claps)

  const [clap, setClap] = useState(false);
  const [errors, setErrors] = useState([]);

  // const onClick = async () => {

  //     const payload = {
  //         user_id: sessionUser?.id,
  //         bunny_id: bunny?.id
  //     }

  // }

  return (
    <>
        <img
          src={!clap ? clapsBefore : clapsAfter}
          alt="claps"
          className="claps-btn"
          onClick={() => setClap(true)}
        />
    </>
  );
};

export default ClapButton;
