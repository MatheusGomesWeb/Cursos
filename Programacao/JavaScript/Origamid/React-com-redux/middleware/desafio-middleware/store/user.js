// Constantes para organização
const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

// Action creators
export const fetch_started_creator = () => ({ type: FETCH_STARTED });
export const fetch_success_creator = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});
export const fetch_error_creator = (payload) => ({
  type: FETCH_ERROR,
  payload,
});

// Async Actions
export const userFetch = (token) => async (dispatch) => {
  try {
    dispatch(fetch_started_creator());
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + token,
      },
    });
    const data = await response.json();
    dispatch(fetch_success_creator(data));
  } catch (error) {
    dispatch(fetch_error_creator(error.message));
  }
};

// Initial State
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// Reducer
function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { data: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;
