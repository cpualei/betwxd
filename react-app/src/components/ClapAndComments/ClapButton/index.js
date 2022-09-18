import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import clapsBefore from "../../../icons/clapsBefore.png";
import clapsAfter from "../../../icons/clapsAfter.png";
import { viewClaps, createClap, removeClap } from "../../../store/claps";
import "./ClapButton.css";

const ClapButton = ({ story }) => {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const claps = Object.values(useSelector((state) => state.claps));

  const thisClap = claps.filter((clap) => clap?.story_id === story?.id)[0];
  const numberOfClaps = claps.length;

  const [clap, setClap] = useState(false);

  useEffect(() => {
    dispatch(viewClaps());
  }, [dispatch]);

  const handleOnClick = (e) => {
    e?.preventDefault();

    const payload = {
      user_id: sessionUser?.id,
      story_id: story?.id,
    };

    if (thisClap?.user_id !== sessionUser?.id) {
      dispatch(createClap(payload));
      setClap(true);
    } else {
      dispatch(removeClap(thisClap?.id));
      setClap(false);
    }
  };

  return (
    <>
      {sessionUser ? (
        <>
          {thisClap?.user_id !== sessionUser?.id ? (
            <img
              src={clapsBefore}
              alt="claps"
              className="claps-btn"
              onClick={handleOnClick}
            />
          ) : (
            <img
              src={clapsAfter}
              alt="claps"
              className="claps-btn"
              onClick={handleOnClick}
            />
          )}
        </>
      ) : null}
      <p id="clap-count">{numberOfClaps}</p>
    </>
  );
};

export default ClapButton;
