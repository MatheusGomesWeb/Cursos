/*
  Math
    É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

    Métodos

      Math.PI - Retorna o valor de PI
      Math.abs() - Transforma em valor absoluto (transforma negativo em positivo)
      Math.ceil() - Arredonda para cima
      Math.floor() - Arredonda para baixo
      Math.round() - Arredonda para o numero integral mais proximo. (4.8 = 5) (4.3 = 4)
      Math.min() - retorna o menor numero de uma lista de argumentos
      Math.max() - retorna o maior numero de uma lista de argumentos
      Math.random() - retorna um numero aleatório - Numero de 0 a 100 (random * 100)
*/

const numero = -7.7777;
const n = 100;
const random = Math.floor(Math.random() * n); // numero aleatório arredondado para baixo entre 0 a n

console.log(Math.PI); // 3.141592......

console.log(Math.abs(numero)); // positivo 7.7777
console.log(Math.ceil(numero)); // -7
console.log(Math.floor(numero)); // -8
console.log(Math.round(numero)); // -8
console.log(random); // random
console.log(Math.min(5, 6, 7, 8)); // 5
console.log(Math.max(5, 6, 7, 8)); // 8

/*
  Numero random entre (x e y)
    Math.floor(Math.random() * (x - y + 1)) + 32;
    Math.floor(Math.random() * (max - min + 1)) + min;
*/