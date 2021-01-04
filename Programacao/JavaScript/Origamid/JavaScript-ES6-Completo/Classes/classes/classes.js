/*
  Classes 
    O ES6 trouxe uma nova sintaxe para implementarmos funções construtoras.
      Agora podemos utilizar a palavra chahve class.
        È considerada 'synctactical sugar', pois por baixo dos panos 
          continua utilizando o sistema de protótipos de uma função construtora para criar a classe.

  Constructor
    O método constructor(args) {} é um método especial de uma classe.
      Nele você irá definir todas as propriedades do objeto que será criado.
        Os argumentos passados em new, vão direto para o constructor.

  this  
    Assim como em uma função construtora, this faz referência ao objeto criado com new. 
      Você pode acessar as propriedades e métodos da classe utilizando this.

  static vs Pŕototype
    Por padrão todos os métodos criados dentro da classe irão para o protótipo da mesma.
      Porém podemos criar métodos diretamente na classe utilizando a palavra chave static.
        Assim como [].map() é um método de um Array e Array.from() é um método do construtor Array.

        * Você pode utilizar o método static para retornar a própia classe com propriedades já pré definidas.
*/

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }

  element() {
    const element = document.createElement('button');
    element.innerText = this.text;
    element.style.backgroundColor = this.background;
    return element;
  }

  appendTo(element) {
    document.querySelector(element).appendChild(this.element());
  }

  static blueButton(text) {
    this.text = text;
    this.background = 'blue';
    return new Button(this.text, this.background);
  }
  static mensagem() {
    console.log("Método static");
  }
}

const botao = new Button("Comprar agora", "#fb5");

botao.appendTo('body');

// exclusivo da classe Button, os filhos não tem acesso
Button.mensagem();

const blueButton = Button.blueButton('static');
blueButton.appendTo('body');