// Exercicios

// Tranforme o objeto abaixo em uma Constructor Function

const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

// Constructor function
function Pessoa(nome, idade) {

  // atributos/propriedades
  this.nome = nome;
  this.idade = idade;

  //métodos/comportamentos
  this.andar = () => { console.log(this.nome + ' andou') }
}

// -----------------------------------------

// Crie 3 pessoas, João - 20 anos, Maria - 25 anos, Bruno - 15 anos

// Instanciando novas pessoas
const joao = new Pessoa('João', 20);
const maria = new Pessoa('Maria', 25);
const bruno = new Pessoa('Bruno', 15);

// -------------------------------------------

/*
  Crie uma constructor function (Dom) para manipulação
 de listas de elementos Dom. Deve conter as seguintes propriedades e métodos:
    - elements: retorna NodeList com os elementos selecionados
    - addClass(classe): adiciona a classe a todos os elementos
    - removeClass(classe): remove a classe a todos os elementos
 */

// Constructior Fucntion (Dom)

function Dom(element) {

  const el = document.querySelectorAll(element);

  // métodos

  // retorna o elemento passado como argumento
  this.elements = () => {

    if (el.length > 0) {
      return el;
    } else {
      console.log('Elemento não existe')
      return;
    }

  }

  // adiciona a classe passado no argumento para todos os elementos
  this.addClass = (classe) => {

    // armazena os elementos
    const el = this.elements();

    // verifica se o elemento existe antes de percorre-los
    if (el) {

      // percorre os elementos
      el.forEach((el) => {
        el.classList.add(classe);
      })

      // mostra no console se funcionou
      console.log(this.elements());

    }

  }

  // remove a classe passado no argumento em todos os elementos
  this.removeClass = (classe) => {

    // armazena os elementos
    const el = this.elements();

    // verifica se o elemento existe antes de percorre-los
    if (el) {

      // percorre os elementos
      el.forEach((el) => {
        el.classList.remove(classe);
      })

      // mostra no console se funcionou
      console.log(this.elements());

    }

  }

}

const el = new Dom('li');