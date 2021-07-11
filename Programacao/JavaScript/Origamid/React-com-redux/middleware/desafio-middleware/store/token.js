import getLocalStorage from "./helpers/getLocalStorage.js";

// Constantes para organização
const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

// Action Creators
const fetch_started_creator = () => ({ type: FETCH_STARTED });
const fetch_success_creator = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload,
    localStorage: "token",
  };
};
const fetch_error_creator = (payload) => {
  return { type: FETCH_ERROR, payload };
};

// Fetch
export const tokenFetch = (user) => async (dispatch) => {
  try {
    dispatch(fetch_started_creator());

    const resp = await fetch(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );

    const { token } = await resp.json();
    dispatch(fetch_success_creator(token));
  } catch (error) {
    dispatch(fetch_error_creator(error.message));
  }
};

// Initial State
const initialState = {
  loading: false,
  data: getLocalStorage("token", null),
  error: null,
};

// Reducers
function tokenReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default tokenReducer;
