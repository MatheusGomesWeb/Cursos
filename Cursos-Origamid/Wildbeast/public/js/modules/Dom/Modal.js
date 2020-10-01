export default class Modal {
  constructor(clickElement, btnFechar, container) {
    // selecionando os elementos no dom
    this.clickElement = document.querySelectorAll(clickElement);
    this.btnFechar = document.querySelector(btnFechar);
    this.container = document.querySelector(container);
    this.activeClass = 'active';

    // Faz os métodos da classe invocar a classe globalmente e não o seu escopo interno
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // adiciona / remove a classe toggle
  toggleModal() {
    this.container.classList.toggle(this.activeClass);
  }

  // evento de click na imagem e add no modal
  eventToggleModal(event) {
    event.preventDefault();

    this.toggleModal();

    // desestruturação do objeto event.target
    const { outerHTML, alt } = event.target;

    // adiciona a imagem clicada dentro no container do modal
    this.container.querySelector('.container').querySelector('.imagem').innerHTML = outerHTML;
    this.container.querySelector('.container').querySelector('figcaption').innerHTML = alt;
  }

  // se o click for fora do container do modal ele fecha
  cliqueForaModal(event) {
    if (event.target === this.container) {
      this.toggleModal();
    }
  }

  // adiciona os eventos nos botoes e imagens
  addModalEvents() {
    this.clickElement.forEach((element) => element.addEventListener('click', this.eventToggleModal));

    this.btnFechar.addEventListener('click', this.eventToggleModal);
    this.container.addEventListener('click', this.cliqueForaModal);
  }

  // inicia a classe
  init() {
    if (this.clickElement.length && this.btnFechar && this.container) {
      this.addModalEvents();
    }
    return this;
  }
}
