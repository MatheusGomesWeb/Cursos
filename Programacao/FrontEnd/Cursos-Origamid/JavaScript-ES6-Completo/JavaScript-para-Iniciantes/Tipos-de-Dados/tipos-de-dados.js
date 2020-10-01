// Declarando variaveis

// String
let nome = "Matheus";

// Number - Int
let idade = 26;

// Number - Float
let altura = 1.90;

// Number - Double
let peso = 75.650;

// Objeto
let Pessoa = {
  nome: "Matheus",
  sobrenome: "Gomes",
  idade: 26,
  altura: 1.90,
  peso: 75.650
}

// Array
let notas = [8, 9, 10, 5.50, 3.75];

// Template Literals
let descricao = `Olá me chamo ${Pessoa.nome}, tenho ${Pessoa.idade} anos e tenho ${Pessoa.altura} de altura`;

// imprimindo template literals
console.log(descricao);

// Verificando tipo de dado de uma variavel
console.log(typeof (Pessoa));

// Concatenando String
console.log(nome + " " + idade);

// Concatenando String e pegando dados do objeto
console.log(Pessoa.nome + " " + Pessoa.sobrenome);