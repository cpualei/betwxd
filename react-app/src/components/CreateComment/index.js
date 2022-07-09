import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function CreateComment() {
    const dispatch = useDispatch();

    const sessionUser = useSelector((state) => state.session.user);

    const [content, setContent] = useState();
    const [errors, setErrors] = useState();

    useEffect(() => {
        const errors = [];

        if (content.length > 2000) errors.push("Comment must not exceed 2000 characters");

        setErrors(errors);
    }, [content]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            user_id: sessionUser.id,
            content
        }

    }

    return (
        <></>
    )
}
