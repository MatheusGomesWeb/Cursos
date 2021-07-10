import store from "./store/index.js";

// Alunos
import {
  incrementar_tempo_creator,
  reduzir_tempo_creator,
  modificar_email_creator,
} from "./store/aluno/index.js";

// Aulas
import {
  completar_aula_creator,
  completar_curso_creator,
  resetar_curso_creator,
} from "./store/aulas/index.js";

store.subscribe(() => {
  console.log(store.getState());
});

// ============ ALUNO ==================

//Incrementar tempo
store.dispatch(incrementar_tempo_creator());
store.dispatch(reduzir_tempo_creator());
store.dispatch(modificar_email_creator("topete.matheus@gmail.com"));

// ============ AULAS ==================
// Completar aula pelo ID
// store.dispatch(completar_aula_creator(2));

// Completar curso (Todas as aulas)
// store.dispatch(completar_curso_creator());

// Resetar curso
// store.dispatch(resetar_curso_creator());
