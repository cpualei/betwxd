const VIEW_STORIES = 'stories/VIEW_STORIES';
const CREATE_STORY = 'stories/CREATE_STORY';

const view = (stories) => ({
    type: VIEW_STORIES,
    stories,
});

const create = (story) => ({
    type: CREATE_STORY,
    story
})

export const viewStories = () => async (dispatch) => {
    const res = await fetch('/api/stories');

    if (res.ok) {
        const stories = await res.json();
        dispatch(view(stories));
    }
};

export const createStory = (payload) => async (dispatch) => {
    const res = await fetch('/api/new-story', {
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

const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_STORIES:
            const normalizedStories = { };
            action.stories.stories.forEach((story) => {
                normalizedStories[story.id] = story;
            });
            return { ...normalizedStories };
        // case CREATE_STORY:
        //     const createState = { ...state, [action.newStory.id]: action.newStory };
        //     return createState;
        default:
            return state;
    }
};

export default storiesReducer;
