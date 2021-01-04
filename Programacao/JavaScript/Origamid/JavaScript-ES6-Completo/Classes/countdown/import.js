import Countdown from './countdown.js';

const tempoParaNatal = new Countdown('24 December 2020 23:59:59 GMT-0300');
setInterval(() => {

  const element = `
    <span>Dias: ${tempoParaNatal.total.days}</span>
    <span>Horas: ${tempoParaNatal.total.hours}</span>
    <span>Minutos: ${tempoParaNatal.total.minuts}</span>
    <span>Segundos: ${tempoParaNatal.total.secounds}</span>
  `;
  document.body.innerHTML = element;
}, 1000);