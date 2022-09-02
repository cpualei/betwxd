const VIEW_USERS = "/users/VIEW_USERS";
// const CREATE_CLAP = "/claps/CREATE_CLAP";
// const REMOVE_CLAP = "/claps/REMOVE_CLAP";

const view = (users) => {
  return {
    type: VIEW_USERS,
    users,
  };
};

// const create = (clap) => {
//   return {
//     type: CREATE_CLAP,
//     clap,
//   };
// };

// const remove = (clapId) => {
//   return {
//     type: REMOVE_CLAP,
//     clapId,
//   };
// };

export const viewUsers = () => async (dispatch) => {
  const res = await fetch("/api/users/");
  const users = await res.json();
  dispatch(view(users));
  console.log("These are the users in Thunk", users)
  return users;
};

// export const createClap = (payload) => async (dispatch) => {
//   const res = await fetch("/api/claps/", {
//     method: "POST",
//     body: JSON.stringify(payload),
//   });
//   console.log("THIS IS THE POST RES === >", res)
//   const newClap = await res.json();
//   console.log("THIS IS THE POST NEW CLAP === >", newClap)
//   dispatch(create(newClap));
// };

// export const removeClap = (clapId) => async (dispatch) => {
//   const res = await fetch(`/api/claps/${clapId}`, {
//     method: "DELETE",
//     // body: JSON.stringify(clap),
//   });
//   // const clap = await res.json();
//   if (res.ok) {
//     dispatch(remove(clapId));
//   }

//   return res;
// };

const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_USERS:
      const normalizedUsers = {};
      action.users.forEach((user) => (normalizedUsers[user.id] = user));
      return { ...normalizedUsers };
    //   case CREATE_CLAP:
    //     const createState = { ...state, [action.clap.id]: action.clap };
    //     console.log("IN THE REDUCER", action)
    //   return createState;
    // case REMOVE_CLAP:
    //   const removeState = { ...state };
    //   delete removeState[action.clapId];
    //   return removeState;
    default:
      return state;
  }
};

export default usersReducer;
