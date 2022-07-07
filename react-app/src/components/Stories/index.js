import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { viewStories } from '../../store/stories.js'

function Stories() {
    const dispatch = useDispatch();

    const stories = useSelector((state) => {
        return Object.values(state.stories)
    });

    useEffect(() => {
        dispatch(viewStories());
    }, [dispatch])


    return (
        <>
            <p>This is the feed of stories</p>
            {stories.map((story) => (
                <ul key={story.id}>
                    <li>{story.title}</li>
                    <li>{story.story}</li>
                    <li>{story.user_id}</li>
                    <li>{story.img}</li>
                    <li>{story.created_at}</li>
                </ul>
            ))}
        </>
    )
}

export default Stories;
