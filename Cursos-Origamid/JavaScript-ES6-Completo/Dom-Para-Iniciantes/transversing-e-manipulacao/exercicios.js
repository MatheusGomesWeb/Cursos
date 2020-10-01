// Exercicios

// Duplique o menu e adicione ele em copy

// clocando o menu original 
const menuClone = document.querySelector('.menu').cloneNode(true);

// adicionando menuClone ao copy
const copy = document.querySelector('.copy');
copy.appendChild(menuClone);

// --------------------------------------------------

// Selecione o primeiro DT da dl de Faq

const primeiroDt = document.querySelector('.faq-lista dt');

// -----------------------------------

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;
// --------------------------------------

// Substitua o conteudo html de .faq pelo de .animais
const faq = document.querySelector('.faq');
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;