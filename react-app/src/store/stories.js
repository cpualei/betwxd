const VIEW_STORIES = "stories/VIEW_STORIES";
const CREATE_STORY = "stories/CREATE_STORY";
const UPDATE_STORY = "stories/UPDATE_STORY";
const REMOVE_STORY = "stories/REMOVE_STORY";

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

export const viewStories = () => async (dispatch) => {
  const res = await fetch("/api/stories/");

  if (res.ok) {
    const stories = await res.json();
    dispatch(view(stories));
  }
};

export const createStory = (payload) => async (dispatch) => {
  console.log("THIS IS THE THUNK");
  const res = await fetch("/api/stories/new-story", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // const newStory = await res.json();

  // if (newStory) {
  //     dispatch(create(newStory));
  //     return newStory;
  // }
  if (res.ok) {
    const data = await res.json();
    console.log("THIS IS THE DATA====", data);
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

export const updateStory = (id, payload) => async (dispatch) => {
  const res = await fetch(`/api/stories/edit-story/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  // if (res.ok) {
  //     const story = await res.json();
  //     dispatch(update(story));
  //     return story;
  // }

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
      return removeState;
    default:
      return state;
  }
};

export default storiesReducer;
