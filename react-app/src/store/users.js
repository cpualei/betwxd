// Types
const VIEW_USERS = "/users/VIEW_USERS";

// Action creators
const view = (users) => {
  return {
    type: VIEW_USERS,
    users,
  };
};

// Thunk action creators
export const viewUsers = () => async (dispatch) => {
  const res = await fetch("/api/users/");
  const users = await res.json();
  dispatch(view(users));
  console.log("These are the users in Thunk", users)
  return users;
};

// Reducer
const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_USERS:
      const normalizedUsers = {};
      action.users.forEach((user) => (normalizedUsers[user.id] = user));
      return { ...normalizedUsers };
    default:
      return state;
  }
};

export default usersReducer;
