// Tudo no JavaScript é objeto - Strings, Number, Boolean, Objetos e mais, possuem atributos e métodos. Por isso são objetos.

// Strings: Atributos e Métodos - Strings Herdam do Objeto String

// Todas as Strings são um array de char, e suas letras são acessadas como array [0,1,2,3,4] 

let nome = "Matheus";

// retorna o character de acordo com a posição informada.
console.log(nome.charAt(1));
// substritui uma palavra
console.log(nome.replace('th', 't'));
// converte para minuscula
console.log(nome.toLocaleLowerCase());
// converte para maiuscula
console.log(nome.toLocaleUpperCase());
// verificando o tamanho
console.log(nome.length);
// convertendo para numero para string
let numero = 2;
console.log(numero.toString(numero));