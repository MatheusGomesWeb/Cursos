// Protótype (Prototipo)

/*
  Prototype:
    A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

    Prototype retorna um objeto da assinatura de uma função
    é utilizado para adicionar metodos e atributos a classes, objetos
*/

// função construtora com os parametros nome, idade
function Pessoa(nome, idade) {

  // atributos
  this.nome = nome;
  this.idade = idade;
}

// cria um método ao objeto Pessoa
Pessoa.prototype.andar = ((nome) => console.log(nome + ' andou'));

// instancia de uma nova pessoa
const pessoa = new Pessoa('Matheus', 26);

// mostra instancia de pessoa
console.log(pessoa);
console.log(pessoa.andar('Matheus'));

// mostra prototype da instancia
console.log(pessoa.prototype);

// mostra a assinatira na função construtora pessoa
console.log(Pessoa);

// mostra prototype (função como objeto) de pessoa
console.log(Pessoa.prototype);

/*
  proto:
    O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__.
    É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.
*/

/*
  Herança de Protótipo:
    O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável
    por criar este objeto. O objeto abaixo possui acesso aos métodos que nunca definimos, mas são herdados do protótipo de Object.
*/