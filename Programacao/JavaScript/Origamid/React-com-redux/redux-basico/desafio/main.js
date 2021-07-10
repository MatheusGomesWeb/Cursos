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

// Render data
const render = (estado) => {
  const table = document.querySelector(".table");
  const tableContent = table.querySelector(".table__content");

  if (table && tableContent) {
    const reducers = { ...estado };

    // Percorre o array e retorna apenas as aulas completas (true)
    const aulas_completas = reducers.aulasReducer.filter(
      (aulas) => aulas.completa
    );

    tableContent.innerHTML = `
    <tr>
      <td>${reducers.alunoReducer.nome}</td>
      <td>${reducers.alunoReducer.email}</td>
      <td>${reducers.alunoReducer.diasRestantes}</td>
      <td>${aulas_completas.length}</td>
    </tr>
  `;
  }
};

store.subscribe(() => render(store.getState()));

// ============ ALUNO ==================

//Incrementar tempo
store.dispatch(incrementar_tempo_creator());
store.dispatch(reduzir_tempo_creator());
store.dispatch(modificar_email_creator());

// ============ AULAS ==================
// Completar aula pelo ID
store.dispatch(completar_aula_creator(2));

// Completar curso (Todas as aulas)
// store.dispatch(completar_curso_creator());

// Resetar curso
// store.dispatch(resetar_curso_creator());
