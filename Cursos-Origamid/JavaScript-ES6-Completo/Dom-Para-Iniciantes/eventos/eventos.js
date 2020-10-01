// Eventos

// addEventListener(); - Adiciona uma função ao elemento, esta chamada de CALLBACK, que será ativada assim que certo EVENTO ocorrer neste elemento.

// Exemplo

// arg1: tipo de evento, arg2: callback (uma função que será executada)

// addEventListener('event', function(){});

// seleciona o elemento que irá receber o evento
const img = document.querySelector('img');

// adiciona o evento de click nas imagens utilizando arrow functions

//img.addEventListener('click', () => console.log('clicou'));

// Uma boa prática é separar o callback em uma função separada

// o parametro event retorna uma lista de atributos e métodos do objeto clicado
function callback(event) {
  console.log('Função separada', event);
}

// passando a função como argumento de callback

//img.addEventListener('click', callback);

// event.currentTarget - Retorna o elemento que recebeu o click

// selecionando a lista
const animaisLista = document.querySelector('.animais-lista');

// criando função de callback e passando o parametro para receber os atributos e métodos do objeto
function animaisCallback(event) {

  // retorna a lista de atributos e métodos do objeto clicado
  console.log(event);

  // retorna o elemento html que recebeu o evento (ul)
  console.log(event.currentTarget);

  // Retorna o elemento exato que foi clicado (img)
  console.log(event.target);

  // retorna uma string com o tipo de evento
  console.log(event.type);

}
// adicionando evento de click
animaisLista.addEventListener('click', animaisCallback);


// event.preventDefault() - Função que previne o evento padrao: ex: um href que redireciona para link extorno não irá mais redirecionar, e executará a função de callback

// função de callback para event.preventDefault()
function handleDefault(event) {
  event.preventDefault();
  console.log("PreventDefault");
}

// selecionando link externo
const linkExterno = document.querySelector('a[href^="https');

// adicionando event
linkExterno.addEventListener('click', handleDefault);

// this

/*
  A palavra chave this é uma palavra especial de JavaScript, que 
  pode fazer referência a diferentes objetos dependendo do contexto. 
  No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.
*/

// selecionando as imagens
const img_this = document.querySelector('a[href^="http"');

function handleImgThis(event) {
  // retorna os atributos do elemento clicado
  console.log(this);

  // retorna o atributo href
  console.log(this.getAttribute('href'));

  // retorna o elemento clicado (mesmo que this)
  console.log(event.currentTarget);
}
// adicionando evento e retornando mensagem no console
img_this.addEventListener('click', handleImgThis);


/*
  Diferentes Eventos:
    Existem diferentes eventos como:
      - click
      - scroll
      - resize
      - keydown
      - keyup, mouseenter e mais.
    Eventos podem ser adicionados a diferentes elementos, como o window e document também.
*/

/*
  forEach em Eventos:
    O método addEventListener() é adicionado a um unico elemento,
    então é necessario um loop entre elementos de uma lista,
    para adicionarmos á cada um deles.
*/


