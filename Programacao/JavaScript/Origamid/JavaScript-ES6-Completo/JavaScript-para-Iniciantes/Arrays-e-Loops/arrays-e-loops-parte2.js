// Laços de Repetição: Cuidado com LOOPS INFINITOS, pode travar o PC.

// declarando array
const videoGames = ['Playstation', 'xbox360', 'nintendo'];

// percorrendo arrays utilizando o laço de repetição FOR
console.log("FOR Loop");
for (i = 0; i < videoGames.length; i++) {

  console.log(videoGames[i]);

  // utilizando o break
  if (videoGames[i] == 'xbox360') {
    break;
  }
}

console.log('-----------------');

// percorrendo arrays utilizando o laço de repetição while
console.log("While Loop");
let w = 0;
while (w < videoGames.length) {
  console.log(videoGames[w]);
  w++
}

console.log('--------------');

// percorrendo arrays utilizando o laço de repetição do...while
console.log("Do...While Loop");

let d = 0;

do {
  console.log(videoGames[d]);
  d++;
} while (d < videoGames.length);

console.log('--------------');

// percorrendo arrays utilizando o FOREACH

// declarando array de frutas
const frutas = ["Banana", "Uva", "Mamão", "Laranja"];

// percorrendo array com foreach
// argumentos 1: palavras do array, argumento 2: indice [0,1,2], argumento 3: declaração do array
frutas.forEach(function (valor, indice, frutas) {
  console.log(valor, indice, frutas);
});
