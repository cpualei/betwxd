const VIEW_COMMENTS = 'comments/VIEW_COMMENTS';
const CREATE_COMMENT = 'comments/CREATE_COMMENT';
const REMOVE_COMMENT = 'comments/REMOVE_COMMENT';

const view = (comments) => ({
  type: VIEW_COMMENTS,
  comments,
});

const create = (comment) => ({
  type: CREATE_COMMENT,
  comment,
});

const remove = (commentId) => ({
    type: REMOVE_COMMENT,
    commentId
})

export const viewComments = () => async (dispatch) => {
  const res = await fetch('/api/comments/');

  if (res.ok) {
    const comments = await res.json();
    dispatch(view(comments));
  }
};

export const createComment = (payload) => async (dispatch) => {
  const res = await fetch('/api/comments/new-comment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const newComment = await res.json();

  if (newComment) {
    dispatch(create(newComment));
    return newComment;
  }
};

export const removeComment = (id) => async (dispatch) => {
    const res = await fetch(`/api/comments/${id}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        dispatch(remove(id));
        return res;
    }
};

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_COMMENTS:
      const normalizedComments = {};
      action.comments.comments.forEach((comment) => {
        normalizedComments[comment.id] = comment;
      });
      return { ...normalizedComments };
    case CREATE_COMMENT:
      const createState = { ...state, [action.newComment]: action.newComment }
      return createState;
    case REMOVE_COMMENT:
        const removeState = { ...state }
        return removeState;
    default:
      return state;
  }
};

export default commentsReducer;
