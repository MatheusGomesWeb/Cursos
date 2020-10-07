import debounce from '../Helpers/debounce.js';

export default class AnimarAoScroll {
  constructor(element) {
    this.element = document.querySelectorAll(element);

    // bind
    this.getDistance = debounce(this.getDistance.bind(this), 20);
  }

  // Adiciona o dataset no elemento para animar
  animate(el) {
    if (this.distanceTop < this.scrollValue) {
      el.setAttribute('data-scroll', 'scroll');
    } else {
      el.setAttribute('data-scroll', '');
    }
  }

  // pega a distancia do elemento referente ao topo do site, e o valor do scroll e compara
  getDistance() {
    this.element.forEach((el) => {
      this.distanceTop = el.offsetTop;
      this.animate(el);
    });
    this.scrollValue = window.pageYOffset + (window.innerHeight - 50);
  }

  // adiciona o evento de scroll ao window
  addEvent() {
    window.addEventListener('scroll', this.getDistance);
  }

  // inicia a classe
  init() {
    if (this.element) {
      this.addEvent();
    }
  }
}
