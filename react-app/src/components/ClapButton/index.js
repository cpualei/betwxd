import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import clapsBefore from "../../icons/clapsBefore.png";
import clapsAfter from "../../icons/clapsAfter.png";
import { viewClaps, createClap, removeClap } from "../../store/claps";
import "./Claps.css";

const ClapButton = ({ story }) => {

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user)
  const claps = Object.values(useSelector((state) => state.claps));

  const thisClap = claps.filter((clap) => clap?.story_id === story?.id)[0]

  const [clap, setClap] = useState(false);

  useEffect(() => {
    dispatch(viewClaps());
  }, [dispatch])

  const handleOnClick = (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      story_id: story.id
    }

    if (thisClap?.user_id === sessionUser?.id) {
      dispatch(removeClap(thisClap?.id));
      setClap(false);
    } else {
      dispatch(createClap(payload));
      setClap(true);
    }
  }

  return (
    <>
        <img
          src={!clap ? clapsBefore : clapsAfter}
          alt="claps"
          className="claps-btn"
          onClick={handleOnClick}
        />
    </>
  );
};

export default ClapButton;
