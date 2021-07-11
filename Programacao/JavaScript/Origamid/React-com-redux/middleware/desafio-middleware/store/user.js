// Constantes para organização
const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

// Action creators
export const fetch_started_creator = () => ({ type: FETCH_STARTED });
export const fetch_success_creator = () => ({ type: FETCH_SUCCESS });
export const fetch_error_creator = () => ({ type: FETCH_ERROR });

// Reducer
function userReducer(state = 0, action) {
  switch (action.type) {
    case FETCH_STARTED:
      return state;
    default:
      return state;
  }
}

export default userReducer;
