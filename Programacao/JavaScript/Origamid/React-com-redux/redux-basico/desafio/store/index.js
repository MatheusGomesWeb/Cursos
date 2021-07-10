import aulasReducer from "./aulas/index.js";

// const reducer = Redux.combineReducers({ aulasReducer });

const store = Redux.createStore(
  aulasReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
