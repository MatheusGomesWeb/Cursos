// Exercicios

/*
  Crie uma função construtora de Pessoas,
  Deve conter nome, sobrenome e idade,
  Crie um método no protótípo que retorne 
  o nome completo da pessoa.
*/

// Constructor function
function Pessoas(nome, sobrenome, idade) {

  // atributos
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Adicionando método via prototype (protótipo) // Arrow functions não funciona no prototype
Pessoas.prototype.getNomeCompleto = function () {
  console.log(this.nome, this.sobrenome);
};

// instanciando Pessoas
const pessoas = new Pessoas('Matheus', 'Gomes', 26);

// acessando método e mostrando no console
pessoas.getNomeCompleto();

// --------------------------------------------------------

/*
  Liste os métodos acessados por dados criados com NodeList,
  HTMLCollection, Document
*/

console.log(NodeList.prototype);
console.log(HTMLCollection.prototype);
console.log(Document.prototype); // Object.getOwnPropertsName - retorna o nome das propriedades e métodos como array - like mais legivel

// ----------------------------------------

/*
  Liste os construtores dos dados abaixo
*/

const li = document.querySelector('li');

const liConstructor = li.constructor.name; // HTMLLIElement - virou uma string então nao irá funcionar, funciona diretamente no navegador

console.log("HTMLLIElement", HTMLLIElement.prototype); // HTMLLIElement
console.log(li.click.constructor.prototype); // Function
console.log(li.innerText.constructor.prototype); // String
console.log(li.value.constructor.prototype); // Number
console.log(li.hidden.constructor.prototype); // Boolean
console.log(li.offsetLeft.constructor.prototype); // Number
console.log(li.click.prototype); // Function

// ---------------------------------

/*
  Qual o construtor do dado abaixo:
*/

console.log(li.hidden.constructor.name); // String