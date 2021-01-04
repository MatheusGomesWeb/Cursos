// forEach

/*
  Parâmetros do forEach

  O Primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Essa função pode receber três parâmetros: item - valor para mostrar na tela, index - posição do array, array - returna a declaração do array
*/

// percorrendo todas as imagens
const imagens = document.querySelectorAll('img');

// percorre as imagens
imagens.forEach(function (item, index, array) {

  // imprime o valor, index e array
  //  console.log(item, index, array);
});

// -------------------------------------------------

// Convertendo array-like para arrays

// recebendo um HTMLCollection
const titulo = document.getElementsByClassName('titulo');

// transfornando em array
const tituloArray = Array.from(titulo);

// percorrendo o array e mostrando
tituloArray.forEach(function (item) {
  // console.log(item);
});

// ---------------------------------------

/* 
  Arrow Functions
    Sintax curta em relação a FUNCTION EXPRESSION. Basta remover a palavra chave function e adicionar a FAT ARROW => após os argumentos.
*/

// exemplo de arrow functions
const imgArrow = imagens;

// quando mostrar apenas um resultado pode colcoar na mesma linha
imgArrow.forEach((item) => console.log(item));