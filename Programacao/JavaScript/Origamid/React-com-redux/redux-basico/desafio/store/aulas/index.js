// Completa a aula com base no ID passado
const COMPLETAR_AULA = "aulas/COMPLETAR_AULA";

// Completa todas as aulas
const COMPLETAR_CURSO = "aulas/COMPLETAR_CURSO";

// Reseta todas as aulas completas
const RESETAR_CURSO = "aulas/RESETAR_CURSO";

// Action Creators
export const completar_aula_creator = () => ({ type: COMPLETAR_AULA });
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
const reducer = (state = aulas, action) => {};

export default reducer;
