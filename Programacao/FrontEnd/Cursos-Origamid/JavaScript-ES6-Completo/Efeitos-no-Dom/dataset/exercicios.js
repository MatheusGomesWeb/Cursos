// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

// adicionando classe para animar scroll nas seções
function addClassScroll() {

  // selecionando todas as seções
  const section = document.querySelectorAll('section.grid-section');

  // percorrendo as seções e adicionando a classe para animar
  section.forEach((secao) => {
    secao.dataset.scroll = "js-scroll";
  });

}

// executando a função
addClassScroll();

const js = document.querySelectorAll('.js-tabcontent, .js-accordion, .js-scroll, .js-tabmenu, .grid-section');

js.forEach((item) => {

  if (item.classList.contains('js-tabcontent')) {

    item.classList.remove('js-tabcontent');
    item.dataset.tabcontent = 'js-tabcontent';

  } else if (item.classList.contains('js-accordion')) {

    item.classList.remove('js-accordion');
    item.dataset.accordion = 'js-accordion';

  } else if (item.classList.contains('js-scroll')) {

    item.classList.remove('js-scroll');
    item.dataset.scroll = 'js-scroll';

  } else if (item.classList.contains('js-tabmenu')) {

    item.classList.remove('js-tabmenu');
    item.dataset.tabmenu = 'js-tabmenu';

  }

  console.log(item, item.dataset);
});
//console.log(js);


// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

const sectionAnimais = document.querySelectorAll('.animais-descricao section');

// criando array com as opções
const datasetValue = ["show-down", "show-right"];

// percorrendo o Nodelist
sectionAnimais.forEach((item) => {

  // sorteando as opções randomicamente
  const dataRand = Math.round(Math.random(datasetValue.length - 1));

  // adicionando um dataset com o valor que foi sorteado
  item.dataset.anime = datasetValue[dataRand];

  //console.log(item.dataset);

});

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)

// percorre as sections
sectionAnimais.forEach((item) => {

  // se existir o section data-anime, adicione uma classe com o mesmo nome do data-anime
  if (item.dataset.anime) {
    item.classList.add(item.dataset.anime);
  }

  //console.log(item);

});

