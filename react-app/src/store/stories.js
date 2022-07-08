const VIEW_STORIES = 'stories/VIEW_STORIES';
const CREATE_STORY = 'stories/CREATE_STORY';
const REMOVE_STORY = 'stories/REMOVE_STORY';

const view = (stories) => ({
    type: VIEW_STORIES,
    stories
});

const create = (story) => ({
    type: CREATE_STORY,
    story
});

const remove = (storyId) => ({
    type: REMOVE_STORY,
    storyId
})

export const viewStories = () => async (dispatch) => {
    const res = await fetch('/api/stories/');

    if (res.ok) {
        const stories = await res.json();
        dispatch(view(stories));
    }
};

export const viewStory = (id) => async (dispatch) => {
    const res = await fetch(`/api/stories/${id}`);
    console.log("THIS HITS THE THUNK")

    if (res.ok) {
        const story = await res.json();
        dispatch(view(story));
    }
}

export const createStory = (payload) => async (dispatch) => {
    const res = await fetch('/api/stories/new-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const newStory = await res.json();

    if (newStory) {
        dispatch(create(newStory));
    }

    return newStory;
}

export const removeStory = (id) => async (dispatch) => {
    const res = await fetch(`/api/stories/${id}`, {
        method: 'DELETE',
    })

    if (res.ok) {
        dispatch(remove(id));
    }

    return res;
};

const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_STORIES:
            const normalizedStories = { ...state };
            action.stories.stories.forEach((story) => {
                normalizedStories[story.id] = story;
            });
            return { ...normalizedStories };
        case CREATE_STORY:
            const createState = { ...state, [action.newStory.id]: action.newStory };
            return createState;
        case REMOVE_STORY:
            const removeState = { ...state }
            return removeState;
        default:
            return state;
    }
};

export default storiesReducer;
