export default function Funcionamento(aberto) {
  const element = document.querySelector(aberto);

  // verifica o horario de funcionamento e muda a cor da bolinha
  function horarioFuncionamento() {
    const data = new Date();
    const diaFunciomamento = (data.getDay() >= 1 && data.getDay() <= 5);
    const horaFuncionamento = (data.getUTCHours() - 3 < 18 && data.getUTCHours() - 3 >= 7);
    const minutosFuncionamento = (data.getUTCMinutes() < 60);

    // se todas forem true, está aberto
    if (diaFunciomamento && horaFuncionamento && minutosFuncionamento) {
      element.classList.replace('fechado', 'aberto');
    }
  }
  // se o elemento existir executa a função
  if (element) {
    horarioFuncionamento();
  }
}
