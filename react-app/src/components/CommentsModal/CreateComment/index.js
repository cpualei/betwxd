import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreateComment({ setShowModal }) {
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState();
  const [errors, setErrors] = useState();

  // useEffect(() => {
  //   const errors = [];

  //   if (content.length > 2000)
  //     errors.push("Comment must not exceed 2000 characters");

  //   setErrors(errors);
  // }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: sessionUser.id,
      content,
    };

    // let newComment = await dispatch(addComment(payload));

    // try {
    //   newComment = await dispatch(addComment(payload));
    // } catch (error) {
    //   if (error instanceof ValidationError) setErrors(errors.error);
    //   else setErrors(error.toString().slice(7));
    // }

    // if (newComment) {
    //   setErrors([]);
    //     return history.push(`/`);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          type="textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={"What are your thoughts?"}
        />
        {/* <button type="submit" disabled={content.length < 1}>Respond</button> */}
        <button onClick={() => setShowModal(false)}>Cancel</button>
      </form>
    </>
  );
}

export default CreateComment;
