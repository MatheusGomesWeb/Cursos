// ClassList

// é um atributo que retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contem.

// exemplo
const menu = document.querySelector('.menu');

// retorna uma String com o nome das classes que estão no elemento
console.log(menu.className);

// adiciona uma nova classe ao elemento
menu.classList.add('testando');
menu.classList.add('test1', 'test2');

// remove uma classe do elemento
menu.classList.remove('test2');

// adiciona /remove a classe do elemento
menu.classList.toggle('test2');

// modifica uma classe por outra
menu.classList.replace('testando', 'modificado');

// verifica se uma classe pertence ao elemento
console.log(menu.classList.contains('testando'));

// retorna uma lista de classes que estão no elemento
console.log(menu.classList);


// Attributes

// retorna todos os atributos do elemento ( src, href etc) é um array-like, acessa por [0] ou pelo atributo element.class
const atributos = document.querySelector('.animais');

console.log(atributos.attributes);

// o objeto attributes possui métodos getters and setters

// adicionando novo atributo ao elemento
atributos.setAttribute('id', 'setandoAtributo');

// removendo atributo do elemento
atributos.removeAttribute('id', 'setandoAtributo');

// recuperando valor do elemento
console.log(atributos.getAttribute('id'));

// verificando se existe - retorna true ou false
console.log(atributos.hasAttribute('id'));