// Actions
const VIEW_CLAPS = "/claps/VIEW_CLAPS";
const CREATE_CLAP = "/claps/CREATE_CLAP";
const REMOVE_CLAP = "/claps/REMOVE_CLAP";

// Action creators
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

// Thunk action creators
export const viewClaps = () => async (dispatch) => {
  const res = await fetch("/api/claps/");
  const claps = await res.json();
  dispatch(view(claps));
  return claps;
};

export const createClap = (payload) => async (dispatch) => {
  const res = await fetch("/api/claps/", {
    method: "POST",
    body: JSON.stringify(payload),
  });

  const newClap = await res.json();
  dispatch(create(newClap));
};

export const removeClap = (clapId) => async (dispatch) => {
  const res = await fetch(`/api/claps/${clapId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(remove(clapId));
  }

  return res;
};

// Reducter
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
