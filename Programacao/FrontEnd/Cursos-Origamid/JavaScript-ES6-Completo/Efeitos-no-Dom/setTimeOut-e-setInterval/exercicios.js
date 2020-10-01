// Exercicios

export default function exercicios() {

  // Mude a cor da tela para azul e depois para vermelho a cada 2s.

  function mudarCor() {
    document.body.classList.toggle('active');
    console.log('mudou');
  }

  setInterval(mudarCor, 2000);

  // Crie um cronometro utilizando o setInterval. Deve ser possível
  // iniciar, pausar e resetar (duplo clique no pausar).

  const cronometro = document.querySelector('.cronometro');
  const btnIniciar = cronometro.querySelector('[data-cronometro="iniciar"]');
  const btnPausar = cronometro.querySelector('[data-cronometro="pausar"]');
  const btnResetar = cronometro.querySelector('[data-cronometro="resetar"]');
  const counterElement = cronometro.querySelector('span');

  let counter = 0;
  let timer;

  const delay = 100;

  function iniciar() {
    timer = setInterval(() => {
      counterElement.innerText = counter++;
    }, delay);

    btnIniciar.setAttribute('disabled', '');
  }

  function pausar() {
    clearInterval(timer);
    btnIniciar.removeAttribute('disabled', '');

  }

  function resetar() {
    counter = 0;
    counterElement.innerText = counter;

  }

  btnIniciar.addEventListener('click', iniciar);
  btnPausar.addEventListener('dblclick', pausar);
  btnResetar.addEventListener('click', resetar);

}

