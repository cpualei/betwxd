// Types
const VIEW_STORIES = "stories/VIEW_STORIES";
const CREATE_STORY = "stories/CREATE_STORY";
const UPDATE_STORY = "stories/UPDATE_STORY";
const REMOVE_STORY = "stories/REMOVE_STORY";

// Action creators
const view = (stories) => ({
  type: VIEW_STORIES,
  stories,
});

const create = (story) => ({
  type: CREATE_STORY,
  story,
});

const update = (story) => ({
  type: UPDATE_STORY,
  story,
});

const remove = (storyId) => ({
  type: REMOVE_STORY,
  storyId,
});

// Thunk action creators
export const viewStories = () => async (dispatch) => {
  const res = await fetch("/api/stories/");

  if (res.ok) {
    const stories = await res.json();
    dispatch(view(stories));
  }
};

export const createStory = (formData) => async (dispatch) => {
  const res = await fetch("/api/stories/new-story", {
    method: "POST",
    body: formData,
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(create(data));

    return null;

  } else if (res.status < 500) {
    const data = await res.json();

    if (data.errors) {
      return data.errors;
    }

  } else {
    return ["An error occurred. Please try again."];
  }
};

export const updateStory = (id, formData) => async (dispatch) => {
  const res = await fetch(`/api/stories/edit-story/${id}`, {
    method: "PUT",
    body: formData, id
  });

  if (res.ok) {
    const data = await res.json();
    dispatch(update(data));

    return;

  } else if (res.status < 500) {
    const data = await res.json();

    if (data.errors) {
      return data.errors;
    }

  } else {
    return ["An error occurred. Please try again."];
  }
};

export const removeStory = (id) => async (dispatch) => {
  const res = await fetch(`/api/stories/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(remove(id));
    return res;
  }
};

// Reducer
const storiesReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_STORIES:
      const normalizedStories = {};
      action.stories.stories.forEach((story) => {
        normalizedStories[story.id] = story;
      });
      return { ...normalizedStories };
    case CREATE_STORY:
      const createState = { ...state, [action.story.id]: action.story };
      return createState;
    case UPDATE_STORY:
      const updateState = { ...state, [action.story.id]: action.story };
      return updateState;
    case REMOVE_STORY:
      const removeState = { ...state };
      delete removeState[action.storyId]
      return removeState;
    default:
      return state;
  }
};

export default storiesReducer;
