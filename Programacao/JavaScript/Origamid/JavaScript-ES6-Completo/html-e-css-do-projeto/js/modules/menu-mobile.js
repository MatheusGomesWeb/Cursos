import outsideClick from './outsideClick.js';

export default function menuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ['click', 'touchstart'];

  function openMenu() {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    console.log('teste');
    outsideClick(menuList, eventos, () => {
      console.log('teste2');
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
