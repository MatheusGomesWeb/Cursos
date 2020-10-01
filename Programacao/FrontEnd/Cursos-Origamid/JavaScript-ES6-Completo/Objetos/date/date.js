/*
  new Date()
    O construtor Date cria um objeto contendo valores como mês, dia, ano, horário e mais.
      A data é baseada no relógio interno do computador.

  * getTime()
      O método getTime() mostra o tempo total em milissegundos deste o dia 1 de janeiro de 1970.
*/

export default function horarioFuncionamento() {

  const funcionamento = document.querySelector('[data-semana]');
  const diasFuncionamento = funcionamento.dataset.semana.split(',').map(Number);
  const horarioFuncionamento = funcionamento.dataset.horario.split(',').map(Number);

  const dateNow = new Date();

  const day = dateNow.getDay(); // 5 - sexta
  const hour = dateNow.getHours(); // 14 horas

  const isOpen = diasFuncionamento.indexOf(day) !== -1;
  const isOpenHour = (hour >= horarioFuncionamento[0] && hour < horarioFuncionamento[1]);

  if (isOpen && isOpenHour) {
    funcionamento.classList.add('aberto');
  }

  /* console.log(funcionamento);
   //console.log(diasFuncionamento);
   console.log(horarioFuncionamento[1]);
   /*console.log(day);
   console.log(hour); 
   console.log(isOpenHour);
   console.log(hour);
   console.log(isOpen);*/

}

/*const agora = new Date();
console.log(agora);
console.log(agora.getDate());
console.log(agora.getDay());
console.log(agora.getMonth());
console.log(agora.getFullYear());
console.log(agora.getHours());
console.log(agora.getMinutes());
console.log(agora.getTime());
console.log(agora.getUTCHours());*/

/* const agora = new Date();
  function converterDias(tempo) {
    return tempo / (24 * 60 * 60 * 1000);
  }

  const futuro = converterDias(agora.getTime());

  console.log(agora);

  console.log(parseInt(futuro));
  */