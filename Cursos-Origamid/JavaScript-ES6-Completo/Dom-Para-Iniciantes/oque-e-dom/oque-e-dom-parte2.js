// Node

/*
  Toda tag html é representada pelo objeto Element e por isso herda os seus atributos e métodos. Element é um tipo de objeto Node.
*/

// Exemplos de uso

const titulo = document.querySelector('h1');

// retorna alista de classes css que o elemento possui
console.log(titulo.classList[0]);

// retorna o texto do elemento
console.log(titulo.innerText);

// retorna altura do elemento
console.log(titulo.offsetHeight);

// adicioonando evento de click ao elemento
titulo.addEventListener('click', function () {
  console.log("clicou no elemento");
})

// Element possui varios atributos e métodos, para acessar utilize o element seguido de (ponto) .

