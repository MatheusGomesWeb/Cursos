// Constantes para organização
const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

// Action creators
const fetch_started_creator = () => ({ type: FETCH_STARTED });
const fetch_success_creator = () => ({ type: FETCH_SUCCESS });
const fetch_error_creator = () => ({ type: FETCH_ERROR });

// Reducer
function userReducer(state = 0, action) {
  console.log(action);
  return state;
}

export default userReducer;
