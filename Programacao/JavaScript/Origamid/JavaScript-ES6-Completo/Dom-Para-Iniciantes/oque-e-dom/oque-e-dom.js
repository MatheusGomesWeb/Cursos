// Oque é DOM ( Document Object Model)
// Document Object Model (Dom) é uma interface que representa documentos HTML e XML através de objetos.
// Com ela é possivel manipular a estrutura, estilo e conteúdo destes documentos.

const windowGlobal = window;
// window é o objeto global de browser e possui diferentes métodos e atributos

// Não é necessario utilizando window para chamar objetos filhos dele, porque ele é o objeto global.

// atributo de window para mostrar a altura do browser
console.log(windowGlobal.innerHeight);

// Todos os objetos extende do objeto principal WINDOW

// Window e Document são os principais objetos do DOM e os mais utilizados, boa parte da manipulação do DOM é feita utilizando os atributos e métodos deles.

// Exemplo utilizando o objeto Location
console.log(windowGlobal.location);

if (windowGlobal.location.href === "http://127.0.0.1:5500/Dom-Para-Iniciantes/oque-e-dom/oque-e-dom.html") {
  console.log("Igual");
}

// Exemplo utilizando o objeto Document

console.log(document.querySelector('h1').textContent);
