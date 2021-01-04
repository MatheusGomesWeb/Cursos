// Arrays: È um grupo de valores, geralmente do mesmo tipo, Servem para guardarmos diferentes valores em uma unica variavel.

// declarando array
const videoGames = ['Playstation', 'xbox', 'nintendo'];

// acessando dados do array
console.log(videoGames[0]);
console.log(videoGames[2]);

// Métodos e propriedades de arrays

// adicionando novo valor ao final do array
videoGames.push('MegaDrive');
// verificando valor adicionado
console.log(videoGames[3]);

// removendo valor do final do array - obs. ao chamar o metodo pop ele mostra o nome do elemento que foi removido
videoGames.pop();
// removendo valor do array pelo nome
videoGames.pop('xbox');
// verificando valor removido
console.log(videoGames[3]);
// verificando quantidade de elementos no array
console.log(videoGames.length);


// ----------------------------------

// Laços de Repetioção

// Laço FOR
for (let i = 0; i < 2; i++) {
  console.log(i);
}

// Laço While
let w = 0;
while (w < 2) {
  console.log(w);
  w++;
}

// Laço do...while
let d = 0;
do {
  console.log(d);
  d++;
} while (d < 2);