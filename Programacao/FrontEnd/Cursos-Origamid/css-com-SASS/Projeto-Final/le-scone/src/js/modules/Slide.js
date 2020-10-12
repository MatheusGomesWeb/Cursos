export default class Slide {
  constructor(wrapper) {
    this.wrapper = document.querySelector(wrapper);
    this.imagens = document.querySelectorAll('#slide img');
  }

  // mudar slide
  changeSlide(delay) {
    let count = 0;

    setInterval(() => {
      if (count === this.imagens.length) {
        count = 0;
      }

      if (count > 0 && count < this.imagens.length) {
        this.imagens[count - 1].style.display = 'none';
        this.imagens[count].style.display = 'flex';
        this.imagens[count].classList.add('fadeIn');
      } else {
        this.imagens[count].style.display = 'flex';
        this.imagens[count].classList.add('fadeIn');
      }

      count += 1;
    }, delay);
  }

  // Inicia o slide
  startSlide() {
    this.imagens[0].style.display = 'flex';

    this.changeSlide(4000);
  }

  // inicia a classe
  init() {
    if (this.wrapper && this.imagens.length) {
      this.startSlide();
    }
  }
}