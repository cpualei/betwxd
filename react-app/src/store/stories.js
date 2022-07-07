const VIEW_STORIES = 'stories/VIEW_STORIES';

const view = (stories) => ({
    type: VIEW_STORIES,
    stories,
});

export const viewStories = () => async (dispatch) => {
    const res = await fetch("/api/stories");

    if (res.ok) {
        const stories = await res.json();
        dispatch(view(stories));
    }
};

const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_STORIES:
            const normalizedStories = { };
            action.stories.stories.forEach((story) => {
                normalizedStories[story.id] = story;
            });
            return { ...normalizedStories };
        default:
            return state;
    }
};

export default storiesReducer;
