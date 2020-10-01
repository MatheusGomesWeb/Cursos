/*
  - string.repeat(number) - Repete a string a quantidade de vezes especificada
  - string.replace(RegExp|substr, newstr|function):
      Troca parte da string por outra, podemos utilizar uma Regular Expression ou um valor direto.
      Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
  - string.split(str) - Converte uma string para um array passando o separador que separa a string.
  - string.toUpperCase() - Converte a string para maiuscula
  - string.toLowerCase() - Converte a string para minuscula
  - string.trim() - Limpa espaço do inicio e do fim da string
  - string.trimStart() - Limpa espaço do inicio da string
  - string.trimEnd() - Limpa espaço do fim da string
*/

const nome = "Matheus ";

// Repetindo string
console.log(nome.repeat(3));

const nomeCompleto = "Matheus Gomes Rodrigues de Jesus";

// Substituindo com replace() - Substitui apenas o primeiro resultado
console.log(nomeCompleto.replace(' ', ' * '));

// Substituindo tudo com RegExp
console.log(nomeCompleto.replace(/[ ]+/g, ' * '));

// limpar espaços com trim()
const fruta = "   a  Banana  hhh   ";

console.log(fruta.trim());
console.log(fruta.trimStart());
console.log(fruta.trimEnd());