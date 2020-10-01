export default class AnimaNumeros {
  constructor(numeros) {
    this.numeros = document.querySelectorAll(numeros);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    const incremento = (total > 100 ? Math.floor(total / 100) : 1);

    const num = numero;

    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      num.innerText = start;
      if (start > total) {
        num.innerText = total;
        clearInterval(timer);
      }
    }, 25 * Math.random());
  }

  animaNumeros() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumero(numero));
  }

  init() {
    if (this.numeros.length) {
      this.animaNumeros();
    }
    return this;
  }
}
