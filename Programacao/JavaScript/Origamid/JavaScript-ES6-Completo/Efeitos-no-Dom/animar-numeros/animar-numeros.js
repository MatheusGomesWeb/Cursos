export default function animarNumeros() {

  const animaNumeros = document.querySelectorAll('[data-numero]');

  const delay = 25 * Math.random();
  //console.log(delay);
  animaNumeros.forEach((numero) => {

    const total = +numero.textContent;
    const incremento = Math.floor(total / 100);

    //console.log(incremento);
    let start = 0;
    const timer = setInterval(() => {
      start += incremento;

      numero.textContent = start;

      if (start >= total) {
        clearInterval(timer);
      }

    }, delay);

    //console.log(total);
  })

  // observer

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animarNumeros();
    }
  }

  const obserserTarget = document.querySelector('.numeros');

  const observer = new MutationObserver(handleMutation);

  observer.observe(obserserTarget, { attributes: true });
}