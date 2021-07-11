const { applyMiddleware, compose, combineReducers, createStore } = Redux;

import thunk from "./middleware/thunk.js";
import localStorage from "./middleware/localStorage.js";

import userReducer from "./user.js";
import tokenReducer from "./token.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Apply middleware com (composeEnhancers)
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));

// combineReducers
const reducers = combineReducers({ tokenReducer, userReducer });

// Criando o store global do redux
const store = createStore(reducers, enhancer);

export default store;
