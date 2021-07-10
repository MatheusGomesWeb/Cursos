import {
  completar_aula_creator,
  completar_curso_creator,
  resetar_curso_creator,
} from "./store/aulas/index.js";
import store from "./store/index.js";

store.subscribe(() => {
  console.log(store.getState());
});

// Completar aula pelo ID
store.dispatch(completar_aula_creator(2));

// Completar curso (Todas as aulas)
store.dispatch(completar_curso_creator());

// Resetar curso
store.dispatch(resetar_curso_creator());
