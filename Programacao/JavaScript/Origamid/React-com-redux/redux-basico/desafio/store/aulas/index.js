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
      aulas[action.payload - 1].completa = true;
      return state;
      break;
    // Completar o curso (todas as aulas)
    case COMPLETAR_CURSO:
      aulas.forEach((aula) => {
        aula.completa = true;
      });
      return state;
      break;

    // Resetar todas as aulas
    case RESETAR_CURSO:
      aulas.forEach((aula) => {
        if (aula.completa) {
          aula.completa = false;
        }
      });
      return state;
    // Default state
    default:
      return state;
  }
};

export default aulasReducer;
