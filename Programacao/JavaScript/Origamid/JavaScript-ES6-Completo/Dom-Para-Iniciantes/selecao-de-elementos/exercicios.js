// Exercicios

// Retorne no console todas as imagens do site

// Seleciona todas as imagens do site

// getElementsByTagName - Retorna uma HTMLCollection (Array-like) - Não possui método forEach - utilizar Array.from para criar um novo array com os dados
const imgTagName = document.getElementsByTagName('img');

// querySelectorAll - Retorna um NodeList (Array-like) - Possui o método forEach
const imgSelectorAll = document.querySelectorAll('img');

// mostra as imagens no console
console.log(imgSelectorAll);

// ----------------------------------------------------

// Retorne no console apenas as imagens que começaram com a palavra imagem

// seleciona as imagens utilizando o seletor do CSS
const palavraImagem = document.querySelectorAll('img[src*="imagem"]');

// mostra os imagens no console
console.log(palavraImagem);

// ----------------------------------------------------

// Seleciona todos os links internos onde o href começa com #

const linksInternos = document.querySelectorAll('a[href^="#"');

// imprime na tela
console.log(linksInternos);

// ----------------------------------------------------

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');

// mostra no console 
console.log(primeiroH2);

// ----------------------------------------------------

// Selecione o ultimo p do site 

const ultimoP = document.getElementsByTagName('p');
// mostra na tela
console.log(ultimoP[ultimoP.length - 1]);