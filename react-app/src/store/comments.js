// Actions
const VIEW_COMMENTS = "comments/VIEW_COMMENTS";
const CREATE_COMMENT = "comments/CREATE_COMMENT";
const UPDATE_COMMENT = "comments/UPDATE_COMMENT";
const REMOVE_COMMENT = "comments/REMOVE_COMMENT";

// Action creators
const view = (comments) => ({
  type: VIEW_COMMENTS,
  comments,
});

const create = (comment) => ({
  type: CREATE_COMMENT,
  comment,
});

const update = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

const remove = (commentId) => ({
  type: REMOVE_COMMENT,
  commentId,
});

// Thunk action creators
export const viewComments = () => async (dispatch) => {
  const res = await fetch("/api/comments/");

  if (res.ok) {
    const comments = await res.json();
    dispatch(view(comments));
  }
};

export const createComment = (payload) => async (dispatch) => {
  const res = await fetch("/api/comments/new-comment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const data = await res.json();
    console.log("THIS IS THE DATA====", data)
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

export const updateComment = (payload, id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (res.ok) {
    const comment = await res.json();
    dispatch(update(comment));
    return comment;
  }
};

export const removeComment = (id) => async (dispatch) => {
  const res = await fetch(`/api/comments/${id}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(remove(id));
    return res;
  }
};

// Reducer
const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_COMMENTS:
      const normalizedComments = {};
      action.comments.comments.forEach((comment) => {
        normalizedComments[comment.id] = comment;
      });
      return { ...normalizedComments };
    case CREATE_COMMENT:
      const createState = {
        ...state,
        [action.comment.id]: action.comment
      };
      return createState;
    case UPDATE_COMMENT:
      const updateState = { ...state, [action.comment.id]: action.comment };
      return updateState;
    case REMOVE_COMMENT:
      const removeState = { ...state };
      delete removeState[action.commentId]
      return removeState;
    default:
      return state;
  }
};

export default commentsReducer;
