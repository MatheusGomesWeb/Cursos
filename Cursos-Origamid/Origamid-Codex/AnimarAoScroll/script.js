function animarAoScroll(sections) {

  const secoes = document.querySelectorAll(sections);

  secoes[0].classList.add('ativo');

  function debounce(callback, delay) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);

      timer = setTimeout(() => {
        callback(...args);
        timer = null;
      }, delay);
    };
  }

  function distanciaTopo() {
    secoes.forEach((secao) => {

      const elementoDistanciaTopo = secao.offsetTop;
      const tamanhoJanela = (window.innerHeight / 2) * 1.7;
      const scroll = Math.round(pageYOffset + tamanhoJanela);

      if (elementoDistanciaTopo <= scroll) {
        secao.classList.add('ativo');
        console.log('test');
      } else {
        secao.classList.remove('ativo');
      }

    });
  }

  const debounced = debounce(distanciaTopo, 50);

  function addEvent() {
    window.addEventListener('scroll', debounced);
  }

  return addEvent();
}

animarAoScroll('section');