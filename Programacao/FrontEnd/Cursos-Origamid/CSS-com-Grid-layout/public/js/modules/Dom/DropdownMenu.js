import debounce from '../Helpers/debounce.js';

export default class DropdownMenu {
  constructor(dropdownElement, dropdownContent, dropdownLinks) {
    this.dropdownElement = document.querySelector(dropdownElement);
    this.dropdownContent = document.querySelector(dropdownContent);
    this.dropdownLinks = document.querySelectorAll(dropdownLinks);

    // bind
    this.initDropdown = this.initDropdown.bind(this);
    this.closeDropdown = debounce(this.closeDropdown.bind(this), 100);
  }

  // fecha o dropdown ao clicar fora
  closeDropdown(event) {
    if (!event.target.hasAttribute('data-dropdown')) {
      this.dropdownElement.removeAttribute('data-dropdown');
      this.dropdownContent.removeAttribute('data-dropdown');

      this.dropdownLinks.forEach((link) => link.removeAttribute('data-dropdown'));
    }
  }

  // Abre o dropdown ao passar o mouse em cima do link do menu
  initDropdown(event) {
    event.preventDefault();
    this.dropdownElement.setAttribute('data-dropdown', '');
    this.dropdownContent.setAttribute('data-dropdown', '');

    this.dropdownLinks.forEach((link) => link.setAttribute('data-dropdown', ''));
  }

  // adiciona os eventos
  addEvent() {
    this.dropdownElement.addEventListener('mouseover', this.initDropdown);
    document.documentElement.addEventListener('mouseover', this.closeDropdown);
  }

  // inicia a classe
  init() {
    if (this.dropdownElement) {
      this.addEvent();
    }
  }
}
