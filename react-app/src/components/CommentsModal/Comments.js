import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../context/Modal';
import CreateComment from './CreateComment';
import './Comments.css'

function Comments({ setShowModal }) {
    return (
        <>
        <CreateComment setShowModal={setShowModal}/>
        </>
    )
}

export default Comments;
