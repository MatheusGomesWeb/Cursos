function addShowEffect() {
  const section = document.querySelectorAll('[data-tabcontent="js-tabcontent"] section');

  const effect = ['show-right', 'show-down'];

  section.forEach((item) => {
    const randomNumber = Math.round(Math.random(effect.length - 1));
    const randomEffect = effect[randomNumber];

    item.classList.add(randomEffect);
    // console.log(item);
  });
}

export default function navegacaoPorTabs() {
  // selecionando lista de imagens (js-tabmenu)
  // const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabMenu = document.querySelectorAll('[data-tabmenu="js-tabmenu"] li');

  // selecionando conteudo
  // const tabMenuContent = document.querySelectorAll('.js-tabcontent section');
  const tabMenuContent = document.querySelectorAll('[data-tabcontent="js-tabcontent"] section');

  // função que adiciona um class ao elemento section
  function activeTab(index) {
    // percorrendo todas as sections
    tabMenuContent.forEach((section, indice) => {
      // removendo a classe ativo dos sections
      section.classList.remove('ativo');
      // removendo a borda dos elementos do menu
      tabMenu[indice].style.border = 'none';
    });
    // adicionando a classe ativo ao elemento
    tabMenuContent[index].classList.add('ativo');
    // adicionando borda ao menu indicando qual elemento está selecionado
    tabMenu[index].style.border = '2px solid #fb5';
  }

  // verificando se os elementos selecionados existem na pagina
  if (tabMenu.length && tabMenuContent.length) {
    // adicionando classe ativo ao primeiro section
    tabMenuContent[0].classList.add('ativo');

    // função que adiciona um class as imagens
    tabMenu.forEach((item, index) => {
      // adicionando evento click ao menu, e executando a função activeTab()
      item.addEventListener('click', () => {
        activeTab(index);
      });
    });
  } // endif

  addShowEffect();
}
