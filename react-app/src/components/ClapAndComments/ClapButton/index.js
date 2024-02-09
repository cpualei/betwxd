import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clapsBefore from "../../../icons/clapsBefore.png";
import clapsAfter from "../../../icons/clapsAfter.png";
import { viewClaps, createClap, removeClap } from "../../../store/claps";
import "./ClapButton.css";

const ClapButton = ({ story }) => {
  const [clap, setClap] = useState(false);
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const claps = Object.values(useSelector((state) => state.claps));

  const storyClaps = claps.filter((clap) => clap.story_id === story.id)
  const thisClap = storyClaps[0];
  const numberOfClaps = storyClaps.length;

  useEffect(() => {
    dispatch(viewClaps());
  }, [dispatch]);

  const handleOnClick = (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      story_id: story.id,
    };

    if (thisClap.user_id !== sessionUser.id) {
      dispatch(createClap(payload));
      setClap(true);
    } else {
      dispatch(removeClap(thisClap.id));
      setClap(false);
    }
  };

  return (
    <>
      {sessionUser ? (
        <img
          src={thisClap?.user_id !== sessionUser.id ? clapsBefore : clapsAfter}
          alt="claps"
          className="claps-btn"
          onClick={handleOnClick}
        />
      ) : null}
      <p id="clap-count">{numberOfClaps}</p>
    </>
  );
};

export default ClapButton;
