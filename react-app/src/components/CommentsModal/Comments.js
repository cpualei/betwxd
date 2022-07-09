import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Modal } from '../../context/Modal';
import CreateComment from './CreateComment';
import { viewComments } from '../../store/comments';
import './Comments.css'

function Comments({ setShowModal, story }) {
    const dispatch = useDispatch();

    const comments = useSelector((state) => {
        return Object.values(state.comments)
    });

    const storyComments = comments.filter((comment) => {
        return comment.story_id == story.id
    })

    useEffect(() => {
        dispatch(viewComments());
      }, [dispatch]);

    return (
        <>
        <CreateComment setShowModal={setShowModal}/>
            {(storyComments) ? storyComments.map((comment) => (
                <ul key={comment.id}>
                    <div>{comment.content}</div>

                </ul>
            )) : null}
        </>
    )
}

export default Comments;
