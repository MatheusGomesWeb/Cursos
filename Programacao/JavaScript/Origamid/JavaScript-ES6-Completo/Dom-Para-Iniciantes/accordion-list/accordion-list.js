// isolando a função accordion list
function initAccordion() {

  // selecionando os dt
  //const accordionList = document.querySelectorAll('.js-accordion dt');
  const accordionList = document.querySelectorAll('[data-accordion="js-accordion"] dt');
  const ativoClass = 'ativo';

  // verifica se o elemento existe > 0
  if (accordionList.length) {

    // inicia a pagina com o primeiro elemento ativado
    accordionList[0].classList.add(ativoClass);
    accordionList[0].nextElementSibling.classList.add(ativoClass);

    // adiciona a classe ativo ao elemento clicado
    function activeAcordion() {

      this.classList.add(ativoClass);
      this.nextElementSibling.classList.toggle(ativoClass);

    }

    // percorre os dt e adiciona evento de click que executa a função activeAcordion
    accordionList.forEach((item) => {

      item.addEventListener('click', activeAcordion);

    });

  }

} // endif


// executando a função
initAccordion();