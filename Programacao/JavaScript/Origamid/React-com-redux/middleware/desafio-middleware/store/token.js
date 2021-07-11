// Constantes para organização
const FETCH_STARTED = "user/FETCH_STARTED";
const FETCH_SUCCESS = "user/FETCH_SUCCESS";
const FETCH_ERROR = "user/FETCH_ERROR";

// Action Creators
const fetch_started_creator = () => ({ type: FETCH_STARTED });
const fetch_success_creator = () => ({ type: FETCH_SUCCESS });
const fetch_error_creator = () => ({ type: FETCH_ERROR });
