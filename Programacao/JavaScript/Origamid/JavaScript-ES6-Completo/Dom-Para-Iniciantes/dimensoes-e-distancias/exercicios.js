// Exercicios

// Verifique a distância da primeira imagem em relação ao topo da página

// selecionando a primeira imagem
const primeiraImagem = document.querySelector('img');

// verificando a distancia da imagem para o topo.
console.log(primeiraImagem, primeiraImagem.offsetTop);

// --------------------------------

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  // selecionando todas as imagens
  const todasImagens = document.querySelectorAll('img');

  // soma das imagens
  let total = 0;

  // percorrendo todas as imagens e somando a largura
  todasImagens.forEach((item) => {

    // armazena a largura das imagens
    const largura = item.offsetWidth;

    total += largura;
  });
  // Retorna a soma da largura de todas as imagens.
  return total;

}

// Retorna a soma da largura de todas as imagens depois que o documento é carregado

window.onload = () => console.log(somaImagens());

// -----------------------------------------

// Verfique se os links da pagina possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px) de acordo com o google.

// selecionando todos os links da pagina
const todosLinks = document.querySelectorAll('a');

// percorre todos links
todosLinks.forEach((item) => {

  // verificando recomendação google
  let largura = item.clientWidth;
  let altura = item.clientHeight;

  if (largura >= 48 && altura >= 48) {
    console.log("Seguindo as recomendações");
  } else {
    console.log("Nao seguindo");
  }

  console.log(largura, altura);
});

// ---------------------------------------

// Se o browser for menor que 720px, adiciona a classe menu-mobile ao menu.

// selecionando menu

const menu = document.querySelector('.menu');

// verificando resolucao e adicionando classe menu-mobile
const small = window.matchMedia('(max-width: 720px)');

// verifica a confição, return: true / false
if (small.matches) {
  menu.classList.add('menu-mobile');
}

// mostrando no browser para ver se foi adicionado
console.log(menu);