// Completa a aula com base no ID passado
const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";

// Completa todas as aulas
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";

// Reseta todas as aulas completas
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

// Action Creators
export const completar_aula_creator = (aula_id) => {
  return {
    type: COMPLETAR_AULA,
    payload: aula_id,
  };
};

export const completar_curso_creator = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso_creator = () => ({ type: RESETAR_CURSO });

// Estado inicial - aulas
const aulas = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

// Função reducer
const aulasReducer = (state = aulas, action) => {
  switch (action.type) {
    // Completar aula pelo ID
    case COMPLETAR_AULA:
      let completar_aula = [];
      completar_aula.push(...state);
      completar_aula[action.payload - 1].completa = true;
      return completar_aula;
      break;
    // Completar o curso (todas as aulas)
    case COMPLETAR_CURSO:
      let completar_curso = [];

      state.forEach((value, key) => {
        completar_curso.push(value);

        completar_curso[key].completa = true;
      });

      return completar_curso;
      break;

    // Resetar todas as aulas
    case RESETAR_CURSO:
      let resetar_curso = [];

      state.forEach((value, key) => {
        resetar_curso.push(value);

        if (resetar_curso[key].completa) {
          resetar_curso[key].completa = false;
        }
      });

      return resetar_curso;

    // Default state
    default:
      return state;
  }
};

export default aulasReducer;
