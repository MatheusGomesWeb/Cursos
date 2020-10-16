export default class Slide {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
    this.imagens = document.querySelectorAll('#slide img');
  }

  // transicao
  transitionSlide() {
    this.delay = 5000;
    this.index = 0;

    setInterval(() => {
      this.imagens.forEach(img => img.classList.remove('active'));

      if (this.index <= this.imagens.length - 1) {
        this.imagens[this.index].classList.add('active');
      } else {
        this.imagens[0].classList.add('active');
        this.index = 0;
      }
      this.index += 1;
    }, this.delay);
  }

  // Inicia o slide
  startSlide() {
    this.imagens[0].classList.add('active');
    this.transitionSlide();
  }

  // inicia a classe
  init() {
    if (this.wrapper && this.imagens.length) {
      this.startSlide();
    }
  }
}
