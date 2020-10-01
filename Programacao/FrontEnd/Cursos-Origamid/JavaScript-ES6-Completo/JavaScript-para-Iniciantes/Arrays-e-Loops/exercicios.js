// Exercicios

// Crie um array com os anos que o brasil ganhou a copa: 1959, 1962, 1970, 1994 e 2002;

// declarando array
const anosBrasilCampeaoCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com o array utilizando um loop, para mostrar no console a seguinte mensagem: 'O brasil ganhou a copa de 'ANO'';

// percorrendo array
anosBrasilCampeaoCopa.forEach(function (item) {
  console.log(`O brasil ganhou a copa de ${item}`);
});

// ----------------------------------------------

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

// declarando array
const frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

// percorrendo array
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);

  if (frutas[i] === 'Pera') {
    break;
  }
}

// ------------------------

// Coloque a ultima fruta do array acima em uma variável sem remover a mesma do array.
let fruta = frutas[frutas.length - 1];
console.log(fruta);