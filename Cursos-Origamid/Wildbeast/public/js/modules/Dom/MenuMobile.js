import outsideClick from '../Helpers/outsideClick.js';

export default class MenuMobile {
  constructor(button, list, eventos) {
    this.button = document.querySelector(button);
    this.list = document.querySelector(list);

    if (eventos === undefined) {
      this.eventos = ['click', 'touchstart'];
    } else {
      this.eventos = eventos;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();

    this.list.classList.add('active');
    this.button.classList.add('active');
    outsideClick(this.list, this.eventos, () => {
      this.list.classList.remove('active');
      this.button.classList.remove('active');
    });
  }

  addEventsMenu() {
    this.eventos.forEach((evento) => this.button.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.button && this.list) {
      this.addEventsMenu();
    }
    return this;
  }
}
