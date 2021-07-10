// Adiciona 1 dia de acesso
const INCREMENTAR_TEMPO = "aluno/INCREMENTAR_TEMPO";

// Reduz 1 dia de acesso
const REDUZIR_TEMPO = "aluno/REDUZIR_TEMPO";

// Modifica o e-mail do usuário
const MODIFICAR_EMAIL = "aluno/MODIFICAR_EMAIL";

// Actions creators
export const incrementar_tempo_creator = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo_creator = () => ({ type: REDUZIR_TEMPO });

// Modificar e-mail
export const modificar_email_creator = (email) => {
  return {
    type: MODIFICAR_EMAIL,
    payload: email,
  };
};

// Estado inicial
const aluno = {
  nome: "Matheus Gomes",
  email: "matheusgomes1203@hotmail.com",
  diasRestantes: 120,
};

// Função redutora
function alunoReducer(state = aluno, action) {
  switch (action.type) {
    // Incrementar +1
    case INCREMENTAR_TEMPO:
      let incrementarObj = Object.assign({}, state);
      incrementarObj.diasRestantes += 1;
      return incrementarObj;
    // Diminuir -1
    case REDUZIR_TEMPO:
      let reduzirObj = Object.assign({}, state);
      reduzirObj.diasRestantes -= 1;
      return reduzirObj;
    // Modificar e-mail
    case MODIFICAR_EMAIL:
      let modificarEmailObj = Object.assign({}, state);
      modificarEmailObj.email = action.payload;

      return modificarEmailObj;
    default:
      return state;
  }
}

export default alunoReducer;
