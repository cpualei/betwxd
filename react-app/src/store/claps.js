const VIEW_CLAPS = "/claps/VIEW_CLAPS";
const CREATE_CLAP = "/claps/CREATE_CLAP";
const REMOVE_CLAP = "/claps/REMOVE_CLAP";

const view = (claps) => {
  return {
    type: VIEW_CLAPS,
    claps,
  };
};

const create = (clap) => {
  return {
    type: CREATE_CLAP,
    clap,
  };
};

const remove = (clapId) => {
  return {
    type: REMOVE_CLAP,
    clapId,
  };
};

export const viewClaps = (storyId) => async (dispatch) => {
  const res = await fetch(`/api/claps/${storyId}`);
  const claps = await res.json();
  dispatch(view(claps));
  return claps;
};

export const createClap = (claps) => async (dispatch) => {
  const res = await fetch("/api/claps", {
    method: "POST",
    body: JSON.stringify(claps),
  });
  const newClap = await res.json();
  dispatch(create(newClap));
};

export const removeClap = (clapId) => async (dispatch) => {
  const res = await fetch(`/api/claps/${clapId}`, {
    method: "DELETE",
    body: JSON.stringify(clap),
  });
  const clap = await res.json();
  dispatch(remove(clap));
};

const clapsReducer = (state = {}, action) => {
  switch (action.type) {
    case VIEW_CLAPS:
      const normalizedClaps = {};
      action.claps.forEach((clap) => (normalizedClaps[clap.id] = clap));
      return { ...normalizedClaps };
    case CREATE_CLAP:
      const createState = { ...state, [action.clap.id]: action.clap };
      return createState;
    case REMOVE_CLAP:
      const removeState = { ...state };
      delete removeState[action.clapId];
      return removeState;
    default:
      return state;
  }
};

export default clapsReducer;
