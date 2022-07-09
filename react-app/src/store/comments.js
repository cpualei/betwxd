const VIEW_COMMENTS = 'comments/VIEW_COMMENTS';

const view = (comments) => ({
    type: VIEW_COMMENTS,
    comments
});

export const viewComments = () => async (dispatch) => {
    console.log('IN THE THUNK')
    const res = await fetch('/api/comments/');

    if (res.ok) {
        const comments = await res.json();
        console.log('COMMENTS IN THUNK', comments)
        dispatch(view(comments));
    }
};

const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case VIEW_COMMENTS:
            const normalizedComments = {};
            action.comments.comments.forEach((comment) => {
                normalizedComments[comment.id] = comment;
            });
            // console.log(comments)
            return { ...normalizedComments };
        default:
            return state;
    }
}

export default commentsReducer;
