/*
  Number:
    È a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

    // Métodos de Number
      Number.isNaN(NaN) - verifica se é um (Not a Number) (não é um numero) retorna true / false
      Number.isInterger() - retorna True / False se  for um numero
      
      Number.parseFloat(number) - converte uma string com numero para Float
      Number.parseInt(number) - Converte o parametro para Int

      Number.toFixed(number) - Arredonda o numero tanto para cima tanto para baixo de acordo com o total de casas decimais. é possivel passar no argumento a quantidade de casas decimais que irão ser retornadas (5.7777) - toFixed(2) = 5.77 - Retorna um String
      
      Number.toString(10) - Converte um numero para um String, e no argumento é o tipo de numero (decimal, hexa, octal etc...)

      Number.toLocaleString('pt-BR', {currency: 'BRL', style: 'currency'}); - Converte um numero para valor de Moeda (R$ 49.90)

*/

const numero = 7.77;
const int = 7;
console.log(Number.isNaN(NaN)); // true
console.log(Number.isInteger(numero)); // false
console.log(Number.isInteger(numero)); // false = float

console.log(Number.parseFloat(int)); // Float
console.log(Number.parseInt(numero)); // Int

console.log(numero.toFixed()); // 8
console.log(int.toFixed()); // 7

let valor = 59.90;

// converte valor para Moeda (R$ 59.90)
valor = valor.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' });

console.log(valor);