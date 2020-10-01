// declarando variaveis
var nome = "Matheus";
var idade = 26;

// Nomes permitidos de variáveis

// $nome
// _nome
// letras
// case sensitive
// nomear com camelCase

// NÃO PERMITIDOS

// começar com numero 123nome
// Palavras reservadas ( Number, String, forEach, while etc...)

// imprime o resultado
console.log(nome + " " + idade);

// declarando variaveis em linha
var preco, total;

// atribuindo valores as variaveis
preco = 5;
total = preco * 5;

// imprime o resultado
console.log(total);

// valores precisam ser inicializados
var item1 = 1, item2 = 1;

console.log(item1, item2);

// contantes não podem ter os valores alterados
const senha = '123456';
// senha = '2555';

console.log(senha);

// let - o escopo é respeitado, e não pode redeclarar a variavel que tenha o mesmo nome.
let password = 1254;
// let password = '2525';

// ao contrario do var que permite

/* var password = '1254';
var password = '2525'; */

console.log(password);