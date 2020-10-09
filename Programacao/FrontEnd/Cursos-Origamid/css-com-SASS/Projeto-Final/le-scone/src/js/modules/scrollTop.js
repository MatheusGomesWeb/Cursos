import debounce from './Helpers/debounce.js';

export default function scrollTop(element) {
  const elemento = document.querySelector(element);

  // Mostra o botao se o scroll for maior que 900
  function showButton() {
    const tamanhoScroll = Math.floor(window.pageYOffset);

    if (tamanhoScroll > 900) {
      elemento.setAttribute('data-scrollTop', 'active');
    } else {
      elemento.removeAttribute('data-scrollTop');
    }
  }

  // se existir o botao, adiciona o evento de click
  if (elemento) {
    elemento.addEventListener('click', () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    // controlando scroll com debounce
    window.addEventListener('scroll', debounce(showButton, 100));
  }
}
