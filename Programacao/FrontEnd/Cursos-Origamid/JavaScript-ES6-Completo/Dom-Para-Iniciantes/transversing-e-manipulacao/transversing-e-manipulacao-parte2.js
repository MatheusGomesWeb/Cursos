// Manipulando Elementos: é possivel mover elementos no DOM com métodos de Node.

/*
appendChild(element): move o elemento para o final
insertBefore(element, dest): insere o elemento depois do elemento dest
removeChild(element): remove o elemento
replaceChild(element, newElement)): substitui um elemento pelo outro
*/

const lista = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const img = document.querySelector('img');

//console.log(contato.outerHTML);
//console.log(titulo.outerHTML);

// move o Titulo para o final de Lista (dentro)
lista.appendChild(titulo);

// remove o Titulo dentro de Lista
//lista.removeChild(titulo);

// substitui um filho por outro
//lista.replaceChild(img, titulo);

// insere um novo filho antes de titlo
lista.insertBefore(img, titulo);

// imprime na tela o HTML do elemento selecionado e de seus filhos
console.log(lista.outerHTML);

// ------------------------------------------------------

/*
  Novos Elementos: Podemos criar novos elementos com o método createElement(element)
*/

const animais = document.querySelector('.animais');

// criando um novo elemento h1
const el = document.createElement('h1');

// adicionando texto ao elemento criado
el.innerText = "Novo elemento criado";

// adicionando uma classe ao novo elemento criado
el.classList.add('novoElemento');

// adicionando o novo elemento criado ao final de animais
animais.appendChild(el);

// mostrando no html no terminal para verificar se funcionou
console.log(animais.outerHTML);

// ------------------------------------------------

/*
  Clonar Elementos: Todo elemento selecionado é unico.
  Para criarmos um novo elemento baseado no anterior,
  é necessario utilizar o método cloneNode(true) - true, significar que vai clocar também os elementos Filhos
*/

const h1 = document.querySelector('h1');
const menu = document.querySelector('.menu');

// insere o menu como filho do h1, O MENU SE DESLOCA DA SUA POSIÇÃO PARA OUTRA
//h1.appendChild(menu);

// clonando o menu
const menuClone = menu.cloneNode(true);

// adiciona classe azul ao menu clonado
menuClone.classList.add('azul');

// insere a copia de menu como filho de h1, e mantém o ORIGINAL NA SUA POSIÇÃO SEM ALTERAÇÃO
h1.appendChild(menuClone);
