// Exercicios

/*
  Retorne um número aleatório entre 1050 e 2000
*/

const aleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050);

console.log(aleatorio);

// --------------------------------------------------

/*
  Retorne o maior numero da lista abaixo
*/

const numeros = '4,5,20,8,9';

const n = numeros.split(',');

let maior = 0;

n.forEach((numero) => {

  if (numero > maior) {
    maior = parseInt(numero);
  }
})

// spread percorre os indices do array no argumento
const maiorSpread = Math.max(...n);

console.log(maior);
console.log(maiorSpread);

// ------------------------------------------------------

/*
  Crie uma função para limpar os preços e retornar os números com centavos arredondados
  depois retorne a soma total.
*/

const listaPrecos = ['R$ 59,99', ' R$ 10,2222', 'R$ 230  ', 'r$  200'];

// soma total
let total = 0;

// funcao que limpa os indices
function limparPrecos(preco) {

  // converte o indice limpa e substitui ( + ) converte para Number
  preco = +listaPrecos[preco].toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed(2);

  return preco;
}

// percorre os indices, limpa eles e soma o total
listaPrecos.forEach((item, index) => {

  total += limparPrecos(index);

  console.log(item);

});

// converte para moeda
console.log(total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
//console.log(parseFloat(total.toFixed(2)));

// chama a função e limpa o indice passado no argumento
limparPrecos(1);