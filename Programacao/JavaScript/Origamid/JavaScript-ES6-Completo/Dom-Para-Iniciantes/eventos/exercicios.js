// Exercicios

/*
  Quando o usuário clicar nos links internos do site,
  adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma.
  Previna o comportamento padrão desses links.
*/

// selecionando links internos
const linksInternos = document.querySelectorAll('a[href^="#"]');

// função de callback
function handleLinksInternos(event) {

  // previnindo para não executar a função padrao do navegador que é redirecionar para uma pagina externa
  event.preventDefault();

  // percorrendo os links internos
  linksInternos.forEach((item) => {
    // removendo a classe ativo dos elementos
    item.classList.remove('ativo');
  });

  // adicionando a classe ativo dos elementos - currentTarget = this
  event.currentTarget.classList.add('ativo');

  // mostrando o NodeList (array-like) no console para debugger
  console.log(linksInternos);

}

// percorrendo os links internos
linksInternos.forEach((item) => {

  // adicionando evento de click ao elemento
  item.addEventListener('click', handleLinksInternos);

})

// -------------------------------------------------------

/*
  Selecione todos os elementos do site começando a partir do body,
  ao clicar mostre exatamento quais elementos estão sendo clicados.
*/

// selecionando todos os elemento do body

// Retorna um NodeList -> array-like
const bodyEl = document.querySelectorAll('body *');

// função que retorna o elemento que esta sendo clicado
function handleBodyElement(event) {
  console.log(event.currentTarget);
}

// percorrendo elementos do body
bodyEl.forEach((item) => {

  // adicionando evento de click
  item.addEventListener('click', handleBodyElement);

});

// -------------------------------------------------------

/*
  Utilizando o código anterior, ao invés de mostrar no console,
  remova o elemento que está sendo clicado, o método remove() remove um elemento.
*/

// sobre-escrevendo a função handleBodyElement
function handleBodyElement(event) {
  event.currentTarget.remove();
}

// -------------------------------------------------------

/*
  Se o usuário clicar na tecla (t), aumente todo o texto do site.
*/

// função para aumentar o texto ao ao pressionar a tecla 't'
function aumentarTexto(event) {

  // tamanho fonte body
  const tamanhoFonte = '120%';

  if (event.key === 't') {
    // document.body.style.fontSize = tamanhoFonte;
    document.documentElement.classList.toggle('textoMaior');
  }
}
// adicionando evento ao document
document.addEventListener('keydown', aumentarTexto);