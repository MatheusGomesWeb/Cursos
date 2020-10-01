function initTabNav() {

  // selecionando lista de imagens (js-tabmenu)
  //const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabMenu = document.querySelectorAll('[data-tabmenu="js-tabmenu"] li');

  // selecionando conteudo
  //const tabMenuContent = document.querySelectorAll('.js-tabcontent section');
  const tabMenuContent = document.querySelectorAll('[data-tabcontent="js-tabcontent"] section');

  // verificando se os elementos selecionados existem na pagina
  if (tabMenu.length && tabMenuContent.length) {

    // adicionando classe ativo ao primeiro section
    tabMenuContent[0].classList.add('ativo');

    // função que adiciona um class ao elemento section
    function activeTab(index) {

      // percorrendo todas as sections
      tabMenuContent.forEach((section, index) => {

        // removendo a classe ativo dos sections
        section.classList.remove('ativo');

        // removendo a borda dos elementos do menu
        tabMenu[index].style.border = "none";
      })

      // adicionando a classe ativo ao elemento
      tabMenuContent[index].classList.add('ativo');

      // adicionando borda ao menu indicando qual elemento está selecionado
      tabMenu[index].style.border = "2px solid #fb5";

    }

    // função que adiciona um class as imagens
    tabMenu.forEach((item, index) => {

      // adicionando evento click ao menu, e executando a função activeTab()
      item.addEventListener('click', () => {
        activeTab(index);
      });

    });

  } // endif

}

initTabNav();
