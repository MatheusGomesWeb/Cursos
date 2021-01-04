// criando objeto element

const Dom = {
  seletor: 'li',

  element() {
    return document.querySelector(this.seletor);
  },
  ativar() {
    this.element().classList.add('ativar');
  }
}

// utilizando objeto Dom
Dom.seletor = 'ul';
Dom.ativar();
console.log(Dom.element());

// --------------------------------------------------------

// Converterndo para método Constructor

// constructor function com parametros
function DomConstructor(seletor) {

  // atributos
  this.seletor = seletor;

  // métodos
  this.element = () => { return document.querySelector(this.seletor) }
  this.ativar = () => { this.element().classList.add('ativar') }
}

// instanciando e passando os argumentos para o constructor
const el = new DomConstructor('li');
el.ativar();
console.log(el.element());

