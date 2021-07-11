import userReducer from "./user.js";
import tokenReducer from "./token.js";

// combineReducers
const reducers = Redux.combineReducers({ userReducer, tokenReducer });

// Criando o store global do redux
const store = Redux.createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
