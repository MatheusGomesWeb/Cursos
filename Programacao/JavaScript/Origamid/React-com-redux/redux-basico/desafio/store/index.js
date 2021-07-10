import aulasReducer from "./aulas/index.js";
import alunoReducer from "./aluno/index.js";

const reducer = Redux.combineReducers({ aulasReducer, alunoReducer });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
