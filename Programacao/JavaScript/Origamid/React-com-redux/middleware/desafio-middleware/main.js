import store from "./store/index.js";

import userReducer, { fetch_started_creator } from "./store/user.js";

// Middleware
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log(action);
      return next(action);
    };
  };
};

// Apply middleware
const middleware = Redux.applyMiddleware(logger);
const armazenamento = Redux.createStore(userReducer, middleware);
armazenamento.dispatch(fetch_started_creator());
