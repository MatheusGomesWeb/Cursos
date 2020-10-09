import debounce from './Helpers/debounce.js';

export default function animarAoScroll(sections) {
  const section = document.querySelectorAll(sections);

  // Calcula a distancia do elemento referente ao topo e revela / esconde
  function calculaDistancia(secao) {
    const distTop = Math.floor(secao.getBoundingClientRect().top + (window.innerHeight / 2) * 0.3);

    if (distTop < window.innerHeight) {
      secao.setAttribute('data-scroll', 'active');
    } else {
      secao.setAttribute('data-scroll', '');
    }
  }

  // se existir as seções executa o callback com debounce
  if (section.length) {
    section.forEach((secao) => {
      window.addEventListener('scroll', debounce(() => {
        calculaDistancia(secao);
      }, 50));
    });
  }
}
