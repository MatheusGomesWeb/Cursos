import outsideClick from './Helpers/outsideClick.js';

export default function menuMobile(button, content) {
  const btn = document.querySelector(button);
  const contentMenu = document.querySelector(content);

  // Abre o menu ao clicar
  function openMenu(event) {
    event.preventDefault();

    // abre e fecha menu
    if (contentMenu.getAttribute('data-menu') === '') {
      contentMenu.setAttribute('data-menu', 'active');
      btn.setAttribute('data-mobileButton', 'active');
    } else {
      contentMenu.setAttribute('data-menu', '');
      btn.setAttribute('data-mobileButton', '');
    }

    // Adiciona dataset no botao e no menu
    contentMenu.setAttribute('data-outside', '');

    // Verifica se clicou fora e fecha o menu
    outsideClick(contentMenu, 'click', () => {
      contentMenu.setAttribute('data-menu', '');
      btn.setAttribute('data-mobileButton', '');
    });
  }

  // adiciona o evento de click ao botao
  function addEvent() {
    btn.addEventListener('click', openMenu);
  }

  // verifica se o botao e o menu existe e adiciona o evento
  if (button && content) {
    addEvent();
  }
}
