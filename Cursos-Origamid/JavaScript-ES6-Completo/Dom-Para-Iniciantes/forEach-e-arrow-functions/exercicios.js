// Mostre no console cada parágrafo do site

// selecionando todas as tags P do site, retorna um HTMLCollection (Array-like)
const paragrafo = document.getElementsByTagName('p');

// cria um array com os dados do array-like
const paragrafoArray = Array.from(paragrafo);

// percorre e mostra no console os paragrafos utilizando arraw functions
paragrafoArray.forEach((item) => console.log(item));

// ------------------------------------------------------

// Mostre os textos dos parágrafos no console.

// mostra no console o texto dos paragrafos
paragrafoArray.forEach((item) => console.log(item.innerText));

// --------------------------------------------------------

// Como corrigir os erros abaixo

const imgs = document.querySelectorAll('img');

// quando tiver apenas um parametro de retorno não precisa de (), quando tiver mais que um precisa, porque sem eles, só é visivel o ultimo parametro passado.
imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
// precisa informar () para o JavaScript saber que é uma função de callback();
imgs.forEach(() => {
  console.log(i++);
});

// precisa mostrar na tela, por padrão ele retorna um return.
imgs.forEach(() => console.log(i++));