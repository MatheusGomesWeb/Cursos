// Propriedades que retornam o texto e as tags de um elemento

//  outerHTML. innerHTML, innerText
const menu = document.querySelector('.menu');

// innerHTML = retorna o HTML interno do elemento selecionado (COM TAGS)
console.log(menu.innerHTML);

// outerHTML - retorna o ELEMENTO selecionado e o HTML interno dele (COM TAGS)
console.log(menu.outerHTML);

// retorna todos os textos internos do elemento selecionado (SEM TAGS)
console.log(menu.innerText);

// ----------------------------------------

// Transversing e Manipulação

/*
  Transversing: Como navegar pelo DOM, utilizando suas propriedades e métodos.
*/

// Retorna o elemento PAI do elemento selecionado
console.log(menu.parentElement);

// Retorna o elemento PAI do PAI do elemento selecionado
console.log(menu.parentElement.parentElement);

// Retorna o elemento que está acima (antes) do elemento selecionado
console.log(menu.previousElementSibling);

// retorna o elemento que está depois do elemento selecionado (depois)
console.log(menu.nextElementSibling);

// Retorna um HTMLCollection contendo os filhos do elemento selecionado
console.log(menu.children);

// Retorna o primeiro elemento do HTMLCollection
console.log(menu.children[0]);

// Retorna o ultimo elemento do HTMLCollection
console.log(menu.children[--menu.children.length]);

// Retorna todos LI'S
console.log(menu.querySelector('li'));

// Retorna a ultima LI
console.log(menu.querySelector('li:last-child'));

// Element vs Node

/*
  Element: representam um elemento HTML, ou seja, uma tag.
  Node: representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
*/

const lista = document.querySelector('.animais-lista');

// retorna o elemento selecionado
console.log(lista);

// retorna o elemento anterior (acima)
console.log(lista.previousElementSibling);

// retorna o primeiro filho Node (Comentários, espaços etc...)
console.log(lista.firstChild);

// retorna os filhos Node do elemento, comentários, espaços etc....
console.log(lista.childNodes);

