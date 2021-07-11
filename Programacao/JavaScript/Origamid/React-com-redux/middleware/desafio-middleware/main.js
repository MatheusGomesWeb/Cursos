import store from "./store/index.js";

import { tokenFetch } from "./store/token.js";
import { userFetch } from "./store/user.js";

const login = async (user) => {
  let state = store.getState();

  if (state.tokenReducer.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  state = store.getState();

  await store.dispatch(userFetch(state.tokenReducer.data));
};

console.log(store.getState());
login({ username: "dog", password: "dog" });
